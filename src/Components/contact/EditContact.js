import React, {
    Component
} from 'react';
import { Consumer } from '../../context';

import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        erros:{}
    }


    async componentDidMount(){
        const {id}=this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        const contact=res.data;
        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        })
    }
onChange=e=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
onSubmit= async (dispatch,e)=>{
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
    const updateContact={
        name,
        phone,
        email
    }

const {id}=this.props.match.params;
const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updateContact)
    dispatch({
        type:"UPDATE_CONTACT",payload:res.data
    })
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
                Edit Contact
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
                                        type='text'
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
                    <input type="submit" value="Edite" className="btn btn-light btn-primary btn-block " />
            </form>
            </div>
             </div>                        
                  )
              }}
        </Consumer>
    )
    

    }
}
export default EditContact;
