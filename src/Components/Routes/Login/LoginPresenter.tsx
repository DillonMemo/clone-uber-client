/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import bgImage from '../../images/bg.png';
import { color } from '../../../theme';

interface OutHomePresenterProps extends RouteComponentProps {}
const OutHomePresenter: React.FC<OutHomePresenterProps> = () => {
  return (
    <div css={container}>
      <Helmet>
        <title>Login | Uber</title>
      </Helmet>
      <div css={header}>
        <div css={logo}>
          <h1 css={title}>Uber</h1>
        </div>
      </div>
      <div css={footer}>
        <Link to={'/phone-login'}>
          <div css={phoneLogin}>
            <h2 css={subTitle}>Get moving with Uber</h2>
            <div css={fakeInput}>
              🇰🇷 +82 <span css={grey}>Enter your mobile number</span>
            </div>
          </div>
        </Link>
        <Link to={'/social-login'}>
          <div css={socialLogin}>
            <span css={socialLink}>Or connect with social</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const container = css`
  height: 100vh;
`;

// background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)), url(${bgImage});
const header = css`
  height: 70%;
  background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)), url(${bgImage});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logo = css`
  width: 110px;
  height: 110px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 -14px 28px rgba(0, 0, 0, 0.22);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 25px;
`;

const title = css``;

const footer = css``;

const subTitle = css`
  font-size: 30px;
`;

const fakeInput = css`
  margin: 50px 0px;
  font-size: 25px;
  font-weight: 300;
`;

const phoneLogin = css`
  padding: 20px;
  cursor: pointer;
`;

const grey = css`
  color: ${color.greyColor};
  margin-left: 10px;
`;

const socialLogin = css`
  border-top: 1px solid ${color.greyColor};
  padding: 30px 20px;
`;

const socialLink = css`
  color: ${color.blueColor};
  font-size: 20px;
  cursor: pointer;
`;

export default OutHomePresenter;
