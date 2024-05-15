import { formatMoeda } from '@/utils';
import React from 'react';

interface KpisProps {
  title?: string;
  value: string;
  tcolor?: string;
  vcolor?: any;
  tsize?: string;
  vsize?: string;
  kstyles?: string;
  tstyles?: string;
  vstyles?: string;
}

const Kpis = (props: KpisProps) => {
  return (
    <div
      className={`bg-white shadow-md flex-1 ${props.kstyles ? props.kstyles : 'p-1'}`}
    >
      <div
        className={`${props.tsize ? props.tsize : 'text-sm'} text-center uppercase font-semibold ${props.tcolor}  ${props.tstyles} `}
      >
        {props.title}
      </div>
      <hr className="border-gray-200" />
      <div
        className={`${props.vsize ? props.vsize : 'text-[1.2rem]'} text-center font-extrabold  ${props.vstyles ? props.vstyles : 'p-2 '} `}
      style={{color: props.vcolor}}
      >
        {formatMoeda(props.value)}
      </div>
    </div>
  );
};

export default Kpis;
