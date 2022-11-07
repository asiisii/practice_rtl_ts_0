import { useState } from 'react'
import { SkillsProps } from './skills.types'

const Skills = (props: SkillsProps) => {
	const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)
	return (
		<div>
			<ul>
				{skills.map(skill => {
					return <li key={skill}>{skill}</li>
				})}
			</ul>
      {isLoggedIn ? (
        <button>Start learning</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )
      }
		</div>
	)
}

export default Skills
