import React from 'react';
import { Redirect } from 'react-router-dom';
import TextInput from '@components/shared/Form/TextInput';
import Button from '@components/shared/Button';
import Text from '@components/shared/utilities/Text';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    console.log(email, password);
  }

  render() {
    const { email, password } = this.state;

    return (
      <React.Fragment>
        <div className="wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="flex-col">
              <TextInput
                id="email"
                name="email"
                placeholder="Email Address"
                value={email}
                label="Email"
                handleChange={this.handleChange}
              />
            </div>
            <div className="flex-col">
              <TextInput
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                label="Password"
                handleChange={this.handleChange}
              />
            </div>

            <div className="mx-auto">
              <Button color="blue" variant={500} size="medium" round stretch onClick={() => {<Redirect to="/" />;}}>
                <Text size="sm">Log In</Text>
              </Button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignupForm;
