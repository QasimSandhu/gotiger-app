import React from 'react';

function SaleBanner(props) {
  const { text } = props;
  return (
    <div className="flex-1 py-4 ps-4 shadow-md w-full lg:w-[684px] md:w-[359px] sm:w-[306px] h-[272px] rounded-md bg-red-250 flex justify-start items-center">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold w-[435px] xl:w-[435px] md:w-[235px] sm:w-[150px] mt-4 text-left font-tusker-grotesk leading-[41.6px] c-w-240">
          <span className="inline-block w-[196px] mx-auto">{text}</span>
        </h2>
        <div className="ml-auto">
          <img src="/assets/images/sale.png" alt="Sale Banner" className="w-[229px] h-[271px] rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default SaleBanner;
