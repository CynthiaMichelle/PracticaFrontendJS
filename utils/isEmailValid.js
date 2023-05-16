export function isEmailValid(email) {
  const mailRegExp = new RegExp(
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
  );

  return mailRegExp.test(email);
}
