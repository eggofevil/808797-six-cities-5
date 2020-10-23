import React from 'react';

class SignInForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: ``,
      password: ``
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    alert(`Form submit!`);
  }

  _handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit} className="login__form form">
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input onChange={this._handleChange} className="login__input form__input" type="email" name="email" placeholder="Email" required />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input onChange={this._handleChange} className="login__input form__input" type="password" name="password" placeholder="Password" required />
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    );
  }
}

export default SignInForm;
