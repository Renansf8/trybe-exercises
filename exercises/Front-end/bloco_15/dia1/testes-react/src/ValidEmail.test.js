import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido', () => {
  const EMAIL_USER = 'emailerrado.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Verifica se não aparece nenhum valor enquanto nãp tiver o email', () => {
  const { queryByTestId } = render(<ValidEmail email=""/>);
  const isValidtext = queryByTestId('id-is-email-valid');
  expect(isValidtext).not.toBeInTheDocument();
});

test('Verifica se a cor do texto fica verde quando o email é valido', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByTestId } = render(<ValidEmail email={EMAIL_USER}/>);
  const isValidWithColorGreen = getByTestId('id-is-email-valid');
  expect(isValidWithColorGreen).toHaveAttribute('class', 'green-text')
});

test('Verifica se a cor do texto fica vermelho quando o email é inválido', () => {
  const EMAIL_USER = 'emailerrado.com';
  const { getByTestId } = render(<ValidEmail email={EMAIL_USER}/>);
  const isValidWithColorGreen = getByTestId('id-is-email-valid');
  expect(isValidWithColorGreen).toHaveAttribute('class', 'red-text')
});