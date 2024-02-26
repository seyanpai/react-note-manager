import { createPortal } from "react-dom";
import { useRef, forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/80 p-5 rounded-lg text-center shadow-black shadow-2xl"
      ref={dialog}
    >
      {children}
      <form method="dialog">
        <button className="mt-5 hover:text-red-800 font-bold">x</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
