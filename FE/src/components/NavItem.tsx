import { HoverBorderGradient } from '../components/ui/hover-border-gradient';
import ShareIcon from '../components/Icons/ShareIcon';
import PlusIcon from '../components/Icons/PlusIcon';



const NavItem = () => {
  return (
    <div className="flex  justify-end p-5">
      <div className="flex gap-3 ">
        <div className=" flex  text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <div className="flex items-center gap-2">
              <PlusIcon /> Add Content
            </div>
          </HoverBorderGradient>
        </div>
        <div className="flex  text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <div className="flex items-center gap-2">
              {' '}
              <ShareIcon /> Share Brain
            </div>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
