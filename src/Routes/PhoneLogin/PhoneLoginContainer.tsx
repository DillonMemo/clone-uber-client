/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

interface IProps extends RouteComponentProps {}

const PhoneLoginContainer: React.FC<IProps> = () => {
  const [countryCode, setCountryCode] = useState<string>('+82');
  const [phoneNumber, setPhoneNumber] = useState<string>('12345678');

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
      return;
    } else {
      toast.error('Please write a valid phone number');
    }
  };

  return (
    <PhoneLoginPresenter
      countryCode={countryCode}
      phoneNumber={phoneNumber}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );
};

export default PhoneLoginContainer;