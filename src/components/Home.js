import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{

    state = {
        error: null,
        isLoaded: false,
        hotels: []
    }

    componentDidMount() { 
        let url = "http://localhost:3001/hotels"
        fetch(url)
          .then(res => res.json())
          .then(data => {
            this.setState({
              isLoaded: true,
              hotels: data
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
    
    handleClick = (id)=>{
        let result = this.state.hotels.filter(hotel => hotel.id === id)
        if(result.length>0){
            this.props.addToCart(result[0]);
        }
    }

    render(){
        let hotelList = this.state.hotels.map(hotel=>{
            return(
                <div className="card" key={hotel.id}>
                    <div className="card-image">
                        <img src={hotel.image} className="image-hotel"/>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(hotel.id)}}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <h3 className="card-title"><b>{hotel.name}</b></h3>
                        <p>{hotel.description}</p>
                        <br></br>
                        <p><b>Prix: {hotel.price} € / Nuit</b></p>
                    </div>
                </div>
            )
        })
        const { error, isLoaded, hotels } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <div className="container">
                    <h3 className="center">Nos Hôtels</h3>
                    <div className="box">
                        {hotelList}
                    </div>
                    <br></br>
                </div>
            )
        }
    }
}
const mapStateToProps = (state)=>{
    return {
      hotels: state.hotels
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)