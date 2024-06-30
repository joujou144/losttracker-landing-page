import { PiPlusBold } from "react-icons/pi";

type ButtonProps = {
  className?: string;
  disabled?: boolean;
  icon?: boolean;
  label: string;
  type: "submit" | "button";
  onClick?: () => void;
};

const Button = ({
  className,
  disabled,
  icon,
  label,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className} content-size z-10 text-center flexCenter gap-1 cursor-pointer group relative inline-block overflow-hidden rounded-full border-2 border-primary-400 px-5 py-2.5 font-medium text-surface-mixed-100 bg-primary-400 disabled:text-gray-20 disabled:bg-gray-30 disabled:border-gray-30 disabled:cursor-wait`}
    >
      <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-gray-70 opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
      {icon && <PiPlusBold className="relative group-hover:text-primary-700" />}
      <p className="relative group-hover:text-primary-700">{label}</p>
    </button>
  );
};

export default Button;
