import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Header from './Headers'
import { accordionItems } from '../data'

function AccordionItem({
  active,
  onClickItem,
  title,
  description,
  buttonClassName, // Custom className for button
  descriptionClassName, // Custom className for description
  spanClassName,    // Custom className for span
  children
}) {
  return (
    <li>
      <button
        className={`w-full bg-gray-200 dark:bg-slate-800 mb-2 font-bold text-left p-4 outline-none cursor-pointer relative transition ease-in-out  ${active ? 'border-0' : 'border-0' }  ${buttonClassName}`}
        onClick={onClickItem}>
        {children.title}
        <span
          className={`absolute top-1/4 right-5 transform translate-x-1/2 transition ease-in-out ${spanClassName} ${
            active ? 'rotate-180' : ''}`}>
          &#x2304;
        </span>
      </button>
      
      <div
        className={`transition-all  ${descriptionClassName} ${
          active ? 'max-h-100 mb-10' : 'max-h-0 opacity-0'
        } overflow-y-scroll`}
      >
        {children.description}
      </div>
    </li>
  );
}

function Custumaccordion({ type, children, className }) {
  const [openIndexes, setOpenIndexes] = React.useState([0])
  
  const handleAccordion = (idx) => {
    if (type === 'Standard') {
      if (openIndexes.includes(idx)) {
        setOpenIndexes(openIndexes.filter(ind => ind !== idx))
      } else {
        setOpenIndexes(openIndexes.concat(idx))
      }
    }
    
    if (type === 'Single') {
      const openIndexes = [idx]
      setOpenIndexes(openIndexes)
    }
  }
  
  return (
    <div className={className}>
      <ul>
        {React.Children.map(children, (child, idx) => (
          React.cloneElement(child, {
            onClickItem: () => handleAccordion(idx),
            active: openIndexes.includes(idx),
            className,
          })
        ))}
      </ul>
    </div>
  );
}

function BasicAccordion(active) {
  return (
    <div>
      <Header>Accordions</Header>
     
      <div className="mx-auto text-left">
        <p className="text-[24px] font-semibold tracking-tight text-primary dark:text-white">Accordion Standard</p>
      </div>
      <div className="mb-10 py-3 ">
        <Custumaccordion type="Standard" className="your-custom-class">
          {accordionItems.map((item, idx) => (
            <AccordionItem
              key={idx}
              liClassName="li-custom-class"          // Custom className for li
              buttonClassName="button-custom-class"  // Custom className for button
            >
              {{
                title: item.title,
                description: item.description
              }}
            </AccordionItem>
          ))}
        </Custumaccordion>
      </div>
      <hr className='mb-10' />
      <div className="mx-auto text-left">
        <p className="text-[24px] font-semibold tracking-tight text-primary dark:text-white">Accordion Single</p>
      </div>
      <div className="mb-10 py-3 ">
        <Custumaccordion type="Single" className="your-custom-class">
          {accordionItems.map((item, idx) => (
            <AccordionItem
              key={idx}
              liClassName="li-custom-class"          // Custom className for li
              buttonClassName="button-custom-class"  // Custom className for button
            >
              {{
                title: item.title,
                description: item.description
              }}
            </AccordionItem>
          ))}
        </Custumaccordion>
      </div>
      <hr className='mb-10' />
      <div className="mx-auto text-left">
        <p className="text-[24px] font-semibold tracking-tight text-primary dark:text-white">Accordion Animated</p>
      </div>
      <div className="mb-10 py-3 ">
        <Accordion type="Single" className="your-custom-class">
          {accordionItems.map((item, idx) => (
            <AccordionItem
              key={idx}
              buttonClassName={'bg-transparent hover:text-primary'} 
              descriptionClassName={`p-4`} // Custom className for button
              spanClassName={`${active ? 'text-lg' : 'text-base' }`}
            >
              {{
                title: item.title,
                description: item.description
              }}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <hr className='mb-10' />
    </div>
  );
}

export { Accordions };
