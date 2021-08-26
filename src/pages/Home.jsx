import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import {
  useHistory,
} from 'react-router-dom';

import Layout from '../components/Layout';

export default function Page() {
  const refreshToken = useSelector((state) => state.account.refreshToken);
  const history = useHistory();

  useEffect(() => {
    if (!refreshToken) {
      history.push('/user');
    }
  }, [refreshToken]);

  return (
    <Layout index={0} className="flex flex-col">
      <div className="flex-1 flex flex-row items-center">
        <p className="flex-1 text-center text-gray-300">Home</p>
      </div>
    </Layout>
  );
}
