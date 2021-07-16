import { render, fireEvent } from '@testing-library/react';
import App from './App';

// test('Verifica se tem uma label com o texto Email', () => {
//   const { getByLabelText } = render(<App />);
//   const inputEmail = getByLabelText('Email');
//   //toBeInTheDocument() é um 'custom jest matchers' fornecido pela importação la no setupTest.js
//   expect(inputEmail).toBeInTheDocument();
//   expect(inputEmail.type).toBe('email');
// });

// test('Verifica se existe um botão de enviar', () => {
//   const { getByTestId } = render(<App />);
//   const btn = getByTestId('id-send');
//   expect(btn).toBeInTheDocument();
//   expect(btn.type).toBe('button');
//   expect(btn).toHaveValue('Enviar');
// })

// test('Verificando se exite dois botões', () => {
//   const { getAllByRole } = render(<App />);
//   const btn = getAllByRole('button');
//   expect(btn.length).toBe(2);
// })

test('Verifica se o botão e o campo email estão funcionando', () => {
  const { getByTestId, getByLabelText} = render(<App />);

  const EMAIL_USER = "email@test.com";

  //Verificar o valor do input que irá receber o valor do email
  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');


  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');

  //Simular a digitação do usuário no campo de email
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  //Simular o clique no botão
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`)
})

/** Passos para realizar os testes
 * 
 * Acessar os elementos da sua tela
 * 
 * Interagir com eles (se houver necessidade)
 * 
 * Fazer os testes
 */