import { render, screen } from '../../TestUtils'
import { MuiMode } from '../../components/mui/MuiMode'

describe('<MuiMode />', () => {
	it('render text correctly', () => {
		render(<MuiMode />)
		const headingEle = screen.getByRole('heading')
		expect(headingEle).toHaveTextContent('dark mode')
	})
})
