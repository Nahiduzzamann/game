import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const ResponsibleGaming = () => {
  const { selectedLanguage } = useContext(AuthContext);
    return (
        <div className='p-5'>
            <h1 className='text-center p-5 font-bold border-b-4 border-indigo-500 text-3xl'>
            {
          selectedLanguage ==='en' ? "RESPONSIBLE GAMING":"দায়িত্বশীল গেমিং"
        }
        </h1>

            <p className='font-bold pt-5 pb-2'>{
          selectedLanguage ==='en' ? "RESPONSIBLE GAMING":"দায়িত্বশীল গেমিং"
        }</p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Play Responsibly":"দায়িত্ব নিয়ে খেলুন"
        }
        </p>
            <p className='font-medium'>
              {
          selectedLanguage ==='en' ? "Playing at 40XBET should be something positive and entertaining, whilst also thrilling and fun. Sometimes  it is hard to control how much we want to play in relation to how much we can afford to lose.In this section you’ll find ways to help make sure your gambling is within controllable limits, as well as show you places to turn to if you feel you might require help."
          :"40XBET-এ খেলা কিছু ইতিবাচক এবং বিনোদনমূলক হওয়া উচিত, যেখানে রোমাঞ্চকর এবং মজাদারও। কখনও কখনও এটি নিয়ন্ত্রণ করা কঠিন যে আমরা কতটা হারতে পারি তার সাথে সম্পর্কিত আমরা কতটা খেলতে চাই৷ এই বিভাগে আপনি আপনার জুয়া নিয়ন্ত্রণযোগ্য সীমার মধ্যে রয়েছে তা নিশ্চিত করতে সহায়তা করার উপায়গুলি খুঁজে পাবেন, সেইসাথে আপনাকে ঘুরতে যাওয়ার জায়গাগুলি দেখাবেন৷ যদি আপনি মনে করেন যে আপনার সাহায্যের প্রয়োজন হতে পারে।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "I Think I Might Be Playing Too Much":"আমি মনে করি আমি খুব বেশি খেলছি"
        }
        </p>
            <p className='font-medium'>
              {
          selectedLanguage ==='en' ? "Below we have listed statements taken from a renowned psychological research paper.If you find that one or more of these statements are true for you, you might have a gambling problem and we recommend that you seek professional help and see how 40XBET can help you deal with this problem in sections 3 and 4 below. You’ve repeated unsuccessful efforts to control, cut back, or stop gambling. You’re restless or irritable when attempting to cut down or stop gambling. You gamble as a way of escaping from problems or of relieving a dysphoric mood. You often return another day after losing money gambling, to get even (“chasing” one’s losses). You lie to family members, therapist, or others to conceal the extent of involvement with gambling. You’ve committed illegal acts such as forgery, fraud, theft, or embezzlement to finance gambling. You’ve jeopardized or lost a significant relationship,job, or educational or career opportunity because of gambling.You rely on others to provide money to relieve a desperate financial situation caused by gambling."
          :"নীচে আমরা একটি বিখ্যাত মনস্তাত্ত্বিক গবেষণা পত্র থেকে নেওয়া বিবৃতিগুলি তালিকাভুক্ত করেছি৷ আপনি যদি দেখেন যে এই বিবৃতিগুলির মধ্যে এক বা একাধিক আপনার জন্য সত্য, তাহলে আপনার জুয়া খেলার সমস্যা হতে পারে এবং আমরা সুপারিশ করি যে আপনি পেশাদার সাহায্য নিন এবং দেখুন কিভাবে 40XBET আপনাকে মোকাবেলা করতে সহায়তা করতে পারে৷ নীচের অধ্যায় 3 এবং 4 এ এই সমস্যার সাথে। আপনি জুয়া খেলা নিয়ন্ত্রণ, কাটা বা বন্ধ করার ব্যর্থ প্রচেষ্টা পুনরাবৃত্তি করেছেন। জুয়া খেলা বন্ধ বা বন্ধ করার চেষ্টা করার সময় আপনি অস্থির বা বিরক্ত হন। আপনি সমস্যা থেকে পালানোর বা ডিসফোরিক মেজাজ থেকে মুক্তি পাওয়ার উপায় হিসাবে জুয়া খেলেন। আপনি প্রায়শই অর্থ জুয়া হারার পরে অন্য দিন ফিরে যান, এমনকি পেতে (কারের ক্ষতির জন্য তাড়া)। আপনি জুয়া খেলার সাথে জড়িত থাকার পরিমাণ লুকানোর জন্য পরিবারের সদস্য, থেরাপিস্ট বা অন্যদের সাথে মিথ্যা বলেন। আপনি জালিয়াতি, জালিয়াতি, চুরি বা জুয়া খেলার জন্য অর্থ আত্মসাতের মতো অবৈধ কাজ করেছেন। আপনি জুয়ার কারণে একটি গুরুত্বপূর্ণ সম্পর্ক, চাকরি, বা শিক্ষাগত বা কর্মজীবনের সুযোগ বিপন্ন বা হারিয়েছেন৷ জুয়া খেলার কারণে সৃষ্ট একটি মরিয়া আর্থিক পরিস্থিতি থেকে মুক্তি দিতে আপনি অর্থ প্রদানের জন্য অন্যদের উপর নির্ভর করেন৷"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "I Think That A Friend, Or Someone In My Family Plays Too Much":"আমি মনে করি যে একজন বন্ধু, বা আমার পরিবারের কেউ খুব বেশি খেলে"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "Below there is a list of warning signals and signs. Does this remind you of someone you know? At “Read more and contact” you will find more information and contact details to professionals who work with gambling addiction."
          :"নীচে সতর্কতা সংকেত এবং লক্ষণগুলির একটি তালিকা রয়েছে৷ এটা কি আপনার পরিচিত কারো কথা মনে করিয়ে দেয়? আরো পড়ুন এবং যোগাযোগ করুন এ আপনি জুয়ার আসক্তি নিয়ে কাজ করা পেশাদারদের কাছে আরও তথ্য এবং যোগাযোগের বিশদ পাবেন।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Time":"সময়"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "More and more time is used to gamble and plan around playing. The person is preoccupied more often and prioritises gambling over things that used to be more important in the person’s life."
          :"জুয়া খেলা এবং খেলার চারপাশে পরিকল্পনা করার জন্য আরও বেশি সময় ব্যবহার করা হয়। ব্যক্তিটি প্রায়শই ব্যস্ত থাকে এবং এমন জিনিসগুলির উপর জুয়া খেলাকে অগ্রাধিকার দেয় যা ব্যক্তির জীবনে আরও গুরুত্বপূর্ণ ছিল।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Economy":"অর্থনীতি"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "Money disappears from accounts, the person is borrowing money more often without being able to pay back, the person can have money problems or trouble paying the bills, even with a steady income."
          :"অ্যাকাউন্ট থেকে অর্থ অদৃশ্য হয়ে যায়, ব্যক্তিটি ফেরত দিতে সক্ষম না হয়ে প্রায়শই টাকা ধার করে, ব্যক্তির অর্থ সমস্যা বা বিল পরিশোধে সমস্যা হতে পারে, এমনকি একটি স্থির আয়ের সাথেও।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Mood":"মেজাজ"
        }
        </p>
            <p className='font-medium'>
            {
          selectedLanguage ==='en' ? "The person is more worried than usual, more easily irritated and shows several signs of depression and anxiety."
          :"ব্যক্তি স্বাভাবিকের চেয়ে বেশি চিন্তিত, আরও সহজে বিরক্ত এবং বিষণ্নতা এবং উদ্বেগের বিভিন্ন লক্ষণ দেখায়।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Behaviour":"আচরণ"
        }
        </p>
            <p className='font-medium'>
            {
          selectedLanguage ==='en' ? "It is not unusual that the person is becoming isolated from friends and relatives and avoids social activities.":"এটা অস্বাভাবিক নয় যে ব্যক্তি বন্ধুবান্ধব এবং আত্মীয়দের থেকে বিচ্ছিন্ন হয়ে পড়ছে এবং সামাজিক কার্যকলাপ এড়িয়ে যাচ্ছে।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Set Your Limits And Play Responsibly":"আপনার সীমা নির্ধারণ করুন এবং দায়িত্বের সাথে খেলুন"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "If you are concerned that sometimes you may play for more than you plan,we can offer you some helpful limits to set before you start playing. When setting your limit it will go into effect right away and start taking into account your activity from the time you set it. For example,should you set a weekly limit on Wednesday, it will reset midnight to Monday and then continue to run from Monday to Sunday. It takes 24 hours to revoke or ease up a limit.But if you decide to make a limit tighter, then the change is instant. You can activate the limit that suits you the best via your Play Ok settings here."
          :"আপনি যদি উদ্বিগ্ন হন যে কখনও কখনও আপনি আপনার পরিকল্পনার চেয়ে বেশি খেলতে পারেন, আমরা আপনাকে খেলা শুরু করার আগে সেট করার জন্য কিছু সহায়ক সীমা অফার করতে পারি। আপনার সীমা নির্ধারণ করার সময় এটি এখনই কার্যকর হবে এবং আপনি এটি সেট করার সময় থেকে আপনার কার্যকলাপ বিবেচনা করা শুরু করবেন। উদাহরণস্বরূপ, আপনি যদি বুধবার একটি সাপ্তাহিক সীমা নির্ধারণ করেন তবে এটি সোমবার মধ্যরাত থেকে রিসেট হবে এবং তারপরে সোমবার থেকে রবিবার পর্যন্ত চলতে থাকবে৷ একটি সীমা প্রত্যাহার করতে বা সহজ করতে 24 ঘন্টা লাগে৷ কিন্তু আপনি যদি একটি সীমা আরও কঠোর করার সিদ্ধান্ত নেন, তাহলে পরিবর্তনটি তাত্ক্ষণিক৷ আপনি এখানে আপনার Play Ok সেটিংসের মাধ্যমে আপনার জন্য সবচেয়ে উপযুক্ত সীমা সক্রিয় করতে পারেন।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Spending Budget":"ব্যয় বাজেট"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "This will limit the amount you can spend during a certain period. You will be able to make deposits up to the amount you have chosen and in addition to this, you can deposit an amount equal to any withdrawals made during this period. If you set a budget of €50 weekly and withdraw €100 that same week,you will be able to deposit a total of €150."
          :"এটি একটি নির্দিষ্ট সময়ের মধ্যে আপনি যে পরিমাণ ব্যয় করতে পারেন তা সীমিত করবে। আপনি আপনার বেছে নেওয়া পরিমাণ পর্যন্ত আমানত করতে সক্ষম হবেন এবং এটি ছাড়াও, আপনি এই সময়ের মধ্যে করা যেকোন টাকা তোলার সমান পরিমাণ জমা করতে পারবেন। আপনি যদি সাপ্তাহিক €50 বাজেট সেট করেন এবং একই সপ্তাহে €100 তুলে নেন, তাহলে আপনি মোট €150 জমা করতে পারবেন।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Deposit Limit":"জমার সীমা"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "This will limit the amount you can deposit during a certain period. Once you have reached this sum you will not be able to make any new deposits until your limit is reset."
          :"এটি একটি নির্দিষ্ট সময়ের মধ্যে আপনি যে পরিমাণ জমা করতে পারেন তা সীমিত করবে। একবার আপনি এই পরিমাণে পৌঁছে গেলে আপনার সীমা রিসেট না হওয়া পর্যন্ত আপনি কোনো নতুন আমানত করতে পারবেন না।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Wager Limit":"বাজির সীমা"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "This will limit the total amount you can bet during a certain period. When you have reached this sum, you will not be able to place any new bets until your limit has reset.":"এটি একটি নির্দিষ্ট সময়ের মধ্যে আপনি বাজি ধরতে পারেন এমন মোট পরিমাণকে সীমিত করবে। যখন আপনি এই সমষ্টিতে পৌঁছে যাবেন, আপনার সীমা রিসেট না হওয়া পর্যন্ত আপনি কোনো নতুন বাজি রাখতে পারবেন না।"
        }
        </p>
            
           <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
           {
          selectedLanguage ==='en' ? "Loss Limit":"ক্ষতির সীমা"
        }
        </p>
            <p className='font-medium'>
            {
          selectedLanguage ==='en' ? "This will limit the possible amount of net losses you can make based on bets minus wins during a certain period. When you have reached this sum,  you will not be able to place any new bets until your limit is reset.":"এটি একটি নির্দিষ্ট সময়ের মধ্যে বাজি বিয়োগ জয়ের উপর ভিত্তি করে আপনি যে পরিমাণ নেট ক্ষতি করতে পারেন তা সীমিত করবে। যখন আপনি এই সমষ্টিতে পৌঁছে যাবেন, আপনার সীমা রিসেট না হওয়া পর্যন্ত আপনি কোনো নতুন বাজি রাখতে পারবেন না।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Logged In Time Limit":"লগ ইন সময় সীমা"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "Limit how many hours you can be logged in to your account daily. Once you reach your limit, you will be automatically logged out and any gameplayis paused or completed in the background. ProTip: Make sure to always log out of your account when you finish your session.":"আপনি প্রতিদিন আপনার অ্যাকাউন্টে কত ঘন্টা লগ ইন করতে পারবেন তা সীমিত করুন। একবার আপনি আপনার সীমায় পৌঁছে গেলে, আপনি স্বয়ংক্রিয়ভাবে লগ আউট হয়ে যাবেন এবং যেকোন গেমপ্লে পজ বা ব্যাকগ্রাউন্ডে সম্পূর্ণ হবে। প্রোটিপ: আপনি যখন আপনার সেশন শেষ করবেন তখন সর্বদা আপনার অ্যাকাউন্ট থেকে লগ আউট করতে ভুলবেন না।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Login Time Block":"লগইন টাইম ব্লক"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "Set a specific time block covering all days of the week during which you will not be able to log in to your account.The start- and end time of this limit will calculate according to the time zone you are in when activating it."
          :"সপ্তাহের সমস্ত দিন কভার করে একটি নির্দিষ্ট সময় ব্লক সেট করুন যার সময় আপনি আপনার অ্যাকাউন্টে লগ ইন করতে পারবেন না৷ এই সীমার শুরু এবং শেষ সময়টি এটি সক্রিয় করার সময় আপনি যে সময় অঞ্চলে আছেন সে অনুযায়ী গণনা করা হবে৷"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Take A Break Or Stop Playing":"বিরতি নিন বা খেলা বন্ধ করুন"
        }
        </p>
            <p className='font-medium'>
            {
          selectedLanguage ==='en' ? "Sometimes you might need a break from playing and you can suspend your account for a period of your choice. If you want a cool off period you can go for a shorter break. If you are concerned that you have been playing too much we recommend that you instead self-exclude your account for a minimum period of 6 months. When gambling has become a problem for you, however, an indefinite exclusion from online gambling is the right choice for you. You can suspend your account via your Play Ok settings here."
          :"কখনও কখনও আপনার খেলা থেকে বিরতির প্রয়োজন হতে পারে এবং আপনি আপনার পছন্দের সময়ের জন্য আপনার অ্যাকাউন্ট স্থগিত করতে পারেন। আপনি যদি কুল অফ পিরিয়ড চান তবে আপনি একটি ছোট বিরতির জন্য যেতে পারেন। আপনি যদি উদ্বিগ্ন হন যে আপনি খুব বেশি খেলছেন তাহলে আমরা সুপারিশ করব যে আপনি পরিবর্তে ন্যূনতম 6 মাসের জন্য আপনার অ্যাকাউন্টটি স্ব-বাদ দিন৷ যখন জুয়া খেলা আপনার জন্য একটি সমস্যা হয়ে উঠেছে, তবে, অনলাইন জুয়া থেকে একটি অনির্দিষ্টকালের জন্য বর্জন আপনার জন্য সঠিক পছন্দ। আপনি এখানে আপনার Play Ok সেটিংসের মাধ্যমে আপনার অ্যাকাউন্ট স্থগিত করতে পারেন।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Take A Break":"বিরতি নাও"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "You can take a break from 40XBET for up to 6 months. Once your break is over, your account will be automatically reopened.You will be able to make changes to the end date at a later time if you so choose. If you end it early, a 24 hour cool off period will apply before you can log in again. Speak with us in our chat if you need any advice. You will not receive any emails or texts from us during this time."
          :"আপনি 40XBET থেকে 6 মাস পর্যন্ত বিরতি নিতে পারেন। একবার আপনার বিরতি শেষ হয়ে গেলে, আপনার অ্যাকাউন্ট স্বয়ংক্রিয়ভাবে পুনরায় খোলা হবে৷ আপনি যদি তা চয়ন করেন তবে আপনি পরবর্তী সময়ে শেষ তারিখে পরিবর্তন করতে সক্ষম হবেন৷ আপনি যদি এটি তাড়াতাড়ি শেষ করেন, তাহলে আপনি আবার লগ ইন করার আগে একটি 24 ঘন্টা শীতল বন্ধ সময় প্রযোজ্য হবে। আপনার কোন পরামর্শের প্রয়োজন হলে আমাদের চ্যাটে আমাদের সাথে কথা বলুন। এই সময়ের মধ্যে আপনি আমাদের কাছ থেকে কোনো ইমেল বা পাঠ্য পাবেন না।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Self Exclusion":"সেলফ এক্সক্লুশন"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "If you feel that you have been playing too much or are concerned that your gambling is becoming a problem, we recommend that you exclude your account for at least 6 months. You will not be able to return during this time and will not receiveany emails or texts from us. Once your exclusion has expired your account will automatically reopen. Contact us in our live chat to let us know if you want to extend your exclusion. If gambling has become a problem for you, you should close your account indefinitely instead and seek professional help."
          :"আপনি যদি মনে করেন যে আপনি খুব বেশি খেলছেন বা আপনার জুয়া একটি সমস্যা হয়ে উঠছে বলে উদ্বিগ্ন হন, তাহলে আমরা আপনাকে অন্তত 6 মাসের জন্য আপনার অ্যাকাউন্ট বাদ দেওয়ার পরামর্শ দিই। আপনি এই সময়ের মধ্যে ফিরে আসতে পারবেন না এবং আমাদের কাছ থেকে কোনো ইমেল বা পাঠ্য পাবেন না। একবার আপনার বর্জনের মেয়াদ শেষ হয়ে গেলে আপনার অ্যাকাউন্ট স্বয়ংক্রিয়ভাবে আবার খুলবে। আপনি যদি আপনার বর্জন করতে চান তবে আমাদের জানাতে আমাদের লাইভ চ্যাটে আমাদের সাথে যোগাযোগ করুন। যদি জুয়া খেলা আপনার জন্য একটি সমস্যা হয়ে থাকে, তাহলে আপনার পরিবর্তে আপনার অ্যাকাউন্ট অনির্দিষ্টকালের জন্য বন্ধ করা উচিত এবং পেশাদার সাহায্য নেওয়া উচিত।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Professional Support And Helplines":"পেশাদার সহায়তা এবং হেল্পলাইন"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Gambling Therapy":"জুয়া থেরাপি"
        }
        </p>
            <p className='font-medium'>
             {
          selectedLanguage ==='en' ? "Gambling Therapy is a global service offering free practical advice and emotional support to anyone affected by problem gambling.Gambling Therapy also offers a free app providing a collection of tools and information to help you identify and overcome problem gambling."
          :"জুয়া থেরাপি হল একটি বৈশ্বিক পরিষেবা যা জুয়া সমস্যা দ্বারা প্রভাবিত যেকোনও ব্যক্তিকে বিনামূল্যে ব্যবহারিক পরামর্শ এবং মানসিক সহায়তা প্রদান করে৷ জুয়া থেরাপি একটি বিনামূল্যের অ্যাপও অফার করে যা আপনাকে জুয়া শনাক্ত করতে এবং তা কাটিয়ে উঠতে সহায়তা করার জন্য সরঞ্জাম এবং তথ্যের একটি সংগ্রহ প্রদান করে৷"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Gordon Moody Association":"গর্ডন মুডি অ্যাসোসিয়েশন"
        }
        </p>
            <p className='font-medium'>
            {
          selectedLanguage ==='en' ? "Gordon Moody Association provides advice, education and high quality innovative therapeutic  support to problem gamblers and those affected by problem gambling, through residential, online and outreach services."
          :"গর্ডন মুডি অ্যাসোসিয়েশন আবাসিক, অনলাইন এবং আউটরিচ পরিষেবার মাধ্যমে সমস্যা জুয়াড়ি এবং সমস্যা জুয়া দ্বারা প্রভাবিত ব্যক্তিদের পরামর্শ, শিক্ষা এবং উচ্চ মানের উদ্ভাবনী থেরাপিউটিক সহায়তা প্রদান করে।"
        }
        </p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
            {
          selectedLanguage ==='en' ? "Gamblers Anonymous":"জুয়াড়ি বেনামী"
        }
        </p>
            <p className='font-medium'>
            {
          selectedLanguage ==='en' ? "Gamblers Anonymous is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to do the same."
          :"গ্যাম্বলার্স অ্যানোনিমাস হল পুরুষ এবং মহিলাদের একটি ফেলোশিপ যারা তাদের অভিজ্ঞতা, শক্তি এবং আশা একে অপরের সাথে ভাগ করে নেয় যাতে তারা তাদের সাধারণ সমস্যার সমাধান করতে পারে এবং অন্যদেরও একই কাজ করতে সহায়তা করতে পারে।"
        }
        </p>

          <p className='font-bold pt-5 pb-2 underline underline-offset-5'>
          {
          selectedLanguage ==='en' ? "Gamban":"গাম্বান"
        }
        </p>
            <p className='font-medium pb-5'>
             {
          selectedLanguage ==='en' ? "GamBan offers efficient software that prevents you from accessing gambling sites and online casinos.It’s simple to use and helps you by only blocking gambling sites and applications."
          :"GamBan দক্ষ সফ্টওয়্যার অফার করে যা আপনাকে জুয়ার সাইট এবং অনলাইন ক্যাসিনো অ্যাক্সেস করতে বাধা দেয়৷ এটি ব্যবহার করা সহজ এবং শুধুমাত্র জুয়া খেলার সাইট এবং অ্যাপ্লিকেশনগুলিকে ব্লক করে আপনাকে সহায়তা করে৷"
        }
        </p>
        </div>
    );
};

export default ResponsibleGaming;