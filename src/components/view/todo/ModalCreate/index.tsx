import { FormEvent } from "react";
import Modal from "@/components/ui/Modal";
import todoServices from "@/services/todo";

const ModalCreate = (props: any) => {
  const { setModalCreate, setTodoData } = props;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form: any = event.target as HTMLFormElement;

    const data = {
      title: form.title.value,
    };

    const result = await todoServices.add(data);

    if (result.status === 200) {
      setModalCreate(false);
    } else {
      console.log("erro");
    }
  };

  return (
    <Modal onClose={() => setModalCreate(false)}>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Judul</label>
          <input type="text" name="title" />
        </div>
        <button type="submit">add</button>
        <button onClick={() => setModalCreate(false)}>cancel</button>
      </form>
    </Modal>
  );
};

export default ModalCreate;
