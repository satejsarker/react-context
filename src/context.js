import React, {
    Component
} from 'react';


const Context = React.createContext();
const reducer =(state, action)=>{
            switch(action.type)
            {
                    case 'DELETE_CONTACT':
                    return{
                        ...state,
                        contacts: state.contacts.filter(contact =>
                            contact.id !==action.payload
                        )

                   
                    }
                    break;
                     default:
                     return this.state
            }
}

export class Provider extends Component {
    state = {

        contacts: [{
                id: 1,
                name: 'satej',
                email: "satej@gmail.com",
                phone: '666-4423-44'
            },
            {
                id: 2,
                name: 'Aruna',
                email: "Aruna@gmail.com",
                phone: '5446-4423-44'
            },
            {
                id: 3,
                name: 'samir',
                email: "samir@gmail.com",
                phone: '3423-4423-44'
            },
            {
                id: 4,
                name: 'Priyanka',
                email: "Priyanka@gmail.com",
                phone: '4454223-4423-44'
            }
        ],
        dispatch:action =>{
            this.setState(state=> reducer(state,action))
        }

    }
    render() {
        return (<Context.Provider value = {
                this.state
            } > {
                this.props.children
            } </Context.Provider>
        )
        }

}



export const Consumer = Context.Consumer;