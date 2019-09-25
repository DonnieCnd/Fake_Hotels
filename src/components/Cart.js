import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeHotel,addNight,subtractNight} from './actions/cartActions'
import Recipe from './Recipe'
class Cart extends Component{


    handleRemove = (id)=>{
        this.props.removeHotel(id);
    }

    handleAddNight = (id)=>{
        this.props.addNight(id);
    }

    handleSubtractNight = (id)=>{
        this.props.subtractNight(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.image} alt={item.image} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.name}</span>
                                        <p>{item.description}</p>
                                        <br></br>
                                        <p><b>Prix: {item.price} € / nuit</b></p> 
                                        <p>
                                            <b>Nuits: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddNight(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractNight(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Supprimer</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p><b> Votre panier est vide :-(</b></p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>Votre panier:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeHotel: (id)=>{dispatch(removeHotel(id))},
        addNight: (id)=>{dispatch(addNight(id))},
        subtractNight: (id)=>{dispatch(subtractNight(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)