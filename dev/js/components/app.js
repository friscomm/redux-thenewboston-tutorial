import React from 'react';
import UserList from '../containers/user-list';
import MovieList from '../containers/movie-list';
import UserDetail from '../containers/user-detail';
require('../../scss/style.scss');

const App = () => (
  <div>
    <h2>Username List:</h2>
    <UserList />
    <hr/>
    <h2>User Details</h2>
    <UserDetail />
    <MovieList />
  </div>
);

export default App;
