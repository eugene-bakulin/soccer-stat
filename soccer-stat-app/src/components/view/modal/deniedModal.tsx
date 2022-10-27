import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { closeDeniedModal } from "store/modal/modalSlice";
import "../modal/modal.css";

const DeniedModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const clickHandler = () => {
    dispatch(closeDeniedModal());
    history("/teams");
  };
  return (
    <div className="modal-overlay" onClick={clickHandler}>
      <div className="denied-modal">
        <h3>Нет доступа к календарю команды :(</h3>
      </div>
    </div>
  );
};

export default DeniedModal;
