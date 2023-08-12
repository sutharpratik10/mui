import {React} from 'react'
import { features } from './data'

import {BasicAccordion, Buttons, Actionboxes, Alert } from './shortcodes/index'

function Shortcodes() {
  return (
    <>
    <h1 className='mt-56'>Short Code</h1>
    </>
  )
}

function Accordion() {
  return (
    <>
      <BasicAccordion/>
    </>
  )
}

function Actionbox() {
  return (
    <>
     <Actionboxes/>
    </>
  )
}

function Alerts() {
  return (
    <>
      <Alert/>
    </>
  )
}

function Animations() {
  return (
    <>
    <h1 className='mt-56'>Animations</h1>
    </>
  )
}

function Blockquotes() {
  return (
    <>
    <h1 className='mt-56'>Blockquotes</h1>
    </>
  )
}

function Button() {
  return (
    <>
      <Buttons/>
    </>
  )
}

function Carousel() {
  return (
    <>
    <h1 className='mt-56'>Carousel</h1>
    </>
  )
}

function Clients() {
  return (
    <>
    <h1 className='mt-56'>Clients</h1>
    </>
  )
}

function Columns() {
  return (
    <>
    <h1 className='mt-56'>Columns</h1>
    </>
  )
}

function Contentbox() {
  return (
    <>
    <h1 className='mt-56'>Contentbox</h1>
    </>
  )
}

function Countdown() {
  return (
    <>
    <h1 className='mt-56'>Countdown</h1>
    </>
  )
}

function Counter() {
  return (
    <>
    <h1 className='mt-56'>Counter</h1>
    </>
  )
}

function Datatable() {
  return (
    <>
      <h1 className='mt-56'>Datatable</h1>
    </>
  )
}

function Datatables() {
  return (
    <>
    <h1 className='mt-56'>Datatables</h1>
    </>
  )
}
function Datepicker() {
  return (
    <>
    <h1 className='mt-56'>Datepicker</h1>
    </>
  )
}

function Dropcaphighlight() {
  return (
    <>
    <h1 className='mt-56'>Dropcaphighlight</h1>
    </>
  )
}

function Featurebox() {
  return (
    <>
    <div className=''>
      <div className="pb-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to deploy your app
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

function Form() {
  return (
    <>
    <h1 className='mt-56'>Form</h1>
    </>
  )
}

function Gallery() {
  return (
    <>
    <h1 className='mt-56'>Gallery</h1>
    </>
  )
}

function Headings() {
  return (
    <>
    <h1 className='mt-56'>Headings</h1>
    </>
  )
}

function Icons() {
  return (
    <>
    <h1 className='mt-56'>Icons</h1>
    </>
  )
}

function Labels() {
  return (
    <>
    <h1 className='mt-56'>Labels</h1>
    </>
  )
}

function Lightbox() {
  return (
    <>
    <h1 className='mt-56'>Lightbox</h1>
    </>
  )
}

function Lightpanels() {
  return (
    <>
    <h1 className='mt-56'>Lightpanels</h1>
    </>
  )
}

function Liststyle() {
  return (
    <>
    <h1 className='mt-56'>Liststyle</h1>
    </>
  )
}

function Maps() {
  return (
    <>
    <h1 className='mt-56'>Maps</h1>
    </>
  )
}

function Modalpopovers() {
  return (
    <>
    <h1 className='mt-56'>Modalpopovers</h1>
    </>
  )
}

function Navigation() {
  return (
    <>
    <h1 className='mt-56'>Navigation</h1>
    </>
  )
}

function Newsletter() {
  return (
    <>
    <h1 className='mt-56'>Newsletter</h1>
    </>
  )
}

function Pagination() {
  return (
    <>
    <h1 className='mt-56'>Pagination</h1>
    </>
  )
}

function Piechart() {
  return (
    <>
    <h1 className='mt-56'>Piechart</h1>
    </>
  )
}

function Poststyle() {
  return (
    <>
    <h1 className='mt-56'>Poststyle</h1>
    </>
  )
}

function Pricingtables() {
  return (
    <>
    <h1 className='mt-56'>Pricingtables</h1>
    </>
  )
}

function Processsteps() {
  return (
    <>
    <h1 className='mt-56'>Processsteps</h1>
    </>
  )
}

function Responsiveutilities() {
  return (
    <>
    <h1 className='mt-56'>Responsiveutilities</h1>
    </>
  )
}

function Sections() {
  return (
    <>
    <h1 className='mt-56'>Sections</h1>
    </>
  )
}

function Select() {
  return (
    <>
    <h1 className='mt-56'>Select</h1>
    </>
  )
}

function Separators() {
  return (
    <>
    <h1 className='mt-56'>Separators</h1>
    </>
  )
}

function Skills() {
  return (
    <>
    <h1 className='mt-56'>Skills</h1>
    </>
  )
}

function Socialicon() {
  return (
    <>
    <h1 className='mt-56'>Socialicon</h1>
    </>
  )
}

function Tabs() {
  return (
    <>
    <h1 className='mt-56'>Tabs</h1>
    </>
  )
}

function Team() {
  return (
    <>
    <h1 className='mt-56'>Team</h1>
    </>
  )
}

function Testimonials() {
  return (
    <>
    <h1 className='mt-56'>Testimonials</h1>
    </>
  )
}

function Typography() {
  return (
    <>
    <h1 className='mt-56'>Typography</h1>
    </>
  )
}

function Videoaudio() {
  return (
    <>
    <h1 className='mt-56'>Videoaudio</h1>
    </>
  )
}

export {
  Shortcodes, 
  Accordion,
  Actionbox,
  Alerts,
  Animations,
  Blockquotes,
  Button,
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
  Videoaudio
  } 