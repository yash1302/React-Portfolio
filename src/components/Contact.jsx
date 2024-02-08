import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form action="https://getform.io/f/49ccbb26-47ae-4314-9afb-e6605c32e2d9" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input
              type="text"
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            type="text"
            name="email"
            className="border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            type="text"
            name="email"
            className="border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            rows="10"
            name="email"
            className="border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>
        <button className="flex justify-center items-center bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg  ">
          Send Message
        </button>
      </form>
    </div>
  );
}
