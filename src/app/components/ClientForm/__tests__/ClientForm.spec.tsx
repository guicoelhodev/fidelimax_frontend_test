import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { ClientForm } from '..'
import QueryProvider from '@/utils/QueryProvider'

describe('Test ClientForm component', () => {
  it('should render correctly', () => {
    const { container, debug } = render(
    
    <QueryProvider>
      <ClientForm formPreviousData={null}/>
    </QueryProvider>)

      debug()
    expect(container).toBeInTheDocument()
  })
})