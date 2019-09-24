import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.insurance.checked)
              this.props.substractInsurance()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addInsurance();
        }
        else{
            this.props.substractInsurance();
        }
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="insurance" onChange= {this.handleChecked} />
                                <span>Assurance annulation (+150€)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} €</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Continuer</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addInsurance: ()=>{dispatch({type: 'ADD_INSURANCE'})},
        substractInsurance: ()=>{dispatch({type: 'SUB_INSURANCE'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
