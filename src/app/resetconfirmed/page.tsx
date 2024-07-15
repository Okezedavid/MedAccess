import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/imgs/capstone logo.jpg";
import mail1 from "../../assets/imgs/mail1.png";
export default function ResetConfirmed() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex justify-center py-8">
        <Image src={logo} alt="Logo" width={70} height={70} />
      </div>
      <div className="py-8">
        <Image src={mail1} alt="mail" width={150}/>
      </div>
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:min-h-screen md:flex-row">
        <form className="mt-8 md:ml-8 bg-white p-8 rounded-lg  max-w-sm w-full">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center md:text-left">
            Reset Link Sent
          </h1>
          <p className="text-gray-700 text-center md:text-left text-sm">
            Thank you for submitting your email address to reset your password.
            Your email has been successfully verified, and a password reset link
            has been sent to the email address associated with your account.
          </p>
          <div className="mt-6 text-center md:text-left">
            <Link className="text-blue-500 hover:underline" href="/">
              Go Back Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
