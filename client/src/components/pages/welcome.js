import React from 'react';
import Button from '@components/shared/Button';
import Text from '@components/shared/utilities/Text';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Click Me'
    };
  }

  toggleTitlte = () => {
    this.setState({
      title: 'Changed'
    });
  }

  render() {
    const { title } = this.state;

    return (
      <React.Fragment>
        <h2>Hello World</h2>
        <Button color="green" outline variant={500} size="small" round onClick={this.toggleTitlte}>{title}</Button>
        <Text color="red" variant={300} size="sm" font="sans">Chai</Text>
      </React.Fragment>
    );
  }
}

export default Welcome;
