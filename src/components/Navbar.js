import React, { Component } from 'react';
import Identicon from 'identicon.js';
import photo from '../photo.png'
import styled from "styled-components";
import './App.css';

class Navbar extends Component {

  render() {
    return (
      <Nav className="navbar fixed-top flex-md-nowrap p-0">
        <Title
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          target="_blank"
         
          rel="noopener noreferrer"
        >
          <img src={photo} width="30" height="30" className="d-inline-block align-top" alt=""/>
          Decentragram
        </Title>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
            { this.props.account
              ? <img
              alt='profileimg'
                className='ml-2'
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              />
              : <span></span>
            }
          </li>
        </ul>
      </Nav>
    );
  }
}

export default Navbar;

const Title = styled.h2`
font-family: 'Courgette', cursive;

`

const Nav = styled.nav`
border-radius: 12px;
background: #ffffff;
box-shadow: inset 5px 5px 18px #cfcfcf,
            inset -5px -5px 18px #ffffff;

      
            margin:10px;

`

