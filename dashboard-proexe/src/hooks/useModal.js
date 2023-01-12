import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return {
    isModalOpen,
    handleModalToggle,
  };
};
