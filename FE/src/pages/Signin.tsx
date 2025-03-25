'use client';
import React from 'react';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { cn } from '../lib/utils';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../store/api';
import axios from 'axios';

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(`${BACKEND_URL}/auth/signin`, {
      username,
      password,
    });
    alert('You have signed IN');
    const jwt = response.data.token;
    localStorage.setItem('token', jwt);
    navigate('/dashboard');
  }

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Welcome to Second Brain
        </h2>

        <div className="my-8">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="">Username</Label>
            <Input ref={usernameRef} placeholder="johndoe" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="">Password</Label>
            <Input ref={passwordRef} type="text" placeholder="••••••••" />
          </LabelInputContainer>

          <button
            onClick={signin}
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          >
            Sign in &rarr;
            <BottomGradient />
          </button>
          <br />

          <div className="flex justify-center items-center gap-4">
            <h1 className="text-white">Already have an Account?</h1>
            <button
              onClick={() => navigate('/dashboard')}
              className="group/btn relative block h-10 w-[30%] rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
            >
              Sign in &rarr;
              <BottomGradient />
            </button>
          </div>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  );
};
