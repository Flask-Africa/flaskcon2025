"use client";

import { useState } from "react";

export const SponsorshipForm = () => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  return (
    <form className="lg:flex lg:flex-col lg:h-full lg:items-stretch">
      <label className="block px-[10px] py-7 border-b-2 border-offblack font-inktrap lg:grow">
        <span className="lg:relative lg:top-2.5 xl:top-1.5 block mb-4">
          Full Name *
        </span>
        <input
          type="text"
          placeholder="John Doe"
          className="lg:relative lg:top-2.5 xl:top-1.5 font-extrabold leading-full tracking-neg5 block outline-none"
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
        />
      </label>
      <label className="block px-[10px] py-7 border-b-2 border-offblack font-inktrap lg:grow">
        <span className="lg:relative lg:top-2.5 xl:top-1.5 block mb-4">
          Company Name *
        </span>
        <input
          type="text"
          placeholder="Biotech"
          className="lg:relative lg:top-2.5 xl:top-1.5  font-extrabold leading-full tracking-neg5 block outline-none"
          value={companyName}
          onChange={({ target }) => setCompanyName(target.value)}
        />
      </label>
      <label className="block px-[10px] py-7 border-b-2 border-offblack font-inktrap lg:grow">
        <span className="lg:relative lg:top-2.5 xl:top-1.5 block mb-4">
          Job Role *
        </span>
        <input
          type="text"
          placeholder="Software Engineer"
          className="lg:relative lg:top-2.5 xl:top-1.5 font-extrabold leading-full tracking-neg5 block outline-none relative top-2.5"
          value={jobRole}
          onChange={({ target }) => setJobRole(target.value)}
        />
      </label>
      <label className="block px-[10px] py-7 border-b-2 border-offblack font-inktrap lg:grow">
        <span className="lg:relative lg:top-2.5 xl:top-1.5 block mb-4">
          Email Address *
        </span>
        <input
          type="email"
          placeholder="John@doe.com"
          className="lg:relative lg:top-2.5 xl:top-1.5 font-extrabold leading-full tracking-neg5 block outline-none"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <div className="lg:flex lg:grow">
        <label className="block px-[10px] py-7 border-b-2 border-offblack font-inktrap lg:w-[60%]">
          <span className="lg:relative lg:top-2.5 xl:top-1.5 block mb-4">
            Phone Number
          </span>
          <input
            type="tel"
            placeholder="08123456789"
            className="lg:relative lg:top-2.5 xl:top-1.5 font-extrabold leading-full tracking-neg5 block outline-none"
            value={phoneNo}
            onChange={({ target }) => setPhoneNo(target.value)}
          />
        </label>
        <div className="block py-5 border-b-2 border-offblack text-center lg:border-l-2 lg:flex lg:justify-center lg:items-center lg:w-[40%]">
          <button className="w-[122px] h-16 ">
            <div className="w-[118px] h-[55px] text-white bg-[#534EFF] flex justify-center items-center rounded-full font-extrabold text-[21px] leading-full tracking-neg5 relative after:absolute after:top-2 after:left-1 after:h-full after:w-full after:bg-black after:-z-10 after:rounded-full font-neue">
              <span className="relative top-1">Submit</span>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};
