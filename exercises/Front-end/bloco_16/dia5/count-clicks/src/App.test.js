import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import { combineReducers, createStore } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
};

describe('Testa os clicks', () => {
  it('Testa se a página tem o botão e um texto "0"', () => {
    const { queryByText } = renderWithRedux(<App />, {initialState: { clickReducer: { counter: 5}}});
    const buttonAdd = queryByText('Clique aqui');

    expect(buttonAdd).toBeDefined();
    expect(queryByText('5')).toBeInTheDocument();
  });
  it('Testa o click do botão', () => {
    renderWithRedux(<App />, {initialState: { clickReducer: { counter: 10}}} )
    const buttonAdd = screen.queryByText('Clique aqui');

    expect(screen.queryByText('10')).toBeInTheDocument();
    userEvent.click(buttonAdd);
    expect(screen.queryByText('11')).toBeInTheDocument();
  });
});
