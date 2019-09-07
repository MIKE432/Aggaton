defined('APU_SITE') or die('Restricted access');

class Session
{
	function __construct()
	{
		if( ini_set('session.use_only_cookies', 1)===FALSE ) 
		{
			header('Location:admin.php?error&info=Could not initiate a safe session (ini_set)');
			exit();
		}

		$secure = false;
		$httponly = true; // This stops JavaScript being able to access the session id.
		
		// Gets current cookies params.
		$cookieParams = session_get_cookie_params();
		session_set_cookie_params( $cookieParams[lifetime], $cookieParams[path], $cookieParams[domain], $secure, $httponly );

		// Sets the session name to the one set above.
		$session_name = 'apusoft_session_id';   // Set a custom session name
		session_name( $session_name );

		session_start();            // Start the PHP session 
		session_regenerate_id();    // regenerated the session, delete the old one. 

		//echo '<hr>'.$_SESSION[session_account].' '.$_SESSION[session_hash]
		//	.'<br>'.$_COOKIE[session_account].' '.$_COOKIE[session_hash];
		
		if( isset($_SESSION[session_account], $_SESSION[session_hash]) ) 
			$this->setAccount( $_SESSION[session_account], $_SESSION[session_hash] );
		else if( isset($_COOKIE[session_account], $_COOKIE[session_hash]) ) 
			$this->setAccount( $_COOKIE[session_account], $_COOKIE[session_hash] );
	}
	
	function undefined()
	{
		return empty($this->account);
	}
	
	function canAccess( $right )
	{
		//echo $right.':'.$this->permissions[$right].' '. print_r($this->permissions,true);
		if( !isset($this->permissions) )
			return false;	// brak informacji o uprawnieniach więc zawsze false

		if( isset($this->permissions['supervisor:all']) && $this->permissions['supervisor:all']==true )
			return true;	// jest ustawione uprawnienie do wszystkiego to zawsze true
		
		return isset($this->permissions[$right]) ? $this->permissions[$right] : false; //standardowo
	}
	
	function succeded( & $account, $session_hash )
	{
		setcookie('session_account', $account->account_id, time()+60*60*24*30 );
		setcookie('session_hash', $session_hash, time()+60*60*24*30 );
		$_COOKIE[session_account] 	= $account->account_id;
		$_COOKIE[session_hash] 		= $session_hash;
		
		$_SESSION[session_account] 		= $account->account_id;
		$_SESSION[session_hash] 		= $session_hash;
		$this->statusText				= 'OK';

		$this->account = & $account;
		$manta = & Factory::getManta();
		$this->permissions = & $manta->queryAccountPermissions( $this->account->account_id );

		$this->session = & $manta->createSession();
		$this->session->account_id = $this->account->account_id;
		$manta->retrieveEntity( $this->session );
		$this->session->session_hash = $session_hash;
		$this->session->session_timestamp = date('c', time());
		$manta->saveEntity( $this->session );
	}

	function failed( $statusText )
	{
		$this->statusText = $statusText;

		unset($this->account);
		unset($this->permissions);
	}
	
	function logOut()
	{
		$manta = & Factory::getManta();
		$this->session = & $manta->createSession();
		$this->session->account_id = $_SESSION[session_account];
		$manta->removeEntity( $this->session );
		
		unset($_SESSION[session_account]);
		unset($_SESSION[session_hash]);
		setcookie('session_account', null, -time()+60*60*24*30 );
		setcookie('session_hash', null, -time()+60*60*24*30 );
		unset($_COOKIE[session_account]);
		unset($_COOKIE[session_hash]) ;
		unset($this->account);
		unset($this->permissions);

		return true;
	}

	function setAccount( $session_account, $session_hash )
	{
		$manta = & Factory::getManta();
		$account = & $manta->createAccount();
		$account->account_id = $session_account;
		
		if( $manta->retrieveEntity( $account )===false )
		{
			$this->failed( 'Błąd bazy danych #'.__LINE__.' Nie można było uruchomić zapytania.' );
			return false;
		}
		else 
		{
			$hash = hash('sha512', $account->acc_password.$_SERVER['HTTP_USER_AGENT']);
			if( $hash==$session_hash ) 
			{
				$this->succeded( $account, $session_hash );
			} 
			else 
			{
				$this->failed( 'Niby zalogowany, ale nie zgadza się hash' );
			}
		}
		return true;
	}

