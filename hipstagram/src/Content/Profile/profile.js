import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import './profile.css';
import ProfileInfo from './ProfileInfo/profileInfo';

function Profile(props) {
    return(
        <div className='content-wrapper'>

            <div className='content'>
                <ProfileInfo />
                <MyPostsContainer />
            </div>
        </div>
    );
}

export default Profile;