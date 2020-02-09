import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';


class movie extends Component {

    static propTypes = {
        title:PropTypes.string.isRequired,
        poster:PropTypes.string.isRequired
    }

    render(){
        console.log(this.props);
        return ( 
            <div className="movie">
                <Movieposter poster = {this.props.poster}  />
                <h1>this is movie</h1>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
  
  
}

class Movieposter extends Component{
    static propTypes = {
        poster:PropTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} alt="noimage"></img>
        )
    }
}

export default movie;