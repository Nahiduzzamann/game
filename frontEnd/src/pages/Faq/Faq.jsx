import React from 'react';

const Faq = () => {
    return (
        <div className='p-5'>
            <h1 className='text-center p-5 font-bold border-b-4 border-indigo-500 text-3xl'>FAQ</h1>

            <p className='font-bold pt-5 pb-2'>FAQ</p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Age Requirement</p>
            <p className='font-medium'>B0XBET's customers must be 18 years of age or older and agree to abide by the terms and conditions set by the company.</p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Forgot Your Username Or Password?</p>
            <p className='font-medium'>Customers can automatically link to online customer service by clicking 'Forgot Password'.
             The 24-hour online customer service will provide you with a solution after passing a professional verification plan.</p>

          <p className='font-bold pt-5 pb-2 underline underline-offset-5'>How To Deposit</p>
            <p className='font-medium'>There are several ways to deposit the platform: bank transfer, DhaPay (h5, secured), DhaPay (h5, secured).</p>

          <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Steps To Deposit</p>
            <p className='font-medium'>1. Please click on 'deposit' at the top right of the homepage to enter the platform deposit page.<br></br>
            2. After entering the amount you want to deposit, click 'Select Channel' on the right.<br></br>
            3. You can click below deposit channels.<br></br>
            (The upper and lower limits of recharge are subject to the payment channel)</p>

            <p className='font-bold pt-5 pb-2 underline underline-offset-5'>How To Withdraw Money</p>
            <p className='font-medium'>By clicking 'Withdraw' at the top right of the homepage, enter your withdrawal password and
             the amount you want to withdraw, and then click the withdrawal after completion.<br></br>
             For the first withdrawal, please bind the withdrawal bank card to the bank card message.<br></br>
             Withdrawal limit is ৳800, withdrawal limit is ৳30,000 per day.
             </p>

           <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Personal Data Security</p>
            <p className='font-medium'>The company will ensure that your personal information is not disclosed to any third party.<br></br>
            The company will also ensure the security of your personal information and ensure that your information is restricted to our company.</p>

          <p className='font-bold pt-5 pb-2 underline underline-offset-5'>Central Wallet</p>
            <p className='font-medium pb-5'>All deposited amount and bonus will be deposited into a single central wallet and bets can be placed.</p>
        </div>
    );
};

export default Faq;