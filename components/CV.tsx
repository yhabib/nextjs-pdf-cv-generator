import * as Icons from '../assets/icons';
import { education, experience } from '../data/cv';

export const CV = (): JSX.Element => (
  <div id="resume" className="space-y-6 font-mono">
    <div id="intro" className="flex justify-between items-end">
      <div className="space-y-2">
        <h1 className="text-4xl mt-4 tracking-wide font-sans">
          <span className="text-5xl">J</span>ane <span className="text-5xl">D</span>oe
        </h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.yusefhabib.com"
          className="pl-2 border-b border-b-red-300"
        >
          https://www.example.com
        </a>
      </div>
      <ul className="flex flex-col items-end space-y-1">
        <li className="flex justify-end items-center space-x-2">
          <a target="_blank" rel="noopener noreferrer" href="mailto:email@example.com">
            email@example.com
          </a>
          <span className="text-red-500">{Icons.Mail()}</span>
        </li>
        <li className="flex justify-end items-center space-x-2">
          <a target="_blank" rel="noopener noreferrer">
            github.com/[username]
          </a>
          <span className="text-red-500">{Icons.GitHub()}</span>
        </li>
        <li className="flex justify-end items-center space-x-2">
          <a target="_blank" rel="noopener noreferrer">
            linkedin.com/in/[username]
          </a>
          <span className="text-red-500">{Icons.LinkedIn()}</span>
        </li>
      </ul>
    </div>

    <div id="skills">
      <h2 className="text-xl uppercase tracking-wider mt-4 font-sans border-b-2 border-red-300 mb-2">
        <span className="text-3xl">S</span>kills
      </h2>
      <div className="pl-2">
        <div className="space-y-2">
          <div>
            <span>
              <span className="font-semibold">Programming:</span> JavaScript<sup>n</sup>, Golang
              <sup>a</sup>, Kotlin<sup>m</sup>, Python<sup>b</sup>, C<sup>b</sup>, HTML
              <sup>n</sup>, CSS<sup>n</sup>
            </span>
          </div>
          <div>
            <span>
              <span className="font-semibold">Platforms:</span> Typescript, NodeJS(+ Express, Nest),
              React(+Next, Native), Spring, GraphQL, Apollo, SQL(Postgres), NoSQL(MongoDB), Redis
            </span>
          </div>
          <div>
            <span>
              <span className="font-semibold">Languages:</span> Spanish<sup>n</sup>, English
              <sup>a</sup>
            </span>
          </div>
        </div>
        <div className="text-xs mt-2">
          <span>
            ** <span className="font-semibold">n</span>: native, ,{' '}
            <span className="font-semibold">a</span>: advance,{' '}
            <span className="font-semibold">m</span>: medium,{' '}
            <span className="font-semibold">b</span>: basic
          </span>
        </div>
      </div>
    </div>

    <div id="experience">
      <h2 className="text-xl uppercase tracking-wider mt-4 font-sans border-b-2 border-red-300 mb-2">
        <span className="text-3xl">E</span>xperience
      </h2>
      {experience.map((exp) => (
        <div className="pl-2 space-y-2" key="">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>
                <span className="font-semibold">
                  <a target="_blank" rel="noopener noreferrer" href={exp.company.url}>
                    {exp.company.label}
                  </a>
                  ,{' '}
                </span>
                <span className="italic">{exp.role} </span> | {exp.location}
              </span>
              <span>{exp.range}</span>
            </div>
            <div>
              <ul className="list-disc pl-8">
                {exp.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div id="education">
      <h2 className="text-xl uppercase tracking-wider mt-4 font-sans border-b-2 border-red-300 mb-2">
        <span className="text-3xl">E</span>ducation
      </h2>
      {education.map((ed) => (
        <div className="pl-2 space-y-2" key={ed.range}>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">
                <a target="_blank" rel="noopener noreferrer" href={ed.school.url}>
                  {ed.school.label}
                </a>
              </span>
              <span>{ed.range}</span>
            </div>
            <span className="italic">{ed.degree}</span>
            <p>{ed.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
