import type { NextPage } from "next";
import { GitHub, Twitter } from "../container";
import { NAME } from "../util";

const Thanks: NextPage = () => {
  return (
    <div className="py-10 space-y-4">
      <h1 className="text-5xl font-bold">Thank you!</h1>
      <p className="opacity-80">
        I'll be in touch soon. Thanks for reaching out! In the meantime, feel
        free to checkout my <GitHub /> or <Twitter />, there's some cool stuff
        there 🚀
        <br />
        <br />– {NAME}
      </p>
    </div>
  );
};

export default Thanks;
