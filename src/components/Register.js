import React, { Component } from "react";
import { Redirect } from 'react-router-dom';


class Register extends Component {
  state = {
    email: "",
    password: "",
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
    handleSubmit = e => {
        console.log(this.state.email)
        console.log(this.state.password)
        if (this.state.email === this.state.auth[0].email && this.state.password === this.state.auth[0].password) {
            this.setState({
                redirect: e.currentTarget.value
            })
        } else {
            return alert("Votre identifiant ou mot de passe est incorrect.")
        }
    };
  
  render() {
      if (this.state.redirect === "login") 
        return <Redirect to ="/home" />
    return (
        <div className="container">
            <br></br>
                <form onSubmit={this.handleSubmit}>
                <div >
                <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    style={{ fontSize: "calc(0.4vw + 0.4vh + 0.4vmin)", margin: "50% auto 0 auto", width: "70%", marginLeft: "13%", }}
                    onChange={this.onChange}
                    value={this.state.email}
                />
                </div>
                <div>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Mot de passe"
                    style={{ fontSize: "calc(0.4vw + 0.4vh + 0.4vmin)", margin: "5% auto 0 auto", width: "70%", marginLeft: "13%", }}
                    onChange={this.onChange}
                    value={this.state.password}
                />
                </div>
                <br></br>
                <div className="form-data">
                <button>
                    Commander
                </button>
                </div>
            </form>
            <br></br>    
        </div>
    );
  }
}
export default Register;