/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, Fragment } from 'react';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useMutation } from '@apollo/react-hooks';
import { PHONE_SIGN_IN } from './PhoneQueries';

interface IMutationInterface {
  phoneNumber: string;
}

interface IProps extends RouteComponentProps {}

const PhoneLoginContainer: React.FC<IProps> = () => {
  const [countryCode, setCountryCode] = useState<string>('+82');
  const [phoneNumber, setPhoneNumber] = useState<string>('12345678');

  /**
   * <any, IMutationInterface> : any > muttion이 리턴할 데이터, IMutationInterface > 요청할 인자
   */
  const [mutation, { data, loading, called }] = useMutation<any, IMutationInterface>(PHONE_SIGN_IN);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'countryCode') setCountryCode(value);
    else if (name === 'phoneNumber') setPhoneNumber(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(`${countryCode}${phoneNumber}`);
    console.log(isValid);

    if (isValid) {
      mutation({ variables: { phoneNumber: `${countryCode}${phoneNumber}` } });
      console.log('mutation data :', isValid, `${countryCode}${phoneNumber}`, data, called);
      return;
    } else {
      toast.error('Please write a valid phone number');
    }
  };

  return (
    <Fragment>
      <PhoneLoginPresenter
        countryCode={countryCode}
        phoneNumber={phoneNumber}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        loading={loading}
      />
    </Fragment>
  );
};

export default PhoneLoginContainer;
