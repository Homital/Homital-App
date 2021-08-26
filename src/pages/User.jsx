import React from 'react';

import Layout from '../components/Layout';
import UserCard from '../components/UserCard';

export default function Page() {
  return (
    <Layout index={1} className="flex flex-col">
      <div className="p-4">
        <UserCard />
      </div>
      <div className="flex-1 flex flex-row items-center">
        <p className="flex-1 text-center text-gray-300">User</p>
      </div>
    </Layout>
  );
}
