import { render, screen } from '@testing-library/react';
import Async from './Async';

// describe('Async component', () => {
//   test('renders posts if request succeeds', async () => {
//     render(<Async />);

//     const listItemElements = await screen.findAllByRole(
//       'listitem',
//       {},
//       {
//         timeout: 4000,
//       }
//     );
//     expect(listItemElements).not.toHaveLength(0);
//   });
// });

//* Mock Example
describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
