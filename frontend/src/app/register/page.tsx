'use client';

import Grid from '@mui/material/Grid2';
import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import { UserMutation } from '@/types/userTypes';
import { register } from '@/redux/thunks/userThunks';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectUser } from '@/redux/slices/userSlice';
import RegisterForm from '@/components/User/RegisterForm';

const Register = ()=>{
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [state, setState] = useState<UserMutation>({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = async (state: UserMutation) => {
    const registerMutation = {
      username: state.username.trim(),
      email: state.email.trim().toLowerCase(),
      password: state.password.trim(),
      confirmPassword: state.confirmPassword.trim(),
    };
    await dispatch(register(registerMutation)).unwrap();
  }


  return(
    <>
      <Grid>
        <Container maxWidth="lg">
          <Grid>
            <Typography variant={"h1"}>
              Register
            </Typography>
            <RegisterForm state={state} setState={setState} onSubmit={onSubmit}></RegisterForm>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Register;