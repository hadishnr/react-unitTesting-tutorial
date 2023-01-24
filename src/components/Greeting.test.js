import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('renders Hello World as text', () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ..nothing

    //Assert
    const helloWorldElement = screen.getByText('Hello World'); // this look for exact match or we can set exact to false ('Hello World',{exact:false})
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders good to see you if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders Changed! if the button was clicked', () => {
    //*Arrange
    render(<Greeting />);

    //*Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //*Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  test('NOT renders good to see you if the button clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
