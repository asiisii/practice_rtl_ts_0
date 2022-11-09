import { render, screen } from '@testing-library/react'
import { MuiMode } from '../../components/mui/MuiMode'
import { AppProviders } from '../../components/providers/AppProviders'

describe('<MuiMode />', () => {
	it('render text correctly', () => {
		render(<MuiMode />, {
			wrapper: AppProviders,
		})
		const headingEle = screen.getByRole('heading')
		expect(headingEle).toHaveTextContent('dark mode')
	})
})
