import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class UserList extends Component {

  createListItem(){
    return this.props.users.map((user) => {
        return(
            <li key={user.id}>{user.first} {user.last} <br /> <img src={user.thumbnail}></img></li>
        );
    });
  }

  render() {
    return(
        <ul>
          {this.createListItem()}
        </ul>
    );
  }
}

function mapStateToProps(state){
  return{
    users: state.users
  };
}

export default connect(mapStateToProps)(UserList);
