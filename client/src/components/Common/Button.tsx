import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "h-[35px] px-[10px] text-center font-medium text-white bg-primary rounded hover:bg-primaryDark transition duration-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
