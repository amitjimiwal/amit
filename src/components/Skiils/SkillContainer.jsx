import Skill from "./Skill"
import {skills} from '../../amit.json'
const SkillContainer = () => {
  return (
    <div className="md:max-w-4xl md:mx-auto p-3 md:p-5" id="skills">
      <div className="mb-3">
            <h1 className="text-heading  font-bold text-secondary">Tech Stack</h1>
      </div>
      <div className="ml-3">
            <h4 className="text-xl text-primary">Languages</h4>
            <div className="flex flex-wrap">
             {skills.languages.map((skill)=>(
                  <Skill icon={skill.icon} title={skill.title} key={skill.icon}/>
             ))}
            </div>

      </div>
      <div className="ml-3">
            <h4 className="text-xl text-primary">Tools and Technologies</h4>
            <div className="flex flex-wrap">
             {skills.tools.map((skill)=>(
                  <Skill icon={skill.icon} title={skill.title} key={skill.icon}/>
             ))}
            </div>
      </div>
      <div className="ml-3">
            <h4 className="text-xl text-primary">Platforms</h4>
            <div className="flex flex-wrap">
             {skills.platform.map((skill)=>(
                  <Skill icon={skill.icon} title={skill.title} key={skill.icon}/>
             ))}
            </div>
      </div>
    </div>
  )
}

export default SkillContainer
