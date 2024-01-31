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
                    <p className='font-bold h2 pb-4'>Bangladesh's Best Cricket Exchange</p>
                       <p className=''>Play with the premium cricket exchange in Bangladesh.
                        Best odds and all games available. We provide FREE livestreaming 
                        for ALL cricket matches. Check out our promotions for Cricket Exchange here.</p><br></br>

                        <p className='font-bold h2 pb-4'>Live Casino Games & Online Casino Games in Bangladesh</p>
                        <p>Online Casino Bangladesh 40XBET provides you with the largest suite of games that have
                         interesting gameplays and great rewards upon winning. Popular developers such as
                          Evolution Gaming (Evo Gaming), Super Spade Gaming, Pragmatic Play and AE Casino 
                          are all available at 40XBET. Choose 40XBET for the Best Online Casino Bangladesh Experience
                          40XBET is an exclusive live casino and sportsbook provider with over 1000+ games to choose from
                          Look no further as you can find Super Spade Gaming, AE Casino and Evo Gaming and Pragmatic Play 
                          over at 40XBET! Register with only afew details and you will be able to play live casino games
                          like Baccarat, Roulette, Blackjack and Sicbo at 40XBET.</p>
                  </div>

                  <div className='pt-5'>
                    <p className='font-bold h2 pb-4'>Sports Betting</p>
                       <p>40XBET has the leading sportsbook that are well known to 
                        experience gamblers and has plenty of varieties. From sports betting, cricket
                         exchange, cricket betting and back & lay.
                         Looking to find out the livescore of cricket, IPL, World Cup, Big Bash League,
                        CPL, T20, Test Cricket or ICC!
                       Find all live scores over at 40XBET with free livestreaming. Register and open up our app, 
                       with tons of variations to play with, you will have the best experience and mobile sportsbook at 40XBET
                      40XBET has an exclusive sportsbook for sports related activities and all your favourite sports.
                       With every sports game available to bet, place your winning bet with 40XBET today!
                           </p><br></br>

                        <p className='font-bold h2 pb-4'>Table Games - Spribe & Kingmaker</p>
                        <p>Look no further as 40XBET comes with the most popular table game providers such as Spribe 
                            & Kingmaker. Play with the most popular online casino in Bangladesh.</p>
                            <p className='font-bold h2 pb-4 pt-5'>Payments Options</p>
                        <p>The best online casino sites offer a variety of ways to deposit 
                            and withdraw money. This makes the games accessible to every individuals based on 
                            their own preferences. We provide different kinds of payments choices for our customers, 
                            including e-wallets. Deposit with e-Wallets in Bangladesh.</p>
                  </div>

                  <div className='pt-5'>
                    <p className='font-bold h2 pb-4'>Bangladesh's Premium Cricket Exchange</p>
                       <p>Bangladesh's only premium casino with an online betting pass. Get up to 100 FREE rewards by participating in 40XBET's VIP Pass. Play 
                        premium cricket exchange at 40XBET and get rewarded! Bet ICC, bet IPL, bet T20, bet BBL,
                         bet CPL, bet Test Cricket with us at 40XBET and get rewarded!</p><br></br>

                        <p className='font-bold h2 pb-4'>Online Gaming Providers that you should check out</p>
                        <p>The most popular online casino site in Bangladesh that holds a rising number of best casino providers from all over the world. A wide range of casino games will be available for players to encounter and play. Try out instant deposit and withdraw cash at anytime and anywhere. Spot every online casino games in our site, such as Live Casino, Slots, Cricket Exchange,
                             Cricket Betting, Fishing, TV and Score. Being excited to become a member to enjoy the Promos, including 
                             welcome bonus and reload bonus in term of new member, sport-book and slot game.</p>
                  </div>
            </div>

            <div className='grid md:grid-cols-3 gap-24 pt-10'>
                <div className=''>
                <p className='font-bold h2 pb-4'>Responsible Games</p>
                <div className="flex">
                <IoGameControllerOutline className='text-white text-[45px] bg-blue-500 rounded-lg p-1 m-2'/>
                </div>
                </div>
                <div>
                <p className='font-bold h2 pb'>Certified By</p>
                <div className="">
                    <a href=""><img className="w-full max-w-64" src={logo} /></a>
                    {/* <h1 className='text-red-400 text-[45px] italic font-bold'>BABU<span className='text-yellow-500'>88</span></h1>
                           <span className='ml-20 text-white-400 italic text-[45px] font-bold leading-3'>official</span> */}
                </div>
                </div>
                <div>
                <p className='font-bold h2 pb-4'>Find Us
                {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
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
                    <p className='h2 pt-5'>Copyright © 2024 40XBET.All rights are reserved.
                    {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>
                </div>
                
            </div>

        </div>
        </div>



    );
};

export default Footer;