import { FormEvent, useState } from "react";
import Modal from "@/components/ui/Modal";
import todoServices from "@/services/todo";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const ModalCreate = (props: any) => {
  const { setModalCreate, setTodoData } = props;

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form: any = event.target as HTMLFormElement;

    const data = {
      title: form.title.value,
      isDone: false,
    };

    const result = await todoServices.add(data);

    if (result.status === 200) {
      setModalCreate(false);
      setIsLoading(false);
      const { data } = await todoServices.getAll();
      setTodoData(data.data);
    } else {
      setIsLoading(false);
      console.log("error");
    }
  };

  return (
    <Modal onClose={() => setModalCreate(false)}>
      <h1 className="font-semibold text-lg">Add Data</h1>
      <form onSubmit={handleSubmit}>
        <Input title="Title" name="title" type="text" />
        <div className="flex gap-3 mt-4">
          <Button type="submit" className="w-1/2">
            {isLoading ? "Loading..." : "Add"}
          </Button>
          <Button
            variant="2"
            onClick={() => setModalCreate(false)}
            className="w-1/2"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalCreate;
