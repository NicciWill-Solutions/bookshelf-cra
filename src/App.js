/** @jsxRuntime classic */
/** @jsx jsx */
import 'bootstrap/dist/css/bootstrap-reboot.css';
import { jsx } from '@emotion/core';
import '@reach/dialog/styles.css';

import { useState } from 'react';
import { Logo } from './components/logo';
import { Button, CircleButton } from './components/lib';

import LoginForm from './components/LoginForm';

import { Dialog } from '@reach/dialog';

function App() {
  const [openModal, setOpenModal] = useState('none');

  function closeModal() {
    setOpenModal('none');
  }

  function handleLogin(formData) {
    console.log('login', formData);
  }

  function handleRegister(formData) {
    console.log('register', formData);
  }

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Logo width='100' height='100' />
      <h1>Bookshelf</h1>

      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}
      >
        <Button onClick={() => setOpenModal('login')} variant='primary'>
          Login
        </Button>
        <Button onClick={() => setOpenModal('register')} variant='secondary'>
          Register
        </Button>
      </div>

      <Dialog
        aria-label='Login form'
        isOpen={openModal === 'login'}
        onDismiss={closeModal}
      >
        <div
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <CircleButton onClick={closeModal}>
            <span>x</span>
          </CircleButton>
        </div>
        <LoginForm buttonText='Login' onSubmit={handleLogin} />
      </Dialog>

      <Dialog
        aria-label='Registration form'
        isOpen={openModal === 'register'}
        onDismiss={closeModal}
      >
        <div
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <CircleButton onClick={closeModal}>
            <span>x</span>
          </CircleButton>
        </div>
        <LoginForm buttonText='Register' onSubmit={handleRegister} />
      </Dialog>
    </div>
  );
}

export default App;
