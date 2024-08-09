import React from 'react'
import { IconType } from 'react-icons';
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

type BadgeType = "Next.js" | "Tailwind CSS"

type BadgeProps = {
  name: BadgeType;
  color: string;
  iconColor: string;
  Icon: IconType;
}

type Props = {
  name: BadgeType,
}

const types: BadgeProps[] = [
  {
    name: "Next.js",
    color: "bg-black",
    iconColor: "",
    Icon: RiNextjsFill,
  },
  {
    name: "Tailwind CSS",
    color: "bg-[#003159]",
    iconColor: "text-sky-400",
    Icon: RiTailwindCssFill,
  },
]

const Badge = ({ name }: Props) => {
  const type = types.find((type) => type.name === name) as BadgeProps
  return (
    <span className={`Badge ${type.color}`}>
      <type.Icon className={type.iconColor} />
      {type.name}
    </span>
  )
}

export default Badge