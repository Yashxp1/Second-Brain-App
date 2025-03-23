import { BackgroundLines } from '../components/ui/background-lines';
import { useNavigate } from 'react-router-dom';

export function Home() {

  const navigate = useNavigate()

  // font-family: "Caveat", cursive
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-screen">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-7xl md:text-7xl lg:text-9xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Second Brain <br />
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Never lose track of important links again! Second Brain helps you
        quickly save and organize notes or links so you can revisit them later.
        Whether it's a resource, or just a thought, keep everything in one place
        and access it whenever you need.
      </p>
   
        <button onClick={() => navigate('/signin')} className=" text-white border-2 z-1 my-8 px-3 py-2 rounded-full transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black">
          Get started
        </button>
   
    </BackgroundLines>
  );
}
