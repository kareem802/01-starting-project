export default function Button({ children, ...props }) {
  const cssClasses =
    "bg-olive-800 text-stone-300 rounded-md px-4 py-2 max-w-43 w-fit  hover:bg-olive-600 hover:text-stone-200";
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
