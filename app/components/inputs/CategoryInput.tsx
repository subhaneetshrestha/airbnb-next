'use client';

import { IconType } from 'react-icons';

interface CategoryInputProps {
  onClick: (value: string) => void;
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  onClick,
  selected,
}) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={`w-full rounded-xl border-2 p-4 flex flex-col gap-4 hover:border-black transition cursor-pointer ${
        selected ? 'border-black' : 'border-neutral-200'
      }`}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </button>
  );
};

export default CategoryInput;
