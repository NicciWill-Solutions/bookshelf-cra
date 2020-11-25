/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Button, FormGroup, Input } from './lib';

const LoginForm = ({ buttonText, onSubmit }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = e.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }}
    >
      <FormGroup>
        <label htmlFor='username'>Username:</label>
        <Input type='text' id='username' />
      </FormGroup>
      <FormGroup>
        <label htmlFor='password'>Password:</label>
        <Input type='text' id='password' />
      </FormGroup>
      <Button css={{ marginTop: '10px' }} type='submit' variant='primary'>
        {buttonText}
      </Button>
    </form>
  );
};

export default LoginForm;
