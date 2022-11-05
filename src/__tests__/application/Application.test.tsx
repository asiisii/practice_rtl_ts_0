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

    const paraEle = screen.getByText('All fields are mandatory')
    expect(paraEle).toBeInTheDocument()

    const paraEle2 = screen.getByText('All fields are mandatory', {
      selector: 'p'
    })
		expect(paraEle2).toBeInTheDocument()

    const imgEle = screen.getAllByAltText('random source')
    expect(imgEle).toBeInTheDocument()

		const nameEle = screen.getByRole('textbox', {
			name: 'Name',
		}) //input default role is textbox
		expect(nameEle).toBeInTheDocument()

		const nameEle2 = screen.getByLabelText('Name', {
			selector: 'input',
		}) //use selector options for case when there are multiple label with same text but diff element
		expect(nameEle2).toBeInTheDocument()

		const nameEle3 = screen.getByPlaceholderText('fullname')
		expect(nameEle3).toBeInTheDocument()

    const nameEle4 = screen.getByDisplayValue('asiisii')
		expect(nameEle4).toBeInTheDocument()

		const bioEle = screen.getByRole('textbox', {
			name: 'Bio',
		}) // name options is case sensitive, use it when there are multiple elements with same role
		expect(bioEle).toBeInTheDocument()

		const jobLocationEle = screen.getByRole('combobox') //select default role is combobox
		expect(jobLocationEle).toBeInTheDocument()

		const termsEle = screen.getByRole('checkbox')
		expect(termsEle).toBeInTheDocument()

		const termsEle2 = screen.getByLabelText(
			'I agree to the terms and conditions'
		)
		expect(termsEle2).toBeInTheDocument()

		const submitBtnEle = screen.getByRole('button')
		expect(submitBtnEle).toBeInTheDocument()
	})
})
