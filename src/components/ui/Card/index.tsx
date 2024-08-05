import { FaPenClip, FaRegTrashCan } from "react-icons/fa6";

type PropsTypes = {
  id: string;
  title: string;
  isDone?: boolean | any;
  todo: any;
  setModalUpdate: Function;
  setModalDelete: Function;
};

const Card = (props: PropsTypes) => {
  const { id, title, isDone, todo, setModalUpdate, setModalDelete } = props;
  return (
    <div className="flex items-center justify-between" id={id}>
      <div>
        <input
          type="checkbox"
          name="isDone"
          id="isDone"
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
        <button
          className="p-2 bg-blue-500 rounded text-white shadow"
          onClick={() => setModalUpdate(todo)}
        >
          <FaPenClip />
        </button>
        <button
          className="p-2 bg-red-500 rounded text-white shadow"
          onClick={() => setModalDelete(todo)}
        >
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};

export default Card;
