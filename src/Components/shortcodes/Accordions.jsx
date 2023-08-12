import React, { useState }  from 'react';

import Header from './Headers'
import {accordionItems} from '../data'

function AccordionItem({
  active,
  onClickItem,
  children,
  className
}) {
  return (
    <li className={`transition ease-in-out ${active ? 'border-0' : 'border-0'}`}>
      <div className='bg-gray-200 dark:bg-slate-800 mb-2'>
        <button
          className={`w-full font-bold text-left p-4 outline-none cursor-pointer relative  ${className}`}
          onClick={onClickItem}>
          {children.title}
          <span
            className={`absolute top-1/4 right-5 transform translate-x-1/2 transition ease-in-out ${className} ${
              active ? 'rotate-180' : ''}`}>
            &#x2304;
          </span>
        </button>
      </div>
      
      <div
        className={`transition-all  ${className} ${
          active ? 'max-h-100 mb-10' : 'max-h-0 opacity-0'
        } overflow-y-scroll`}
      >
        {children.description}
      </div>
    </li>
  );
}

function Accordion({type, children, className}) {
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
    <div className={className}>
      <ul>
        {React.Children.map(children, (child, idx) => (
          React.cloneElement(child, {
            onClickItem: () => handleAccordion(idx),
            active: openIndexes.includes(idx),
          })
        ))}
      </ul>
    </div>
  )
}

function BasicAccordion () {
  return (
      <div>
        <Header>Accordions</Header>
        <hr className='mb-10'/>
        <div className="mx-auto text-left">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Accordion Standard</p>
        </div>
        <div className="mb-10 py-3 ">
          <Accordion type="Standard" className="your-custom-class">
            {accordionItems.map((item, idx) => (
              <AccordionItem key={idx} className="your-custom-class">
                {item}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <hr className='mb-10'/>
        <div className="mx-auto text-left">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Accordion Single</p>
        </div>
        <div className="mb-10 py-3 ">
          <Accordion type='Single' className="your-custom-class">
            {accordionItems.map((item, idx) => (
              <AccordionItem key={idx} className="your-custom-class">
                {item}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <hr className='mb-10'/>
      </div>
  );
}

export { BasicAccordion };