import CrossIcon from '../Icons/CrossIcon';
import { Button } from './Button';
import { Input } from './Input';
import { useRef } from 'react';

export const CreateContentModal = ({ open, onClose }) => {
  
  const titleRef = useRef<HTMLInputElement>(null)
  const linkRef = useRef<HTMLInputElement>(null)

  async function addContent() {
    const title = titleRef.current?.value
    const link = linkRef.current?.value

  }
  
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-700 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4">
              <div className="flex justify-end">
                <div onClick={onClose} className='cursor-pointer'>
                  <CrossIcon />
                </div>
              </div>
              <div>
                <Input ref={titleRef} placeholder={'Title'} />
                <Input ref={linkRef} placeholder={'Link'} />
              </div>
              <div className="flex justify-center">
                <Button onClick={addContent} variant="primary" text="Submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

