"use client";

export default function Button({ className, children, disabled, ...props }) {
  return (
    <button
      type="button"
      className={`${className} ${"p-4 items-start gap-2.5 inline-flex font-semibold  text-white text-sm justify-center"} ${
        disabled ? "bg-secondary-gray" : "bg-primary-red"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
