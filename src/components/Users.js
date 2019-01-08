import React from "react"

const Users = ({users, deleteUser}) => {
   return (
        <div className="users-list">
            {
                users.map(user=>{
                   return user.age > 40 ? (
                    <div className="user" key={user.id}>
                       <div> Name: {user.name} </div>
                       <div> Age: {user.age} </div>
                       <div> Address: {user.address} </div>
                       <button onClick={()=>{deleteUser(user.id)}}>Delete</button>
                       <br/>
                       <br/>
                    </div> 
                )
                : null
               })
            }
        </div>
    )

    /*const usersList = users.map(user=>{
        if(user.age>41)
        return (
            <div className="user" key={user.id}>
               <div> Name: {user.name} </div>
               <div> Age: {user.age} </div>
                <div> Address: {user.address} </div>
                <br/>
            </div>                
            )
            else{return null;}
        })
        
        return user.age > 40 ? (
            <div className="user" key={user.id}>
               <div> Name: {user.name} </div>
               <div> Age: {user.age} </div>
               <div> Address: {user.address} </div>
               <br/>
            </div> 
        ): null
    });*/
  
    /*return (
        <div className="users-list">
            {usersList}
        </div>
    )*/
}

export default Users;