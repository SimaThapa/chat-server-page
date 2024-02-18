import React, { useState, useEffect } from 'react';
import Profile from '../assets/profile.jfif'

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat__sidebar" >
      <div>
         <img src={Profile} alt='profile-pic' height="50px" width="50px" style={{borderRadius:"50%"}}/>
         <div>
           <input type="text" placeholder="search uesrs" style={{width:"80%",borderRadius:"20px"}}/>
         </div>
      </div>
      <h2>Open Chat</h2>
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        
        <div className="chat__users">
          {users.map((user) => (
              <p key={user.socketID}>
                  <button style={{border:"hidden"}}>
                     {user.userName}
                  </button>
              </p>
            ))}
         
        </div>
        
      </div>
    </div>
  );
};

export default ChatBar;