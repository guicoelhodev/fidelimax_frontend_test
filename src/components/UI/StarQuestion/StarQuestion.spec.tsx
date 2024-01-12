import { describe, expect, it, vi } from 'vitest';
import { StarQuestion } from '.';
import { render, waitFor } from '@testing-library/react';
import { TClientQuestion } from '@/types/ClientForm'
import { userEvent } from '@storybook/test';

const mockContent: TClientQuestion = {
  content: 'Some text',
  typeQuestion: 1,
  handleValue: vi.fn(),
  answerValue: 0,
  mandatory: false,
  horizontal: true,
  itens: []
};

describe('StarQuestion test component', () => {
  it('Should render correctly', () => {
    const screen = render(<StarQuestion  {...mockContent}/>)

    expect(screen.container).toBeInTheDocument()
  })

 it('Should call handleValue after mouse over the container', () => {

    const handleFn = vi.fn();
    const screen = render(<StarQuestion  {...mockContent} handleValue={handleFn}/>)

    const container = screen.getByRole('starQuestion-role');

    waitFor(() => {
      userEvent.unhover(container)
    });

    expect(handleFn).toHaveBeenCalledTimes(1);
  });

  it('Should return error, if the answer is equal to 0 and mandatory is true', () => {
    const screen = render(<StarQuestion  {...mockContent} answerValue={0} mandatory/>)
    const errorMessage = screen.getByRole('error-message');

    expect(errorMessage).toBeInTheDocument();
  });

  it('Should not return error, if the answer is equal to 0 and mandatory is false', () => {
    const screen = render(<StarQuestion  {...mockContent} answerValue={0} mandatory={false}/>)
    const errorMessage = screen.queryByRole('error-message');

    expect(errorMessage).toBeNull();
  });
})