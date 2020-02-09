import React, { Component } from 'react';
import './App.css';
import Movie from './movie'

const movieArray =[
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
class App extends Component {
  render(){
    return (
      <div className="App">
        {movieArray.map((movie,index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index}/> 
        })}
      </div>
    );
  }
  
}

export default App;
