import Link from "next/link";

import type { ReactNode } from "react";

export function NavLink(props: {
  children: ReactNode;
  href: string;
  closeMenu?: () => void;
}) {
  return (
    <li>
      <Link href={props.href}>
        <a className={navLinkClassName} onClick={props.closeMenu}>
          {props.children}
        </a>
      </Link>
    </li>
  );
}

export const navLinkClassName =
  "block py-3 font-mono text-lg dark:hover:text-white no-underline dark:sm:hover:bg-white/10 rounded-md sm:inline-block sm:px-5 sm:text-sm sm:font-normal sm:underline sm:bg-white/0 sm:hover:bg-gray-900/5 sm:rounded-full";
