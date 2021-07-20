import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';
import userEvent from '@testing-library/user-event';

it('Alterando o valor dos campos e testando o valor guardado', () => {
  const { getByTestId } = render(<Input />);
  const inputName = getByTestId("input-name");
  expect(inputName).toHaveValue('');
  // fireEvent.change(inputName, { target: { value: 'Estudante da Trybe'}});
  userEvent.type(inputName, 'Estudante da Trybe');
  expect(inputName).toHaveValue('Estudante da Trybe');

  const inputEmail = getByTestId("input-email");
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'estudante@trybe.com');
  expect(inputEmail).toHaveValue('estudante@trybe.com')
});
