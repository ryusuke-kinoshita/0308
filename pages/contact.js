import React from "react";
import Header from "../conponents/Header";
import Hero from "../conponents/Hero";
import { siteMeta } from "../lib/constants";

export default function Contact() {
  const { heading, message, image } = siteMeta.contact;

  return (
    <>
      <Header heading={heading} />
      <div>
        <div>
          <Hero heading={heading} message={message} image={image} />
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfJ4L_bL9pFAYeSThmaEVU2IOBztmUDiUaN-565YTEGFI-QFg/formResponse"
          className="w-full max-w-lg bg-gray-100 p-6 rounded-md"
        >
          <div class="mb-4">
            <label class="block font-bold mb-2" for="name-field">
              お名前:
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="entry.2079090576"
              id="name-field"
              type="text"
              placeholder="山田 太郎"
            />
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for="email-field">
              メールアドレス:
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email-field"
              name="entry.1787449295"
              type="email"
              placeholder="aaabbb@mail.com"
            />
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2" for="message-field">
              お問い合わせ:
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48"
              id="message-field"
              name="entry.377451332"
              placeholder="お問い合わせ内容をこちらにご記入ください"
            ></textarea>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {" "}
            送信{" "}
          </button>
        </form>
      </div>
    </>
  );
}
