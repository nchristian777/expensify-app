import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const state = authReducer(undefined, { type: 'LOGIN', uid: '1111' } );
  expect(state.uid).toBe('1111');
});

test('should clear uid for logout', () => {
  const state = authReducer({uid: '1111'}, { type: 'LOGOUT' } );
  expect(state).toEqual({});
});
