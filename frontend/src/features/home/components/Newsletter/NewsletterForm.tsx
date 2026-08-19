"use client";

import { ArrowRight, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      return;
    }

    // TODO: Connect this to your newsletter API
    console.log("Newsletter subscription:", trimmedEmail);

    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <div className="w-full max-w-xl">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center rounded-full border border-[#c8c2b6] bg-white/60 px-4 py-2 transition-all duration-300 focus-within:border-[#66735b] focus-within:bg-white">
          <Mail
            className="mr-3 h-4 w-4 shrink-0 text-[#8b877d]"
            aria-hidden="true"
          />

          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setIsSubmitted(false);
            }}
            placeholder="Email address"
            aria-label="Email address"
            autoComplete="email"
            required
            className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[#292a26] outline-none placeholder:text-[#8b877d]"
          />

          <button
            type="submit"
            className="group ml-3 flex shrink-0 items-center gap-2 rounded-full bg-[#66735b] px-4 py-2.5 text-xs font-medium text-[#f5f2ea] transition-all duration-300 hover:bg-[#536047] focus:outline-none focus:ring-2 focus:ring-[#66735b]/30"
          >
            <span className="hidden sm:inline">
              Subscribe
            </span>

            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </form>

      <p className="mt-3 text-xs text-[#8b877d]">
        No spam. Unsubscribe anytime.
      </p>

      {isSubmitted && (
        <p
          className="mt-2 text-sm font-medium text-[#66735b]"
          role="status"
        >
          Thanks for subscribing.
        </p>
      )}
    </div>
  );
}