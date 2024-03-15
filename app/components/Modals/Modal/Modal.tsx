'use client';

import React from 'react';

import { useGlobalState } from '@/app/context/globalProvider';

import { ModalStyled } from './Modal.styled';

interface ModalProps {
  content: React.ReactNode;
}

const Modal = ({ content }: ModalProps) => {
  const { closeModal, theme } = useGlobalState();

  return (
    <ModalStyled theme={theme}>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-content">{content}</div>
    </ModalStyled>
  );
};

export default Modal;
