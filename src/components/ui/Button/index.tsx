type PropsTypes = {
  children: React.ReactNode;
  type?: "submit" | "button";
  variant?: string;
  className?: string;
  onClick?: () => void;
};

const Button = (props: PropsTypes) => {
  const { children, type = "button", variant = 1, className, onClick } = props;
  return (
    <button
      type={type}
      className={`${
        variant === 1
          ? `text-white bg-slate-800 py-1 px-2 border rounded shadow transition duration-500 hover:bg-slate-950 ${className}`
          : `text-slate-800 bg-white border py-1 px-2 rounded shadow transition duration-500 hover:bg-slate-200 ${className}`
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
