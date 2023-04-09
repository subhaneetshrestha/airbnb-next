'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { IconType } from 'react-icons';
import qs from 'query-string';
import Router from 'next/dist/server/router';

interface CategoryBoxProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

interface currentQuery {
  category?: string;
  [key: string]: any;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  selected,
  icon: Icon,
  label,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) currentQuery = qs.parse(params.toString());
    const updatedQuery: currentQuery = {
      ...currentQuery,
      category: label,
    };

    if (params?.get('category') === label) delete updatedQuery.category;

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [params, label, router]);

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected
          ? 'border-b-neutral-800 text-neutral-800'
          : 'border-transparent text-neutral-500'
      }`}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </button>
  );
};

export default CategoryBox;
