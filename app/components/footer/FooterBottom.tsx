import React from "react";

const FooterBottom: React.FC = () => {
  return (
    <div className="pt-12 pb-8 flex items-center justify-center border-t border-gray-700">
      <p className="text-[10px] md:text-[12px] font-[300] font-robotoSlab text-gray-400">
        © {new Date().getFullYear()}, Havilah Events Place. All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterBottom;
