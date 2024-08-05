import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import todoServices from "@/services/todo";
import { FormEvent, useState } from "react";

const ModalUpdate = (props: any) => {
  const { setModalUpdate, updateData, setTodoData } = props;

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form: any = event.target as HTMLFormElement;

    const data = {
      title: form.title.value,
      isDone: form.isDone.checked,
    };

    const result = await todoServices.update(updateData.id, data);

    if (result.status === 200) {
      setIsLoading(false);
      setModalUpdate({});
      const { data } = await todoServices.getAll();
      setTodoData(data.data);
    } else {
      setIsLoading(false);
    }
  };
  return (
    <Modal onClose={() => setModalUpdate({})}>
      <h1 className="font-semibold text-lg">Update Data</h1>
      <form onSubmit={handleSubmit}>
        <Input
          title="Title"
          name="title"
          type="text"
          defaultValue={updateData.title}
        />
        <input
          type="checkbox"
          name="isDone"
          id="isDone"
          defaultChecked={updateData.isDone}
        />
        <div className="flex gap-3 mt-4">
          <Button type="submit" className="w-1/2">
            {isLoading ? "Loading..." : "Add"}
          </Button>
          <Button
            variant="2"
            onClick={() => setModalUpdate(false)}
            className="w-1/2"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalUpdate;
