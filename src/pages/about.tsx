import Image from "next/image";

import type { NextPage } from "next";

import GitHubContributions from "../../public/github_contributions.png";
import PlatziDiploma from "../../public/me_platzi.jpg";
import { COUNTRY } from "../util";

const AboutPage: NextPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="block text-3xl font-bold sm:text-4xl md:text-6xl">
        About
      </h1>
      <div className="text-gray-900/30 hover:text-gray-900 dark:text-white/20 dark:hover:text-white/100 transition-all">
        <Image
          alt="GitHub Contributions Screenshot"
          src={PlatziDiploma}
          width={8000}
          height={5000}
          placeholder="blur"
          className="block object-cover rounded-xl border-2 border-white"
        />
        <span className="text-sm not-sr-only">
          Me after getting my first{" "}
          <a
            className="no-underline text-blue-900"
            href="https://www.linkedin.com/in/ultirequiem/overlay/1635485414608/single-media-viewer/"
          >
            Software Related Diploma
          </a>
        </span>
      </div>
      <div className="space-y-4">
        <p>
          Hey! I'm Eliaz, a full-stack engineer from {COUNTRY}. I care about
          performant, and accessible code.
        </p>

        <p>
          I'm a high fan of making, reading, and contributing to open source,
          you can{" "}
          <a href="https://www.patreon.com/UltiRequiem">
            sponsor me on Patreon
          </a>{" "}
          😆 . In there I usually make posts of my latest work and libraries I'm
          maintaining, occasionally, personal stuff too.
        </p>

        <p>
          I have been programming since I was 14 year old, in the final days of
          2020! I've learned a lot about core programming principles, design
          patterns and systems architecture.
        </p>

        <p>
          Recently I have been working a lot on my Net Working/Online presence,
          mostly only Twitter, so if you want to know what I'm doing check it
          out! <a href="https://twitter.com/UltiRequiem">@UltiRequiem</a> 🚀
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
