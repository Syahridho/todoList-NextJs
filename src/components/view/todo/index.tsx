import { useState } from "react";
import Card from "@/components/ui/Card";
import ModalCreate from "./ModalCreate";

const TodoView = () => {
  const [todoData, setTodoData] = useState<any>([]);

  const [modalCreate, setModalCreate] = useState<boolean>(false);
  return (
    <>
      <div className="max-w-[400px] mx-auto p-4 relative">
        <h1 className="text-xl font-semibold">Todo</h1>
        <button
          className="bg-slate-800 py-1 px-2 text-white rounded shadow"
          onClick={() => setModalCreate(true)}
        >
          add Data
        </button>
        <div className="flex flex-col gap-4 my-4">
          <Card id="1" title="makan" isDone={true} />
        </div>
      </div>
      {modalCreate && (
        <ModalCreate
          setModalCreate={setModalCreate}
          setTodoData={setTodoData}
        />
      )}
    </>
  );
};

export default TodoView;
