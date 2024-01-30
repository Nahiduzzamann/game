import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AboutUs = () => {
  const { selectedLanguage } = useContext(AuthContext);
  return (
    <div className="p-5">
      <h1 className="text-center p-5 font-bold border-b-4 border-indigo-500 text-3xl">
       
        {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }

      </h1>

      <p className="font-bold pt-5 pb-2">{
          selectedLanguage ==='en' ? " ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>

      <p className="font-bold pt-5 pb-2 underline underline-offset-5">
        {
          selectedLanguage ==='en' ? " ABOUT US":"আমাদের সম্পর্কে"
        }
      </p>
      <p className="font-medium">
        {selectedLanguage ==='en'
          ? "40XBET is an online gambling company, offering a wide range of betting and casino options. Founded in 2021, 40XBET began as a cricket exchange platform serving the South Asian market. Our goal is very simple: to provide high-quality entertainment and gaming to our customer base."
          : "40XBET হল একটি অনলাইন জুয়া কোম্পানি, বিস্তৃত পরিসরে বেটিং অফার করে এবং ক্যাসিনো বিকল্প। 2021 সালে প্রতিষ্ঠিত, 40XBET একটি ক্রিকেট বিনিময় হিসাবে শুরু হয়েছিল প্ল্যাটফর্ম দক্ষিণ এশিয়ার বাজার পরিবেশন করে। আমাদের লক্ষ্য খুব সহজ: থেকে আমাদের গ্রাহক বেস উচ্চ মানের বিনোদন এবং গেমিং প্রদান."}
      </p>

      <p className="font-bold pt-5 pb-2 underline underline-offset-5">
        
        {
          selectedLanguage ==='en' ? " Sports Betting":"ক্রীড়া পণ"
        }
      </p>
      <p className="font-medium">
      {
          selectedLanguage ==='en' ? "40XBET provides extensive sports betting opportunities. Users can place bets on various sports events including IPL, World Cup, Big Bash League, CPL, T20, Test Cricket, and ICC matches."
          :"40XBET ব্যাপক স্পোর্টস বেটিং সুযোগ প্রদান করে। ব্যবহারকারীরা IPL, বিশ্বকাপ, বিগ ব্যাশ লিগ, CPL, T20, টেস্ট ক্রিকেট, এবং ICC ম্যাচ সহ বিভিন্ন ক্রীড়া ইভেন্টে বাজি রাখতে পারে।"
      }
      </p>

      <p className="font-bold pt-5 pb-2 underline underline-offset-5">
       
        {
          selectedLanguage ==='en' ? "Casino Games":"ক্যাসিনো গেম"
        }
      </p>
      <p className="font-medium">
      {
          selectedLanguage ==='en' ? "40XBET offers a range of casino games. Users can enjoy games like roulette, poker, baccarat, as well as all the latest live casino trendsfrom industry leading providers like Pragmatic Play or Evolution Gaming."
          :"40XBET ক্যাসিনো গেমের একটি পরিসীমা অফার করে। ব্যবহারকারীরা গেমস উপভোগ করতে পারবেন রুলেট, পোকার, ব্যাকার্যাট, সেইসাথে সব সর্বশেষ লাইভ ক্যাসিনো প্রবণতা প্রাগম্যাটিক প্লে বা ইভোলিউশন গেমিংয়ের মতো শিল্পের শীর্ষস্থানীয় সরবরাহকারীদের থেকে।"
        }
        
      </p>

      <p className="font-bold pt-5 pb-2 underline underline-offset-5">
        
        {
          selectedLanguage ==='en' ? "Mobile Application":"মোবাইল অ্যাপ্লিকেশন"
        }
      </p>
      <p className="font-medium">
        {
          selectedLanguage ==='en' ? "40XBET offers a mobile application that replicates all the gambling features found on the official site. The app provides a more streamlined and expeditious interface for users."
          :"40XBET একটি মোবাইল অ্যাপ্লিকেশন অফার করে যা অফিসিয়াল সাইটে পাওয়া সমস্ত জুয়া বৈশিষ্ট্যের প্রতিলিপি করে। অ্যাপটি ব্যবহারকারীদের জন্য আরও সুগম এবং দ্রুত ইন্টারফেস প্রদান করে।"
        }
      </p>

      <p className="font-bold pt-5 pb-2 underline underline-offset-5">
        
        {
          selectedLanguage ==='en' ? "Security And Customer Service":"নিরাপত্তা এবং গ্রাহক সেবা"
        }
      </p>
      <p className="font-medium pb-5">
        
        {
          selectedLanguage ==='en' ? "40XBET prioritizes security and safety. It uses advanced encryption technology to keep user information secure¹. The platform also offers24/7 customer service."
          :"40XBET নিরাপত্তা এবং নিরাপত্তাকে অগ্রাধিকার দেয়। এটি উন্নত এনক্রিপশন ব্যবহার করে  ব্যবহারকারীর তথ্য নিরাপদ রাখতে প্রযুক্তি¹। প্ল্যাটফর্মটিও অফার করে  24/7 গ্রাহক পরিষেবা।"
        }
      </p>
    </div>
  );
};

export default AboutUs;
