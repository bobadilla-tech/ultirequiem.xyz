/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/UltiRequiem",
        permanent: true,
      },
      {
        source: "/reddit",
        destination: "https://reddit.com/u/UltiRequiem",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/UltiRequiem",
        permanent: true,
      },

      {
        source: "/spotify",
        destination: "https://open.spotify.com/user/12168426446",
        permanent: true,
      },
      {
        source: "/twitch",
        destination: "https://twitch.tv/UltiRequiem",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/XW8mK5yu5R",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/UltiRequiem",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/ulti.requiem",
        permanent: true,
      },
      {
        source: "/10",
        destination: "https://youtu.be/G5HcvgepK-I",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
