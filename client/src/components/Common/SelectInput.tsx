import React from "react";

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  data: any;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const SelectInput = ({
  data,
  label,
  name,
  onChange,
  value,
}: SelectInputProps) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2">
        {label}
      </label>
      <select
        onChange={onChange}
        name={name}
        value={value}
        className="w-full  text-white p-2 border-[1px] border-neutral-700 rounded  mt-2 mb-5"
      >
        <option value="" disabled defaultValue="">
          Selecione uma categoria
        </option>
        {data.map((item: any) => (
          <option
            key={item.id}
            value={item.categoria}
            className="bg-background p-3"
          >
            {item.categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
