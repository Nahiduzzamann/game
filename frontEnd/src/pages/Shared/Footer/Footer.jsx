import React, { useContext } from 'react';
import { IoGameControllerOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from '../../../providers/AuthProvider';
const Footer = () => {
    const { selectedLanguage } = useContext(AuthContext);
    return (
        <div className='bg-[#EBEBEB] border-t-4 border-indigo-200'>
            <div className='px-6 mx-auto mt-5  p-5'>
            <div className='flex gap-10 underline underline-offset-8  flex-wrap'>
                <Link to="/info/Terms&Conditions" className="font-bold py-2 rounded hover:text-red-400">
                {
          selectedLanguage ==='en' ? "Terms And Conditions":"শর্তাবলী"
        }
        </Link>
                <Link to="/info/aboutUs" className="font-bold py-2 rounded hover:text-red-400">
                    {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </Link>
                <Link to="/info/faq" className="font-bold py-2 rounded hover:text-red-400"> 
                {
          selectedLanguage ==='en' ? "FAQ":"এফএকিউ"
        }
        </Link>
                <Link to="/info/contactUs" className="font-bold py-2 rounded hover:text-red-400">
                {
          selectedLanguage ==='en' ? "Contact Us":"যোগাযোগ করুন"
        }
                </Link>
            </div>

            <div className='grid lg:grid-cols-3 gap-24 font-sans'>
                <div className='pt-5'>
                    <p className='font-bold h2 pb-4'>
                    {
          selectedLanguage ==='en' ? "Bangladesh's Best Cricket Exchange":"বাংলাদেশের সেরা ক্রিকেট বিনিময়"
        }
        </p>
                       <p className=''>{
          selectedLanguage ==='en' ? "Play with the premium cricket exchange in Bangladesh.  Best odds and all games available. We provide FREE livestreaming  for ALL cricket matches. Check out our promotions for Cricket Exchange here."
          :"বাংলাদেশে প্রিমিয়াম ক্রিকেট এক্সচেঞ্জের সাথে খেলুন। সেরা মতভেদ এবং সমস্ত গেম উপলব্ধ। আমরা সমস্ত ক্রিকেট ম্যাচের জন্য বিনামূল্যে লাইভস্ট্রিমিং প্রদান করি। এখানে ক্রিকেট এক্সচেঞ্জের জন্য আমাদের প্রচার দেখুন।"
        }
        </p><br></br>

                        <p className='font-bold h2 pb-4'>
                        {
          selectedLanguage ==='en' ? "Live Casino Games & Online Casino Games in Bangladesh":"বাংলাদেশে লাইভ ক্যাসিনো গেম এবং অনলাইন ক্যাসিনো গেম"
        }
        </p>
                        <p>
                          {
          selectedLanguage ==='en' ? "Online Casino Bangladesh 40XBET provides you with the largest suite of games that have interesting gameplays and great rewards upon winning. Popular developers such as Evolution Gaming (Evo Gaming), Super Spade Gaming, Pragmatic Play and AE Casino  are all available at 40XBET. Choose 40XBET for the Best Online Casino Bangladesh Experience 40XBET is an exclusive live casino and sportsbook provider with over 1000+ games to choose from Look no further as you can find Super Spade Gaming, AE Casino and Evo Gaming and Pragmatic Play   over at 40XBET! Register with only afew details and you will be able to play live casino games like Baccarat, Roulette, Blackjack and Sicbo at 40XBET."
          :"অনলাইন ক্যাসিনো বাংলাদেশ 40XBET আপনাকে গেমের সবচেয়ে বড় স্যুট প্রদান করে যেগুলিতে আকর্ষণীয় গেমপ্লে এবং জেতার পরে দুর্দান্ত পুরস্কার রয়েছে। ইভোলিউশন গেমিং (ইভো গেমিং), সুপার স্পেড গেমিং, প্রাগম্যাটিক প্লে এবং AE ক্যাসিনোর মতো জনপ্রিয় বিকাশকারীরা 40XBET-এ উপলব্ধ। সেরা অনলাইন ক্যাসিনোর জন্য 40XBET চয়ন করুন বাংলাদেশের অভিজ্ঞতা 40XBET হল একটি এক্সক্লুসিভ লাইভ ক্যাসিনো এবং স্পোর্টসবুক প্রদানকারী যার মধ্যে 1000+ গেমগুলি বেছে নেওয়ার জন্য আর দেখুন না কারণ আপনি 40XBET এ সুপার স্পেড গেমিং, AE ক্যাসিনো এবং ইভো গেমিং এবং প্রাগম্যাটিক প্লে ওভার খুঁজে পেতে পারেন! শুধুমাত্র কিছু বিবরণ দিয়ে নিবন্ধন করুন এবং আপনি 40XBET-এ Baccarat, Roulette, Blackjack এবং Sicbo-এর মতো লাইভ ক্যাসিনো গেম খেলতে সক্ষম হবেন।"
        }
        </p>
                  </div>

                  <div className='pt-5'>
                    <p className='font-bold h2 pb-4'>
                    {
          selectedLanguage ==='en' ? "Sports Betting accordion":"ক্রীড়া বেটিং অ্যাকর্ডিয়ন"
        }
        </p>
                       <p>
                       {
          selectedLanguage ==='en' ? "40XBET has the leading sportsbook that are well known to  experience gamblers and has plenty of varieties. From sports betting, cricket exchange, cricket betting and back & lay.Looking to find out the livescore of cricket, IPL, World Cup, Big Bash League,CPL, T20, Test Cricket or ICC! Find all live scores over at 40XBET with free livestreaming. Register and open up our app,  with tons of variations to play with, you will have the best experience and mobile sportsbook at 40XBET 40XBET has an exclusive sportsbook for sports related activities and all your favourite sports.With every sports game available to bet, place your winning bet with 40XBET today!":"40XBET-এর নেতৃস্থানীয় স্পোর্টসবুক রয়েছে যা জুয়াড়িদের অভিজ্ঞতার জন্য সুপরিচিত এবং প্রচুর বৈচিত্র রয়েছে। স্পোর্টস বেটিং, ক্রিকেট এক্সচেঞ্জ, ক্রিকেট বেটিং এবং ব্যাক অ্যান্ড লেয়ার থেকে। ক্রিকেট, আইপিএল, বিশ্বকাপ, বিগ ব্যাশ লিগ, সিপিএল, টি-টোয়েন্টি, টেস্ট ক্রিকেট বা আইসিসির লাইভস্কোর খুঁজে বের করতে চাই! বিনামূল্যে লাইভস্ট্রিমিং সহ 40XBET-এ সমস্ত লাইভ স্কোর খুঁজুন। রেজিস্টার করুন এবং আমাদের অ্যাপ খুলুন, খেলার জন্য প্রচুর বৈচিত্র্য সহ, আপনি 40XBET-এ সর্বোত্তম অভিজ্ঞতা এবং মোবাইল স্পোর্টসবুক পাবেন 40XBET-এ খেলাধুলা সংক্রান্ত ক্রিয়াকলাপ এবং আপনার সমস্ত প্রিয় খেলাধুলার জন্য একটি এক্সক্লুসিভ স্পোর্টসবুক রয়েছে৷ প্রতিটি স্পোর্টস গেমের সাথে বাজি ধরার জন্য উপলব্ধ, স্থান আজ 40XBET এর সাথে আপনার বিজয়ী বাজি!"
        }</p><br></br>

                        <p className='font-bold h2 pb-4'>
                        {
          selectedLanguage ==='en' ? "Table Games - Spribe & Kingmaker":"টেবিল গেম - স্প্রাইব এবং কিংমেকার"
        }
        </p>
                        <p>
                            {
          selectedLanguage ==='en' ? "Look no further as 40XBET comes with the most popular table game providers such as Spribe  & Kingmaker. Play with the most popular online casino in Bangladesh."
          :"আর তাকাবেন না কারণ 40XBET স্প্রাইব এবং কিংমেকারের মতো জনপ্রিয় টেবিল গেম সরবরাহকারীদের সাথে আসে। বাংলাদেশের সবচেয়ে জনপ্রিয় অনলাইন ক্যাসিনো নিয়ে খেলুন।"
        }
        </p>
                            <p className='font-bold h2 pb-4 pt-5'>
                            {
          selectedLanguage ==='en' ? "Payments Options":"পেমেন্ট অপশন"
        }
        </p>
                        <p>
                            {
          selectedLanguage ==='en' ? "The best online casino sites offer a variety of ways to deposit and withdraw money. This makes the games accessible to every individuals based on  their own preferences. We provide different kinds of payments choices for our customers,   including e-wallets. Deposit with e-Wallets in Bangladesh."
          :"সেরা অনলাইন ক্যাসিনো সাইটগুলি অর্থ জমা এবং উত্তোলনের বিভিন্ন উপায় অফার করে। এটি প্রতিটি ব্যক্তির নিজস্ব পছন্দের ভিত্তিতে গেমগুলিকে অ্যাক্সেসযোগ্য করে তোলে। আমরা ই-ওয়ালেট সহ আমাদের গ্রাহকদের জন্য বিভিন্ন ধরণের অর্থপ্রদানের বিকল্প সরবরাহ করি। বাংলাদেশে ই-ওয়ালেটে জমা করুন।"
        }</p>
                  </div>

                  <div className='pt-5'>
                    <p className='font-bold h2 pb-4'>
                    {
          selectedLanguage ==='en' ? "Bangladesh's Premium Cricket Exchange":"বাংলাদেশের প্রিমিয়াম ক্রিকেট এক্সচেঞ্জ"
        }
        </p>
                       <p>
                         {
          selectedLanguage ==='en' ? "Bangladesh's only premium casino with an online betting pass. Get up to 100 FREE rewards by participating in 40XBET's VIP Pass. Play premium cricket exchange at 40XBET and get rewarded! Bet ICC, bet IPL, bet T20, bet BBL,bet CPL, bet Test Cricket with us at 40XBET and get rewarded!"
          :"অনলাইন বেটিং পাস সহ বাংলাদেশের একমাত্র প্রিমিয়াম ক্যাসিনো। 40XBET-এর VIP পাসে অংশগ্রহণ করে 100টি পর্যন্ত বিনামূল্যে পুরস্কার পান। 40XBET এ প্রিমিয়াম ক্রিকেট এক্সচেঞ্জ খেলুন এবং পুরস্কৃত করুন! আইসিসি বাজি ধরুন, আইপিএল বাজি ধরুন, টি২০ বাজি ধরুন, বিবিএল বাজি ধরুন, সিপিএল বাজি রাখুন, 40XBET-এ আমাদের সাথে টেস্ট ক্রিকেট বাজি রাখুন এবং পুরস্কৃত পান!"

        }
        </p><br></br>

                        <p className='font-bold h2 pb-4'>
                        
                        {
          selectedLanguage ==='en' ? "Online Gaming Providers that you should check out":"অনলাইন গেমিং প্রদানকারী যে আপনি চেক আউট করা উচিত"
        }
        </p>
                        <p>
                        {
          selectedLanguage ==='en' ? "The most popular online casino site in Bangladesh that holds a rising number of best casino providers from all over the world. A wide range of casino games will be available for players to encounter and play. Try out instant deposit and withdraw cash at anytime and anywhere. Spot every online casino games in our site, such as Live Casino, Slots, Cricket Exchange, Cricket Betting, Fishing, TV and Score. Being excited to become a member to enjoy the Promos, including  welcome bonus and reload bonus in term of new member, sport-book and slot game."
          :"বাংলাদেশের সবচেয়ে জনপ্রিয় অনলাইন ক্যাসিনো সাইট যা সারা বিশ্ব থেকে সেরা ক্যাসিনো প্রদানকারীর সংখ্যা বাড়ছে। খেলোয়াড়দের মুখোমুখি হতে এবং খেলার জন্য ক্যাসিনো গেমের বিস্তৃত পরিসর পাওয়া যাবে। তাত্ক্ষণিক জমা করার চেষ্টা করুন এবং যে কোনও সময় এবং যে কোনও জায়গায় নগদ উত্তোলন করুন। আমাদের সাইটে প্রতিটি অনলাইন ক্যাসিনো গেম স্পট করুন, যেমন লাইভ ক্যাসিনো, স্লট, ক্রিকেট এক্সচেঞ্জ, ক্রিকেট বেটিং, ফিশিং, টিভি এবং স্কোর। নতুন সদস্য, স্পোর্ট-বুক এবং স্লট গেমের মেয়াদে স্বাগত বোনাস এবং পুনরায় লোড বোনাস সহ প্রচারগুলি উপভোগ করার জন্য সদস্য হতে আগ্রহী।"
        }</p>
                  </div>
            </div>

            <div className='grid md:grid-cols-3 gap-24 pt-10'>
                <div className=''>
                <p className='font-bold h2 pb-4'>
                
                {
          selectedLanguage ==='en' ? "Responsible Games":"দায়িত্বশীল গেম"
        }
        </p>
                <div className="flex">
                <IoGameControllerOutline className='text-white text-[45px] bg-blue-500 rounded-lg p-1 m-2'/>
                </div>
                </div>
                <div>
                <p className='font-bold h2 pb'>
                {
          selectedLanguage ==='en' ? "Certified By":"দ্বারা প্রত্যয়িত"
        }
        </p>
                <div className="">
                    <a href=""><img className="w-full max-w-64" src={logo} /></a>
                    {/* <h1 className='text-red-400 text-[45px] italic font-bold'>BABU<span className='text-yellow-500'>88</span></h1>
                           <span className='ml-20 text-white-400 italic text-[45px] font-bold leading-3'>official</span> */}
                </div>
                </div>
                <div>
                <p className='font-bold h2 pb-4'>
                {
          selectedLanguage ==='en' ? "Find Us":"আমাদের খোজ"
        }
        </p>
                <div className="flex flex-wrap ">
                <FaFacebookF className='text-white text-[45px] bg-blue-500 rounded-lg p-1 m-2'/>
                <FaInstagram className='text-white text-[45px] bg-blue-500 rounded-lg p-1 m-2'/>
                <FaTwitter className='text-white text-[45px] bg-blue-500 rounded-lg p-1 m-2'/>
                <FaYoutube className='text-white text-[45px] bg-blue-500 rounded-lg p-1 m-2'/>
                <TiSocialLinkedin className='text-white text-[45px] bg-blue-500 rounded-lg p-1 m-2'/>
                </div>
                </div>
                
            </div>

            <div className='grid grid-cols-1 pt-5'>
                <div className=''>
                    <p className='h2 pt-5'>
                    {
          selectedLanguage ==='en' ? "Copyright © 2024 40XBET.All rights are reserved.":"কপিরাইট © 2024 40XBET. সমস্ত অধিকার সংরক্ষিত।"
        }
        </p>
                </div>
                
            </div>

        </div>
        </div>



    );
};

export default Footer;