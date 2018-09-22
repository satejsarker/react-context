import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Consumer } from '../../context';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Contract extends Component {
  constructor(){
      super()
      this.state={showContactInfo:false

      };
  }

  onDelete = async (id,dispatch) =>{

   await axios({
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        method:"DELETE"
    })

    dispatch({type:"DELETE_CONTACT",payload:id})
        
  }
    
    static propTypes = {
        
         contact:PropTypes.object.isRequired,
        
    };

    render() {
            
        const {contact}=this.props;
        const {showContactInfo }=this.state;
        return (
            <Consumer >
                {value=>{
                    const {dispatch}=value;
                    return(
                            <div className="card card-body md-3" key={contact.id}>
                <h1>
                   {contact.name}
                   < i 
                   style={{fontSize:'20px', cursor:'pointer'}}
                   onClick={()=>
                 this.setState({
                     showContactInfo: !this.state.showContactInfo,
                 })
                 }
                   className= "fas fa-chevron-down" > </i>
                   <i className="fas fa-times"
                   onClick={this.onDelete.bind(this,contact.id,dispatch)}
                   style={{cursor:'pointer',
                   
                   fontSize:'18px',
                   float:'right',color:'red'}}
                   ></i>
                   <Link to={`/contact/edit/${contact.id}`}>
                   <i className="fas fa-pencil-alt"
                   style={{
                       cursor:'pointer',
                       float:'right',
                       color:'black',
                       marginRight:'1rem',
                       fontSize:'15px'
                   }}
                   ></i>
                   
                   </Link>

                </h1>
                {showContactInfo ?(
                     < ul className = "list-group" >
                         <li className = "list-group-item" >
                         email: {
                             contact.email
                         } </li> <
                         li className = "list-group-item" >
                         phon: {
                             contact.phone
                         } </li> </ul>
                ):null}
               
                 </div>
                    )
                }}
            </Consumer>
            
        );
    }
}

// Contract.prototype={
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired
// } 

export default Contract;