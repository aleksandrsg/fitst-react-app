import React from 'react';

const Profile = () =>{
    return(
        <div className="content">
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg" alt=""/>
        </div>
        <div>
          <img className="avatar" src="https://cdn.arstechnica.net/wp-content/uploads/2014/04/2014-01-28_00-19-14-640x363.png" alt="Avatar"/>
          Avatar +Desc
        </div>
        <div>
            My posts
            <div>
              New post
            </div>
            <div>
              Posts
              <div>
                post1
              </div>
              <div>
                post2
              </div>
            </div>
        </div>
      </div>
    );
}

export default Profile;