import { LanyardError, LanyardResponse } from "use-lanyard";
import { DISCORD_ID, USERNAME } from "./constants";

export const pinnedRepos = async () => {
  const pinnedReposResponse = await fetch(
    `https://gh-pinned-repos.egoist.sh/?username=${USERNAME}`,
  );

  return pinnedReposResponse.json();
};

export const lanyardData = async () => {
  const lanyard = await fetch(
    `https://api.lanyard.rest/v1/users/${DISCORD_ID}`,
  );

  const lanyardBody = (await lanyard.json()) as LanyardResponse;

  if ("error" in lanyardBody) {
    throw new LanyardError(lanyard.status, lanyardBody.error.message);
  }

  return lanyardBody.data;
};
