import { render, screen } from '@testing-library/react'
import Skills from '../../components/skills/skills'

describe('<Skills />', () => {
	const skills = ['HTML', 'CSS', 'JS']
	it('render correctly', () => {
		render(<Skills skills={skills} />)
		const listEle = screen.getByRole('list')
		expect(listEle).toBeInTheDocument()
	})

	it('renders a list of skills', () => {
		render(<Skills skills={skills} />)
		const listItemEle = screen.getAllByRole('listitem')
		expect(listItemEle).toHaveLength(skills.length)
	})
})
