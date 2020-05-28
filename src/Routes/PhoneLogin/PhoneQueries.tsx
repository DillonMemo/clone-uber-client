import { gql } from 'apollo-boost';

/**
 * startPhoneVerification : apollo graphql에게 줄 mutation 이름
 * StartPhoneVerification : 서버가 할 operation 이름
 */
export const PHONE_SIGN_IN = gql`
  mutation startPhoneVerification($phoneNumber: String!) {
    StartPhoneVerification(phoneNumber: $phoneNumber) {
      ok
      error
    }
  }
`;
