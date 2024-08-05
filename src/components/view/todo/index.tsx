import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import ModalCreate from "./ModalCreate";
import ModalDelete from "./ModalDelete";

const TodoView = ({ todoDatas }: any) => {
  const [todoData, setTodoData] = useState<any>([]);

  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<any>({});
  const [modalDelete, setModalDelete] = useState<any>({});

  useEffect(() => {
    setTodoData(todoDatas);
  }, [todoDatas]);

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
          {todoData.map((todo: any) => (
            <Card
              key={todo.id}
              id={todo.id}
              title={todo.title}
              todo={todo}
              setModalUpdate={setModalUpdate}
              setModalDelete={setModalDelete}
            />
          ))}
        </div>
      </div>
      {modalCreate && (
        <ModalCreate
          setModalCreate={setModalCreate}
          setTodoData={setTodoData}
        />
      )}
      {Object.keys(modalDelete).length > 0 && (
        <ModalDelete
          setModalDelete={setModalDelete}
          deleteData={modalDelete}
          setTodoData={setTodoData}
        />
      )}
    </>
  );
};

export default TodoView;
