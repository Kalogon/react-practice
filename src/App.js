import React, { Component } from 'react';
import './App.css';
import Movie from './movie'

class App extends Component {

  //render: componentWillMount -> render -> componentDidMount
  //update: componentWillReceiveProps -> shouldComponentUpdate == true -> componentWillUpdate -> render -> componentDidUpdate
  state = {}

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = ()=>{
    console.log("1")
    console.log(this.state.movieArray);
    const movies = this.state.movieArray.map((movie) =>{
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}/> 
    });
    return movies;
  }

  _getMovies = async ()=>{
    const movies = await this._callApi()
    console.log(movies)
    this.setState({
      movieArray:movies
    })
    console.log(this.state)
  }

  _callApi = ()=>{
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    .then(res=> {
      return res.json()
    })
    .then(json=> {
      return json.data.movies
    })
    .catch(err=>{
      console.log(err)
    })
  }

  render(){
    console.log("render")
    return (
      <div className="App">
        {this.state.movieArray ? this._renderMovies() : "loading"}
      </div>
    );
  }
  
}

export default App;
