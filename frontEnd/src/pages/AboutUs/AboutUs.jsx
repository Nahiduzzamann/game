import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AboutUs = () => {
  const { isEnglish } = useContext(AuthContext);
  return (
    <div className="p-5">
      <h1 className="text-center p-5 font-bold border-b-4 border-indigo-500 text-3xl">
        ABOUT US
      </h1>

      <p className="font-bold pt-5 pb-2">ABOUT US</p>

      <p className="font-bold pt-5 pb-2 underline underline-offset-5">
        About Us
      </p>
      <p className="font-medium">
        {isEnglish
          ? "40XBET is an online gambling company, offering a wide range of betting and casino options. Founded in 2021, 40XBET began as a cricket exchange platform serving the South Asian market. Our goal is very simple: to provide high-quality entertainment and gaming to our customer base."
          : "40XBET হল একটি অনলাইন জুয়া কোম্পানি, বিস্তৃত পরিসরে বেটিং অফার করে এবং ক্যাসিনো বিকল্প। 2021 সালে প্রতিষ্ঠিত, 40XBET একটি ক্রিকেট বিনিময় হিসাবে শুরু হয়েছিল প্ল্যাটফর্ম দক্ষিণ এশিয়ার বাজার পরিবেশন করে। আমাদের লক্ষ্য খুব সহজ: থেকে আমাদের গ্রাহক বেস উচ্চ মানের বিনোদন এবং গেমিং প্রদান."}
      </p>

      <p className="font-bold pt-5 pb-2 underline underline-offset-5">
        Sports Betting
      </p>
      <p className="font-medium">
        40XBET provides extensive sports betting opportunities. Users can place
        bets on various sports events including IPL, World Cup, Big Bash League,
        CPL, T20, Test Cricket, and ICC matches.
      </p>

      <p className="font-bold pt-5 pb-2 underline underline-offset-5">
        Casino Games
      </p>
      <p className="font-medium">
        40XBET offers a range of casino games. Users can enjoy games like
        roulette, poker, baccarat, as well as all the latest live casino trends
        from industry leading providers like Pragmatic Play or Evolution Gaming.
      </p>

      <p className="font-bold pt-5 pb-2 underline underline-offset-5">
        Mobile Application
      </p>
      <p className="font-medium">
        40XBET offers a mobile application that replicates all the gambling
        features found on the official site. The app provides a more streamlined
        and expeditious interface for users.
      </p>

      <p className="font-bold pt-5 pb-2 underline underline-offset-5">
        Security And Customer Service
      </p>
      <p className="font-medium pb-5">
        40XBET prioritizes security and safety. It uses advanced encryption
        technology to keep user information secure¹. The platform also offers
        24/7 customer service.
      </p>
    </div>
  );
};

export default AboutUs;
