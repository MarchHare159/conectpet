import React from 'react';
import DoubleArrow from '../assets/images/double_arrow.png';

function PageTitle({ title="", subTitle="" }) {
  return (
    <div className="px-[30px] flex items-end">
      <h1 className="text-[#1B98E0] font-inter text-[64px] font-semibold mb-[-15px]">{title}</h1>
      {subTitle && <div className='flex items-center'>
        <span className="text-gray-400 text-[18px]"><img src={DoubleArrow} alt='double arrow'/></span>
        <p className="text-gray-400 text-[18px] mt-1">{subTitle}</p>
      </div>}
    </div>
  );
}

export default PageTitle;
