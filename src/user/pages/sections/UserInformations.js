import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import Text from '../../../core/ctrls/Text';
import Styles from './UserInformations.module.scss';

const Information = (props) => (
    <div className={Styles.Information}>
        <span>{props.title}</span>
        <i>{props.value}</i>
    </div>
)

const UserInformations = (props) => {
    const userInfo = props.userInfo;
    console.log(userInfo);
    return (
        <div className={Styles.Container}>
            <div className={Styles.AvatarContainer}>
                <div className={Styles.Avatar} />
            </div>

            <div className={Styles.UserInformations}>
                <Information title="Imie" value={userInfo.firstName} />
                <Information title="Nazwisko" value={userInfo.lastName} />
                <Information title="Dodane monety" value="20" />
                <Information title="Ekspert" value={userInfo.userType === "expert" ? "Tak" : "Nie"} />
                {
                    userInfo.userType !== "expert" ? <Link >Aplikuj na eksperta</Link> : null
                }
                <Information title="E-mail" value={userInfo.email} />
            </div>
        </div>
    )
}

export default UserInformations