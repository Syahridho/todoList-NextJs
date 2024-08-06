import todoServices from "@/services/todo";
import { useState } from "react";
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

  const [todos, setTodos] = useState(todo);

  const handleChangeIsDone = async () => {
    const data = {
      title: title,
      isDone: !todos.isDone,
    };
    const result = await todoServices.update(id, data);

    if (result.status === 200) {
      setTodos({ ...todos, isDone: !todos.isDone });
    } else {
      console.log("gagal");
    }
  };

  return (
    <div
      className="p-2 rounded shadow flex items-center justify-between bg-gray-50"
      id={id}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          name="isDone"
          id="isDone"
          className="w-4 h-4 peer"
          defaultChecked={isDone}
          onChange={() => handleChangeIsDone()}
        />
        <label
          htmlFor="item"
          className="ml-2 peer-[:checked]:line-through peer-[:checked]:text-slate-400"
        >
          {title}
        </label>
      </div>
      <div className="flex gap-3">
        <button
          className="p-2 bg-blue-500 rounded text-white shadow"
          onClick={() => setModalUpdate(todos)}
        >
          <FaPenClip />
        </button>
        <button
          className="p-2 bg-red-500 rounded text-white shadow"
          onClick={() => setModalDelete(todos)}
        >
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};

export default Card;
