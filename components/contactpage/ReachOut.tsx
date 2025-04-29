import React from "react";

export default function ReachOut() {
  return (
    <div
      id="reachout"
      className="z-0 min-h-screen text-black flex flex-col justify-center items-center px-4 py-16"
    >
      <div className="w-full max-w-3xl flex flex-col space-y-10">
        {/* Call Section */}
        <div className="flex flex-col space-y-3">
          <h1
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-2xl sm:text-3xl md:text-4xl"
          >
            GIVE ME A CALL —
          </h1>
          <p
            style={{ fontFamily: "Spectral, serif" }}
            className="text-lg sm:text-xl "
          >
            I&#39;m happy to chat and answer any questions you have.
          </p>
          <a
            href="tel:+17808506993"
            className="underline text-center text-lg sm:text-xl border p-3 rounded-md hover:bg-gray-100 transition"
            style={{ fontFamily: "Spectral, serif" }}
          >
            +1 (780) 850-6993
          </a>
        </div>

        {/* Email Section */}
        <div className="flex flex-col space-y-3">
          <h1
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-2xl sm:text-3xl md:text-4xl "
          >
            PREFER TO EMAIL?
          </h1>
          <p
            style={{ fontFamily: "Spectral, serif" }}
            className="text-lg sm:text-xl "
          >
            Send a message and I&#39;ll get back to you soon.
          </p>
          <a
            href="mailto:Contacturvashi1@gmail.com"
            className="underline text-center text-lg sm:text-xl border p-3 rounded-md hover:bg-gray-100 transition"
            style={{ fontFamily: "Spectral, serif" }}
          >
            Contacturvashi1@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
