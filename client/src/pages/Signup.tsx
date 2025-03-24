import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useRef } from 'react';

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white border min-w-48 p-8 rounded-xl">
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button onClick={signup} loading={false} variant="primary" text="Signup" fullwidth={true} />
        </div>
      </div>
    </div>
  );
}
