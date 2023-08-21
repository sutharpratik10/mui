import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {accordionItems} from '../data'
import Header from './Headers';

function Accordions() {
  return (
    <>
      <Header>Basic Accordion</Header>
      {accordionItems.map((item, index)=>(
        <Accordion 
          key={item.id} disabled={item.status === 'disabled'}
          className={'justify-between'}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />} // Use the ExpandMoreIcon component directly
            aria-controls={item.ariacontrols} // Bind aria-controls from the item
            id={item.ariacontrols} // Bind id from the item
            className={'mb-1 inline-flex '}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export { Accordions };
