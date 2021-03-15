import React from 'react';
import Post from './Post/post';
import './myPosts.css';

function MyPosts(props) {

    let postsElements = props.post.map( p => <Post message={ p.message } likesCount={ p.likesCount } />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div className="myposts-block">
            My posts
            <div>
                <div className='myposts-content__block'>
                    <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } />
                    <button onClick={ onAddPost }>Add post</button>
                </div>

                New post
            </div>

            <div>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;