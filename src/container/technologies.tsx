import {
  SiArchlinux,
  SiBabel,
  SiDeno,
  SiDocker,
  SiExpress,
  SiFastify,
  SiGatsby,
  SiGit,
  SiGithub,
  SiGo,
  SiHeroku,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNeovim,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPnpm,
  SiPostcss,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRuby,
  SiRust,
  SiStyledcomponents,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebassembly,
  SiWebpack,
} from "react-icons/si";
import { ListItem } from "../components/list-item";

export function Technologies() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold sm:text-3xl">Technologies 💻</h1>
      <p className="opacity-80">
        I use a wide range of tools depending on the problem 🚀
      </p>
      <h3 className="text-lg font-bold">Frontend</h3>
      <ul className="grid grid-cols-3 gap-7 sm:grid-cols-4">
        <ListItem icon={SiReact} text="React" />
        <ListItem icon={SiGatsby} text="Gatsby" />
        <ListItem icon={SiNextdotjs} text="Next.js" />

        <ListItem icon={SiTailwindcss} text="Tailwind CSS" />
        <ListItem icon={SiStyledcomponents} text="Styled Components" />

        <ListItem icon={SiSvelte} text="Svelte" />
      </ul>
      <br />
      Nowadays I almost always prefer to use <b>TypeScript</b> over JavaScript.
      <br />
      <h3 className="text-lg font-bold">Backend</h3>
      <ul className="grid grid-cols-3 gap-7 sm:grid-cols-4">
        <ListItem icon={SiNodedotjs} text="Node.js" />
        <ListItem icon={SiDeno} text="Deno" />
        <ListItem icon={SiGo} text="Go" />
        <ListItem icon={SiRust} text="Rust" />
        <ListItem icon={SiPython} text="Python" />
        <ListItem icon={SiRuby} text="Ruby" />
      </ul>
      <br />
      <h3 className="text-lg font-bold">Databases</h3>
      <ul className="grid grid-cols-3 gap-7 sm:grid-cols-4">
        <ListItem icon={SiPostgresql} text="Postgres" />
        <ListItem icon={SiMongodb} text="MongoDB" />
        <ListItem icon={SiMysql} text="MySQL" />
      </ul>
      <h3 className="text-lg font-bold">Other</h3>
      <ul className="grid grid-cols-3 gap-7 sm:grid-cols-4">
        <ListItem icon={SiDocker} text="Docker" />
        <ListItem icon={SiGit} text="Git" />
        <ListItem icon={SiNeovim} text="NeoVim" />
        <ListItem icon={SiPnpm} text="PNPM" />
        <ListItem icon={SiArchlinux} text="ArchLinux" />
        <ListItem icon={SiNetlify} text="Netlify" />
        <ListItem icon={SiHeroku} text="Heroku" />
        <ListItem
          icon={SiGithub}
          text="GitHub"
          href="https://github.com/UltiRequiem"
        />
      </ul>
    </div>
  );
}
