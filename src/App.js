import React, { Component } from 'react';
import Users from './components/Users'
import AddUser from './components/AddUser'
import './index.css'

class App extends Component {

  constructor(){
    super();
    this.state ={
      users : [
        {
          id :1,
          name :'Marco Bonera',
          age  : 45,
          address : "via ferrini 15"
        },
        {
          id : 2,
          name : 'Pietro Martinelli',
          age : 40,
          address : 'via dei pompieri 18'
        },
        {
          id : 3,
          name : 'Gino Bello',
          age : 41,
          address : 'via dei rose 12'
        }
      ]    
  }
}  

addUser = (user) =>{
  console.log(user);  
  user.id = Math.random();
  let users = [...this.state.users, user]
  this.setState({
    users : users
  })
  console.log(this.state.users);  
}

deleteUser = (id) =>{
  console.log(id);  
  let users = this.state.users.filter(user =>{
    return user.id !== id;
  })
  this.setState({
    users : users
  })
}

render() {
    return (
      <div className="App">
      <AddUser addUser={this.addUser} ></AddUser>
      <div>Users > 40  Total {this.state.users.length} </div><br/>
      <Users users = {this.state.users} deleteUser={this.deleteUser} />
     </div>
    );
  }
}

/*

handleClick = (e) => {
    //console.log(e.target);
    this.setState({name : "Il Bonny", age : 46})
    console.log(this.state)
  }

  handleMouseOver = (e) => {
    console.log(e.target, e.pageX)
  }

  handleCopy = (e) => {
      console.log(e.target);
  }

  handleChange = (e)=> {
    this.setState({name : e.target.value})
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state.name);    
  }
 
<h1>My name is {this.state.name} </h1>       
        <form onSubmit ={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </form>

<h1>Hey, ninjas!</h1>      
            <p>My name is {this.state.name} and age {this.state.age}</p> 
            <button onClick={this.handleClick}>Click Me</button>           
            <button onMouseOver={this.handleMouseOver}>Hover Me</button>
            <p onCopy={this.handleCopy}>Text Copy</p>*/

export default App;
