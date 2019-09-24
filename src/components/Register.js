import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Register extends Component {
  state = {
    firstName: "",
    lastName:"",
    adress:"",
    email: "",
    redirect:"",
    auth: []
  };

  componentDidMount() { 
    let url = "http://localhost:3001/authentication"
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          auth: data
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleClick = e => {
        this.setState({
            redirect: e.currentTarget.value
        })
    };
    // handleSubmit = e => {
    //     console.log(this.state.email)
    //     console.log(this.state.password)
    //     if (this.state.email === this.state.auth[0].email && this.state.password === this.state.auth[0].password) {
    //         this.setState({
    //             redirect: e.currentTarget.value
    //         })
    //     } else {
    //         return alert("Votre identifiant ou mot de passe est incorrect.")
    //     }
    // };
  
  render() {
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
                    style={{ fontSize: "calc(0.4vw + 0.4vh + 0.4vmin)", margin: "10% auto 0 auto", width: "70%", marginLeft: "13%", }}
                    onChange={this.onChange}
                    value={this.state.firstNamel}
                />
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Nom"
                    style={{ fontSize: "calc(0.4vw + 0.4vh + 0.4vmin)", margin: "5% auto 0 auto", width: "70%", marginLeft: "13%", }}
                    onChange={this.onChange}
                    value={this.state.lastName}
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email *"
                    style={{ fontSize: "calc(0.4vw + 0.4vh + 0.4vmin)", margin: "5% auto 0 auto", width: "70%", marginLeft: "13%", }}
                    onChange={this.onChange}
                    value={this.state.email}
                />
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Adresse"
                    style={{ fontSize: "calc(0.4vw + 0.4vh + 0.4vmin)", margin: "5% auto 10% auto", width: "70%", marginLeft: "13%", }}
                    onChange={this.onChange}
                    value={this.state.address}
                />
            </div>
                <br></br>
            <div className="boxButton">
                <button className="waves-effect waves-light btn" id="registerButton"><Link to="/confirmation" class="white-text">Commander</Link></button>  
            </div>
            </form> 
        </div>
    );
  }
}
export default Register;