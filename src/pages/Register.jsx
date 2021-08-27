import React, { useState, useRef, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import CircularProgress from '@material-ui/core/CircularProgress';

import Layout from '../components/LayoutNoNav';

import {
  getOtp as getOtpApi,
  register as registerApi,
} from '../utils/api';

const getOtpApiWrapper = async (email) => {
  const res = await getOtpApi({ email });
  return res;
};

const registerApiWrapper = async (email, otp, username, password) => {
  const res = await registerApi({
    email, otp, username, password,
  });
  return res;
};

export default function Page() {
  const refreshToken = useSelector((state) => state.account.refreshToken);

  const history = useHistory();

  const emailEl = useRef(null);
  const getOtpEl = useRef(null);
  const otpEl = useRef(null);
  const usernameEl = useRef(null);
  const passwordEl = useRef(null);
  const registerEl = useRef(null);

  const [email, setEmail] = useState('');
  const [getOtpIcon, setGetOtpIcon] = useState(null);
  const [otp, setOtp] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerIcon, setRegisterIcon] = useState(null);

  useEffect(() => {
    if (refreshToken) {
      history.push('/user');
    }
  }, [refreshToken]);

  const getOtp = () => {
    setGetOtpIcon(<CircularProgress size={16} color="inherit" />);
    getOtpApiWrapper(email).then(() => {
      setGetOtpIcon(<DoneIcon />);
      otpEl.current.focus();
    }).catch((err) => {
      if (err.response) {
        setGetOtpIcon(<ErrorIcon />);
        // eslint-disable-next-line no-console
        console.log(`${err.response.status}: ${JSON.stringify(err.response.data)}`);
      }
    });
  };

  const register = () => {
    // eslint-disable-next-line no-console
    console.log(`Register with ${email}:${otp}:${username}:${password}`);
    setRegisterIcon(<CircularProgress size={16} color="inherit" />);
    registerApiWrapper(email, otp, username, password).then(() => {
      setRegisterIcon(<DoneIcon />);
      setTimeout(() => {
        history.goBack();
      }, 500);
    }).catch((err) => {
      if (err.response) {
        setRegisterIcon(<ErrorIcon />);
        // eslint-disable-next-line no-console
        console.log(`${err.response.status}: ${JSON.stringify(err.response.data)}`);
      }
    });
  };

  return (
    <Layout title="Register" back className="flex place-items-center place-content-center">
      <Paper elevation={2} className="px-8 py-8 min-w-2/4 max-w-3/4">
        <Typography component="h5" variant="h5" className="mb-4">
          Register
        </Typography>
        <form className="flex flex-col gap-4">
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            inputRef={emailEl}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                getOtpEl.current.focus();
              }
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            className="w-full"
            ref={getOtpEl}
            endIcon={getOtpIcon}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              getOtp();
            }}
          >
            Get OTP
          </Button>
          <TextField
            label="OTP"
            variant="outlined"
            value={otp}
            inputRef={otpEl}
            onChange={(e) => {
              e.preventDefault();
              setOtp(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                usernameEl.current.focus();
              }
            }}
          />
          <TextField
            label="Username"
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
                registerEl.current.focus();
                registerEl.current.click();
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className="w-full"
            ref={registerEl}
            endIcon={registerIcon}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              register();
            }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Layout>
  );
}
