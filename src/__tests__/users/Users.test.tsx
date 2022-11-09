import { render, screen } from '@testing-library/react'
import Users from '../../components/users/Users'

// use mock service worker
describe('<Users />', () => {
	it('renders correctly', () => {
		render(<Users />)
		const txtEle = screen.getByText('Users')
		expect(txtEle).toBeInTheDocument()
	})

  it('renders list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(3)
  })
})
