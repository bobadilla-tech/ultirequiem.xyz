import { DISCORD_ID, USERNAME } from "./constants";

import type { Types } from "use-lanyard";

export const pinnedRepos = async () => {
  const pinnedReposResponse = await fetch(
    `https://gh-pinned-repos.egoist.sh/?username=${USERNAME}`,
  );

  return pinnedReposResponse.json();
};

interface LanyardResponse {
  success: boolean;
  data?: Types.Presence;
  error?: {
    message: string;
    code: string;
  };
}

export const lanyardData = async (): Promise<Types.Presence> => {
  const lanyard = await fetch(
    `https://api.lanyard.rest/v1/users/${DISCORD_ID}`,
  );

  const lanyardBody = (await lanyard.json()) as LanyardResponse;

  if ("error" in lanyardBody && lanyardBody.error) {
    throw new Error(lanyardBody.error.message);
  }

  if (!lanyardBody.data) {
    throw new Error("No data returned from Lanyard API");
  }

  return lanyardBody.data;
};
