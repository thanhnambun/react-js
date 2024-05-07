import React, { Component } from 'react'

export default class Class extends Component {
    handleClick=()=>{
        console.log("123");
        
    }
    // truyền để lấy tham số 
    // handleUpdate (useId:any) => {
    //     console.log(useId);
    // }
  render() {
    return (
      <div>Class
        <button onClick={this.handleClick} >click</button>
        {/* <p onClick={()=>this.handleUpdate(11)} >click</p> */}
      </div>
    )
  }
}
