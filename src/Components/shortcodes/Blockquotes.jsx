import React from 'react'

import Header from './Headers'
import {FaQuoteRight,FaQuoteLeft}  from 'react-icons/fa';


function Blockquotebody({children, className}){
    return (
        <div class={` ${className}`}>
            {children}
        </div>
    )
}
function Blockquotecontent({children, className}){
    return (
        <p class={`${className}`}>{children}</p>
    )
}

function Blockquotes(){
    return (
        <>
            <Header>Blockquote</Header>
            <div className='gap-11 columns-2 md:columns-2 sm:columns-1 xs:columns-1'>
                <Blockquotebody className={'p-6 border-l-4 border-slate-400 dark:border-slate-400'}>
                    <Blockquotecontent className={'text-[18px] font-semibold  tracking-tight text-gray-900 dark:text-white '}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id.  
                    </Blockquotecontent>
                </Blockquotebody>
                <Blockquotebody className={'p-6 border-r-4 border-slate-400 dark:border-slate-400 '}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-right tracking-tight text-gray-900 dark:text-white '}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                    </Blockquotecontent>
                </Blockquotebody>
            </div>
            <hr className='my-10'/>
            <div className='gap-11 columns-2 md:columns-2 sm:columns-1 xs:columns-1'>
                <Blockquotebody className={'p-6 border-l-4 border-primary dark:border-darkprimary'}>
                    <Blockquotecontent className={'text-[18px] font-semibold  tracking-tight text-gray-900 dark:text-white '}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id.  
                    <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
                <Blockquotebody className={'p-6 border-r-4 border-primary dark:border-darkprimary'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-right tracking-tight text-gray-900 dark:text-white '}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                    <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
            </div>
            <hr className='my-10'/>
            <div className='gap-11 columns-2 md:columns-2 sm:columns-1 xs:columns-1'>
                <Blockquotebody className={'p-6 border-l-4 bg-slate-100 border-primary dark:border-slate-400 dark:bg-slate-800 dark:border-x-darkprimaryhover xs:mb-4'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-left tracking-tight text-gray-900 dark:text-white'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id.
                    </Blockquotecontent>
                </Blockquotebody>
                <Blockquotebody className={'p-6 border-r-4 bg-slate-100 border-primary dark:border-slate-400 dark:bg-slate-800 dark:border-x-darkprimaryhover xs:mb-4'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-right tracking-tight text-gray-900 dark:text-white'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                    </Blockquotecontent>
                </Blockquotebody>
            </div>
            <hr className='my-10'/>
            <div className='gap-11 columns-2 md:columns-2 sm:columns-1 xs:columns-1'>
                <Blockquotebody className={'p-6 border-l-4 bg-slate-100 border-primary dark:border-slate-400 dark:bg-slate-800 dark:border-x-darkprimaryhover xs:mb-4'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-left tracking-tight text-gray-900 dark:text-white'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                        <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
                <Blockquotebody className={'p-6 border-r-4 bg-slate-100 border-primary dark:border-slate-400 dark:bg-slate-800 dark:border-x-darkprimaryhover xs:mb-4'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-right tracking-tight text-gray-900 dark:text-white'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id.
                        <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
            </div>
            <hr className='my-10'/>
            <div className='gap-11 columns-2 md:columns-2 sm:columns-1 xs:columns-1 '>
                <Blockquotebody className={'p-6 pt-16 border-l-4 bg-slate-100 border-primary dark:border-slate-400 dark:bg-slate-800 dark:border-x-darkprimaryhover xs:mb-4 relative'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-left tracking-tight text-gray-900 dark:text-white before:text-primary'}>
                        <p className='-mt-0 left-3 font-bold text-6xl -z-[-1] opacity-50 absolute top-1 text-primary dark:text-slate-500'><FaQuoteRight/></p>    
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                        <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
                <Blockquotebody className={'text-right p-6 pt-16 border-r-4 bg-slate-100 border-primary dark:border-slate-400 dark:bg-slate-800 dark:border-x-darkprimaryhover xs:mb-4 relative'}>
                    <Blockquotecontent className={'text-[18px] font-semibold tracking-tight text-gray-900 dark:text-white before:text-primary'}>
                        <p className='-mt-0 font-bold text-6xl -z-[-1] opacity-50 absolute right-3 top-1 text-primary dark:text-slate-500'><FaQuoteLeft/></p>    
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                        <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
            </div>
            <hr className='my-10'/>
            <div className='gap-11 columns-2 md:columns-2 sm:columns-1 xs:columns-1 '>
                <Blockquotebody className={'p-6 pt-16 bg-primary dark:bg-darkprimary xs:mb-4 rounded-lg relative'}>
                    <Blockquotecontent className={'text-[18px] font-semibold text-left tracking-tight text-white before:text-primary'}>
                        <p className='-mt-0 left-3 font-bold text-6xl -z-[-1] opacity-50 absolute top-1 text-white '><FaQuoteRight/></p>    
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                        <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
                <Blockquotebody className={'text-right p-6 pt-16 bg-primary dark:bg-darkprimary xs:mb-4 rounded-lg relative'}>
                    <Blockquotecontent className={'text-[18px] font-semibold tracking-tight text-white before:text-primary'}>
                        <p className='-mt-0 font-bold text-6xl -z-[-1] opacity-50 absolute right-3 top-1'><FaQuoteLeft/></p>    
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa. Tellus id interdum velit laoreet id donec. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Morbi tempus iaculis urna id. 
                        <p className='mt-3 font-bold'>- John Doe</p>
                    </Blockquotecontent>
                </Blockquotebody>
            </div>
            <hr className='my-10'/>
        </>
    )
  }
export {Blockquotes}