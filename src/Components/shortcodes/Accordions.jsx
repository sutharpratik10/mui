import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {accordion, features} from '../data'

function BasicAccordion() {
  return (
      <div className="text-center">
        <h2 className="text-[48px] my-10 font-bold leading-7 text-indigo-600 dark:text-indigo-400">Accordions</h2>
        <hr className='mb-10'/>
        <div className="mx-auto text-left">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Simple Accordions</p>
        </div>
        <div className="mb-10 py-3 ">
          {accordion.map((item) => (
            <Accordion className='dark:text-white dark:bg-slate-800 dark:text-white hover:text-indigo-600'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='dark:text-white hover:text-indigo-600 ease-in-out duration-300'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className='border-solid border'>
                <Typography className=''>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails className='text-left'>
                <Typography>{item.description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <hr className='mb-10'/>
        
      </div>
  );
}

export { BasicAccordion };