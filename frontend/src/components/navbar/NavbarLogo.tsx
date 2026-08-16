import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="
        group
        flex
        items-center
        gap-2.5
      "
    >
      {/* Logo Box */}

      <div
        className="
          flex
          h-10
          w-16
          items-center
          justify-center
          rounded-xl
          bg-slate-950
          text-white
          shadow-sm
          transform-gpu
          transition-all
          duration-300
          ease-out
          will-change-transform
          group-hover:scale-[1.03]
          group-hover:shadow-md
        "
      >
        

        
        <span
          className="
            text-lg
            font-black
            tracking-tight
          "
        >
           𝓢Ø
        </span>
      </div>

      {/* Brand Text */}

      <div
        className="
          
          sm:block
          transition-all
          duration-300
          ease-out
        "
      >
         
                    <div
                      className="
                        text-base
                        font-black
                        leading-none
                        text-slate-950
                      "
                    >
                      SAJILO
                    </div>
         <div
                      className="
                        mt-1
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-slate-400
                      "
                    >
                      Order1996
                    </div>
      </div>
    </Link>
  );
}