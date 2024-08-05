import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import todoServices from "@/services/todo";
import { useState } from "react";

const ModalDelete = (props: any) => {
  const { setModalDelete, deleteData, setTodoData } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    const result = await todoServices.delete(deleteData.id);

    if (result.status === 200) {
      setIsLoading(false);
      setModalDelete({});
      const { data } = await todoServices.getAll();
      setTodoData(data.data);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <Modal onClose={() => setModalDelete({})}>
      <h1 className="font-medium">Delete Data</h1>
      <p className="text-slate-800">{deleteData.title}</p>
      <div className="flex gap-4 mt-4">
        <Button className="w-1/2" onClick={() => handleDelete()}>
          {isLoading ? "Loading..." : "Delete"}
        </Button>
        <Button className="w-1/2" onClick={() => setModalDelete({})}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
