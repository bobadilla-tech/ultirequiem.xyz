import { LanyardError, useLanyard } from "use-lanyard";
import { GitHubPinnedRepo, useGitHubPinnedRepos } from "use-github";

import { SiGithub, SiTwitter } from "react-icons/si";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { COUNTRY, DISCORD_ID, NAME, USERNAME, age } from "../util";

import { ProjectCard } from "../components/project-card";
import { Technologies } from "../container/technologies";

import type { GetStaticProps, NextPage } from "next";
import type { Data, LanyardResponse } from "use-lanyard";
import { GitHub, Twitter } from "../container/socials";

interface Props {
  pinnedRepos: GitHubPinnedRepo[];
  lanyard: Data;
}

const Index: NextPage<Props> = (props) => {
  const { data: projects = props.pinnedRepos } = useGitHubPinnedRepos(USERNAME);

  const { data: lanyard } = useLanyard(DISCORD_ID, {
    fallbackData: props.lanyard,
  });

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <GitHub>
            <SiGithub className="w-7 h-7" />
            <span className="sr-only">GitHub Profile</span>
          </GitHub>

          <Twitter>
            <SiTwitter className="w-7 h-7" />
            <span className="sr-only">Twitter Profile</span>
          </Twitter>

          {lanyard && (
            <p className="inline-flex items-center space-x-2">
              <a
                target="_blank"
                href={`https://google.com/maps/search/${lanyard.kv.location}`}
                rel="noreferrer"
                className="flex items-center px-2 pr-3 text-neutral-600 dark:text-white no-underline bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-full transition-colors dark:text-opacity-50"
              >
                <span>
                  <HiOutlineLocationMarker className="inline dark:text-white" />
                  &nbsp;
                </span>

                <span className="-mb-0.5">
                  {lanyard.kv.location}
                  &nbsp;
                </span>

                <span className="block -mb-0.5 ml-1 w-[6px] h-[6px] bg-gray-600 dark:bg-white rounded-full animate-pulse" />
              </a>
            </p>
          )}
        </div>

        <h1 className="text-3xl font-bold sm:text-4xl md:text-6xl">
          Hey, I'm <span className="text-blue-700 dark:text-white">{NAME}</span>{" "}
          ✌️
        </h1>

        <p className="opacity-80">
          I'm a ~{age.toPrecision(7)} year old software engineer from {COUNTRY}.
          I'm interested in full stack web development, hackathons, and system
          programming.
        </p>
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl font-bold sm:text-3xl">What do I do? 💭</h1>
        <p className="opacity-80">
          Below are some of the more popular open source projects I've worked
          on. In total, the following repos have earned me{" "}
          {projects.reduce(
            (acc, project) => acc + parseInt(project.stars, 10),
            0
          )}{" "}
          stars! Thank you! 💖
        </p>

        <div className="grid grid-cols-1 auto-cols-max gap-1 sm:grid-cols-2 sm:gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.repo} repo={project} />
          ))}
        </div>

        <br />

        <Technologies />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pinnedReposResponse = await fetch(
    `https://gh-pinned-repos.egoist.sh/?username=${USERNAME}`
  );

  const pinnedRepos = await pinnedReposResponse.json();

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

export default Index;
