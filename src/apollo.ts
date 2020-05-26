import ApolloClient, { Operation } from 'apollo-boost';

const client = new ApolloClient({
  /**
   * 기본적인 state값 설정이 가능하다.
   */
  clientState: {
    defaults: {
      auth: {
        __typename: 'Auth',
        isLoggedIn: Boolean(localStorage.getItem('jwt')),
      },
    },
    resolvers: {
      Mutation: {
        /**
         * 세번째 args의 {cache}는 위 defaults의 자원들을 가리킵니다.
         */
        logUserIn: (_, { token }, { cache }) => {
          localStorage.setItem('jwt', token);
          cache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: true,
              },
            },
          });

          return null;
        },
        logUserOut: (_, __, { cache }) => {
          localStorage.removeItem('jwt');
          cache.writeData({
            data: {
              __typename: 'Auth',
              isLoggedIn: false,
            },
          });
          return null;
        },
      },
    },
  },
  /**
   * 클라이언트에서 서버로 request 할 때 마다 실행 된다.
   * JWT를 사용하기 위해 request 함수 이용
   */
  request: async (operation: Operation) => {
    operation.setContext({
      headers: { 'X-JWT': localStorage.getItem('jwt') || '' },
    });
  },
  uri: 'http://localhost:4000/graphql',
});

export default client;
