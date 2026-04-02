import { AlertCircle } from "lucide-react";

const Error404 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-130 text-center px-6 py-12 overflow-hidden font-sans">
      {/* Background 404 */}
      <div className="absolute text-[200px] md:text-[280px] font-bold text-gray-900 tracking-[-10px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[54%] select-none pointer-events-none">
        404
      </div>

      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6 z-10">
        <AlertCircle className="w-7 h-7 text-red-500" />
      </div>

      {/* Error Code */}
      <span className="z-10 text-[13px] bg-red-100 text-red-500 px-3 py-1 rounded-full mb-4 font-mono tracking-wide">
        ERROR 404
      </span>

      {/* Title */}
      <h1 className="z-10 text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
        পেজটি পাওয়া যাচ্ছে না
      </h1>

      {/* Divider */}
      <div className="w-10 h-0.5 bg-gray-300 mb-6 z-10"></div>

      {/* Description */}
      <p className="z-10 text-sm text-gray-500 max-w-85 leading-relaxed mb-8">
        আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, নাম পরিবর্তন করা হয়েছে, অথবা
        এটি কখনোই ছিল না।
      </p>

      {/* Buttons */}
      <div className="z-10 flex gap-3 flex-wrap justify-center">
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-gray-900 text-white px-6 py-2.5 rounded-md text-sm font-bold hover:opacity-80 transition"
        >
          হোম পেজে যান ↗
        </button>

        <button
          onClick={() => window.history.back()}
          className="border border-gray-300 text-gray-600 px-6 py-2.5 rounded-md text-sm hover:bg-gray-100 transition"
        >
          আগে ফিরে যান
        </button>
      </div>
    </div>
  );
};

export default Error404;
