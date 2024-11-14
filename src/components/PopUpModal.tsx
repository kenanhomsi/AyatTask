import { Modal } from "flowbite-react";
import { useDispatch } from "react-redux";
import { PopUpParams } from "../Types";
import { useAppSelector } from "../redux/store";

const PopUpModal: React.FC<PopUpParams> = ({
  title,
  closeAction,
  children,
  PopSize,
  type,
}) => {
  const isOpen = useAppSelector((state) => state.popUp);
  const showModal = isOpen[type];
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeAction());
  };

  return (
    <Modal
      show={showModal}
      onClose={handleClose}
      size={PopSize}
      popup
      className="self-center !px-8 !py-5   hidden md:flex "
    >
      <Modal.Header className="!px-8 !pt-6 pb-0">
        <h1 className="text-center font-medium text-2xl text-black mb-10">
          {title}
        </h1>
      </Modal.Header>
      <Modal.Body >{children}</Modal.Body>
    </Modal>
  );
};

export default PopUpModal;
