import React from 'react'
import { IconType } from 'react-icons';
import { RiTailwindCssFill, RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { DiMsqlServer } from "react-icons/di";
import { SiPuppeteer } from "react-icons/si";

export type BadgeType = "Next.js" | "Tailwind CSS" | "Supabase" | "SQL Server" | "Puppeteer"

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
  {
    name: "Supabase",
    color: "bg-[#171717]",
    iconColor: "text-[#30af76]",
    Icon: RiSupabaseFill,
  },
  {
    name: "SQL Server",
    color: "bg-gray-800",
    iconColor: "text-white",
    Icon: DiMsqlServer,
  },
  {
    name: "Puppeteer",
    color: "bg-[#005f47]",
    iconColor: "text-white",
    Icon: SiPuppeteer,
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