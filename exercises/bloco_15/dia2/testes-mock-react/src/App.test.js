import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('Verifica que , quando recebo uma piada, mostro ela na tela', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards... are remarkable',
    status: 200,
  }

  // const response = { json: jest.fn().mockImplementation(() => Promise.resolve(joke))}
  // const response = { json: jest.fn(() => Promise.resolve(joke))}
  // const response = { json: jest.fn().mockResolvedValue(joke)}

  // o fetch resolve uma promise que retorna um objeto sobre o qual chamamos um json que resolve os dados da piada
  // global.fetch = jest.fn().mockResolvedValue(response);

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke)
  })

  const { findByText } = render(<App />);
  await findByText('Whiteboards... are remarkable');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
});