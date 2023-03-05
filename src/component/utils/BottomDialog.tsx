import { Dialog, Transition } from "@headlessui/react";
import type { ReactNode } from "react";
import { Fragment } from "react";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  setOpen: (x: boolean) => void;
};
const BottomDialog = ({ children, isOpen, setOpen }: Props) => {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-white/30" aria-hidden="true" />
        <Dialog.Panel>{children}</Dialog.Panel>
      </Dialog>
    </Transition>
  );
};
export default BottomDialog;
