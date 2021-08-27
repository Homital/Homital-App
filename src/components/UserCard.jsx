import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { reset as logoutAction } from '../store/accountSlice';

export default function Layout() {
  const refreshToken = useSelector((state) => state.account.refreshToken);
  const username = useSelector((state) => state.account.username);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <Card elevation={0} className="flex flex-row min-h-32 bg-transparent">
      <div className="w-32 flex flex-row justify-center content-center">
        <div className="flex flex-col justify-center content-center">
          <AccountCircleIcon className={`w-24 h-24 ${refreshToken ? 'text-gray-600' : 'text-gray-300'}`} />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        {
          refreshToken ? (
            <>
              <CardContent className="flex flex-col mt-4">
                <Typography component="h4" variant="h4" className="mb-2">
                  {username}
                </Typography>
                <Typography component="p" variant="body1">
                  Welcome!
                </Typography>
              </CardContent>
              <CardActions className="self-stretch flex flex-row-reverse">
                <Button
                  variant="outlined"
                  size="small"
                  className="text-pink-700"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                  }}
                >
                  Log Out
                </Button>
              </CardActions>
            </>
          ) : (
            <CardContent>
              <Typography component="h5" variant="h5">
                Please
                {' '}
                <Link to="/login" className="text-indigo-700 underline">login</Link>
              </Typography>
            </CardContent>
          )
        }
      </div>
    </Card>
  );
}
