import CrossIcon from '../Icons/CrossIcon';
import { Button } from './Button';

export const CreateContentModal = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-700 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4">
              <div className="flex justify-end">
                <CrossIcon />
              </div>
              <div>
                <Input placeholder={'Title'} />
                <Input placeholder={'Link'} />
              </div>
              <Button variant="primary" text="Submit" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

function Input({ onChange, placeholder }: { onChange: () => void }) {
  return (
    <div>
      <input
        type={placeholder}
        className="px-4 py-2 border rounded m-2"
        onChange={onChange}
      />
    </div>
  );
}
