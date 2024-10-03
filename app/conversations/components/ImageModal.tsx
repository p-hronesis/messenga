"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";

interface ImageModalProps {
  src: string;
  onClose: () => void;
  isOpen?: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, onClose, isOpen }) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="Image" className="object-cover" src={src} fill />
      </div>
    </Modal>
  );
};

export default ImageModal;
