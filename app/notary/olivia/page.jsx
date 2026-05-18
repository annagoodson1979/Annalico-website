import React from "react";
import { BadgePercent, Heart, PartyPopper, Sparkles } from "lucide-react";

export default function OliviaPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-emerald-50" />

        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-pink-100 bg-white/90 p-8 shadow-xl backdrop-blur sm:p-12">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900">
              <Heart className="h-4 w-4" />
              A special thank you from Olivia & Mom
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Welcome Olivia's Friends & Families!
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              Thank you for being part of Olivia's village. As a small thank you
              to her classmates, school friends, teachers, and parents, I wanted
              to create a little page just for you with special notary discounts
              and fun options.
            </p>

            <div className="mt-8 inline-flex items-center rounded-2xl bg-neutral-900 px-6 py-4 text-white shadow-lg">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Private Access Code
                </p>
                <p className="mt-1 text-2xl font-semibold tracking-wide">OG-POP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <BadgePercent className="mb-4 h-8 w-8 text-pink-600" />
            <h2 className="text-xl font-semibold">School Family Discount</h2>
            <p className="mt-3 leading-7 text-neutral-700">
              Use the special code below when booking to receive 15% off your
              notarization appointment.
            </p>
            <div className="mt-5 rounded-2xl bg-pink-50 p-4 text-sm text-pink-900">
              Code: <span className="font-semibold">OG-POP</span>
              <br />
              15% off for Olivia's school friends, families, and teachers.
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <PartyPopper className="mb-4 h-8 w-8 text-emerald-700" />
            <h2 className="text-xl font-semibold">Fun Notary Options</h2>
            <p className="mt-3 leading-7 text-neutral-700">
              Choose from themed stamps, elegant seals, colorful signing setups,
              or a more playful experience for memorable occasions.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li>Celebration signings</li>
              <li>Cute stationery options</li>
              <li>Elegant or modern seal styles</li>
              <li>Family-friendly atmosphere</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Sparkles className="mb-4 h-8 w-8 text-amber-600" />
            <h2 className="text-xl font-semibold">Local & Flexible</h2>
            <p className="mt-3 leading-7 text-neutral-700">
              Mobile and online appointments available with flexible scheduling
              for busy families, teachers, and professionals.
            </p>
            <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm text-amber-900">
              Use access code <span className="font-semibold">OG-POP</span> to
              unlock booking access and apply your discount.
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl sm:p-12">
          <h2 className="text-3xl font-semibold">A little thank you</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-200">
            Supporting local families and building meaningful community
            connections means a lot to us. Thank you for supporting a small
            business built with care, creativity, and heart.
          </p>
          <p className="mt-8 font-medium text-neutral-300">- Olivia & Family</p>
        </div>
      </section>
    </main>
  );
}
