import React, { Component } from 'react'

class Test extends Component {

        state={
            title:'',
           "userId": ''
        }

    componentDidMount(){
        console.log("ComponentDidMounte ......");
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => this.setState({
        title: data.title,
        "userId": data.userId
    }))
    console.log(this.state)
        // for HTTP call perfact place 
    }

    // componentWillMount(){
    //     console.log('ComponentWillMount----')
    // }

    // componentDidUpdate(){
    //     console.log('ComponetDidiUpdate.....')
    //     // only When component will Update Component 
    // }

    // //componet when about to update 

    // componentWillUpdate(){
    //     console.log('ComponentWillUpdate....');

    // }

    // //props recived
    // componentWillReceiveProps(nextProps,nextState){
    //     console.log('conponentWIllReciveProps..... ');
    // }


    // getSnapshotBeforeUpdate(prevProps,prevState){
    //     console.log('getSnapshortBeforeUpdate ... for ')
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {
    //         test:'satej test'
    //     }
    // }
    
    render() {
        const {title,userId}=this.state;
        return (
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}

export default Test;