/** @jsx jsx */
import { jsx } from '@emotion/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

/** Routes */
import AddPlace from '../../Routes/AddPlace';
import EditAccount from '../../Routes/EditAccount';
import FindAddress from '../../Routes/FindAddress';
import Home from '../../Routes/Home';
import Login from '../../Routes/Login';
import PhoneLogin from '../../Routes/PhoneLogin';
import Places from '../../Routes/Places';
import Ride from '../../Routes/Ride';
import Settings from '../../Routes/Settings';
import SocialLogin from '../../Routes/SocialLogin';
import VerifyPhone from '../../Routes/VerifyPhone';

interface IProps {
  isLoggedIn: boolean;
}
const AppPresenter: React.FC<IProps> = ({ isLoggedIn }) => {
  return <BrowserRouter>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</BrowserRouter>;
};

const LoggedOutRoutes: React.FC = () => (
  <Switch>
    <Route path={'/'} exact={true} component={Login} />
    <Route path={'/phone-login'} component={PhoneLogin} />
    <Route path={'/verify-phone/:number'} component={VerifyPhone} />
    <Route path={'/social-login'} component={SocialLogin} />
    {/* 누군가가 존재하지 않는 계정인데 로그아웃을 실행하면 Redirect 실행 */}
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

const LoggedInRoutes: React.FC = () => (
  <Switch>
    <Route path={'/'} exact={true} component={Home} />
    <Route path={'/ride'} component={Ride} />
    <Route path={'/edit-account'} component={EditAccount} />
    <Route path={'/settings'} component={Settings} />
    <Route path={'/places'} component={Places} />
    <Route path={'/add-place'} component={AddPlace} />
    <Route path={'/find-address'} component={FindAddress} />

    <Redirect from={'*'} to={'/'} />
  </Switch>
);

export default AppPresenter;
