import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const ReferralsSection = () => {
  const { selectedLanguage } = useContext(AuthContext);
  return (
    <div className="mx-6 my-6 rounded-md bg-[#D9D9D9] p-6 ">
      <p className="lg:text-4xl md:text-2xl text-xl font-bold text-gray-800">
       
        {
          selectedLanguage ==='en' ? " Bangladesh’s Trusted Online Casino and Cricket Exchange":"বাংলাদেশের বিশ্বস্ত অনলাইন ক্যাসিনো এবং ক্রিকেট এক্সচেঞ্জ"
        }
      </p>
      <p className="lg:text-2xl md:text-xl text-sm leading-8 pt-3 text-gray-700">
        {
          selectedLanguage ==='en' ? "40XBET is the premier online casino in India and Bangladesh, offering a  variety of games for mobile and desktop users. Players can enjoy roulette, poker, baccarat, blackjack, and even cricket exchange betting options, with a chance to win real money online. Our platform provides fast, seamless gameplay, and great bonuses for players. We prioritize safety and security, using advanced encryption technology to protect your information, and our customer service is available 24/7. Join 40XBET today for the best online casino gaming and cricket exchange betting experience in Bangladesh."
          :"40XBET হল ভারত এবং বাংলাদেশের প্রধান অনলাইন ক্যাসিনো, মোবাইল এবং ডেস্কটপ ব্যবহারকারীদের জন্য বিভিন্ন ধরনের গেম অফার করে। খেলোয়াড়রা অনলাইনে আসল টাকা জেতার সুযোগ সহ রুলেট, পোকার, ব্যাকার্যাট, ব্ল্যাকজ্যাক এবং এমনকি ক্রিকেট এক্সচেঞ্জ বাজির বিকল্পগুলি উপভোগ করতে পারে। আমাদের প্ল্যাটফর্ম খেলোয়াড়দের জন্য দ্রুত, বিরামহীন গেমপ্লে এবং দুর্দান্ত বোনাস প্রদান করে। আমরা আপনার তথ্য রক্ষা করতে উন্নত এনক্রিপশন প্রযুক্তি ব্যবহার করে নিরাপত্তা এবং নিরাপত্তাকে অগ্রাধিকার দিই, এবং আমাদের গ্রাহক পরিষেবা 24/7 উপলব্ধ। বাংলাদেশের সেরা অনলাইন ক্যাসিনো গেমিং এবং ক্রিকেট এক্সচেঞ্জ বেটিং অভিজ্ঞতার জন্য আজই 40XBET-এ যোগ দিন।"
        }
      </p>
    </div>
  );
};

export default ReferralsSection;
