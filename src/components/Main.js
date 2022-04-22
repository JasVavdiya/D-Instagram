import React, { Component } from 'react';
import Identicon from 'identicon.js';
import styled from "styled-components";
import './App.css'


class Main extends Component {

  

  render() {
    return (
      <div className="container-fluid mt-5" >
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
            <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>

              {/* <Box> */}
              
              <Box onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
              }} >
                <Title>Share Image</Title>
                <Choose type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />
                  <div className="form-group mr-sm-2">
                    <br></br>
                      <In
                        id="imageDescription"
                        type="text"
                        alt='des'
                        ref={(input) => { this.imageDescription = input }}
                        className="form-control"
                        placeholder="Image description..."
                        required />
                  </div>
                <Up type="submit" className="btn btn-block btn-lg">Upload!</Up>
              </Box>
              {/* </Box> */}

              <p>&nbsp;</p>

              { this.props.images.map((image, key) => {
                return(
                  // <Box2 >
                  <Box2 className="mb-4" key={key} >
                    <Title2 >
                      <img
                        alt='icon'
                        className='mr-2'
                        width='30'
                        height='30'
                        src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
                      />
                      <small className="text-muted">{image.author}</small>
                    </Title2>
                    <ul id="imageList" className="list-group list-group-flush">
                      <Img>
                      <li className="list-group-item border-top-0 ">
                        <div>
                        <p><img alt='post' src={`https://ipfs.infura.io/ipfs/${image.imgHash}`} style={{  height: '100%',width: '100%' , objectFit: 'contain'}}/></p>
                        <p  style={{  height: '100%',width: '100%' , objectFit: 'contain'}}>{image.description}</p>
                        </div>
                      </li>
                      </Img>
                      <Img2>
                      <li key={key} className="list-group-item border-top-0 py-2">
                        <small className="float-left text-muted">
                          TIPS: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')} ETH
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={image.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipImageOwner(event.target.name, tipAmount)
                          }}
                        >
                          TIP 0.1 ETH
                        </button>
                      </li>
                      </Img2>
                    </ul>
                  </Box2>
                  // </Box2>
                )
              })}
            </div>
          </main>
        </div>
      </div>

    );
  }
}

export default Main;

const Title = styled.h2`
border-radius: 12px;
background: #ffffff;
box-shadow:  5px 5px 18px #cfcfcf,
             -5px -5px 18px #ffffff;

             width: 100%;
             text-align:center;
   
 
font-family: 'Courgette', cursive;
`

const Choose = styled.input`



font-size: 1.2em;
font-weight: bold;
cursor:pointer;
margin-top:15px;

width: 100%;
text-align:center;

     
`

const Up = styled.button`

border-radius: 12px;
background-color: #4285F4;
color:white;
box-shadow:  5px 5px 18px #cfcfcf,
             -5px -5px 18px #ffffff;

            :active{
              border-radius: 12px;
              background: #ffffff;
              // background-color: #4285F4;
              box-shadow: inset 5px 5px 18px #cfcfcf,
                          inset -5px -5px 18px #ffffff;
            }

     
`

const Title2 = styled.div`

border-radius: 12px;
background: #ffffff;
box-shadow:  5px 5px 18px #cfcfcf,
             -5px -5px 18px #ffffff;
             padding:10px;
             width: 100%;
            text-align:center;

            overflow: auto;
     
`

const Img = styled.div`

border-radius: 12px;
background: #ffffff;
box-shadow:  5px 5px 18px #cfcfcf,
             -5px -5px 18px #ffffff;

             width: 100%;
             text-align:center;
             overflow: auto;
             margin-top:10px;


     
`

const Img2 = styled.div`

border-radius: 12px;
background: #ffffff;
box-shadow:  5px 5px 18px #cfcfcf,
             -5px -5px 18px #ffffff;

             overflow: auto;
             padding:10px;
             margin-top:10px;

     
`
const In = styled.input`

border-radius: 12px;
background: #ffffff;
box-shadow:  5px 5px 18px #cfcfcf,
             -5px -5px 18px #ffffff;
  border : 0px


`


const Box = styled.form`

border-radius: 12px;
background: #ffffff;
box-shadow: inset 5px 5px 18px #cfcfcf,
            inset -5px -5px 18px #ffffff;


             padding-top: 25px;
             padding-bottom: 25px;
             padding-right: 25px;
             padding-left: 25px;

`
const Box2 = styled.div`

border-radius: 12px;
background: #ffffff;
box-shadow: inset 5px 5px 18px #cfcfcf,
            inset -5px -5px 18px #ffffff;


width: 100%;
text-align:center;

             padding-top: 20px;
             padding-bottom: 20px;
             padding-right: 20px;
             padding-left: 20px;

`