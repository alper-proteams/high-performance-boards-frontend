"use client";

export default function Button({ className, children, disabled, ...props }) {
  return (
    <button
      type="button"
      className={`${className} ${
        disabled
          ? "bg-secondary-gray text-slate-400 pointer-events-none"
          : "bg-primary-red text-white"
      }  ${"p-4 items-start gap-2.5 inline-flex font-semibold text-sm justify-center"}`}
      {...props}
    >
      {children}
    </button>
  );
}
