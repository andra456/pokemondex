import React from "react";
import { blurs, unBlurs } from "./_styleModals";

interface Modals {
  children: React.ReactElement;
}

interface PropsUseModals {
  isShow: boolean;
  handleOpen: (e: boolean) => void;
}

export const useModal = ({ isShow, handleOpen }: PropsUseModals) => {
  const WraperModals = ({ children }: Modals) => {
    return <div className={isShow ? blurs : unBlurs}>{children}</div>;
  };

  return { WraperModals };
};
