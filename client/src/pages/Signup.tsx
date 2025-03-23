import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
      <div className="flex flex-col justify-center items-center rounded-xl">
        <h1 className="text-4xl font-bold my-6">Get Started</h1>
        <div className="flex flex-col justify-center items-center m-4">
          <input type="text" placeholder="Username"  className="bg-gray-800 px-3 py-1 rounded-lg my-4"/>
          <input type="text" placeholder="Password" className="bg-gray-800 px-3 py-1 rounded-lg"/>
        </div>
        <button onClick={() => navigate('/dashboard')} className=" text-white border-2 z-1 my-8 px-5 py-2 rounded-full transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black">
          Signup
        </button>
        <span>Already have an account? <button onClick={() => navigate('/signin')} className="text-white font-bold py-4" >Signin</button></span>
      </div>
    </div>
  );
};

export default Signup;
