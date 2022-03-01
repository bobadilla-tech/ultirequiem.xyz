import type { GetStaticProps, NextPage } from "next";

import { age, DISCORD_ID } from "utils";

import type { Data as LanyardData, LanyardResponse } from "use-lanyard";

import { LanyardError } from "use-lanyard";
import { PinnedRepo, useGitHubPinnedRepos } from "hooks/github";
import { ProjectCard } from "components/ui/project-card";

interface Props {
  pinnedRepos: PinnedRepo[];
  lanyard: LanyardData;
}

const Home: NextPage<Props> = (props) => {
  const { data: projects = props.pinnedRepos } =
    useGitHubPinnedRepos("ultirequiem");

  return (
    <div>
      <p className="underline">Work in progress</p>
      <p>Go to my blog while in work on this</p>
      <p>https://blog.ultirequiem.com/</p>

      <p>I'm a ~{age.toPrecision(10)} years old software engineer from Peru</p>

      <div className="grid grid-cols-1 auto-cols-max gap-1 sm:grid-cols-2 sm:gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.repo} repo={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async function () {
  const pinnedRepos = await fetch(
    "https://gh-pinned-repos.egoist.sh/?username=ultirequiem"
  ).then(async (response) => response.json() as Promise<PinnedRepo[]>);

  const lanyard = await fetch(
    `https://api.lanyard.rest/v1/users/${DISCORD_ID}`
  );

  const lanyardBody = (await lanyard.json()) as LanyardResponse;

  if ("error" in lanyardBody) {
    throw new LanyardError(lanyard.status, lanyardBody.error.message);
  }

  return {
    props: { pinnedRepos, lanyard: lanyardBody.data },
    revalidate: 120,
  };
};
