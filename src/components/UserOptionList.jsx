import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';

function OptionItem({ title, icon, link }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(link);
  };

  return (
    <div
      className="flex flex-row content-center px-6 py-6 focus:bg-gray-100 hover:bg-gray-100 hover:cursor-pointer"
      role="link"
      tabIndex={0}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleClick();
      }}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
          handleClick();
        }
      }}
    >
      {icon}
      <span className="text-lg ml-4">
        {title}
      </span>
    </div>
  );
}

export default function Layout() {
  return (
    <div className="flex flex-col min-h-32 bg-white shadow-xl rounded-xl">
      <OptionItem title="Settings" icon={<SettingsIcon className="mt-0.5" />} link="/settings" />
      <OptionItem title="About" icon={<InfoIcon className="mt-0.5" />} link="/about" />
    </div>
  );
}
