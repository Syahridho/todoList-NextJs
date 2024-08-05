import Modal from "@/components/ui/Modal";

const ModalUpdate = (props: any) => {
  const { setModalUpdate } = props;
  return (
    <Modal onClose={() => setModalUpdate({})}>
      <h1>hiyaa</h1>
    </Modal>
  );
};

export default ModalUpdate;
