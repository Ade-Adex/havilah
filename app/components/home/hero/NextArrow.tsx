// app/components/NextArrow.tsx
"use client";

import { FiChevronsRight } from "react-icons/fi";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute hidden md:block top-1/2 right-5 z-10 transform -translate-y-1/2 cursor-pointer rounded-full p-2 hover:bg-havilah-footer text-white"
    onClick={onClick}
  >
    <FiChevronsRight size={52} />
  </div>
);

export default NextArrow;
