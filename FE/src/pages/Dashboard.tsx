'use client';

import { Spotlight } from '../components/ui/spotlight-new';
import NavItem from '../components/NavItem';

export function Dashboard() {
  return (
    <div className="h-screen w-full flex justify-end bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />

      <div className="">
        <NavItem />
      </div>
    </div>
  );
}
