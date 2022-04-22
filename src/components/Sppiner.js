import React, { Component } from 'react'
import loading from "../Spinner-2.gif";

export class Sppiner extends Component {
  render() {
    return (
       
      <div style={{borderRadius: '20px', background: '#ffffff' , boxShadow:  '-23px 23px 54px #666666, 23px -23px 54px #ffffff', margin: 'auto',width: 'fit-content' , marginTop:"66px",
      }} >
          <img src={loading} alt="sppiner" width="40" height="40"/>
      </div>
  
    )
  }
}

export default Sppiner


