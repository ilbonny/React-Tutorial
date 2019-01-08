import React, {Component} from "react"

class AddUser extends Component {

    constructor(){
        super();

        this.state = {
            name : null,
            age : null,
            address : null
        }
    }

    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addUser(this.state);
              
    }

 render(){
    return (
        <div className="formUser" >
            <form onSubmit={this.handleSubmit} >
                <label htmlFor="name">Name : </label>
                <input type="text" id="name" onChange={this.handleChange} />
                <label htmlFor="name">Age : </label>
                <input type="text" id="age" onChange={this.handleChange} />
                <label htmlFor="name">Address : </label>
                <input type="text" id="address" onChange={this.handleChange} />
                <button>Submit</button>
            </form>
            <br/>
        </div>
    )
 }    
}

export default AddUser;