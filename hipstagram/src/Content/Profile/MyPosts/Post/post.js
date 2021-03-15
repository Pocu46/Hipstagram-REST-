import React from 'react';
import './post.css';



function Post(props) {
    return(
        <div>
            <img className="avatar" src="https://www.denofgeek.com/wp-content/uploads/2020/04/Avatar-The-Last-Airbender-Netflix.png?fit=2400%2C1350" />
            {props.message}

            <div className='likes'>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;