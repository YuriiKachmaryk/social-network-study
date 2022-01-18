import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.backimage}>
        <img src='https://simpeksdesign.com.ua/data/userdata/images/Blog/%D1%8F1.jpg' alt='ava' />
      </div>
      <div className={s.avatar}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzssvRMq3Qohs5EPAd37McGjc3cmSb4_aBwQ&usqp=CAU' alt='avatar' />
      </div>
    </div>
  )
}

export default ProfileInfo;