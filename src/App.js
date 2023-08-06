import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { 
  Blog, 
  Feature, 
  Details, 
  Home, } from './Container/index'
import { 
  Shortcodes, 
  Accordion,
  Actionbox,
  Alerts,
  Animations,
  Blockquotes,
  Buttons,
  Carousel,
  Clients,
  Columns,
  Contentbox,
  Countdown,
  Counter,
  Datatable,
  Datatables,
  Datepicker,
  Dropcaphighlight,
  Featurebox,
  Form,
  Gallery,
  Headings,
  Icons,
  Labels,
  Lightbox,
  Lightpanels,
  Liststyle,
  Maps,
  Modalpopovers,
  Navigation,
  Newsletter,
  Pagination,
  Piechart,
  Poststyle,
  Pricingtables,
  Processsteps,
  Responsiveutilities,
  Sections,
  Select,
  Separators,
  Skills,
  Socialicon,
  Tabs,
  Team,
  Testimonials,
  Typography,
  Videoaudio,
   } from './Components/Shortcodes'

import {CTA, Brand, Navbar, Footer} from './Components/index';

const App = () => {
  return ( 
    <>
      <div className='App'>
        <div classneame = 'header'>
          <Navbar/>  
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/brand" element={<Brand/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/details" element={<Details/>} />
          <Route path="/feature" element={<Feature/>} />
          <Route path="/cta" element={<CTA/>} />

          <Route path="/shortcodes" element={<Shortcodes/>} />
          <Route path="/shortcodes/accordion" element={<Accordion/>} />
          <Route path="/shortcodes/actionbox" element={<Actionbox/>} />
          <Route path="/shortcodes/alerts" element={<Alerts/>} />
          <Route path="/shortcodes/animations" element={<Animations/>} />
          <Route path="/shortcodes/blockquotes" element={<Blockquotes/>} />
          <Route path="/shortcodes/buttons" element={<Buttons/>} />
          <Route path="/shortcodes/carousel" element={<Carousel/>} />
          <Route path="/shortcodes/clients" element={<Clients/>} />
          <Route path="/shortcodes/columns" element={<Columns/>} />
          <Route path="/shortcodes/contentbox" element={<Contentbox/>} />
          <Route path="/shortcodes/countdown" element={<Countdown/>} />
          <Route path="/shortcodes/counter" element={<Counter/>} />
          <Route path="/shortcodes/datatable" element={<Datatable/>} />
          <Route path="/shortcodes/datatables" element={<Datatables/>} />
          <Route path="/shortcodes/datepicker" element={<Datepicker/>} />
          <Route path="/shortcodes/dropcaphighlight" element={<Dropcaphighlight/>} />
          <Route path="/shortcodes/featurebox" element={<Featurebox/>} />
          <Route path="/shortcodes/form" element={<Form/>} />
          <Route path="/shortcodes/gallery" element={<Gallery/>} />
          <Route path="/shortcodes/headings" element={<Headings/>} />
          <Route path="/shortcodes/icons" element={<Icons/>} />
          <Route path="/shortcodes/labels" element={<Labels/>} />
          <Route path="/shortcodes/lightbox" element={<Lightbox/>} />
          <Route path="/shortcodes/lightpanels" element={<Lightpanels/>} />
          <Route path="/shortcodes/liststyle" element={<Liststyle/>} />
          <Route path="/shortcodes/maps" element={<Maps/>} />
          <Route path="/shortcodes/modalpopovers" element={<Modalpopovers/>} />
          <Route path="/shortcodes/navigation" element={<Navigation/>} />
          <Route path="/shortcodes/newsletter" element={<Newsletter/>} />
          <Route path="/shortcodes/pagination" element={<Pagination/>} />
          <Route path="/shortcodes/piechart" element={<Piechart/>} />
          <Route path="/shortcodes/poststyle" element={<Poststyle/>} />
          <Route path="/shortcodes/pricingtables" element={<Pricingtables/>} />
          <Route path="/shortcodes/processsteps" element={<Processsteps/>} />
          <Route path="/shortcodes/responsiveutilities" element={<Responsiveutilities/>} />
          <Route path="/shortcodes/sections" element={<Sections/>} />
          <Route path="/shortcodes/select" element={<Select/>} />
          <Route path="/shortcodes/separators" element={<Separators/>} />
          <Route path="/shortcodes/skills" element={<Skills/>} />
          <Route path="/shortcodes/socialicon" element={<Socialicon/>} />
          <Route path="/shortcodes/tabs" element={<Tabs/>} />
          <Route path="/shortcodes/team" element={<Team/>} />
          <Route path="/shortcodes/testimonials" element={<Testimonials/>} />
          <Route path="/shortcodes/typography" element={<Typography/>} />
          <Route path="/shortcodes/videoaudio" element={<Videoaudio/>} />
        </Routes>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App