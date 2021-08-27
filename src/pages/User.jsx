import React from 'react';

import Layout from '../components/Layout';
import UserCard from '../components/UserCard';
import UserOptionList from '../components/UserOptionList';

export default function Page() {
  return (
    <Layout index={1} className="flex flex-col">
      <div className="px-4 h-40">
        <UserCard />
      </div>
      <div className="p-4">
        <UserOptionList />
      </div>
      <div className="flex-1 flex flex-row items-center">
        <p className="flex-1 text-center text-gray-300">User</p>
      </div>
    </Layout>
  );
}
