import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const header = screen.getByText(/quests to do/i);
  expect(header).toBeInTheDocument();
});

// additional interaction test
import { fireEvent } from '@testing-library/react';

test('clicking quest toggles completed class', () => {
  const quests = [
    { id: 1, title: 'Test quest', status: 'aberto' },
  ];
  const toggle = jest.fn();
  const { container } = render(
    <QuestList quests={quests} toggleQuest={toggle} />
  );
  const item = container.querySelector('.quest-item');
  expect(item).toBeInTheDocument();
  fireEvent.click(item);
  expect(toggle).toHaveBeenCalledWith(1);
});
