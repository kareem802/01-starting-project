export default function Input({ labelText, inputType, ...props }) {
  const cssClasses = "bg-[#D9D9D9] border-none rounded-md p-2 focus:border-0";
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={labelText} className="text-stone-500 uppercase">
        {labelText}
      </label>
      {inputType == "textarea" ? (
        <textarea className={cssClasses} {...props} />
      ) : (
        <input className={cssClasses} {...props} />
      )}
    </div>
  );
}
