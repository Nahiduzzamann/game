import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const TermsConditions = () => {
  const { selectedLanguage } = useContext(AuthContext);
  return (
    <div className='p-5'>
      <h1 className='text-center p-5 font-bold border-b-4 border-indigo-500 text-3xl'>
      {
          selectedLanguage ==='en' ? "Terms & Conditions":"শর্তাবলী"
        }
        </h1>

      <p className='font-bold pt-5 pb-2'>{
          selectedLanguage ==='en' ? "Terms & Conditions":"শর্তাবলী"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>{
          selectedLanguage ==='en' ? "Terms & Conditions":"শর্তাবলী"
        }
        </p>
      <p className='font-medium'>
        {
          selectedLanguage ==='en' ? "Welcome to 40XBET, Bangladesh #1 Cricket Exchange & Betting Platform! Register with us and start betting.By opening an account with us, you agree to the following Terms and Conditions."
          :"40XBET, বাংলাদেশ #1 ক্রিকেট এক্সচেঞ্জ এবং বেটিং প্ল্যাটফর্মে স্বাগতম! আমাদের সাথে নিবন্ধন করুন এবং বেটিং শুরু করুন৷ আমাদের সাথে একটি অ্যাকাউন্ট খোলার মাধ্যমে, আপনি নিম্নলিখিত শর্তাবলীতে সম্মত হন৷"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
      {
          selectedLanguage ==='en' ? "Account Terms And Conditions":"অ্যাকাউন্টের নিয়ম ও শর্তাবলী"
        }
        </p>
      <p className='font-medium'>
        {
          selectedLanguage ==='en' ? "To use our services, simply register an account and deposit funds. Please read our Privacy Policy,  Rules and Regulations, Responsible Gambling, and FAQs includingthe provisions with 40XBET Charges that are incorporated into the Terms and Conditions. Should there be any inconsistencies between existing provisions, the Terms and Conditions will prevail."
          :"আমাদের পরিষেবাগুলি ব্যবহার করতে, কেবল একটি অ্যাকাউন্ট নিবন্ধন করুন এবং তহবিল জমা করুন৷ অনুগ্রহ করে আমাদের গোপনীয়তা নীতি, বিধি ও প্রবিধান, দায়িত্বশীল জুয়া খেলা এবং প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী পড়ুন যাতে 40XBET চার্জ সহ নিয়মাবলী এবং শর্তাবলীতে অন্তর্ভুক্ত করা হয়। বিদ্যমান বিধানের মধ্যে কোনো অসঙ্গতি থাকলে, শর্তাবলী প্রাধান্য পাবে।"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
      {
          selectedLanguage ==='en' ? "Your Account":"আপনার অ্যাকাউন্ট"
        }
        </p>
      <p className='font-medium'>
        {
          selectedLanguage ==='en' ? "By opening an account with us, the following representations are required: a)You are at least 18 years of age. Gambling for minors is strictly prohibited and is punishable by law; b) You are capable of taking responsibility of your actions, and can legally bind an agreement with us; c)You agree to provide accurate information, including but not limited to date of birth and country of residence.Furthermore, you agree to inform us of any changes in the foregoing information; d) You are the person whose details are provided in the registration process; e) You are acting as a principal and not as an agent on behalf of a third party; f) You are not an undischarged bankrupt or in a voluntary arrangement with your creditors; g)You are fully responsible in complying with your local, national, federal, state, or other laws regarding bettingand gambling in connection with account registration, placing bets, and using any of our services; h) You will provide proper documentation and information upon request to identify your status, age, address, country of birth, and other such detailsdeemed necessary in connection with opening and maintenance of your account. Furthermore, you agree that we verify the credibility of such information. It is your responsibility to update the foregoing information of any changes. You are responsible for the security and confidentiality of your account. This includes your username and password that is used in logging into your account.You should frequently change your password and never disclose the same to any third party. You undertake to protect yourusername and password and take full responsibility for any risks related to it. If another person manages to access your account,you are solely responsible for all their actions whether or not their access was authorized by you. Furthermore, you here by indemnify us and hold us harmless against all costs, claims, expenses, and damages arising in connection with the use of your account by any third party. You will not sell, attempt to sell, or transfer the benefit of your account to any third party norwill you acquire or attempt to acquire an accountopened and registered in the name of a third party. Manage your gambling activities fairly, securely, and responsibly."
          :"আমাদের সাথে একটি অ্যাকাউন্ট খোলার মাধ্যমে, নিম্নলিখিত উপস্থাপনা প্রয়োজন: ক) আপনার বয়স কমপক্ষে 18 বছর। অপ্রাপ্তবয়স্কদের জন্য জুয়া কঠোরভাবে নিষিদ্ধ এবং আইন দ্বারা শাস্তিযোগ্য; খ) আপনি আপনার কর্মের দায়িত্ব নিতে সক্ষম, এবং আইনত আমাদের সাথে একটি চুক্তি আবদ্ধ করতে পারেন; গ) আপনি সঠিক তথ্য প্রদান করতে সম্মত হন, যার মধ্যে জন্ম তারিখ এবং বসবাসের দেশ সহ কিন্তু সীমাবদ্ধ নয়। উপরন্তু, আপনি পূর্বোক্ত তথ্যের কোনো পরিবর্তন সম্পর্কে আমাদের জানাতে সম্মত হন; ঘ) আপনি সেই ব্যক্তি যার বিবরণ নিবন্ধন প্রক্রিয়ায় প্রদান করা হয়েছে; ঙ) আপনি একজন প্রিন্সিপ্যাল হিসেবে কাজ করছেন এবং তৃতীয় পক্ষের হয়ে এজেন্ট হিসেবে কাজ করছেন না; চ) আপনি দেউলিয়া নন বা আপনার পাওনাদারদের সাথে স্বেচ্ছাসেবী ব্যবস্থায় আছেন; g)আপনি আপনার স্থানীয়, জাতীয়, ফেডারেল, রাজ্য, বা অ্যাকাউন্ট রেজিস্ট্রেশন, বাজি স্থাপন এবং আমাদের যেকোনো পরিষেবা ব্যবহার করার ক্ষেত্রে বাজি এবং জুয়া সম্পর্কিত অন্যান্য আইন মেনে চলার জন্য সম্পূর্ণরূপে দায়ী; h) আপনার অ্যাকাউন্ট খোলার এবং রক্ষণাবেক্ষণের ক্ষেত্রে আপনার স্থিতি, বয়স, ঠিকানা, জন্মের দেশ এবং এই জাতীয় অন্যান্য বিশদ বিবরণ সনাক্ত করার অনুরোধের ভিত্তিতে আপনি যথাযথ ডকুমেন্টেশন এবং তথ্য সরবরাহ করবেন। উপরন্তু, আপনি সম্মত হন যে আমরা এই ধরনের তথ্যের বিশ্বাসযোগ্যতা যাচাই করি। কোনো পরিবর্তনের পূর্বোক্ত তথ্য আপডেট করার দায়িত্ব আপনার। আপনার অ্যাকাউন্টের নিরাপত্তা এবং গোপনীয়তার জন্য আপনি দায়ী। এতে আপনার ব্যবহারকারীর নাম এবং পাসওয়ার্ড অন্তর্ভুক্ত রয়েছে যা আপনার অ্যাকাউন্টে লগ ইন করার জন্য ব্যবহৃত হয়৷ আপনার ঘন ঘন আপনার পাসওয়ার্ড পরিবর্তন করা উচিত এবং কোনো তৃতীয় পক্ষের কাছে প্রকাশ করবেন না৷ আপনি আপনার ব্যবহারকারীর নাম এবং পাসওয়ার্ড সুরক্ষিত করার এবং এর সাথে সম্পর্কিত যে কোনও ঝুঁকির জন্য সম্পূর্ণ দায়বদ্ধতা গ্রহণ করেন। যদি অন্য কোনো ব্যক্তি আপনার অ্যাকাউন্ট অ্যাক্সেস করতে পরিচালনা করে, তবে আপনি তাদের অ্যাক্সেস আপনার দ্বারা অনুমোদিত হোক বা না হোক তার সমস্ত ক্রিয়াকলাপের জন্য সম্পূর্ণরূপে দায়ী৷ তদুপরি, আপনি এখানে আমাদের ক্ষতিপূরণের মাধ্যমে এবং যেকোনো তৃতীয় পক্ষের দ্বারা আপনার অ্যাকাউন্টের ব্যবহারের সাথে সম্পর্কিত সমস্ত খরচ, দাবি, ব্যয় এবং ক্ষতির বিরুদ্ধে আমাদেরকে ক্ষতিপূরণহীন ধরে রেখেছেন। আপনি কোনো তৃতীয় পক্ষের কাছে আপনার অ্যাকাউন্টের সুবিধা বিক্রি করবেন না, বিক্রি করার চেষ্টা করবেন না বা হস্তান্তর করবেন না বা আপনি তৃতীয় পক্ষের নামে খোলা এবং নিবন্ধিত অ্যাকাউন্ট অর্জন বা অর্জন করার চেষ্টা করবেন না। আপনার জুয়া খেলার কার্যক্রম সুষ্ঠু, নিরাপদে এবং দায়িত্বের সাথে পরিচালনা করুন।"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
      {
          selectedLanguage ==='en' ? "Deposit And Withdrawal Of Funds":"তহবিল জমা এবং উত্তোলন"
        }
        </p>
      <p className='font-medium'>
        {
          selectedLanguage ==='en' ? "To start betting, you need to deposit funds. You undertake that: a)All money deposited in your account is untainted with any illegality and does not originated from any illegal activity or source; b) All payments made into your account are authorized and you will not attempt to reverse any payment made into your account or take any action to such extent made by as third party in order to avoid any liability. c) You accept that all transactions may be checked to prevent money laundering and any suspicious transactions will be reported to appropriate authorities. d)You agree that you are not entitled to any interest in your deposits and acknowledge that you shall not treat 40XBET as a financial institution."
          :"বাজি শুরু করতে, আপনাকে তহবিল জমা করতে হবে। আপনি প্রতিশ্রুতি দেন যে: ক) আপনার অ্যাকাউন্টে জমা করা সমস্ত অর্থ কোনও বেআইনিতা ছাড়াই এবং কোনও অবৈধ কার্যকলাপ বা উত্স থেকে উদ্ভূত নয়; খ) আপনার অ্যাকাউন্টে করা সমস্ত অর্থপ্রদান অনুমোদিত এবং আপনি কোনও দায় এড়াতে আপনার অ্যাকাউন্টে করা কোনও অর্থপ্রদানকে রিভার্স করার চেষ্টা করবেন না বা তৃতীয় পক্ষের দ্বারা করা কোনও পদক্ষেপ নেবেন না। গ) আপনি স্বীকার করেন যে মানি লন্ডারিং প্রতিরোধ করার জন্য সমস্ত লেনদেন চেক করা যেতে পারে এবং কোনও সন্দেহজনক লেনদেন যথাযথ কর্তৃপক্ষকে জানানো হবে। d)আপনি সম্মত হন যে আপনি আপনার আমানতের কোন সুদের অধিকারী নন এবং স্বীকার করেন যে আপনি 40XBET কে একটি আর্থিক প্রতিষ্ঠান হিসাবে বিবেচনা করবেন না।"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
      {
          selectedLanguage ==='en' ? "Privacy":"গোপনীয়তা"
        }
        </p>
      <p className='font-medium'>
        {
          selectedLanguage ==='en' ? "All information sent to and received by us are processed under our Privacy Policy. You authorize us, at any time, to use any means necessary to verify your identity and credentials with any third-party providers of information. You agree that, from time to time, we may contact you to inquire about any promotional activity should you win a large sum of money, or place an unusuallysuccessful bet. Should you wish to accept, we may use your name and/or image as necessary."
          :"আমাদের কাছে পাঠানো এবং প্রাপ্ত সমস্ত তথ্য আমাদের গোপনীয়তা নীতির অধীনে প্রক্রিয়া করা হয়। আপনি আমাদের অনুমোদন করেন, যে কোনো সময়ে, যেকোনো তৃতীয় পক্ষের তথ্য প্রদানকারীর সাথে আপনার পরিচয় এবং শংসাপত্র যাচাই করার জন্য প্রয়োজনীয় যেকোনো উপায় ব্যবহার করার জন্য। আপনি সম্মত হন যে, সময়ে সময়ে, আপনি যদি একটি বড় অঙ্কের অর্থ জিততে পারেন, বা অস্বাভাবিকভাবে সফল বাজি রাখতে পারেন তবে আমরা কোনো প্রচারমূলক কার্যকলাপ সম্পর্কে অনুসন্ধান করতে আপনার সাথে যোগাযোগ করতে পারি। আপনি যদি গ্রহণ করতে চান তবে আমরা আপনার নাম এবং/অথবা ছবি ব্যবহার করতে পারি।"
        }
      </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
      {
          selectedLanguage ==='en' ? "Conditions Relating To Betting":"বেটিং সম্পর্কিত শর্তাবলী"
        }
        </p>
      <p className='font-medium'>
        {
          selectedLanguage ==='en' ? "You are responsible for understanding the contents of our site and the operation of the Services; we reserve the right to change the format of the Services in order to enhance such We may determine when the Markets are open for betting and may close the Markets at any time in our absolute discretion. We will at all times use reasonable endeavors to settle Markets as quickly as possible, we give no assurances however, as to the timeframe in which Markets will be settled. You are entirely responsible for the information you give us concerning the offer that you wish to place. We will not be liable for incorrect entries made by you, including data input errors with respect to the odds, price or stake on offer, or incorrect bet requests communicated by you to our operators. If our operators repeat back your bet request incorrectly, it is your responsibility to correct the bet request and inform us of the error. Once you have confirmed the bet request and your bet is matched, you will be liable for that bet if it loses. 40XBET may, in its sole and absolute discretion, decide to suspend betting on a market at any time. In the interests of maintaining integrity and fairness in the Markets, 40XBET may also void certain bets in a market or void a whole Market in its entirety."
          :"আপনি আমাদের সাইটের বিষয়বস্তু এবং পরিষেবার অপারেশন বোঝার জন্য দায়ী; আমরা এই ধরনের উন্নত করার জন্য পরিষেবার বিন্যাস পরিবর্তন করার অধিকার সংরক্ষণ করি আমরা যত তাড়াতাড়ি সম্ভব বাজারগুলি নিষ্পত্তি করার জন্য সর্বদা যুক্তিসঙ্গত প্রচেষ্টা ব্যবহার করব, তবে আমরা কোন আশ্বাস দিই না, কোন সময়সীমার মধ্যে বাজারগুলি নিষ্পত্তি করা হবে৷ আপনি যে অফারটি রাখতে চান সেই বিষয়ে আপনি আমাদের যে তথ্য দেন তার জন্য আপনি সম্পূর্ণরূপে দায়ী। আপনার দ্বারা করা ভুল এন্ট্রির জন্য আমরা দায়বদ্ধ থাকব না, যার মধ্যে তথ্য ইনপুট ত্রুটি, অফারে দাম বা অংশীদারিত্ব, অথবা আমাদের অপারেটরদের কাছে আপনার দ্বারা যোগাযোগ করা ভুল বাজির অনুরোধ সহ। যদি আমাদের অপারেটররা আপনার বাজির অনুরোধটি ভুলভাবে পুনরাবৃত্তি করে, তাহলে বাজির অনুরোধ সংশোধন করা এবং ত্রুটি সম্পর্কে আমাদের অবহিত করা আপনার দায়িত্ব। একবার আপনি বাজির অনুরোধ নিশ্চিত করেছেন এবং আপনার বাজিটি মিলে গেছে, যদি এটি হারে তাহলে আপনি সেই বাজির জন্য দায়ী থাকবেন। 40XBET, তার একক এবং পরম বিবেচনার ভিত্তিতে, যেকোনো সময়ে একটি বাজারে বাজি স্থগিত করার সিদ্ধান্ত নিতে পারে। মার্কেটে অখণ্ডতা এবং ন্যায্যতা বজায় রাখার স্বার্থে, 40XBET একটি বাজারে কিছু নির্দিষ্ট বাজি বাতিল করতে পারে বা একটি সম্পূর্ণ বাজারকে সম্পূর্ণরূপে বাতিল করতে পারে।"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Cancellation, Termination, Suspension, And Breach
      {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>
      <p className='font-medium'>We may restrict your access to 40XBET, suspend or terminate your account, withdraw your offers
        for bets, void any bets outstanding to your account, cancel any unmatched bets or cancel and void any outstanding or matched
        bets in our absolute discretion without cause at any time if: there is a technological failure; a) we suspect that you are engaging
        in illegal or fraudulent activity; b) we suspect that you have (or may have) breached any part of this Agreement; c) we suspect that you
        have breached the terms of a 40XBET promotion; d) we suspect that you are acting in collusion with other players to take unfair advantage of
        a bet/promotion and/or in the course of participating in a bet/promotion, you have become able to guarantee wins and/or profits with no or only
        minimal risk; e) we suspect that your account's "public market data" usage ('public market data' includes market prices, traded volumes and market depth)
        could represent business usage (˜'business usage' includes any use by a betting operator or any use by an individual or organization supplying data or services
        to a betting operator) f) you are prohibited from entering into a bet by any term of your contract of employment or any rule of a sport governing body or other
        professional body which applies to you; or g) you place a bet on any sporting match or event
        in which you take part (or in which a team of which you are a member, or in respect of which you are employed, takes part).
        {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Underage Gambling
      {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>
      <p className='font-medium'>It is illegal for anyone under the age of 18 to register or gamble on 40XBET.
        If we identify that you are under 18 or were under 18 when you entered into any transactions on our site: a)
        We will immediately block you from entering into any betting transactions or withdrawing funds, or using your account; b) We will investigate the claim that you were under age, including whether you have been betting as an agent for or on behalf of another person;
        {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Cancellation Of An Offer For A Bet
      {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>
      <p className='font-medium'>Your cancellation of an unmatched bet becomes effective once we send confirmation of the cancellation. In the event that your cancellation request is not received and processed in good time, you acknowledge that your offer may remain outstanding and available for acceptance. You may not be able to cancel your offer if your bet has been partially or wholly accepted during the interval between your submitting your cancellation request and the confirmation of said request. In this case, the original offer, or part thereof, will be valid and the bet will be concluded.
        {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Minimum And Maximum Bet Stakes
      {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>
      <p className='font-medium'>The minimum and maximum bet depends on the product and/or type of market you are betting on.The amounts are subject to change and may differ depending on the platforms used. You are not allowed to bet below the minimum bet size threshold and doing so may result to account closure Your betting limit is represented by your “Available to Bet” balance and “Exposure Limit” as shown in your account, whichever is lower. In the event that we process an offer for a bet or the acceptance of a bet in an amount outside the applicable thresholds, such bet will nonetheless stand.
        {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Bet Settlement
      {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>
      <p className='font-medium'>Subject to these General Conditions and any applicable Specific Conditions, we will settle markets according to our 40XBET Rules and Regulations, Sportsbook Rules and Regulations. We reserve the right to reverse or amend settlement in the event of a market being settled incorrectly. This may lead to amendments being made to your account to reflect changes in market settlement and if there are insufficient funds in your account we may demand that you put funds into your account to address the outstanding balance. We will notify you if your account goes into a negative balance and, if following the notification, you either: a) do not put funds in your account within the reasonable time specified in our notice to you, or b) you fail to make the relevant payments into your account in accordance with any repayment plan as agreed between you and 40XBET; or c) you indicate that you have no intention of putting funds in your account to address the outstanding balance, then we reserve the right to suspend your account and/or take appropriate legal action to seek to recover the debt, in full, from you.Any amount of winnings or losses relating to your bets on a Market will be rounded to the nearest two decimal places.
        {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Matters Beyond Our Reasonable Control
      {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>
      <p className='font-medium'>Without prejudice to our obligations contained within the various laws and regulations of the jurisdictions where we are licensed, we are not liable for any loss or damage that you may suffer because of any: act of God; power cut; trade or labor dispute; act, failure or omission of any government or authority; obstruction or failure of telecommunication services; or any other delay or failure caused by a third party or otherwise outside of our control.In such an event, we reserve the right to cancel or suspend our services without incurring any liability. We are not liable for the failure of any equipment or software howsoever caused, wherever located or administered, or whether under our direct control or not, that may prevent the operation of the Services, impede the placing of offers for bets or the matching of bets, or prevent you from being able to contact us. We will not be liable for any failure to perform by a third party to our Agreement.
        {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Indemnity
      {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>
      <p className='font-medium'>You agree to indemnify and hold us and our associated companies, affiliates, officers, directors, agents and employees harmless from any liabilities, claims, losses or demands made by any third party arising out of your breach of this Agreement (including documents incorporated by reference) or out of your violation of any law or the rights of any third party. You acknowledge that 40XBET and its affiliates will hold information with respect to your identity, including but not limited to your name, address and payment details. You agree that we rely on this information in entering into this Agreement and you agree to hold us harmless against any falsehood or inaccuracy contained in the information you provide us.
        {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Limitation Of Liability
      {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>
      <p className='font-medium'>We exclude all representations and warranties as to the satisfactory quality and/or fitness for its intended purpose and/or accuracy and completeness of the Services. We will not be liable to you for any loss that youmay incur as a result of misuse of your password, or in the case of the Telephone Service, of your telephone access number,and we accept no liability resulting from its unauthorized use, whether fraudulent or otherwise. In no event will we, or anyof our suppliers, accept any liability however arising for any losses you may incur as a result of using the Services. Under no circumstances will our liability under this Agreement or for breach of contract, tort, equity or otherwise exceed your exposure limit as specified in your account. Under no circumstances will we be liable for any indirect, special or consequential damages, loss of profits (direct or indirect) or the benefit of any bet arising from breach of contract,negligence, equitable duty (including for the avoidance of doubt in relation to any bet(s) or Market(s) voided by us) or other liability even if we had been advised of or known (or should have known) of the possibility of such damages or loss. Nothing in this Agreement excludes our liability with respect to death and personal injury resulting from our negligence, or that of our employees, agents or subcontractors.
        
        {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Intellectual Property
      {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>
      <p className='font-medium'>40XBET owns all copyright and related rights in and to our site, including, without limitation, rights in databases and all rights in any price data and related content on our site except for certain third-party rights (referred to below); a)  all trade mark rights, whether registered or unregistered, in and to 40XBET and the 40XBET logo; and b) the domain name www.crickex.com which is our uniform resource locator ("URL"). The following use of price data or any other data or content from our site or via the API or any other 40XBET data from any other source is strictly prohibited without our prior consent: a) commercial use by any person; and/or b) any use for any purpose by a competitor of the 40XBET group of companies, or an employee, contractor or agent of any such competitor ("Restricted Person"), provided always that Restricted Persons may place bets. Screen scraping, web scraping or any other automated or manual collection of 40XBET Data, for commercial or personal use, by any person is expressly prohibited. Any unauthorized use of any of the above rights may result in prosecution or other actionbeing taken against you. You hereby assign to 40XBET absolutely, any and all copyright and other intellectual property rights throughout the worldin all media whether now known or hereafter developed, for the full period of copyright, including by way of present assignment of future copyrightand all other rights whatsoever, in any offers for bets or bets placed by you on our site.Any data licensed to 40XBET from third parties is provided for use on our site only and may not be used for any commercial purposes without the consent of such third parties.
        {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Information Services
      {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>
      <p className='font-medium'>40XBET from time to time may provide you with access to various information and content.This may include form data, results, video streaming, upcoming events, the times and dates of events, current scores,time elapsed, and other information relating to a sporting event. Such information may be supplied: a) via our site (including micro-sites and aspart of any runner data and/or results service), emails or any other means of communication; and/or b) via links to third party websites. Suchinformation is described in these Terms and Conditions collectively as the "Information". The Information is provided by 40XBET or is sourcedfrom a third party. Although some Information may be described as "live", or it may be implied that such Information is "live", you should be aware that this data may be subject to a time delay. The Information may also be inaccurate. You should also be aware that other 40XBET users may have accessto pictures and/or data that is faster and/or more accurate than the Information. The Information is supplied "as is" and is provided for guidance only. To the fullest extent permitted by law, 40XBET makes no representations or warranties of any kind, including but not limited to, the accuracy, quality,completeness or timeliness of the Information. If you rely on the Information to place bets, you do so entirely at your own risk. 40XBET shall not be liablefor any action taken or not taken by you as a result of your reliance on the Information or for any loss or damage (direct or indirect) suffered by you asa result of your use of the Information. Any links to third party websites does not constitute an endorsement by 40XBET of any products or services available on such websites.You use such websites at your own risk and 40XBET takes no responsibility for the content on, or use of, such websites.
        {
          selectedLanguage ==='en' ? "ABOUT US":"আমাদের সম্পর্কে"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
      {
          selectedLanguage ==='en' ? "Assignment":"অ্যাসাইনমেন্ট"
        }
        </p>
      <p className='font-medium'>
        {
          selectedLanguage ==='en' ? "You may not assign any part of this Agreement without 40XBET' written consent but 40XBET may assign any or all of this Agreement to any third party at any time. In the event of an assignment by 40XBET, we will notify of this change and, if you do not agree to this,  then you will not be able to continue to use our services, but you shall always be able to withdraw your funds subject to these Terms and Conditions."
          :"আপনি 40XBET'র লিখিত সম্মতি ব্যতীত এই চুক্তির কোনও অংশ বরাদ্দ করতে পারবেন না তবে 40XBET যে কোনও সময় যে কোনও তৃতীয় পক্ষকে এই চুক্তির যে কোনও বা সমস্ত বরাদ্দ করতে পারে। 40XBET দ্বারা একটি অ্যাসাইনমেন্টের ক্ষেত্রে, আমরা এই পরিবর্তনের বিষয়ে অবহিত করব এবং, আপনি যদি এতে সম্মত না হন, তাহলে আপনি আমাদের পরিষেবাগুলি ব্যবহার করা চালিয়ে যেতে পারবেন না, তবে আপনি সর্বদা আপনার তহবিল প্রত্যাহার করতে সক্ষম হবেন এই নিয়ম ও শর্তাবলী।"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
      {
          selectedLanguage ==='en' ? "Severability":"বিচ্ছেদযোগ্যতা"
        }
        </p>
      <p className='font-medium'>
        {
          selectedLanguage ==='en' ? "In the event that any provision of this Agreement is deemed by any competent authority to be unenforceable or invalid,the relevant provision shall be modified to allow it to be enforced in line with the intention of the originaltext to the fullest extent permitted by applicable law. The validity and enforceability of the remaining provisions of this Agreement shall not be affected.":"এই চুক্তির যে কোনো বিধান যে কোনো উপযুক্ত কর্তৃপক্ষ দ্বারা অপ্রয়োগযোগ্য বা অবৈধ বলে মনে করা হলে, প্রযোজ্য আইন দ্বারা অনুমোদিত সম্পূর্ণ পরিমাণে মূল পাঠ্যের অভিপ্রায়ের সাথে সঙ্গতিপূর্ণভাবে প্রয়োগ করার অনুমতি দেওয়ার জন্য প্রাসঙ্গিক বিধানটি সংশোধন করা হবে। এই চুক্তির অবশিষ্ট বিধানগুলির বৈধতা এবং প্রয়োগযোগ্যতা প্রভাবিত হবে না৷"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
      {
          selectedLanguage ==='en' ? "Dispute Resolution":"বিরোধ নিষ্পত্তি"
        }
        </p>
      <p className='font-medium'>
        {
          selectedLanguage ==='en' ? "In the event of a dispute arising between us and you,  we each agree to follow the procedure set out in our Dispute Resolution policy as amended from time to time."
          :"আমাদের এবং আপনার মধ্যে বিবাদের উদ্ভব হলে, আমরা প্রত্যেকে সময়ে সময়ে সংশোধিত আমাদের বিরোধ নিষ্পত্তি নীতিতে নির্ধারিত পদ্ধতি অনুসরণ করতে সম্মত।"
        }
        </p>

      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
      {
          selectedLanguage ==='en' ? "Amendments":"সংশোধনী"
        }
        </p>
      <p className='font-medium'>
      {
          selectedLanguage ==='en' ? "We reserve the right to make immaterial changes to our site and all guides and policies included on our site, including this Agreement at any time."
          :"আমরা আমাদের সাইট এবং আমাদের সাইটে অন্তর্ভুক্ত সমস্ত নির্দেশিকা এবং নীতিতে অমূলক পরিবর্তন করার অধিকার সংরক্ষণ করি, যে কোনো সময় এই চুক্তি সহ।"
        }
        </p>


      <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
      {
          selectedLanguage ==='en' ? "No Waiver":"নিস্কৃতি নাই"
        }
        </p>
      <p className='font-medium pb-5'>
        {
          selectedLanguage ==='en' ? "No failure or delay by a party to exercise any of its rights under this Agreement shall operate as a waiver thereof and no single or partial exercise of any such right shall prevent any other or further exercise of that or any other right.":"এই চুক্তির অধীনে কোনো পক্ষের কোনো অধিকার প্রয়োগে কোনো ব্যর্থতা বা বিলম্ব এটির মওকুফ হিসেবে কাজ করবে না এবং এই ধরনের কোনো অধিকারের কোনো একক বা আংশিক অনুশীলন সেই বা অন্য কোনো অধিকারের অন্য কোনো বা পরবর্তী অনুশীলনকে বাধা দেবে না।"
        }
        </p>
    </div>
  );
};

export default TermsConditions;