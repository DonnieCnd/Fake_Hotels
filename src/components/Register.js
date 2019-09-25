import React, { Component } from "react";
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { clearCart } from './actions/cartActions'
class Register extends Component {
  state = {
    redirect:"",
    auth: []
  };

  handleSubmit= () =>{
    this.setState({
        redirect: "next"
    })
    this.props.clearCart();
  };

  render() {

    if (this.state.redirect === "next") {
      return <Redirect to="/confirmation" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <br></br>
          <div className="box">
            <h5 className="center">Veuillez renseigner vos informations pour finaliser votre réservation.</h5>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Prénom"
              style={{ fontSize: "calc(0.5vw + 0.5vh + 0.5vmin)", margin: "10% auto 0 auto", width: "70%", marginLeft: "13%", }}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Nom"
              style={{ fontSize: "calc(0.5vw + 0.5vh + 0.5vmin)", margin: "5% auto 0 auto", width: "70%", marginLeft: "13%", }}
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email *"
              style={{ fontSize: "calc(0.5vw + 0.5vh + 0.5vmin)", margin: "5% auto 0 auto", width: "70%", marginLeft: "13%", }}
            />
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Adresse"
              style={{ fontSize: "calc(0.5vw + 0.5vh + 0.5vmin)", margin: "5% auto 10% auto", width: "70%", marginLeft: "13%", }}
            />
          </div>
          <br></br>
          <div className="boxButton">
              <button className="waves-effect waves-light btn" id="registerButton" type="submit">Commander</button>  
          </div>
          <br></br>
        </form> 
      </div>
    );
  }
}


const mapDispatchToProps= (dispatch)=>{
  return{
      clearCart: ()=>{dispatch(clearCart())}
  }
}

export default connect(null, mapDispatchToProps)(Register)