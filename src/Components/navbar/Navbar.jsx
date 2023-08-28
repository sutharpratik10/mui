/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'

import Themeswitcher from '../Themeswitcher'
import { shortcode, pages } from '../data';

import '../style/navbar.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
 
//Navbar option 1
function Navbar() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <header className="fixed top-0 bg-slate-200 dark:bg-gray-800 z-10 w-full ">
        <nav className="flex mx-auto items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <NavLink to='/' className="-m-1.5 p-1.5">
              <span className="sr-only">Multi UI</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </NavLink>
          </div>
          <div className="flex lg:hidden">
          <Themeswitcher/>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="ml-5 h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            
            {pages.map((item) => (
              <NavLink to={item.href} className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                {item.name}
              </NavLink>
            ))}
            
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-900 dark:text-white">
                Shortcode
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -right-36 top-full z-10 mt-3 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-slate-600">
                  <div className="p-2 columns-3 justify-between">
                    {shortcode.map((item) => (
                      <div key={item.name} className="group relative flex items-center gap-x-2 rounded-md text-sm leading-6 hover:bg-gray-200">
                        <div className="flex h-11 w-10 flex-none items-center justify-center rounded-lg">
                          <item.icon className="h-3 w-3 text-gray-600 dark:text-white group-hover:text-primaryhover" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <NavLink to={item.href} className="block font-semibold text-gray-900 dark:text-white group-hover:text-primaryhover"> {item.name}
                            <span className="absolute inset-0" />
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </div>                             
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="pl-10 text-base font-semibold leading-6 text-gray-900 dark:text-white">
              <Themeswitcher/>
            </a>
            <a href="#" className="pl-10 text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-slate-800  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 ">
                <span className="sr-only dark:text-white">Multi UI</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-600">
                
                {pages.map((item) => (
                  <div className="py-6">
                    <NavLink to={item.href} className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                      {item.name}
                    </NavLink>
                  </div>
                ))}
                
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                          ShortCode
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...shortcode,].map((item) => (
                            <Disclosure.Button
                              icon={item.icon} 
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="mb-28"><hr /></div>
    </>
  )
}

export default Navbar;