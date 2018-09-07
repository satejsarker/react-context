import React, { Component } from 'react'
import Contract from './Contract'
import { Consumer } from '../context';


 class Contacts extends Component {

  

            render()
            {
                return(
                    <Consumer>
                        {value=>{
                            const {
                                contacts
                            }=value
                            return(
                                  < React.Fragment > {
                                          contacts.map(contact =>
                                              <
                                              Contract key = {
                                                  Contract.id
                                              }
                                              contact = {
                                                  contact
                                              }
                                             
                                              />)} </React.Fragment>

                            )
                        }}
                    </Consumer>
                )
            }
        
       
 
}


export default  Contacts;