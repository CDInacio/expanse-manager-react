import React from "react";
import { twMerge } from "tailwind-merge";

interface TextareaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  className?: string;
  label: string;
  name: string;
  rows?: number;
  cols?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaInput = ({
  placeholder,
  className,
  label,
  name,
  rows,
  cols,
  onChange,
  ...rest
}: TextareaInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        onChange={onChange}
        className={twMerge(
          "border-[1px] rounded border-neutral-500 bg-transparent py-2 px-4",
          className
        )}
        name={name}
        rows={rows}
        cols={cols}
        {...rest}
      ></textarea>
    </div>
  );
};

export default TextareaInput;
