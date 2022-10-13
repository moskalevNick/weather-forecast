import React, { Dispatch } from "react";

export const Modal = ({
  children,
  setModalOpen,
  onClose,
}: {
  children: React.ReactNode;
  setModalOpen: Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex align-middle">
    <div className="relative m-auto p-7 z-10 bg-white text-center flex flex-col rounded">
      <button
        className="absolute right-2 top-2"
        onClick={() => {
          if (onClose) onClose();
          setModalOpen(false);
        }}
      >
        ✖
      </button>
      {children}
    </div>
  </div>
);
