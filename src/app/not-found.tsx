import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Image
            src="/images/logo.png"
            alt="Nestloop"
            width={120}
            height={120}
            className="mx-auto mb-6"
          />
          <p className="text-xl font-medium text-black">404</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-black">
            Page not found
          </h1>
          <p className="mt-3 text-slate-600">
            The page you&apos;re looking for doesn&apos;t exist or was moved.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/"
              className=" p-2 bg-white rounded-md border border-black text-black"
            >
              Go home
            </Link>
            <Link
              href="/contact-us"
              className="p-2 bg-white rounded-md border border-black text-black"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
