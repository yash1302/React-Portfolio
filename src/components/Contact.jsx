import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form action="" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 py-2">
          <div>
            <label>Name</label>
            <input type="text" className="" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" className="" />
          </div>
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Subject</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Message</label>
          <textarea rows="10" name="email" />
        </div>
      </form>
    </div>
  );
}
