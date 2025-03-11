import typescript from '../../assets/icons/skills/typescript.svg'
import javascript from '../../assets/icons/skills/javascript.svg'
import cSharp from '../../assets/icons/skills/c-sharp.svg'
import html from '../../assets/icons/skills/html.svg'
import css from '../../assets/icons/skills/css.svg'
import sql from '../../assets/icons/skills/sql.svg'
import angular from '../../assets/icons/skills/angular.svg'
import react from '../../assets/icons/skills/react.svg'
import dotnet from '../../assets/icons/skills/net.svg'
import node from '../../assets/icons/skills/nodejs.svg'

import './Skills.css'

function Skills() {

    return (
        <div>
            <div className='skill-container'>
                <div id='skills'>
                    <h2>Skills</h2>
                    <hr />
                    <div className='skill-row'>
                        <div className='skill-item'>
                            <p><img src={typescript} />TypeScript</p>
                            <p><img src={javascript} />JavaScript</p>
                            <p><img src={cSharp} />C#</p>
                            <p><img src={html} />HTML</p>
                            <p><img src={css} />CSS</p>
                            <p><img src={sql} />SQL</p>
                        </div>
                        <div className='skill-item'>
                            <p><img src={angular} />Angular</p>
                            <p><img src={react} />React</p>
                            <p><img src={dotnet} />.NET</p>
                            <p><img src={node} />Node.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Skills