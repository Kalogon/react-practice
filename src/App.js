import React, { Component } from 'react';
import './App.css';
import Movie from './movie'

class App extends Component {

  //render: componentWillMount -> render -> componentDidMount
  //update: componentWillReceiveProps -> shouldComponentUpdate == true -> componentWillUpdate -> render -> componentDidUpdate

  state ={
    greeting : "Hello" 
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movieArray : [
          {
            title:"Matrix",
            poster:"https://images-na.ssl-images-amazon.com/images/I/71-%2B2B-BJWL._SY679_.jpg"
          },
          {
            title:"Full Metal Jacket",
            poster:"https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
          },
          {
            title:"Oldboy",
            poster:"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
            title:"Star Wars",
            poster:"https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
          }
        ]
      })
    },3000)
  }

  _renderMovies = ()=>{
    const movies = this.state.movieArray.map((movie,index) =>{
      return <Movie title={movie.title} poster={movie.poster} key={index}/> 
    });
    return movies;
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
