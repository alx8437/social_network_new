import content from "../assets/images/content.jpg";
import React from "react";

const Profile = () => {
    return <div className='content'>
        <div><img src={content} alt="content"/></div>
        <div>ava + description</div>
        <div>My posts
            <div>New post</div>
            <div>post1</div>
            <div>post2</div>
        </div>
    </div>
}

export default Profile;