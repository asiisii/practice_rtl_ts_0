import { renderHook } from '@testing-library/react'
import useCounter from '../../../components/hooks/use-counter/useCounter'

describe('useCounter', () => {
	it('should render the initial count', () => {
    // because hook can only be called from the body of a functional component we can't just render(useCounter), plus it doesnt return a jsx
    // instead we have to use renderHook from the library
		const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
	})

  it('should accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10
      }
    })
    expect(result.current.count).toBe(10)
  })
})
