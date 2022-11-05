import React from 'react'

const Application = () => {
	return (
		<>
			<h1>Job Application Form</h1>
			<h2>Section 1</h2>
			<form>
				<div>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' placeholder='fullname' />
				</div>
				<div>
					<label htmlFor='bio'>Bio</label>
					<textarea name='bio' id='bio' />
				</div>
				<div>
					<label htmlFor='job-location'>Job location</label>
					<select id='job-location'>
						<option value=''>Select a country</option>
						<option value='US'>US</option>
						<option value='Nepal'>Nepal</option>
						<option value='China'>China</option>
						<option value='Japan'>Japan</option>
						<option value='Korea'>Korea</option>
					</select>
				</div>
				<div>
					<label>
						<input type='checkbox' id='terms' />I agree to the terms and
						conditions
					</label>
				</div>
				<button>Submit</button>
			</form>
		</>
	)
}

export default Application
