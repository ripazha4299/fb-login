import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class FbLogin extends Component {
  state={
    isLoggedIn:false,
    userId:'',
    userName:'',
    emailId:'',
    picture:''
  }

  responseFacebook = (response) =>{
    console.log("logged in");
    console.log(response);
    this.setState(
      {
        isLoggedIn:true,
        userId:response.id,
        userName:response.name,
        emailId:response.email,
        picture:response.picture.data.url
      }
    )
  }

  render() {
    let fbContent;
    if(this.state.isLoggedIn){
      fbContent = 
      <div className='Data'>
        <h2>Welcome {this.state.userName}!</h2>
        <img src={this.state.picture}/>
        <h3>Email: {this.state.emailId}</h3>
        <h4>{this.state.userId}</h4>
      </div>
    }
    else{
      fbContent = 
      <FacebookLogin
        appId="996556751031617"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={this.componentClicked}
        callback={this.responseFacebook}
      />
    }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
