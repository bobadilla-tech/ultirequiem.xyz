import { profile } from "./constants";

import type { Types } from "use-lanyard";

export const pinnedRepos = async () => {
  const pinnedReposResponse = await fetch(
    `https://gh-pinned-repos.egoist.sh/?username=${profile.username}`,
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

export const lanyardData = async (): Promise<Types.Presence | null> => {
  try {
    const lanyard = await fetch(
      `https://api.lanyard.rest/v1/users/${profile.discordId}`,
    );

    const lanyardBody = (await lanyard.json()) as LanyardResponse;

    if (("error" in lanyardBody && lanyardBody.error) || !lanyardBody.data) {
      return null;
    }

    return lanyardBody.data;
  } catch {
    return null;
  }
};
