import { useEffect, useState } from 'react'

const Users = () => {
	const [users, setUsers] = useState<string[]>([])
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/users'
				)
				const data = await response.json()
				setUsers(data.map((user: { name: string }) => user.name))
			} catch (error) {
				setError('Error fetching users')
			}
		}
		fetchData()
	}, [])

	return (
		<div>
			<h1>Users</h1>
			{error && <p>{error}</p>}
			<ul>
				{users.map(user => (
					<li key={user}>{user}</li>
				))}
			</ul>
		</div>
	)
}

export default Users
