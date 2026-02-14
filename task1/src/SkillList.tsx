import type {Skill} from './types'

interface SkillListProps {
    skills: Skill[];
}

const SkillList = ({skills}: SkillListProps) => {
    const getColor = (level: string): string => {
    if (level === 'Expert') return 'green';
    if (level === 'Internediate') return 'orange';
    return 'gray';
  };

  return (
    <div>
        <h3>Skills</h3>
        <ul>
            {skills.map((skill) => (
                <li key={skill.id} style={{marginBottom:'5px'}}>
                    <strong>{skill.name}</strong>
                    <span style={{
                        marginLeft:'10px',
                        color: getColor(skill.level),
                        fontWeight:'bold'
                    }}>
                        ({skill.level})

                    </span>

                </li>
            ))}
        </ul>
    </div>
  )
}

export default SkillList;