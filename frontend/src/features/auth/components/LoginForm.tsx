"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
} from "lucide-react";

import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const login = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  /*
   * Load email and password after coming from
   * the registration page.
   */
  useEffect(() => {
    const registeredLogin = sessionStorage.getItem(
      "registered_login"
    );

    if (!registeredLogin) {
      return;
    }

    try {
      const data = JSON.parse(registeredLogin);

      if (data.email) {
        setEmail(data.email);
      }

      if (data.password) {
        setPassword(data.password);
      }

      /*
       * Remove the temporary credentials after
       * loading them into the form.
       */
      sessionStorage.removeItem("registered_login");
    } catch (error) {
      console.error(
        "Failed to load registered login details:",
        error
      );

      sessionStorage.removeItem("registered_login");
    }
  }, []);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    login.mutate({
      email,
      password,
    });
  };

  return (
    <div className="fixed inset-0 h-[100dvh] w-full overflow-hidden bg-slate-50">
      <div className="flex h-full w-full items-center justify-center overflow-hidden px-4">
        <div
          className="
            w-full
            max-w-md
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-xl
            shadow-slate-900/5
            sm:p-8
          "
        >
          {/* Header */}
          <div className="mb-7 text-center">
            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-slate-950
                text-white
                shadow-lg
                shadow-slate-950/20
              "
            >
              <LockKeyhole className="h-5 w-5" />
            </div>

            <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
              Welcome Back
            </h1>

            <p className="mt-1.5 text-sm text-slate-500">
              Sign in to continue to your account
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Email address
              </label>

              <div className="relative">
                <Mail
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    h-4.5
                    w-4.5
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    pl-11
                    pr-4
                    text-sm
                    text-slate-900
                    outline-none
                    transition
                    placeholder:text-slate-400
                    hover:border-slate-300
                    focus:border-slate-900
                    focus:bg-white
                    focus:ring-4
                    focus:ring-slate-900/5
                  "
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="
                    text-xs
                    font-semibold
                    text-slate-500
                    transition
                    hover:text-slate-900
                  "
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <LockKeyhole
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    h-4.5
                    w-4.5
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    pl-11
                    pr-11
                    text-sm
                    text-slate-900
                    outline-none
                    transition
                    placeholder:text-slate-400
                    hover:border-slate-300
                    focus:border-slate-900
                    focus:bg-white
                    focus:ring-4
                    focus:ring-slate-900/5
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (current) => !current
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="
                    absolute
                    right-2
                    top-1/2
                    flex
                    h-8
                    w-8
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-lg
                    text-slate-400
                    transition
                    hover:bg-slate-100
                    hover:text-slate-700
                  "
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={login.isPending}
              className="
                h-11
                w-full
                rounded-xl
                bg-slate-950
                px-4
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-slate-950/10
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-slate-800
                hover:shadow-xl
                focus:outline-none
                focus:ring-4
                focus:ring-slate-900/10
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:translate-y-0
              "
            >
              {login.isPending
                ? "Logging in..."
                : "Login"}
            </button>
          </form>

          {/* Register */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{" "}
              <a
                href="/register"
                className="
                  font-semibold
                  text-slate-900
                  transition
                  hover:text-blue-600
                "
              >
                Create account
              </a>
            </p>
          </div>

          {/* Security */}
          <div className="mt-5 border-t border-slate-100 pt-4 text-center">
            <p className="text-xs text-slate-400">
              Your account information is securely protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}