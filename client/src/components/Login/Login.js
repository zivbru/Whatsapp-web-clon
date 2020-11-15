import React, { useRef } from 'react';
import './Login.css';
import { v4 as uuidV4 } from 'uuid';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  ButtonGroup,
} from '@material-ui/core';

const Login = ({ setId }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setId(idRef.current.value);
  };

  const createNewId = () => {
    setId(uuidV4());
  };

  return (
    <div className='login'>
      <FormControl>
        <InputLabel htmlFor='my-input'>Enter your ID</InputLabel>
        <Input
          inputRef={idRef}
          id='my-input'
          aria-describedby='my-helper-text'
          style={{ marginBottom: '10px' }}
          required
        />

        <ButtonGroup disableElevation variant='contained' color='primary'>
          <Button type='submit' onClick={handleSubmit}>
            Login
          </Button>
          <Button onClick={createNewId}>Create a New Id</Button>
        </ButtonGroup>
      </FormControl>
    </div>
  );
};

export default Login;
