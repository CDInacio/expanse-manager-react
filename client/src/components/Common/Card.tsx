import { twMerge } from "tailwind-merge";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={twMerge(
        "p-5 bg-backgroundLight text-white rounded",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
