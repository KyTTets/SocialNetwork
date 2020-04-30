import React from 'react';
import s from './Profileinfo.module.css'


const ProfileInfo = () => {
    return (
        <div className={s.info}>
            <div className={s.upper}>
                <img src='https://avatars.mds.yandex.net/get-pdb/1050037/5e7810b0-2ec0-4dca-93c5-06552915f999/s600' class="scale" />
            </div>
            <div className={s.description}>
            аватарка+ описание
            </div>
        </div>
    )
}

export default ProfileInfo;