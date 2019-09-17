import React from 'react';
import Button from '@components/shared/Button';
import Text from '@components/shared/utilities/Text';
import TextInput from '@components/shared/Form/TextInput';
import Sidebar from '@components/shared/Sidebar';
import AuthHeader from '@components/shared/Header/AuthHeader';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'jklkjhgn',
      title: 'Click Me'
    };
  }

  toggleTitlte = () => {
    this.setState({
      title: 'Changed'
    });
  }

  render() {
    const { title, email } = this.state;

    return (
      <React.Fragment>
        {/* <h2>Hello World</h2>
        <Button color="green" outline variant={500} size="small" round onClick={this.toggleTitlte}>{title}</Button>
        <Text color="red" variant={300} size="sm" font="sans">Chai</Text>
        <TextInput placeholder="Email Address" name="email" value={email} id="email" label="Email Address" handleChange={() => {}} error="It is required" />
        <TextInput placeholder="Email Address" name="email" value={email} id="email" label="Email Address" handleChange={() => {}} /> */}
        <div className="antialiased h-screen flex">
          <Sidebar />

          <div className="flex-1 flex flex-col overflow-hidden">
            <AuthHeader name="Overview" />

            <div className="px-6 py-4 flex-1 overflow-y-scroll">
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Welcome;
