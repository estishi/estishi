import  { Component } from 'react';

class Door extends Component {
    constructor(props){
        super(props)
        this.statusDoor = {isOpen: false}
    }
    onClick=()=>{
        this.statusDoor.isOpen=!this.statusDoor.isOpen;
        console.log(this.statusDoor.isOpen)
    }
  render() {
     let c=2;
     console.log(c) 
    return <div>
        <button onClick={this.onClick}>לחץ כאן לפתיחה או סגירה</button>
        c
    </div>
  }
}

export default Door;
