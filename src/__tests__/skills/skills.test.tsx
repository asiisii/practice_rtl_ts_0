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

  it('renders login button', () => {
    render(<Skills skills={skills} />)
    const btnEle = screen.getByRole('button', {
      name: 'Login'
    })
    expect(btnEle).toBeInTheDocument()
  })

  it('doesnt renders the Start learning button', () => {
		render(<Skills skills={skills} />)
		const btnEle = screen.queryByRole('button', {
			name: 'Start learning',
		})
		expect(btnEle).not.toBeInTheDocument()
	})
})
