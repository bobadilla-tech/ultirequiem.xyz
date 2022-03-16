import { ReactNode } from "react";
import { EMAIL, GITHUB, TWITTER } from "../util";

export interface SocialProps {
  children?: ReactNode;
}

export const Twitter = ({ children }: SocialProps) => {
  return (
    <a target="_blank" rel="noreferrer" href={TWITTER}>
      {children ?? "Twitter"}
    </a>
  );
};

export const GitHub = ({ children }: SocialProps) => {
  return (
    <a target="_blank" rel="noreferrer" href={GITHUB}>
      {children ?? "GitHub"}
    </a>
  );
};

export const Email = ({ children }: SocialProps) => {
  return <a href={`mailto:${EMAIL}`}>{children ?? EMAIL}</a>;
};
