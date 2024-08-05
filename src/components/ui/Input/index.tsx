type PropsTypes = {
  title: string;
  name: string;
  type: string;
  className?: string;
  defaultValue?: string;
};

const Input = (props: PropsTypes) => {
  const { title, name, type = "text", className, defaultValue } = props;
  return (
    <div className="flex flex-col gap-1 my-2">
      <label htmlFor={name} className="font-medium text-slate-800">
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`px-2 py-1 border border-slate-400 rounded ${className}`}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
