import react from 'react';


const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white text-center py-6 mt-10'>
            <div className='container mx-auto text-center'>
                <p className='mb-2'>
                    & copy: {new Date().getFullYear()} Ecommerce App

                </p>
                <div className='space-x-4'>
                    <a href='/about' className='px-2'>Privacy Policy</a>
                    <a href='/contact' className='px-2'>Terms of Service</a>
                    <a href='/privacy' className='px-2'>Contact Us</a>
                </div>

            </div>
            </footer>
    )
    
}
export default Footer;