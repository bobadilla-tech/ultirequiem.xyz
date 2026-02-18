import { ReactNode } from "react";
import { profile } from "../util";

export interface SocialProps {
  children?: ReactNode;
}

export const Twitter = ({ children }: SocialProps) => {
  return (
    <a target="_blank" rel="noreferrer" href={profile.twitter}>
      {children ?? "Twitter"}
    </a>
  );
};

export const GitHub = ({ children }: SocialProps) => {
  return (
    <a target="_blank" rel="noreferrer" href={profile.github}>
      {children ?? "GitHub"}
    </a>
  );
};

export const Email = ({ children }: SocialProps) => {
  return <a href={`mailto:${profile.email}`}>{children ?? profile.email}</a>;
};
