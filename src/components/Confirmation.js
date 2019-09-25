import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Confirmation extends Component {
  
    render() {
        return (
            <div className="container">
                <br></br>
                <div className="box">
                    <div className="card confirmCard">
                        <div className="card-content">
                            <h5 className="confirm"><b>Merci pour votre intérêt, nous vous recontacterons prochainement par email.</b></h5>
                            <br></br>
                            <h6 className="confirm"><b>* Nous vous contacterons sur l'adresse email communiquée.</b></h6>
                        </div>
                        <br></br>
                        <div className="boxButton">
                            <Link to="/" className="white-text waves-effect waves-light btn" id="confirmButton">Accueil</Link> 
                        </div>
                        <br></br>
                    </div>  
                </div>               
            </div>
        );
    }
}
export default Confirmation;