import React, { Component } from 'react'
import Contract from './Contract'
import { Consumer } from '../../context';


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
                                  < React.Fragment > 
                                      <h1 className="display-4 md2">
                                      <span className="text-danger">
                                          Contacts
                                      </span>
                                               List
                                      </h1>
                                          {contacts.map(contact =>
                                              <Contract key = {
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