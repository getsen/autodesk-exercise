export function setUsername(input) {
  return {
    type: 'SET_USERNAME',
    username: input,
  };
}

export function createAccount(isCreated) {
  return {
    type: 'CREATE_ACCOUNT',
    newAccountCreated: isCreated,
  };
}
