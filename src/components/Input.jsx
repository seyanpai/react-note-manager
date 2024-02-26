import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <p className="">
      <label className="text-stone-800 uppercase font-semibold">{label}</label>
      <br />
      {textarea ? (
        <textarea
          ref={ref}
          className="w-full border rounded-md mb-5 px-2 py-1"
          {...props}
        />
      ) : (
        <input ref={ref} className="w-full border rounded-md mb-5 px-2 py-1" {...props} />
      )}
    </p>
  );
});

export default Input;
