import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../client/src/components/shared/Button';

storiesOf('Button', module)
  .add('with text', () => 
    <Button s>Hello Button</Button>
  )
  .add('with emoji', () => 
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  );   