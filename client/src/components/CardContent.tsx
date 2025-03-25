import { BACKEND_URL } from '../config';
import { useRef, useState } from 'react';
import axios from 'axios';

enum contentType {
  Youtube = 'youtube',
  Twitter = 'twitter',
}

export const CreateContentModal = ({ open, onClose }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(contentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content/add`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-700 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>
              <div>
                <Input ref={titleRef} placeholder={'Title'} />
                <Input ref={linkRef} placeholder={'Link'} />
              </div>
              <div className="p-2 flex flex-col justify-center items-center">
                <h1>Type</h1>
                <div className="flex gap-2 ">
                  <Button
                    text="Youtube"
                    variant={
                      type === contentType.Youtube ? 'primary' : 'secondary'
                    }
                    onClick={() => {
                      setType(contentType.Youtube);
                    }}
                  />
                  <Button
                    text="Twitter"
                    variant={
                      type === contentType.Twitter ? 'primary' : 'secondary'
                    }
                    onClick={() => {
                      setType(contentType.Twitter);
                    }}
                  />
                </div>
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