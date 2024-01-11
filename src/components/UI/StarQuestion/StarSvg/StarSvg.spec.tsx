import { describe, expect, it, vi } from 'vitest'
import { StarSvg } from '.'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';


describe('Test StarSvg component', () => {
  it('should render correctly', () => {
    const { container } = render(<StarSvg onMouseEnter={vi.fn}  fill="#ffae00" starNumber={1} />)
    expect(container).toBeInTheDocument()
  });

  it('should call onMouseEnter when mouse enter on star', async() => {
    const onMouseEnter = vi.fn()
    const { getByRole }= render(<StarSvg onMouseEnter={onMouseEnter}  fill="#ffae00" starNumber={1} />)
    const star = getByRole('img')

    await waitFor(() =>{
      userEvent.hover(star)
    })

    expect(onMouseEnter).toHaveBeenCalledTimes(1)
  });
})