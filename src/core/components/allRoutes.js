import SignInPage from '../../user/pages/SignInPage'
import Playground from '../../playground/Playground'
import LogInPage from '../../user/pages/LogInPage';
import LandingPage from '../../mode-guest/landing-page/LandingPage'
import Policy from '../../mode-common/Policy/Policy';
import Terms from '../../mode-common/Terms/Terms';
import AddCoinPage from '../../coin/pages/AddCoinPage';
import CoinList from '../../coin/pages/CoinListPage'
import UserPage from '../../user/pages/UserPage';

export const allRoutes = () => ({
    guest: [{
        exact: true,
        path: '/',
        component: LandingPage
    }, {
        exact: true,
        path: '/login',
        component: LogInPage
    }, {
        exact: true,
        path: '/signin',
        component: SignInPage
    }, {
        exact: true,
        path: '/playground',
        component: Playground
    }, {
        exact: true,
        path: '/terms',
        component: Terms
    }, {
        exact: true,
        path: '/policy',
        component: Policy
    }, {
        exact: true,
        path: '/coin',
        component: CoinList
    }, {
        exact: true,
        path: '/coin/new',
        component: AddCoinPage
    }],
    user: [{
        exact: true,
        path: '/',
        component: Playground
    }, {
        exact: true,
        path: '/terms',
        component: Terms
    }, {
        exact: true,
        path: '/policy',
        component: Policy
    }, {
        exact: true,
        path: '/coin',
        component: CoinList
    }, {
        exact: true,
        path: '/coin/new',
        component: AddCoinPage
    }, {
        exact: true,
        path: '/user',
        component: UserPage
    }],
    expert: [{
        exact: true,
        path: '/',
        component: Playground
    }, {
        exact: true,
        path: '/terms',
        component: Terms
    }, {
        exact: true,
        path: '/policy',
        component: Policy
    }, {
        exact: true,
        path: '/coin',
        component: CoinList
    }, {
        exact: true,
        path: '/coin/new',
        component: AddCoinPage
    }, {
        exact: true,
        path: '/user',
        component: UserPage
    }
],
})