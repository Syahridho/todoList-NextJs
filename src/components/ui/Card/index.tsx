import { FaPenClip, FaRegTrashCan } from "react-icons/fa6";

type PropsTypes = {
  id: string;
  title: string;
  isDone: boolean | any;
};

const Card = (props: PropsTypes) => {
  const { id, title, isDone } = props;
  return (
    <div className="flex items-center justify-between">
      <div>
        <input
          type="checkbox"
          name="item"
          id="item"
          className="w-4 h-4 peer"
          defaultValue={isDone}
        />
        <label
          htmlFor="item"
          className="ml-2 peer-[:checked]:line-through peer-[:checked]:text-slate-400"
        >
          {title}
        </label>
      </div>
      <div className="flex gap-2">
        <button className="p-2 bg-blue-500 rounded text-white shadow">
          <FaPenClip />
        </button>
        <button className="p-2 bg-red-500 rounded text-white shadow">
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};

export default Card;