// app/components/PrevArrow.tsx
"use client";

import { FiChevronsLeft } from "react-icons/fi";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const PrevArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute hidden md:block top-1/2 left-5 z-10 transform -translate-y-1/2 cursor-pointer rounded-full p-2 hover:bg-havilah-footer text-white"
    onClick={onClick}
  >
    <FiChevronsLeft size={52} />
  </div>
);

export default PrevArrow;
