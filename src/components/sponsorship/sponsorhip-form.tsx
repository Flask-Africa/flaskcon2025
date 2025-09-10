"use client";

import { useState } from "react";

export const SponsorshipForm = () => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  return (
    <form className="">
      <label className="block px-[10px] py-7 border-b-2 border-offblack">
        Full Name *
        <input
          type="text"
          placeholder="John Doe"
          className="mt-4 font-extrabold leading-full tracking-neg5 block"
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
        />
      </label>
      <label className="block px-[10px] py-7 border-b-2 border-offblack">
        Company Name *
        <input
          type="text"
          placeholder="Biotech"
          className="mt-4 font-extrabold leading-full tracking-neg5 block"
          value={companyName}
          onChange={({ target }) => setCompanyName(target.value)}
        />
      </label>
      <label className="block px-[10px] py-7 border-b-2 border-offblack">
        Job Role *
        <input
          type="text"
          placeholder="Software Engineer"
          className="mt-4 font-extrabold leading-full tracking-neg5 block"
          value={jobRole}
          onChange={({ target }) => setJobRole(target.value)}
        />
      </label>
      <label className="block px-[10px] py-7 border-b-2 border-offblack">
        Email Address *
        <input
          type="email"
          placeholder="John@doe.com"
          className="mt-4 font-extrabold leading-full tracking-neg5 block"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <label className="block px-[10px] py-7 border-b-2 border-offblack">
        Phone Number
        <input
          type="tel"
          placeholder="08123456789"
          className="mt-4 font-extrabold leading-full tracking-neg5 block"
          value={phoneNo}
          onChange={({ target }) => setPhoneNo(target.value)}
        />
      </label>
      <div className="block py-5 border-b-2 border-offblack text-center">
        <button className="w-[122px] h-16">
          <div className="w-[118px] h-[55px] text-white bg-[#534EFF] flex justify-center items-center rounded-full font-extrabold text-[21px] leading-full tracking-neg5 relative after:absolute after:top-2 after:left-1 after:h-full after:w-full after:bg-black after:-z-10 after:rounded-full">
            Submit
          </div>
        </button>
      </div>
    </form>
  );
};
