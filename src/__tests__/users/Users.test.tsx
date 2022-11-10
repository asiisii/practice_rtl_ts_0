import { render, screen } from '@testing-library/react'
import Users from '../../components/users/Users'
import { server } from '../../mocks/server'
import { rest } from 'msw'

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

	it('renders error', async () => {
		server.use(
			rest.get(
				'https://jsonplaceholder.typicode.com/users',
				(req, res, ctx) => {
					return res(ctx.status(500))
				}
			)
		)
    render(<Users />)
    const err = await screen.findByText('Error fetching users')
    expect(err).toBeInTheDocument()
	})
})
