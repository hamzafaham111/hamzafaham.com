import React, { useState } from "react";
import Image from "next/image";
import DoneModal from "../../../components/Modals/DoneModal";
import { BounceLoader, FadeLoader } from "react-spinners";
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    setChange(false)
    setShowModal(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Email sent successfully
        setError(false)
        setData({
          name: "",
          email: "",
          message: "",
        });
        setChange(true);
        setTimeout(() => {
          setShowModal(false);
        }, 15000);
      } else if (response.status == 405) {
        // Failed to send email
        setError(true);
        setChange(true);
        setTimeout(() => {
          setShowModal(false);
        }, 15000);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  const [showModal, setShowModal] = useState(false);
  const [change, setChange] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="flex md:h-screen items-center">
      <div className="w-full pt-32 pb-32 md:pb-0 md:pt-0 text-gray-300 flex flex-col md:flex-row items-end">
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
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 text-gray-400 font-semibold bg-gray-900 outline-none my-1"
            type="text"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <textarea
            className="w-full p-2 text-gray-400 font-semibold bg-gray-900 outline-none my-1"
            type="text"
            rows={5}
            placeholder="write your message"
            name="message"
            value={data.message}
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-pink-600 p-3 font-bold flex items-center justify-center"
          >
            <span>Send Message</span>
          </button>
        </div>
        {/* Model Placed Down Here */}
        <DoneModal
          isVisable={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          {!change ? (
            <div>
              <FadeLoader color="white" className="text-5xl" />
            </div>
          ) : !error ? (
            <div className="bg-pink-600 w-80 h-40 flex flex-col justify-center items-center rounded-md">
              <div className="bg-white h-14 w-14  rounded-full p-2">
                <img src="/ContactAssets/done.jpeg" className="rounded-full" />
              </div>
              <span className="text-white text-2xl font-bold">EMAIL SENT!</span>
            </div>
          ) : (
            <div className="bg-pink-600 w-80 h-40 flex flex-col justify-center items-center rounded-md">
              <div className="bg-white h-14 w-14  rounded-full p-2">
                <img src="/ContactAssets/cross.jpeg" className="rounded-full" />
              </div>
              <span className="text-white text-2xl font-bold">
                Some Problem
              </span>
              <span className="text-white font-bold upper-case">
                Try Again Later
              </span>
            </div>
          )}
        </DoneModal>
        {/* Model Placed Up There */}
        <div className="hidden sm:block md:ml-3 w-full mt-6 md:mt-0">
          <div className="flex flex-col">
            <div className="flex py-2 item-center bg-gray-900 rounded-sm pl-3 my-1">
              <Image src="/ContactAssets/email.png" width="24" height="24" />
              <span className="ml-4 font-semibold">
                hamzafaham111@gmail.com
              </span>
            </div>
            <div className="flex py-2 items-center bg-gray-900 rounded-sm pl-3 my-1">
              <Image src="/ContactAssets/phone.png" width="24" height="24" />
              <span className="ml-4 font-semibold">03169650686</span>
            </div>
            <div className="flex py-2 items-center bg-gray-900 rounded-sm pl-3 my-1">
              <Image src="/ContactAssets/address.png" width="24" height="24" />
              <span className="ml-4 font-semibold w-3/5 leading-none">
                Sector C DHA Phase 6, Lahore, Pakistan
              </span>
            </div>
            <div className="flex items-center rounded-sm mt-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1881289815296!2d74.44043585009038!3d31.464010656980967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391908dd6138ade3%3A0xa6cc469044e1fbc1!2sLahore%20Garrison%20University.!5e0!3m2!1sen!2s!4v1672567860854!5m2!1sen!2s"
                style={{ border: 0 }}
                width="100%"
                height="135"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
