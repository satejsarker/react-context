import React, {
    Component
} from 'react'

class AddContact extends Component {
    state = {
        name: '',
        phone: '',
        email: ''
    }
onChange=e=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
onSubmit=e=>{
    e.preventDefault();
    console.log(this.state)
}

render(){
    const {name,phone,email}=this.state;
        return ( <div className='card md-3'>

            <div className="card-header">
                Add Contact
            </div>
            <div className="card-body">
            <form  onSubmit={this.onSubmit}>
                <div className="form-group">
               
                <label htmlFor="name">Name:
                </label>

                    <input name="name" 
                    onChange={this.onChange}
                    placeholder="enter name ..."
                    type="text" className="form-control form-control-lg" 
                    value={name}/>
                    </div>
                    <div className="form-group">

                        <label htmlFor="phone">Phone:
                        </label>

                        <input name="phone"
                                value={phone}
                            onChange={this.onChange}
                            placeholder="enter phone ..."
                            type="number" className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">

                        <label htmlFor="email">Email:
                        </label>

                        <input name="email"
                                value={email}
                            onChange={this.onChange}
                            placeholder="enter email ..."
                            type="email" className="form-control form-control-lg" />
                    </div>

                    <input type="submit" value="contact" className="btn btn-light btn-primary btn-block " />
            </form>
            </div>
             </div>
        )
    }
}
export default AddContact;
