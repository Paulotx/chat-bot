"use client";

import { useRef, useEffect } from "react";

export const ConfirmDialog = ({
  message,
  onConfirm,
  onCancel,
  isOpen,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onCancel={onCancel}
      className="mx-auto bg-gray-800 rounded-lg backdrop:bg-black/50 animate-fade-in"
      onClick={(e) => e.target === dialogRef.current && onCancel()}
    >
      <div className="max-w-sm p-6 border-1 border-gray-600 rounded-lg">
        <p className="text-gray-200 mb-4">{message}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 text-gray-200 cursor-pointer transition-colors ease-in duration-150"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white cursor-pointer transition-colors ease-in duration-150"
          >
            Confirmar
          </button>
        </div>
      </div>
    </dialog>
  );
};
