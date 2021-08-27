import React, { useState, useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import CircularProgress from '@material-ui/core/CircularProgress';

import { login as loginAction } from '../store/accountSlice';

import Layout from '../components/LayoutNoNav';

import {
  login as loginApi,
} from '../utils/api';

const loginApiWrapper = async (username, password) => {
  let res;
  if (username.includes('@')) {
    res = await loginApi({
      email: username,
      password,
    });
  } else {
    res = await loginApi({
      username,
      password,
    });
  }
  return res;
};

export default function Page() {
  const refreshToken = useSelector((state) => state.account.refreshToken);
  const dispatch = useDispatch();

  const history = useHistory();

  const usernameEl = useRef(null);
  const passwordEl = useRef(null);
  const loginEl = useRef(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginIcon, setLoginIcon] = useState(null);

  useEffect(() => {
    if (refreshToken) {
      history.push('/user');
    }
  }, []);

  const login = () => {
    setLoginIcon(<CircularProgress size={16} color="inherit" />);
    loginApiWrapper(username, password).then((data) => {
      dispatch(loginAction({
        username,
        refreshToken: data.refresh_token,
        accessToken: data.access_token,
      }));
      setLoginIcon(<DoneIcon />);
      setTimeout(() => {
        history.push('/');
      }, 500);
    }).catch((err) => {
      if (err.response) {
        setLoginIcon(<ErrorIcon />);
        // eslint-disable-next-line no-console
        console.log(`${err.response.status}: ${JSON.stringify(err.response.data)}`);
      }
    });
  };

  return (
    <Layout title="Login" back className="flex place-items-center place-content-center">
      <Paper elevation={2} className="px-8 py-8 min-w-2/4 max-w-3/4">
        <Typography component="h5" variant="h5" className="mb-4">
          Login
        </Typography>
        <form className="flex flex-col gap-4">
          <TextField
            label="Username/Email"
            variant="outlined"
            value={username}
            inputRef={usernameEl}
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                passwordEl.current.focus();
              }
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            inputRef={passwordEl}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                loginEl.current.focus();
                loginEl.current.click();
              }
            }}
          />
          <div className="flex flex-row">
            <div className="w-1/2 pr-2">
              <Button
                variant="contained"
                color="primary"
                className="w-full"
                ref={loginEl}
                endIcon={loginIcon}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  login();
                }}
              >
                Login
              </Button>
            </div>
            <div className="w-1/2 pl-2 flex flex-row-reverse">
              <Link to="/register" className="text-indigo-700 underline pt-1">Register</Link>
            </div>
          </div>
        </form>
      </Paper>
    </Layout>
  );
}
