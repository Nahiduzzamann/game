import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Faq = () => {
  const { selectedLanguage } = useContext(AuthContext);
    return (
        <div className='p-5'>
            <h1 className='text-center p-5 font-bold border-b-4 border-indigo-500 text-3xl'>
            {
          selectedLanguage ==='en' ? "FAQ":"FAQ"
        }
        </h1>

            <p className='font-bold pt-5 pb-2'>
            {
          selectedLanguage ==='en' ? "FAQ":"FAQ"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Age Requirement":"বয়সের প্রয়োজনীয়তা"
        }
        </p>
            <p className='font-medium'>
            {
          selectedLanguage ==='en' ? "40XBET's customers must be 18 years of age or older and agree to abide by the terms and conditions set by the company.":"40XBET-এর গ্রাহকদের বয়স 18 বছর বা তার বেশি হতে হবে এবং কোম্পানির দ্বারা নির্ধারিত শর্তাবলী মেনে চলতে সম্মত হতে হবে।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Forgot Your Username Or Password?":"আপনার ব্যবহারকারী নাম বা পাসওয়ার্ড ভুলে গেছেন?"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "Customers can automatically link to online customer service by clicking 'Forgot Password'.The 24-hour online customer service will provide you with a solution after passing a professional verification plan.":"গ্রাহকরা 'পাসওয়ার্ড ভুলে গেছেন' ক্লিক করে স্বয়ংক্রিয়ভাবে অনলাইন গ্রাহক পরিষেবার সাথে লিঙ্ক করতে পারেন৷ 24-ঘন্টা অনলাইন গ্রাহক পরিষেবা পেশাদার যাচাইকরণ পরিকল্পনা পাস করার পরে আপনাকে একটি সমাধান প্রদান করবে৷"
        }
        </p>

          <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
          {
          selectedLanguage ==='en' ? "How To Deposit":"কিভাবে জমা করতে হয়"
        }
        </p>
            <p className='font-medium'>
            {
          selectedLanguage ==='en' ? "There are several ways to deposit the platform: bank transfer, DhaPay (h5, secured), DhaPay (h5, secured).":"প্ল্যাটফর্ম জমা করার বিভিন্ন উপায় রয়েছে: ব্যাংক স্থানান্তর, DhaPay (h5, সুরক্ষিত), DhaPay (h5, সুরক্ষিত)।"
        }
        </p>

          <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
          {
          selectedLanguage ==='en' ? "Steps To Deposit":"জমা করার পদক্ষেপ"
        }
        </p>
            <p className='font-medium'>
            {
          selectedLanguage ==='en' ? "1. Please click on 'deposit' at the top right of the homepage to enter the platform deposit page.":"1. প্লাটফর্ম ডিপোজিট পৃষ্ঠায় প্রবেশ করতে হোমপেজের উপরের ডানদিকে 'ডিপোজিট'-এ ক্লিক করুন।"
        }
        <br></br>
            
            {
          selectedLanguage ==='en' ? "2. After entering the amount you want to deposit, click 'Select Channel' on the right.":"2. আপনি যে পরিমাণ জমা করতে চান তা প্রবেশ করার পরে, ডানদিকে 'চ্যানেল নির্বাচন করুন' এ ক্লিক করুন।"
        }
        <br></br>
            {
          selectedLanguage ==='en' ? "3. You can click below deposit channels.":"3. আপনি ডিপোজিট চ্যানেলের নিচে ক্লিক করতে পারেন।"
        }
        <br></br>
           
            {
          selectedLanguage ==='en' ? " (The upper and lower limits of recharge are subject to the payment channel)":"(রিচার্জের উপরের এবং নিম্ন সীমাগুলি পেমেন্ট চ্যানেলের সাপেক্ষে)"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "How To Withdraw Money":"কিভাবে টাকা তোলা যায়"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "By clicking 'Withdraw' at the top right of the homepage, enter your withdrawal password and the amount you want to withdraw, and then click the withdrawal after completion.":"হোমপেজের উপরের ডানদিকে 'প্রত্যাহার করুন'-এ ক্লিক করে, আপনার তোলার পাসওয়ার্ড এবং আপনি যে পরিমাণ টাকা তুলতে চান তা লিখুন এবং তারপর সম্পূর্ণ হওয়ার পরে প্রত্যাহারে ক্লিক করুন।"
        }
        <br></br>
             
             {
          selectedLanguage ==='en' ? "For the first withdrawal, please bind the withdrawal bank card to the bank card message.":"প্রথম প্রত্যাহারের জন্য, অনুগ্রহ করে প্রত্যাহার ব্যাঙ্ক কার্ডটিকে ব্যাঙ্ক কার্ড বার্তার সাথে আবদ্ধ করুন৷"
        }
             <br></br>
             
             {
          selectedLanguage ==='en' ? "Withdrawal limit is ৳800, withdrawal limit is ৳30,000 per day.":"উত্তোলনের সীমা হল ৳800, তোলার সীমা প্রতিদিন ৳30,000৷"
        }
             </p>

           <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
           {
          selectedLanguage ==='en' ? "Personal Data Security":"ব্যক্তিগত তথ্য নিরাপত্তা"
        }
        </p>
            <p className='font-medium'>
            {
          selectedLanguage ==='en' ? "The company will ensure that your personal information is not disclosed to any third party.":"কোম্পানি নিশ্চিত করবে যে আপনার ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের কাছে প্রকাশ করা হবে না।"
        }
        <br></br>
            
            {
          selectedLanguage ==='en' ? "The company will also ensure the security of your personal information and ensure that your information is restricted to our company.":"কোম্পানি আপনার ব্যক্তিগত তথ্যের নিরাপত্তা নিশ্চিত করবে এবং নিশ্চিত করবে যে আপনার তথ্য আমাদের কোম্পানিতে সীমাবদ্ধ রয়েছে।"
        }
        </p>

          <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
          {
          selectedLanguage ==='en' ? "Central Wallet":"কেন্দ্রীয় ওয়ালেট"
        }
        </p>
            <p className='font-medium pb-5'>
            {
          selectedLanguage ==='en' ? "All deposited amount and bonus will be deposited into a single central wallet and bets can be placed.":"সমস্ত জমাকৃত পরিমাণ এবং বোনাস একটি একক কেন্দ্রীয় ওয়ালেটে জমা করা হবে এবং বাজি রাখা যেতে পারে।"
        }
        </p>
        </div>
    );
};

export default Faq;