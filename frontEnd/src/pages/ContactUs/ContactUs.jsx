import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const ContactUs = () => {
    const { selectedLanguage } = useContext(AuthContext);
    return (
        <div className='p-5'>
            <h1 className='text-center p-5 font-bold border-b-4 border-indigo-500 text-3xl'>
            {
          selectedLanguage ==='en' ? "CONTACT US":"যোগাযোগ করুন"
        }
        </h1>

            <p className='font-bold pt-5 pb-2'>
            {
          selectedLanguage ==='en' ? "CONTACT US":"যোগাযোগ করুন"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Customer Service":"গ্রাহক সেবা"
        }
        </p>
            <p className='font-medium'>
            {
          selectedLanguage ==='en' ? "CS@40XBET.com":"CS@40XBET.com"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Marketing":"মার্কেটিং"
        }
        </p>
            <p className='font-medium'>
            {
          selectedLanguage ==='en' ? "Marketing@40XBET.com":"Marketing@40XBET.com"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Affiliate":"অধিভুক্ত"
        }
        </p>
            <p className='font-medium border-b-4 border-indigo-200 pb-6'>
            {
          selectedLanguage ==='en' ? "Affiliate@40XBET.com":"Affiliate@40XBET.com"
        }
        </p>
            
            <p className='font-bold pt-5 pb-2 underline underline-offset-5'></p>
            <p className='font-medium'></p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'></p>
            <p className='font-medium'></p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'></p>
            <p className='font-medium'></p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'></p>
            <p className='font-medium'></p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'></p>
            <p className='font-medium'></p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'></p>
            <p className='font-medium'></p>

          <p className='font-bold pt-5 pb-2 underline underline-offset-5'></p>
            <p className='font-medium pb-5'></p>

        </div>
    );
};

export default ContactUs;