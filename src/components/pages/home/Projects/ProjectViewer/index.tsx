import React, { Dispatch, MouseEventHandler, SetStateAction, useRef, useState } from 'react'
import { Resource } from '../ProjectItem'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  resources: Resource[],
  setOpenedResources: Dispatch<SetStateAction<boolean>>
}

const ProjectViewer = ({ resources, setOpenedResources }: Props) => {

  const [currentSection, setCurrentSection] = useState<number>(0)

  const [displayedResource, setDisplayedResource] = useState(resources[0])
  const $resourceList = useRef<HTMLUListElement | null>(null)

  const handleClick: MouseEventHandler<HTMLDivElement> = ({ target }) => {
    const element = target as HTMLElement;
    if (element.id === "ProjectViewer") {
      setOpenedResources(false)
    }
  }

  const getMaxSection = () => {
    const defaultReturn = 0;
    if ($resourceList.current) {
      const sectionWidth = $resourceList.current.clientWidth
      const childs = $resourceList.current.childNodes.length

      // Este es la anchura del "elemento ProjectViewer__modal__list__item" más su borde
      const listElementWidth = 74

      const gap = 8
      const gapWidth = ((childs - 1) * gap)
      const childsWidth = (childs * listElementWidth)

      const fullWidth = (childsWidth + gapWidth)

      // Se le quita 1 porque la sección 1 es igual a 0;
      const maxSections = (Math.ceil(fullWidth / sectionWidth) - 1)
      return { maxSections, sectionWidth };
    }
    return { maxSections: defaultReturn, sectionWidth: 0 };
  }

  const handlePreviousSection = () => {
    const { maxSections, sectionWidth } = getMaxSection()
    const prevSection = (currentSection - 1)
    if (prevSection >= 0) {
      setCurrentSection(prevSection)
      if ($resourceList.current) {
        $resourceList.current.style.transform = `translateX(${-(prevSection * sectionWidth)}px)`
      }
    }
  }

  const handleNextSection: MouseEventHandler<HTMLButtonElement> = () => {
    const { maxSections, sectionWidth } = getMaxSection()
    const nextSection = (currentSection + 1)
    if (nextSection <= maxSections) {
      setCurrentSection(nextSection)
      if ($resourceList.current) {
        $resourceList.current.style.transform = `translateX(${-(nextSection * sectionWidth)}px)`
      }
    }
  }

  return (
    <div id="ProjectViewer" className="ProjectViewer" onClick={handleClick}>
      <div className="ProjectViewer__modal">
        <figure className="ProjectViewer__modal__image">
          <img src={displayedResource.url} alt="" />
          <p className="ProjectViewer__modal__image__description">{displayedResource.title}</p>
        </figure>
        <div className="ProjectViewer__modal__carousel">
          <button onClick={handlePreviousSection}>
            <IoIosArrowBack />
          </button>
          <div className="overflow-hidden">
            <ul ref={$resourceList} className="ProjectViewer__modal__list">
              {
                resources.map((resource, index) =>
                  <li key={index} className={`ProjectViewer__modal__list__item ${resource.url === displayedResource.url ? "!border-cyan-500" : ""}`} onClick={() => setDisplayedResource(resource)}>
                    <img src={resource.url} alt="" />
                  </li>
                )
              }
            </ul>
          </div>
          <button onClick={handleNextSection}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectViewer