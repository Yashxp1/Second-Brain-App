import { ReactElement } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  text: string;
  startIcon: ReactElement;
  onClick?: () => void;
  fullwidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary: 'bg-purple-600 text-white',
  secondary: 'bg-purple-100 text-purple-600',
};

const defaultStyles =
  'px-4 py-2 rounded-md font-light flex justify-center items-center';

export function Button({
  variant,
  text,
  startIcon,
  onClick,
  fullwidth,
  loading,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        variantClasses[variant] +
        ' ' +
        defaultStyles +
        `${fullwidth ? ' w-full text-center' : ''} ${
          loading ? 'opacity-45' : ''
        }`
      }
      disabled={loading}
    >
      <div className="pr-4">{startIcon}</div>
      {text}
    </button>
  );
}
