import type { GetStaticProps, NextPage } from "next";
import { Technologies } from "../container/technologies";
import { pinnedRepos, USERNAME } from "../util";

import { ProjectCard } from "../components/project-card";
import { GitHubPinnedRepo, useGitHubPinnedRepos } from "use-github";

interface Props {
  pinnedRepos: GitHubPinnedRepo[];
}

const TechnologiesPage: NextPage<Props> = (props) => {
  const { data: projects = props.pinnedRepos } = useGitHubPinnedRepos(USERNAME);

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold sm:text-3xl">What do I do? 💭</h1>
        <p className="opacity-80">
          Below are some of the more popular open source projects I've worked
          on. In total, the following repos have earned me {projects.reduce(
            (acc, project) => acc + parseInt(project.stars, 10),
            0,
          )} stars! Thank you! 💖
        </p>

        <div className="grid grid-cols-1 auto-cols-max gap-1 sm:grid-cols-2 sm:gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.repo} repo={project} />
          ))}
        </div>
      </div>

      <Technologies />
    </>
  );
};

export default TechnologiesPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: { pinnedRepos: await pinnedRepos() },
    revalidate: 120,
  };
};
