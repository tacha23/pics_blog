import Image from "next/image";

import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

import Navbar2 from "./navbar2";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <a
            href="/dashboard"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-5xl font-mono font-semibold`}>
              WELCOME
            </h2>
            <h2  className={`mb-3 text-2xl`}>
              Let's begin
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

      </main>
    </>
  );
}
