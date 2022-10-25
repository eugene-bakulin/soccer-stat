import React from "react";
import { useAppDispatch } from "store/hooks";
import { closeManyReqModal } from "store/modal/modalSlice";
import "../modal/modal.css";

const ManyReqModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(closeManyReqModal());
  };
  return (
    <div className="modal-overlay" onClick={clickHandler}>
      <div className="many-requests-modal">
        <h3>Слишком много запросов :(</h3>
        <h4>Подождите 60 секунд, пожалуйста.</h4>
      </div>
    </div>
  );
};

export default ManyReqModal;
