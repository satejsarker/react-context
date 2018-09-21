import React, {
    Component
} from 'react';
import { Consumer } from '../../context';

import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        erros:{}
    }
onChange=e=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
onSubmit=(dispatch,e)=>{
        e.preventDefault();
    const {name,email,phone}=this.state;
// check for error satej 

if(name===''){
    this.setState({
        erros:{
            name:"name is required"
        }
    })
    return
}
    if (phone === '') {
        this.setState({
            erros: {
                phone: "phone is required"
            }
        })
        return;
    }
    if (email === '') {
        this.setState({
            erros: {
                name: "email is required"
            }
        })
        return;
    }


    const newContact={
      
        name,
        email,
        phone,
    }

    axios({ url: "https://jsonplaceholder.typicode.com/users",
    method:'POST',
    data:newContact

    }).then(res => dispatch({
        type: 'ADD_CONTACT', payload: res.data
    }))

    
    this.setState({
        name:'',
        email:'',
        phone:'',
        errors:{}
    })
// for the route redirect 
    this.props.history.push('/');
}

render(){
    const {name,phone,email,erros}=this.state;
    return(
        <Consumer>
              {value=>{
                  const {dispatch}=value;
                  return(
                        <div className='card md-3'>

            <div className="card-header">
                Add Contact
            </div>
            <div className="card-body">
            <form  onSubmit={this.onSubmit.bind(this,dispatch)}>
                <TextInputGroup
                
                label="Name"
                name="name"
                placeholder="enter name .. "
                value={name}
                onChange={this.onChange}
                error={erros.name}
                />
                                  <TextInputGroup
                                        type='number'
                                      label="Phone"
                                      name="phone"
                                      placeholder="enter phone .. "
                                      value={phone}
                                        error={erros.phone}
                                      onChange={this.onChange}
                                  />
                                  <TextInputGroup
                                        type='email'
                                      label="email"
                                      name="email"
                                      error={erros.email}
                                      placeholder="enter email .. "
                                      value={email}
                                      onChange={this.onChange}
                                  />
                    <input type="submit" value="contact" className="btn btn-light btn-primary btn-block " />
            </form>
            </div>
             </div>                        
                  )
              }}
        </Consumer>
    )
    

    }
}
export default AddContact;
