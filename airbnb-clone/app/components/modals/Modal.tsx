"use client";

import { useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean; // optional boolean indicating whether the modal is open or closed
  onClose: () => void; // required function to be called when the modal is closed
  onSubmit: () => void; // required function to be called when the modal's primary action button is clicked
  title?: string; // optional string representing the modal's title
  body?: React.ReactElement; // optional React element representing the modal's body content
  footer?: React.ReactElement; // optional React element representing the modal's footer content
  actionLabel: string; // required string representing the label for the modal's primary action button
  disabled?: boolean; // optional boolean indicating whether the primary action button should be disabled
  secondaryAction?: () => void; // optional function to be called when the modal's secondary action button is clicked
  secondaryLabel?: string; // optional string representing the label for the modal's secondary action button
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 g:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          {/* Content */}
          <div
            className={`
    translate 
    duration-300 
    h-full 
    ${showModal ? "translate-y-o" : "translate-y-full"}
    ${showModal ? "opacity-100" : "opacity-0"}
    `}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold ">{title}</div>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">{body}</div>
              {/* Footer */}
              <div className="flex flex-col gap-2 p-2">
                <div className="flex flex-row items-center gap-4 w-full">
                  <Button label="my button"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
