import headers from './headers';

describe('config/headers', () => {
  test('when headers is requested should match the static def', () => {
    const headersExpected = headers;
    const headersActual = mockHeaders();

    expect(headersActual).toEqual(headersExpected);
  });
  test('when headers is requested should match the snapshot', () => {
    const headersExpected = headers;
    expect(headersExpected).toMatchSnapshot();
  });
});

function mockHeaders() {
  return [
    {
      source: '/:path*/',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
      ],
    },
  ];
}
