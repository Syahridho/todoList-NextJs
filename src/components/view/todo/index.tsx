import { lazy, Suspense, useEffect, useState } from "react";
import ModalCreate from "./ModalCreate";
import ModalDelete from "./ModalDelete";
import ModalUpdate from "./ModalUpdate";
import SkeletonCard from "@/components/ui/SkeletonCard";

const Card = lazy(() => import("@/components/ui/Card"));

interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

const TodoView = ({ todoDatas }: any) => {
  const [todoData, setTodoData] = useState<any>([]);

  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<any>({});
  const [modalDelete, setModalDelete] = useState<any>({});

  useEffect(() => {
    setTodoData(todoDatas.reverse());
  }, [todoDatas]);

  return (
    <>
      <div className="max-w-[400px] mx-auto p-4  relative">
        <h1 className="text-2xl font-semibold mt-4 mb-2">Todo</h1>
        <button
          className="bg-slate-800 py-1 px-2 text-white rounded shadow mb-2"
          onClick={() => setModalCreate(true)}
        >
          add Data
        </button>
        <div className="flex flex-col gap-4 my-4">
          {todoData.length > 0 ? (
            todoData.map((todo: Todo) => (
              <Suspense key={todo.id} fallback={<SkeletonCard />}>
                <Card
                  id={todo.id}
                  title={todo.title}
                  isDone={todo.isDone}
                  todo={todo}
                  setModalUpdate={setModalUpdate}
                  setModalDelete={setModalDelete}
                />
              </Suspense>
            ))
          ) : (
            <h1 className="text-slate-500 text-center">Not Data</h1>
          )}
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
      {Object.keys(modalUpdate).length > 0 && (
        <ModalUpdate
          setModalUpdate={setModalUpdate}
          updateData={modalUpdate}
          setTodoData={setTodoData}
        />
      )}
    </>
  );
};

export default TodoView;
