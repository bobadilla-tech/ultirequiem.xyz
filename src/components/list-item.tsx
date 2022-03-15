import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export interface ListItemProps {
  text: ReactNode;
  icon: IconType;
  href?: string;
}

export function ListItem({ text, icon, href }: ListItemProps) {
  return (
    <a href={href} className="no-underline" target="_blank" rel="noreferrer">
      <li className="flex space-x-2">
        <span>{icon({ className: "h-6 w-6" })}</span>
        <span>{text}</span>
      </li>
    </a>
  );
}
