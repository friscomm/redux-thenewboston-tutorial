import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class MovieList extends Component {

  createMovieItem(){
    return this.props.movies.map((movie) => {
        return(
            <li key={movie.id}>{movie.title}<br /></li>
        );
    });
  }

  render() {
    return(
        <ul>
          {this.createMovieItem()}
        </ul>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MovieList);
