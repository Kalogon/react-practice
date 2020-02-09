import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';


// class movie extends Component {

//     static propTypes = {
//         title:PropTypes.string.isRequired,
//         poster:PropTypes.string.isRequired
//     }

//     render(){
//         console.log(this.props);
//         return ( 
//             <div className="movie">
//                 <Movieposter poster = {this.props.poster}  />
//                 <h1>this is movie</h1>
//                 <h2>{this.props.title}</h2>
//             </div>
//         );
//     }
  
  
// }

// class Movieposter extends Component{
//     static propTypes = {
//         poster:PropTypes.string.isRequired
//     }
//     render(){
//         return(
//             <img src={this.props.poster} alt="noimage"></img>
//         )
//     }
// }

function movie({title,poster,genres,synopsis}){
    return ( 
        <div className="movie">
            <div className="Movie_Columns">
                <Movieposter poster = {poster}  />
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_genres">
                    {genres.map((genre,index)=>{
                        return <Moviegenre genre={genre} key={index}/>
                    })}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
           
        </div>
    );
}


function Movieposter({poster}){
    return (
        <img src={poster} alt="noimage"></img>
    )
}

function Moviegenre({genre,key}){
    return(
        <span className="Movie_genre" key={key}>{genre}</span>
    )
}

movie.propTypes = {
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
}
Movieposter.propTypes = {
    poster : PropTypes.string.isRequired
}
Moviegenre.propTypes = {
    genre : PropTypes.string.isRequired
}
export default movie;