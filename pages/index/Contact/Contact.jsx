import React from "react";
import Image from "next/image";
import EmailIcon from "./Assets/email.png";
import PhoneIcon from "./Assets/phone.png";
import AddressIcon from "./Assets/address.png";

const Contact = () => {
  return (
    <div className="pt-32 pb-32 md:pb-0 md:pt-0 mx-8 sm:mx-16 md:mx-32 text-gray-300 md:h-screen flex flex-col-reverse md:flex-row items-center">
      <div className="md:mr-3 w-full mt-6 md:mt-0 rounded-sm">
        <div className=" p-2 flex flex-col">
          <div className="flex py-2 item-center bg-gray-900 rounded-xl pl-3 my-1">
            <Image src={EmailIcon} width="24" height="24" />
            <span className="ml-4 font-semibold">hamzafaham111@gmail.com</span>
          </div>
          <div className="flex py-2 items-center bg-gray-900 rounded-xl pl-3 my-1">
            <Image src={PhoneIcon} width="24" height="24" />
            <span className="ml-4 font-semibold">03169650686</span>
          </div>
          <div className="flex py-2 items-center bg-gray-900 rounded-xl pl-3 my-1">
            <Image src={AddressIcon} width="24" height="24" />
            <span className="ml-4 font-semibold w-3/5 leading-none">
              Chitral Line, Lahore Cantt, Lahore, Punjab, Pakistan.
            </span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-full">
        <div className="mb-5 flex flex-col">
          <span className="text-gray-300 text-3xl font-bold">Contact</span>
          <div className="flex">
            <div className="w-12 mr-1 h-0 border border-b-4 border-pink-600"></div>
            <div className="w-2 h-0 border border-b-4 border-pink-600"></div>
          </div>
          <span className="leading-none my-3">
            You wanna say something? feel free to contact me🙂
          </span>
        </div>

        <input
          className="w-full p-2 text-gray-400 font-semibold bg-gray-900 outline-none my-1"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="w-full p-2 text-gray-400 font-semibold bg-gray-900 outline-none my-1"
          type="text"
          placeholder="Email"
        />
        <textarea
          className="w-full p-2 text-gray-400 font-semibold bg-gray-900 outline-none my-1"
          type="text"
          rows={5}
          placeholder="write your message"
        />
        <button className="w-2/4 bg-pink-600 p-3 font-bold flex items-center justify-center">
          <span>Send Message</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
