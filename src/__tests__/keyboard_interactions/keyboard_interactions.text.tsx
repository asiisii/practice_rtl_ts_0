import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('keyboard interactions', () => {
	describe('utility api', () => {
		//type()
		it('type into an input field', async () => {
			render(<input defaultValue='Hello,' />)
			const input = screen.getByRole('textbox')

			await userEvent.type(input, ' World!')

			expect(input).toHaveValue('Hello, World!')
		})

		//clear()
		it('clear', async () => {
			render(<textarea defaultValue='hello world!' />)
			await userEvent.clear(screen.getByRole('textbox'))
			expect(screen.getByRole('textbox')).toHaveValue('')
		})
		//selectOptions
		it('selectOptions', async () => {
			const user = userEvent.setup()
			render(
				<select multiple>
					<option value='1'>A</option>
					<option value='2'>B</option>
					<option value='3'>C</option>
				</select>
			)
			await user.selectOptions(screen.getByRole('listbox'), ['1', 'C'])

			expect(screen.getByRole('option', { name: 'A' }).selected).toBe(true)
			expect(screen.getByRole('option', { name: 'B' }).selected).toBe(false)
			expect(screen.getByRole('option', { name: 'C' }).selected).toBe(true)
		})
		//deselectOptions()
		it('deselectOptions', async () => {
			render(
				<select multiple defaultValue={['2']}>
					<option value='1'>A</option>
					<option value='2'>B</option>
					<option value='3'>C</option>
				</select>
			)

			await userEvent.deselectOptions(screen.getByRole('listbox'), '2')

			expect(screen.getByText('B').selected).toBe(false)
		})

		//upload()
		it('upload file', async () => {
			render(
				<div>
					<label htmlFor='file-uploader'>Upload file:</label>
					<input id='file-uploader' type='file' />
				</div>
			)
			const file = new File(['hello'], 'hello.png', { type: 'image/png' })
			const input = screen.getByLabelText(/upload file/i)

			await userEvent.upload(input, file)

			expect(input.files[0]).toBe(file)
			expect(input.files.item(0)).toBe(file)
			expect(input.files).toHaveLength(1)
		})

		it('upload multiple files', async () => {
			render(
				<div>
					<label htmlFor='file-uploader'>Upload file:</label>
					<input id='file-uploader' type='file' multiple />
				</div>
			)
			const files = [
				new File(['hello'], 'hello.png', { type: 'image/png' }),
				new File(['there'], 'there.png', { type: 'image/png' }),
			]
			const input = screen.getByLabelText(/upload file/i)

			await userEvent.upload(input, files)

			expect(input.files).toHaveLength(2)
			expect(input.files[0]).toBe(files[0])
			expect(input.files[1]).toBe(files[1])
		})
	})

	describe('clipboard api', () => {
    //copy()

    //cut()

    //paste()
  })

  describe('keyobard api', () => {
    // keyboard('foo')  //translates to: f, o, o
    // keyboard('{Shift>}A{/Shift'}) //translates to: Shift(down), A, Shift(up)
  })
})
