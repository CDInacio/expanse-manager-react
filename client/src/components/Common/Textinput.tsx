import React from "react";
import { twMerge } from "tailwind-merge";

interface TextinputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Textinput = ({
  placeholder,
  className,
  label,
  name,
  onChange,
  ...rest
}: TextinputProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={onChange}
        {...rest}
        name={name}
        placeholder={placeholder}
        className={twMerge(
          "border-[1px] rounded border-neutral-500 py-2 px-4",
          className
        )}
      />
    </div>
  );
};

export default Textinput;
