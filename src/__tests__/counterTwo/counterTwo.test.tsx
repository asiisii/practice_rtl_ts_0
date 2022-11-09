import { render, screen } from '@testing-library/react'
import CounterTwo from '../../components/counterTwo/CounterTwo'
import userEvent from '@testing-library/user-event'

describe('<CounterTwo />', () => {
	it('renders correctly', () => {
		render(<CounterTwo count={0} />)
		const txtEle = screen.getByText('Counter Two')
		expect(txtEle).toBeInTheDocument()
	})

	it('handlers are called', async () => {
		const incrementHandler = jest.fn()
		const decrementHandler = jest.fn()
		render(
			<CounterTwo
				count={0}
				handleDecrement={decrementHandler}
				handleIncrement={incrementHandler}
			/>
		)
		const incrementBtn = screen.getByRole('button', { name: 'Increment' })
    const decrementBtn = screen.getByRole('button', { name: 'Decrement' })
    
    const user = userEvent.setup()
    await user.click(incrementBtn)
    await user.click(decrementBtn)

    expect(incrementHandler).toHaveBeenCalled()
    expect(incrementHandler).toHaveBeenCalledTimes(1)

    expect(decrementHandler).toHaveBeenCalled()
    expect(decrementHandler).toHaveBeenCalledTimes(1)
	})
})
