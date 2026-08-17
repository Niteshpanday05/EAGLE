"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
} from "lucide-react";
import { toast } from "sonner";

import { useRegister } from "../hooks/useRegister";
import { RegisterRequest } from "../types/auth.types";

const initialValues: RegisterRequest = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export default function RegisterForm() {
  const router = useRouter();
  const register = useRegister();

  const [formData, setFormData] =
    useState<RegisterRequest>(initialValues);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Check password match
    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords do not match.");
      return;
    }

    // Check password length
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    register.mutate(formData, {
      onSuccess: (data) => {
        toast.success(
          data?.message || "Registration successful!"
        );

        /*
         * Temporarily save the login credentials.
         *
         * We use sessionStorage instead of putting the
         * password in the URL.
         */
        sessionStorage.setItem(
          "registered_login",
          JSON.stringify({
            email: formData.email,
            password: formData.password,
          })
        );

        // Go to login page
        router.push("/login");
      },

      onError: (error: any) => {
        const responseData = error?.response?.data;

        if (responseData?.email) {
          toast.error(
            Array.isArray(responseData.email)
              ? responseData.email[0]
              : responseData.email
          );
          return;
        }

        if (responseData?.first_name) {
          toast.error(
            Array.isArray(responseData.first_name)
              ? responseData.first_name[0]
              : responseData.first_name
          );
          return;
        }

        if (responseData?.last_name) {
          toast.error(
            Array.isArray(responseData.last_name)
              ? responseData.last_name[0]
              : responseData.last_name
          );
          return;
        }

        if (responseData?.confirm_password) {
          toast.error(
            Array.isArray(responseData.confirm_password)
              ? responseData.confirm_password[0]
              : responseData.confirm_password
          );
          return;
        }

        if (responseData?.password) {
          toast.error(
            Array.isArray(responseData.password)
              ? responseData.password[0]
              : responseData.password
          );
          return;
        }

        if (responseData?.detail) {
          toast.error(responseData.detail);
          return;
        }

        toast.error(
          "Registration failed. Please try again."
        );
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:py-4">
      <div className="mx-auto flex w-full max-w-md justify-center">
        <div
          className="
            w-full
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
              <User className="h-5 w-5" />
            </div>

            <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
              Create Account
            </h1>

            <p className="mt-1.5 text-sm text-slate-500">
              Create your account to get started
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* First Name + Last Name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first_name"
                  className="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  First name
                </label>

                <div className="relative">
                  <User
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
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                    autoComplete="given-name"
                    placeholder="First name"
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

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last_name"
                  className="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Last name
                </label>

                <div className="relative">
                  <User
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
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    value={formData.last_name}
                    onChange={handleChange}
                    autoComplete="family-name"
                    placeholder="Last name"
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
            </div>

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
                  value={formData.email}
                  onChange={handleChange}
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
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

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
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  placeholder="Create a password"
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
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              <p className="mt-1.5 text-xs text-slate-400">
                Minimum 8 characters
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirm_password"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Confirm password
              </label>

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
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  id="confirm_password"
                  name="confirm_password"
                  required
                  minLength={8}
                  value={formData.confirm_password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  placeholder="Confirm your password"
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
                    setShowConfirmPassword(
                      (current) => !current
                    )
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
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded border-slate-300"
              />

              <label
                htmlFor="terms"
                className="text-xs leading-5 text-slate-500"
              >
                I agree to the{" "}
                <a
                  href="/terms"
                  className="font-semibold text-slate-900 hover:text-blue-600"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="font-semibold text-slate-900 hover:text-blue-600"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={register.isPending}
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
              {register.isPending
                ? "Creating account..."
                : "Create account"}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-slate-900 transition hover:text-blue-600"
              >
                Sign in
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