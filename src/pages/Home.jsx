import React from 'react';

import Layout from '../components/Layout';

export default function Page() {
  return (
    <Layout index={0} className="flex">
      <p className="flex-1 place-self-center text-center text-gray-300">
        Home
      </p>
    </Layout>
  );
}
