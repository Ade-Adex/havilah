import React from "react";
import Link from "next/link";
import Image from "next/image";
import notfoundImage from "@/public/images/6167023.webp";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="text-center px-4">
        <div className="mt-8">
          <Image
            src={notfoundImage}
            alt="Not Found Illustration"
            width={400}
            height={300}
            className="mx-auto"
            priority
          />
        </div>

        <p className="mt-2 text-lg text-gray-400">
          The page you are looking for doesn&rsquo;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-havilah-deep-cove text-white font-medium text-lg rounded-lg shadow-lg hover:bg-havilah-light-deep-cove transition duration-300"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
