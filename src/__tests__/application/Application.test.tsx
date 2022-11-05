import { render, screen } from '@testing-library/react'
import Application from '../../components/application/Application'

describe('<Application />', () => {
	it('renders correctly', () => {
		render(<Application />)
		const nameEle = screen.getByRole('textbox') //input default role is textbox
		expect(nameEle).toBeInTheDocument()

		const jobLocationEle = screen.getByRole('combobox') //select default role is combobox
		expect(jobLocationEle).toBeInTheDocument()

    const termsEle = screen.getByRole('checkbox')
    expect(termsEle).toBeInTheDocument()

    const submitBtnEle = screen.getByRole('button')
    expect(submitBtnEle).toBeInTheDocument()
	})
})
