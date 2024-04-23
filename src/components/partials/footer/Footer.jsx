import React from 'react'
import { Link } from 'react-router-dom'
import { bottomLinks, footerLinks } from './links'

const Footer = () => {
  return (
    <footer className='container ml-auto'>
        <div className='grid grid-cols-5 w-[80%] gap-5 mb-10'>
            {footerLinks.map((item, key)=>{
                return(
                    <div className='footer-link' key={key}>
                        <h3 className='mb-12 text-lg'>{item.title}</h3>
                        <ul className='opacity-70 space-y-6'>
                            {item.links.map((link, key) => <li key={key} className='hover:font-semibold'><Link to={`${link}`}>{link.label}</Link></li>)}
                        </ul>
                    </div>
                )
            })}
        </div>

            <div className="border-t-[2px] flex flex-col">
                {bottomLinks.map((item, key)=>{
                    return(
                        <div className="footerBottom " key={key}>
                            <ul className='mt-7 hover:underline'> 
                                {item.botlinks.map((link, key) => <li key={key}><Link to={`${link}`}>{link.title}</Link></li>)}
                            </ul>
                        </div>
                    )
                })}
            </div>
                
                
    </footer>
  )
}

export default Footer
