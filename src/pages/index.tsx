import { useLanyard } from "use-lanyard";
import { SiGithub, SiTwitter } from "react-icons/si";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  DISCORD_ID,
  lanyardData,
  NAME,
  age,
  timeToFinishHighSchool,
} from "../util";

import type { GetStaticProps, NextPage } from "next";
import type { Data } from "use-lanyard";
import { GitHub, Twitter } from "../container/socials";

interface Props {
  lanyard: Data;
}

const OneHundredDays = ({
  challenge,
  link,
}: {
  challenge: string;
  link?: string;
}) => (
  <a
    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
    href={
      link ??
      `https://twitter.com/search?q=(from%3Aultirequiem)%20%23100DaysOf${challenge}`
    }
  >
    {`#100DaysOf${challenge}`}
  </a>
);

const RunningChallenge = () => <OneHundredDays challenge="Running" />;
const CodingChallenge = () => <OneHundredDays challenge="Code" />;
const DrawingChallenge = () => (
  <OneHundredDays challenge="Drawing" link="https://instagram.com/ulti.draws" />
);

const Index: NextPage<Props> = (props) => {
  const { data: lanyard } = useLanyard(DISCORD_ID, {
    fallbackData: props.lanyard,
  });

  return (
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
        👋
      </h1>

      <p className="opacity-80">
        I'm a ~{age.toFixed(7)} <b>Software Engineer</b> and <b>Writter</b>, who
        is passionate about building products that improve and connect lives 🚀
      </p>

      <p className="opacity-80">
        I started studying <b>Web Development</b> on my own when I entered high
        school, I liked the field a lot and little by little I expanded my
        knowledge to different areas of technology such as <b>IA</b>,{" "}
        <b>Blockchain</b>, and <b>System programming</b>.
      </p>

      <p className="opacity-80">
        In the search to commercialize my knowledge I discovered the exciting
        world of <b>Marketing</b>, <b>Selling</b> & <b>Writing</b> online.
      </p>

      <p className="opacity-80">
        I'm focused on building an audience, contributing to open source, and
        participating in hackathons ✨
      </p>

      <p className="opacity-80">
        I'm also participating in <RunningChallenge /> and <CodingChallenge />{" "}
        on Twitter and at <DrawingChallenge /> on Instagram.
      </p>

      <p className="opacity-80">
        After completing my high school,{" "}
        <b> in {timeToFinishHighSchool} days</b>, I plan to study Computer
        Science, so I'm preparing for that as well 🧑‍🎓
      </p>

      <br />

      <a className="text-3xl text-blue-600 underline" href="/contact">
        Let's connect!
      </a>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: { lanyard: await lanyardData() },
    revalidate: 120,
  };
};

export default Index;
