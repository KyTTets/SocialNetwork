import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from '../../../assets/images/25.gif';
import workFind from '../../../assets/images/work_off.jpg'
import workNoFind from '../../../assets/images/work_on.jpg'


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <img src={Preloader} />
    }

    return (
        <div className={s.info}>
            <div className={s.upper}>
                <img src='https://avatars.mds.yandex.net/get-pdb/1050037/5e7810b0-2ec0-4dca-93c5-06552915f999/s600' class="scale" />
            </div>
            <div className={s.description}>

                <div className={s.photo}><img src={props.profile.photos.large} /></div>
                <div className={s.info}>
                    <div> <b>Контакты:</b> </div>
                    <div> <b>Никнейм:</b> {props.profile.fullName}</div>
                    <div> <b>Статус:</b> {props.profile.aboutMe}</div>
                    <div> <b>facebook:</b> {props.profile.contacts.facebook}</div>
                    <div> <b>vkontakte.com:</b> {props.profile.contacts.vk}</div>
                    <div> <b>twitter: </b>{props.profile.contacts.twitter}</div>
                    <div> <b>instagram: </b>{props.profile.contacts.instagram}</div>
                    <div> <b>github: </b>{props.profile.contacts.github}</div>

                    <div> <b>Работа: </b></div>

                    <div className={s.worker}><img src={props.lookingForAJob ? workFind : workNoFind} /></div>

                    <div>3</div></div>
            </div>
        </div>
    )
}

export default ProfileInfo;