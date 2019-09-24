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
        this.props.addToCart(id); 
    }

    render(){
        // let hotelList = this.state.hotels.map(hotel=>{
        //     return(
        //         <div className="card" key={hotel.id}>
        //                 <div className="card-image">
        //                     <img src={hotel.image} alt={hotel.name}/>
        //                     <span className="card-title">{hotel.name}</span>
        //                     <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(hotel.id)}}><i className="material-icons">add</i></span>
        //                 </div>

        //                 <div className="card-content">
        //                     <p>{hotel.description}</p>
        //                     <p><b>Prix: {hotel.prix} € / Nuit</b></p>
        //                 </div>
        //          </div>

        //     )
        // })
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
                        <div className="card">
                            <div className="card-image">
                                <img src="https://www.baglionihotels.com/wp-content/themes/baglioni-hotels-new/images/schema/baglioni-hotel-london.jpg" className="image-hotel"/>
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(this.state.hotels[0].id)}}><i className="material-icons">add</i></span>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title"><b>{this.state.hotels[0].name}</b></h3>
                                <p>{this.state.hotels[0].description}</p>
                                <br></br>
                                <p><b>Prix: {this.state.hotels[0].prix} € / Nuit</b></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/10/00/09/a8/swimming-pool.jpg" className="image-hotel"/>
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(this.state.hotels[1].id)}}><i className="material-icons">add</i></span>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title"><b>{this.state.hotels[1].name}</b></h3>
                                <p>{this.state.hotels[1].description}</p>
                                <br></br>
                                <p><b>Prix: {this.state.hotels[1].prix} € / Nuit</b></p>
                            </div>
                        </div>
                        {/* {hotelList} */}
                    </div>
                    <div className="box">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://c1.momondo.net/assets/photos/cards/card_hotels_001.jpg?q=60&h=400" className="image-hotel"/>
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(this.state.hotels[2].id)}}><i className="material-icons">add</i></span>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title"><b>{this.state.hotels[2].name}</b></h3>
                                <p>{this.state.hotels[2].description}</p>
                                <br></br>
                                <p><b>Prix: {this.state.hotels[2].prix} € / Nuit</b></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <img src="https://r-cf.bstatic.com/images/hotel/max1024x768/117/117072356.jpg" className="image-hotel"/>
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(this.state.hotels[3].id)}}><i className="material-icons">add</i></span>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title"><b>{this.state.hotels[3].name}</b></h3>
                                <p>{this.state.hotels[3].description}</p>
                                <br></br>
                                <p><b>Prix: {this.state.hotels[3].prix} € / Nuit</b></p>
                            </div>
                        </div>
                        {/* {hotelList} */}
                    </div>
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