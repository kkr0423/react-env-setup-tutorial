import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

test('TextInput Component test', async () => {
  render(<TextInput />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();

  const user = userEvent.setup();
  await user.type(inputElement, 'Hello World');
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});
