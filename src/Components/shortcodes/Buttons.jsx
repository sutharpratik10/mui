/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Children } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import {dropdownbtn} from '../data'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Simplebutton({children, className}){
  return (
    <div>
      <button class={`bg-indigo-700 hover:bg-indigo-900 dark:hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition ease-in-out ${className}`}>
        {children}
      </button>
    </div>
  )
}

function Borderbutton({children, className}){
  return (
    <div>
      <button class={`dark:border-white border-2 border-indigo-700 hover:bg-indigo-900 dark:hover:bg-white dark:hover:text-indigo-700 dark:text-white hover:text-white text-indigo-700 font-bold py-2 px-4 rounded flex justify-center transition ease-in-out ${className}`}>
        {children}
      </button>
    </div>
  )
}

function ThreeDbutton({children, className}){
  return (
    <div>
      <button class={`bg-indigo-700 hover:bg-indigo-900 hover:border-indigo-900 dark:hover:bg-indigo-600 border-b-4 border-indigo-900 text-white font-bold py-2 px-4 rounded transition ease-in-out${className}`}>
        {children}
      </button>
    </div>
  )
}

function Elevatedbutton({children, className}){
  return (
    <div>
      <button class={`bg-indigo-700 hover:bg-indigo-900 hover:border-indigo-900 dark:hover:bg-indigo-600 border-indigo-900 text-white font-bold py-2 px-4 drop-shadow-lg hover:drop-shadow-md rounded transition ease-in-out${className}`}>
        {children}
      </button>
    </div>
  )
}

function Iconbutton({children, className}){
  return (
    <div>
      <button class={`dark:border-white rounded-full border-indigo-700 border hover:bg-indigo-900 dark:hover:bg-white dark:hover:text-indigo-700 dark:text-white hover:text-white text-indigo-700 font-bold py-2 px-4 transition ease-in-out${className}`}>
        {children}
        <svg class="fill-current w-4 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      </button>
    </div>
  )
}

function Groupbutton({children, className}){
  return (
    <div>
      <div class="inline-flex">
        <button class={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l${className}`}>
            Prev
        </button>
        <button class={` bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r${className}`}>
            Next
        </button>
      </div>
    </div>
  )
}

function Bigbutton({children, className}){
  return (
    <div>
      <button class={` bg-indigo-700 hover:bg-indigo-900 dark:hover:bg-indigo-600 text-white font-bold max-lg:py-10 max-lg:px-28 lg:py-10 lg:px-28 md:py-10 md:px-28 sm:py-10 sm:px-20 xs:py-0 xs:px-5 rounded transition ease-in-out ${className}`}>
        <p className='text-2xl xs:text-lg font-bold'>Big Button</p>
        <p className='xs:text-sm font-semibold'>Description</p>
      </button>
    </div>
  )
}

function Dropdownbutton({children}){
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-900">
            Options
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {dropdownbtn.map((item) => (
                <Menu.Item>
                  <a
                    href="#"
                    type="submit"
                    className=
                        'text-gray-800 hover:bg-gray-100 dark:text-white dark:bg-slate-800 hover:dark:bg-slate-100 hover:dark:text-gray-900 block px-4 py-2 text-sm'
                    >
                    {item.name}
                  </a>
                </Menu.Item>
              ))}
              
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900 dark:bg-slate-100' : 'text-gray-700 dark:text-white',
                        'block w-full px-4 py-2 text-left text-sm'
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function Buttons({children}) {
  return (
    <div>
        <h2 className="text-[48px] my-10 font-bold leading-7 text-indigo-600 dark:text-indigo-400">Buttons</h2>
        <hr className='mb-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Simple Button</p>
        </div>
        <Simplebutton class="bg-white"> 
          Simple Button
        </Simplebutton>
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Border Button</p>
        </div>
        <Borderbutton>
          Border Button
        </Borderbutton>
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">3D Button</p>
        </div>
        <ThreeDbutton>
          3D Button
        </ThreeDbutton>
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Elevated Button</p>
        </div>
        <Elevatedbutton>
          Elevated Button
        </Elevatedbutton>
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Icon Button</p>
        </div>
        <button class=" w-fit  inline-flex  bg-indigo-700 hover:bg-indigo-900 hover:border-indigo-900 dark:hover:bg-indigo-600 border-indigo-900 text-white font-bold py-2 px-4 drop-shadow-lg hover:drop-shadow-md rounded transition ease-in-out">
          <svg class="fill-current w-4 h-4 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> 
          <span> Button</span>
        </button>
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Group Button</p>
        </div>
        <div class="inline-flex">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Prev
            </button>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Next
            </button>
        </div>
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Big Button</p>
        </div>
        <div class="inline-flex">
          <button class="bg-indigo-700 hover:bg-indigo-900 dark:hover:bg-indigo-600 text-white font-bold max-lg:py-10 max-lg:px-28 lg:py-10 lg:px-28 md:py-10 md:px-28 sm:py-10 sm:px-20 xs:py-0 xs:px-5 rounded transition ease-in-out ">
            <p className='text-2xl xs:text-lg font-bold'>Big Button</p>
            <p className='xs:text-sm font-semibold'>Description</p>
          </button>
          <div className='ml-20 xs:ml-2'></div>
          <button class="dark:border-white border-2 border-indigo-700 hover:bg-indigo-900 dark:hover:bg-white dark:hover:text-indigo-700 dark:text-white hover:text-white text-indigo-700 font-bold max-lg:py-10 max-lg:px-28 lg:py-10 lg:px-28 md:py-10 md:px-28 sm:py-10 sm:px-20 xs:py-0 xs:px-5 rounded transition ease-in-out">
            <p className='text-2xl xs:text-lg font-bold'>Big Button</p>
            <p className='text-size[8px] font-semibold'>Description</p>
          </button>
        </div>
        <hr className='my-10'/>
        
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Dropdown Button</p>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-900">
              Options
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {dropdownbtn.map((item) => (
                  <Menu.Item>
                    <a
                      href="#"
                      type="submit"
                      className=
                          'text-gray-800 hover:bg-gray-100 dark:text-white dark:bg-slate-800 hover:dark:bg-slate-100 hover:dark:text-gray-900 block px-4 py-2 text-sm'
                      >
                      {item.name}
                    </a>
                  </Menu.Item>
                ))}
                
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900 dark:bg-slate-100' : 'text-gray-700 dark:text-white',
                          'block w-full px-4 py-2 text-left text-sm'
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <hr className='my-10'/>
        <div className="mx-auto text-left mb-5">
          <p className="text-[24px] font-semibold  tracking-tight text-gray-900 dark:text-white">Icon Button</p>
        </div>
        <div class="inline-flex">
          <button class="dark:border-white rounded-full border-indigo-700 border hover:bg-indigo-900 dark:hover:bg-white dark:hover:text-indigo-700 dark:text-white hover:text-white text-indigo-700 font-bold py-2 px-4 transition ease-in-out">
            <svg class="fill-current w-4 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          </button>
          <div className='ml-20'></div>
          <button class="dark:border-indigo-800 rounded-full border-indigo-700 hover:border-indigo-700 border bg-indigo-900 hover:bg-transparent dark:hover:bg-white dark:hover:text-indigo-700 dark:text-white hover:text-indigo-800 text-white font-bold py-2 px-4 transition ease-in-out">
            <svg class="fill-current w-4 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          </button>
        </div>
        <hr className='my-10'/>
    </div>
  )
}

export {Buttons, Simplebutton, Borderbutton,ThreeDbutton, Elevatedbutton, Iconbutton, Groupbutton, Bigbutton, Dropdownbutton}