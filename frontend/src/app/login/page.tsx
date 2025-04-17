'use client';

import Grid from '@mui/material/Grid2';
import { Container, Link, Typography } from '@mui/material';
import LoginForm from '@/components/User/LoginForm';
import { useState } from 'react';
import { UserLogin } from '@/types/userTypes';
import { login } from '@/redux/thunks/userThunks';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectUser } from '@/redux/slices/userSlice';

const Login = ()=>{

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [state, setState] = useState<UserLogin>({
    email: '',
    password: '',
  })

  const onSubmit = async (state: UserLogin) => {
    const loginMutation = {
      email: state.email.trim().toLowerCase(),
      password: state.password.trim(),
    };
    await dispatch(login(loginMutation)).unwrap();
  }

  return(
    <>
      <Grid>
        <Container maxWidth={'lg'}>
          <Grid>
            <Typography variant={"h1"}>
              Login
              {user?.username}
            </Typography>
            <LoginForm onSubmit={onSubmit} state={state} setState={setState} type={"login"}></LoginForm>
            <Link href={"/register"}>register</Link>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Login;