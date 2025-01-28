import React, { useState } from 'react'
import Badge, { BadgeType } from '@/components/widgets/Badge'
import { TbCode } from 'react-icons/tb'
import { TbBrandGithub } from "react-icons/tb";
import { LuLink } from "react-icons/lu";
import { FaImages } from "react-icons/fa";
import ProjectViewer from '../ProjectViewer';

export type Resource = {
  title: string;
  type: string;
  url: string;
}

export type Project = {
  name: string;
  description: string;
  cover: string;
  link: string | null;
  repo: string | null;
  technologies: BadgeType[]
  resources: Resource[] | null;
}

type Props = {
  project: Project,
}

const ProjectItem = ({project}: Props) => {
  
  const { name, description, cover, repo, link, resources } = project
  
  const [openedResources, setOpenedResources] = useState<boolean>(false)
  
  return (
    <article className="ProjectItem">
      <div className="rounded-[1.2rem] overflow-clip self-start">
        <img className="transition hover:scale-110" src={cover} alt="" />
      </div>
      <div>
        <h3 className="mb-2">{name}</h3>
        <div className="grid gap-4">
          <ul className="flex gap-2 items-start flex-wrap">
            {
              project.technologies.map((techname)=> 
                <li>
                  <Badge name={techname} />
                </li>
              )
            }
            </ul>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          <div className="flex gap-4">
            {
              repo &&
              <a href={repo} className="ProjectItem__button">
                <TbBrandGithub size={20} />
                Code
              </a>
            }
            {
              link ?
                <a href={link} className="ProjectItem__button">
                  <LuLink size={20} /> Ver proyecto
                </a>
                :
                <button className="ProjectItem__button" onClick={() => setOpenedResources(true)}>
                  <FaImages size={20} /> Ver proyecto
                </button>
            }
          </div>
        </div>
      </div>
      {
        openedResources && resources &&
        <ProjectViewer 
          resources={resources}
          setOpenedResources={setOpenedResources}
        />
      }
    </article>
  )
}

export default ProjectItem