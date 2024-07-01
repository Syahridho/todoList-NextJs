import { FaRegTrashCan, FaPenClip } from "react-icons/fa6";
const TodoView = () => {
  return (
    <div className="max-w-[400px] mx-auto p-4 relative">
      <h1 className="text-xl font-semibold">Todo</h1>
      <div className="flex justify-between items-center mt-2">
        <input
          type="text"
          className="py-1 px-2 border w-full rounded-full bg-slate-100 shadow "
        />
        <button className="bg-slate-800 text-white px-4 py-1.5 rounded-full shadow absolute right-2">
          Add
        </button>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <div className="flex items-center justify-between">
          <div>
            <input
              type="checkbox"
              name="item"
              id="item"
              className="w-4 h-4 peer"
            />
            <label
              htmlFor="item"
              className="ml-2 peer-[:checked]:line-through peer-[:checked]:text-slate-400"
            >
              Ui Dashboards
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
      </div>
    </div>
  );
};

export default TodoView;
