import { SkillsProps } from './skills.types'

const Skills = (props: SkillsProps) => {
	const { skills } = props
	return (
		<div>
			<ul>
				{skills.map(skill => {
					return <li key={skill}>{skill}</li>
				})}
			</ul>
		</div>
	)
}

export default Skills
