import React, { useState }  from 'react';

import {accordionItems} from '../data'

function AccordionItem({
  item: { title, description }, // Use "item" prop here
  active,
  onClickItem,
}) {
 return (
  <li
      className={`transition ease-in-out ${
        active ? 'border-0' : 'border-0'
      }`}
    >
      <div className='bg-gray-200 dark:bg-slate-800 mb-2'>
        <button
          className={`w-full font-bold text-left p-4 outline-none cursor-pointer relative`}
          onClick={onClickItem}
        >
          {title}
          <span
            className={`absolute top-1/4 right-5 transform translate-x-1/2 transition ease-in-out  ${
              active ? 'rotate-180' : ''
            }`}
          >
            &#x2304;
          </span>
        </button>
      </div>
      
      <div
        className={`transition-all ${
          active ? 'max-h-100 mb-10' : 'max-h-0 opacity-0'
        } overflow-y-scroll`}
      >
        {description}
      </div>
    </li>
 )
}

function Accordion({type}) {
  const [openIndexes, setOpenIndexes] = React.useState([0])
  
  const handleAccordion = (idx) => {
    if(type === 'Standard') {
      if(openIndexes.includes(idx)) { //if you click on item already open, close it
        setOpenIndexes(openIndexes.filter(ind => ind !== idx))
      } else { //if you click on item closed, open it
        setOpenIndexes(openIndexes.concat(idx))
      }
    }
    
    if(type === 'Single') {
      const openIndexes = [idx]
      setOpenIndexes(openIndexes)
    }
  }
  
  return(
    <div className="">
      <ul className=''>
        {accordionItems.map((accordionItem, idx) => (
          <AccordionItem 
             key={accordionItem.id} 
             item={accordionItem}
             onClickItem={() => handleAccordion(idx)}
             active={openIndexes.includes(idx)}
             itemId={accordionItem.id} />
        ))}
      </ul>
    </div>
  )
}

function BasicAccordion () {
  return (
      <div className="">
        
        <h2 className="text-[48px] my-10 font-bold leading-7 text-indigo-600 dark:text-indigo-400">Accordions</h2>
        <hr className='mb-10'/>
        <div className="mx-auto text-left">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Accordion Standard</p>
        </div>
        <div className="mb-10 py-3 ">
          <Accordion type="Standard"/>
        </div>
        <hr className='mb-10'/>
        <div className="mx-auto text-left">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Accordion Single</p>
        </div>
        <div className="mb-10 py-3 ">
          <Accordion type="Single"/>
        </div>
        <hr className='mb-10'/>
        
      </div>
  );
}

export { BasicAccordion };