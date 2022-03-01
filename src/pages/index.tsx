import type { NextPage } from "next";

import { age } from "utils";

import { Song } from "components";

const Home: NextPage = () => {
  return (
    <div>
      <p>Work in progress</p>
      <p>Go to my blog while in work on this</p>
      <p>https://blog.ultirequiem.com/</p>

      <p>I'm a ~{age.toPrecision(10)} Year old software engineer from Peru</p>
      <Song />
    </div>
  );
};

export default Home;
