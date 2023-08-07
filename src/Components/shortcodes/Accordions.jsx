import * as React from 'react';

import {accordionItems, accordionoptions} from '../data'

function BasicAccordion() {
    
  return (
      <div className="text-center">
        <h2 className="text-[48px] my-10 font-bold leading-7 text-indigo-600 dark:text-indigo-400">Accordions</h2>
        <hr className='mb-10'/>
        <div className="mx-auto text-left">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Simple Accordions</p>
        </div>
        <div className="mb-10 py-3 ">

        </div>
        <hr className='mb-10'/>
        
      </div>
  );
}

export { BasicAccordion };