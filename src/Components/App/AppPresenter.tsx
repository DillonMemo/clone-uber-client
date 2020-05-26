import React from 'react';

interface IProps {
  isLoggedIn: boolean;
}
const AppPresenter: React.FC<IProps> = ({ isLoggedIn }) => {
  return <>{isLoggedIn ? <span>you are in</span> : <span>you are out</span>}</>;
};

export default AppPresenter;
