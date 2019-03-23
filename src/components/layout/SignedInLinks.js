import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions'
import { connect } from 'react-redux';

function SignedInLinks({ signOut }) {
  return (
    <ul className="right">
      <li>
        <NavLink to='/create'>New Project</NavLink>
      </li>
      <li>
        <button onClick={signOut}>Log Out</button>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>AD</NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)