import { render, screen } from '@testing-library/react'
import Application from '../../components/application/Application'

describe('<Application />', () => {
	it('renders correctly', () => {
		render(<Application />)

		const pageHeading = screen.getByRole('heading', {
			level: 1,
		})
		expect(pageHeading).toBeInTheDocument()

		const sectionHeading = screen.getByRole('heading', {
			level: 2,
		})
		expect(sectionHeading).toBeInTheDocument()

		const nameEle = screen.getByRole('textbox', {
			name: 'Name',
		}) //input default role is textbox
		expect(nameEle).toBeInTheDocument()

		const bioEle = screen.getByRole('textbox', {
			name: 'Bio',
		}) // name options is case sensitive, use it when there are multiple elements with same role
		expect(bioEle).toBeInTheDocument()

		const jobLocationEle = screen.getByRole('combobox') //select default role is combobox
		expect(jobLocationEle).toBeInTheDocument()

		const termsEle = screen.getByRole('checkbox')
		expect(termsEle).toBeInTheDocument()

		const submitBtnEle = screen.getByRole('button')
		expect(submitBtnEle).toBeInTheDocument()
	})
})
