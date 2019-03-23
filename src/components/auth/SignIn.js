import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SingIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signIn(this.state);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className='container'>
        <form autoComplete="off" onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sing In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />

          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />

          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Log In</button>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingIn)
