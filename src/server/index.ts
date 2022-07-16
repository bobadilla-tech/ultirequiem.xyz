import { createAPI } from "nextkit";

export const api = createAPI({
  async onError(req, res, error) {
    console.warn(error);

    return {
      status: 500,
      message: error.message,
    };
  },

  async getContext() {
    return {};
  },
});

export const DISCORD_WEBHOOK =
  "https://discord.com/api/webhooks/953449535349346394/A5WBTArPhIta4RYkd3rYu0hzR3fpTZ5OYZvx5veF3i_y0FZ-s86YiCckzUxiSGZx7L3t";
