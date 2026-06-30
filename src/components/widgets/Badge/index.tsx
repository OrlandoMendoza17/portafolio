import React from 'react'
import { IconType } from 'react-icons';
import { RiTailwindCssFill, RiNextjsFill, RiSupabaseFill, RiReactjsFill } from "react-icons/ri";
import { DiMsqlServer } from "react-icons/di";
import { SiPuppeteer, SiTypescript, SiPostgresql, SiPlaywright, SiJsonwebtokens, SiTrpc } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export type BadgeType =
  | "Next.js"
  | "Tailwind CSS"
  | "Supabase"
  | "SQL Server"
  | "Puppeteer"
  | "React"
  | "TypeScript"
  | "tRPC"
  | "PostgreSQL"
  | "Playwright"
  | "JWT"
  | "Azure"

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
  {
    name: "React",
    color: "bg-[#20232a]",
    iconColor: "text-[#61dafb]",
    Icon: RiReactjsFill,
  },
  {
    name: "TypeScript",
    color: "bg-[#3178c6]",
    iconColor: "text-white",
    Icon: SiTypescript,
  },
  {
    name: "tRPC",
    color: "bg-[#398ccb]",
    iconColor: "text-white",
    Icon: SiTrpc,
  },
  {
    name: "PostgreSQL",
    color: "bg-[#336791]",
    iconColor: "text-white",
    Icon: SiPostgresql,
  },
  {
    name: "Playwright",
    color: "bg-[#2ead33]",
    iconColor: "text-white",
    Icon: SiPlaywright,
  },
  {
    name: "JWT",
    color: "bg-gray-800",
    iconColor: "text-amber-300",
    Icon: SiJsonwebtokens,
  },
  {
    name: "Azure",
    color: "bg-[#0078d4]",
    iconColor: "text-white",
    Icon: VscAzure,
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
