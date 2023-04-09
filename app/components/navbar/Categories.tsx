'use client';

import Container from '../Container';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { MdOutlineVilla } from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import CategoryBox from '../CategoryBox';
import { useSearchParams } from 'next/dist/client/components/navigation';
import { usePathname } from 'next/navigation';

export const categories = [
  {
    id: 1,
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach.',
  },
  {
    id: 2,
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property has windmills.',
  },
  {
    id: 3,
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern.',
  },
  {
    id: 4,
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is the countryside.',
  },
  {
    id: 5,
    label: 'Pools',
    icon: TbPool,
    description: 'This property has a pool.',
  },
  {
    id: 6,
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island.',
  },
  {
    id: 7,
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is close to a lake.',
  },
  {
    id: 8,
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activities.',
  },
  {
    id: 9,
    label: 'Castle',
    icon: GiCastle,
    description: 'This property is in a castle.',
  },
  {
    id: 10,
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property has camping activities.',
  },
  {
    id: 11,
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property is on the arctic.',
  },
  {
    id: 12,
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This property is near a cave.',
  },
  {
    id: 13,
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is near the desert.',
  },
  {
    id: 14,
    label: 'barns',
    icon: GiBarn,
    description: 'This property is in the barn.',
  },
  {
    id: 15,
    label: 'Deluxe',
    icon: IoDiamond,
    description: 'This property is deluxe.',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';
  if (!isMainPage) return null;
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.id}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
