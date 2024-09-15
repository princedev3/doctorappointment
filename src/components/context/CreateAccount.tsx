import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const CreateAccount = () => {
  return (
    <div className="bg-bgprimary rounded-md h-[50vh] my-10 flex">
      <div className=" flex-1 flex items-end  flex-col gap-5  text-lg md:text-xl p-10 md:p-0">
        <div className="flex items-start gap-5 justify-center flex-col  h-full">
          <h2 className="font-semibold text-white capitalize tracking-wide w-full">
            book appointmnet
          </h2>

          <h2 className="font-semibold text-white capitalize tracking-wide">
            with 100+ trusted doctors
          </h2>
          <Button
            variant={"default"}
            className="rounded-3xl py-4 px-8 bg-white cursor-pointer text-bgprimary"
          >
            <span className="capitalize font-medium ">book appointment</span>
          </Button>
        </div>
      </div>
      <div className="flex-[1] h-[50vh] flex items-start justify-start relative bottom-0  ">
        <Image
          src={"/appointment_img.png"}
          width={200}
          height={200}
          className="object-contain h-full md:h-[60vh] w-full flex flex-start absolute bottom-0 "
          alt=""
        />
      </div>
    </div>
  );
};

export default CreateAccount;
