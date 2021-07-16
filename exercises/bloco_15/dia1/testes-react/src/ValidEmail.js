import React from 'react';
import './validEmail.css';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
}

const emptyEmail = (email) => {
  if (email === '') return <span></span>;
}

const ValidEmail = (props) => {
  const { email } = props;

  if (email !== '') {
    return (
      <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3 data-testid="id-is-email-valid" className={verifyEmail(email) ? 'green-text' : 'red-text'}>{(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}</h3>
    </div>
  );
} else {
  return emptyEmail(email);
}
}

export default ValidEmail;