	function logIn( $email, $password_hash ) 
	{
		if( empty($email) ) 
		{
			$this->failed( 'Nie można zalogować użytkownika, ponieważ nie został wpisany email.' );
			return false;
		} 
		
		$manta = & Factory::getManta();
		$account = & $manta->createAccount();
		$regexEmail = '#^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$#i';
		
		if( preg_match($regexEmail, $email) > 0 )
			$account->acc_email = $email;
		else
		{
			$this->failed( 'Nie można zalogować użytkownika, ponieważ nie został wpisany prawidłowy email.' );
			return false;
		}

		if( $manta->retrieveEntity( $account )===false )
		{
			$status = $manta->errorNo();
			if( $status==S_OK )
				$this->failed('Adres email lub hasło jest nieprawidłowe.');
			else
				$this->failed( $status.' - '.$manta->errorMsg().' ('.__LINE__.').');
			
			return false;
		}
		else
		{
			if( $this->checkBrutForce( $account->account_id )===true ) 
			{
				return false;
			} 
			
			$password = hash('sha512', $password_hash.$account->acc_salt);
			if( $account->acc_password == $password ) 
			{
				$session_hash = hash('sha512', $account->acc_password.$_SERVER['HTTP_USER_AGENT'] );
				$this->succeded( $account, $session_hash );
			} 
			else 
			{
				// Password is not correct 
				// We record this attempt in the database 
				$now = time();
				$mysqli = & Factory::getMySQLi();
				if (!$mysqli->query("INSERT INTO apu_login_attempts(user_id, time) VALUES ('$account_id', '$now')")) 
				{
					$this->failed( __LINE__.'Błąd bazy danych. Nie można było uruchomić zapytania.' );
					return false;
				}
				
				$this->failed( 'Nieprawidłowe hasło.' );
				return false;
			}
		}
		return true;
	}

	function checkBrutForce( $account_id ) 
	{
		// Get timestamp of current time 
		$now = time();

		// All login attempts are counted from the past 2 hours. 
		$valid_attempts = $now - (2 * 60);

		$mysqli = & Factory::getMySQLi();
		if( $stmt = $mysqli->prepare("SELECT time FROM apu_login_attempts WHERE user_id = ? AND time > '$valid_attempts'") ) 
		{
			$stmt->bind_param('i', $account_id);

			// Execute the prepared query. 
			$stmt->execute();
			$stmt->store_result();

			// If there have been more than 5 failed logins 
			if($stmt->num_rows > 300) 
			{
				$this->failed( 'Któraśtam nieudana próba. Musisz poczekać zanim spróbujesz ponownie się zalogować.' );
				return true; 
			}
		} 
		else 
		{
			$this->failed( 'Błąd bazy danych #'.__LINE__.' Nie można było uruchomić zapytania.' );
			return true;
		}
		return false;
	}
/*	
	// remember me 
	function onLogin($user) {
		$token = GenerateRandomToken(); // generate a token, should be 128 - 256 bit
		storeTokenForUser($user, $token);
		$cookie = $user . ':' . $token;
		$mac = hash_hmac('sha256', $cookie, SECRET_KEY);
		$cookie .= ':' . $mac;
		setcookie('rememberme', $cookie);
	}
	function rememberMe() {
		$cookie = isset($_COOKIE['rememberme']) ? $_COOKIE['rememberme'] : '';
		if ($cookie) {
			list ($user, $token, $mac) = explode(':', $cookie);
			if (!hash_equals(hash_hmac('sha256', $user . ':' . $token, SECRET_KEY), $mac)) {
				return false;
			}
			$usertoken = fetchTokenByUserName($user);
			if (hash_equals($usertoken, $token)) {
				logUserIn($user);
			}
		}
	}
	function timingSafeCompare($safe, $user) {
		if (function_exists('hash_equals')) {
			return hash_equals($safe, $user); // PHP 5.6
		}
		// Prevent issues if string length is 0
		$safe .= chr(0);
		$user .= chr(0);

		// mbstring.func_overload can make strlen() return invalid numbers
		// when operating on raw binary strings; force an 8bit charset here:
		if (function_exists('mb_strlen')) {
			$safeLen = mb_strlen($safe, '8bit');
			$userLen = mb_strlen($user, '8bit');
		} else {
			$safeLen = strlen($safe);
			$userLen = strlen($user);
		}

		// Set the result to the difference between the lengths
		$result = $safeLen - $userLen;

		// Note that we ALWAYS iterate over the user-supplied length
		// This is to prevent leaking length information
		for ($i = 0; $i < $userLen; $i++) {
			// Using % here is a trick to prevent notices
			// It's safe, since if the lengths are different
			// $result is already non-0
			$result |= (ord($safe[$i % $safeLen]) ^ ord($user[$i]));
		}

		// They are only identical strings if $result is exactly 0...
		return $result === 0;
	}
*/	
}