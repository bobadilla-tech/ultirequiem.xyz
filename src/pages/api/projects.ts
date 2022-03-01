import { api } from "server";

import { projects } from "utils";

import type { Project } from "utils";

export default api({
  async GET(): Promise<Project[]> {
    return projects;
  },
});
