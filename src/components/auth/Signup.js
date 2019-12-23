import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signup extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <label>Email</label>
          <Field
            autoComplete="none"
            name="email"
            type="text"
            component="input"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            autoComplete="none"
            name="password"
            type="password"
            component="input"
          />
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({ form: 'signup' })(Signup);
