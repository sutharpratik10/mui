import React, { useState }  from 'react';
import '../style/shortcodes.css'

import {accordionItems} from '../data'

function AccordionItem({
  item: { title, description }, // Use "item" prop here
  active,
  onClickItem
}) {
 return (
   <li className={`accordion__item ${active ? "active" : ""}`}>
      <button className="accordion__item-button" onClick={onClickItem}>
        {title}
      </button>
     <div className="accordion__item-content">
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
    <div className="container">
      <ul className='accordion'>
        {accordionItems.map((accordionItem, idx) => (
          <AccordionItem 
             key={accordionItem.id} 
             item={accordionItem}
             onClickItem={() => handleAccordion(idx)}
             active={openIndexes.includes(idx)}/>
        ))}
      </ul>
    </div>
  )
}

function BasicAccordion () {
  return (
      <div className="text-center">
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