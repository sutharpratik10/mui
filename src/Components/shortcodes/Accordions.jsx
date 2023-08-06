import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {accordion} from '../data'

function BasicAccordion() {
  return (
    <div>
      {accordion.map((accordionitem) => (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>{accordionitem.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {accordionitem.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
  );
}

export { BasicAccordion };