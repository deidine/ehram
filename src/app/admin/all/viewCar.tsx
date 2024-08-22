"use client";
 
import React from "react";
import {  UserCard } from "./components/car-card"; 
import { Modal } from "@/components/modal";
import { Button } from "@/components/button";
import { Icons } from "@/components/icons";

export default function ViewCar({ index, user }: { index: number; user: User }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleModalToggle = ()=>{
    setIsModalOpen((prevState) => !prevState);
  }

//   React.useCallback(() => {
//     setIsModalOpen((prevState) => !prevState);
//   }, []);
  return (
    <div>
      <Modal
        open={isModalOpen}
        onOpenChange={handleModalToggle}
        trigger={
          <Button
            variant="outline"
            className="relative flex items-center justify-center gap-x-2.5"
          >
            <Icons.navigationArrow className="size-[22px]" />
            <span>View</span>
          </Button>
        }
        title="Filters"
        footer={
          <div className="flex w-full items-center justify-between gap-x-2">
           
          </div>
        }
      >
        <>
          <UserCard index={index} user={user} />
        </>
      </Modal>
    </div>
  );
}
