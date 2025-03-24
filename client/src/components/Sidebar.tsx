import { TwitterIcon } from '../Icons/TwitterIcon';
import { YoutubeIcon } from '../Icons/YoutubeIcon';
import { SidebarItem } from './SidebarItem';
import { Logo } from '../Icons/Logo';

const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r border-gray-300 w-72 fixed left-0 right-0 pl-6">
      <div className="flex text-2xl pt-8 items-center">
        <div className="pr-2 text-purple-600">
          <Logo />
        </div>
        BrainLy
      </div>
      <div className="pt-8 pl-4">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
};

export default Sidebar;
