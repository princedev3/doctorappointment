"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";



const Navbar = () => {
  const pathName = usePathname();


  return (
    <div className="px-10 flex h-20 items-center justify-between border-b w-[90%] mx-auto ">
     
      <div className="">
        <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          width={120}
          height={120}
          alt=""
          className="object-cover"
          />
          </Link>
      </div>
      <div className="hidden md:flex items-center justify-between gap-4 ">
        <Link
          href={"/"}
          className={`${
            pathName === "/" ? "after-element " : ""
          } transition-all  duration-1000 relative capitalize font-[500] text-base text-muted-foreground cursor-pointer `}
        >
          Home
        </Link>

        <Link
          href={"/doctors"}
          className={`${
            pathName === "/doctors" ? "after-element " : ""
          } transition-all duration-1000 relative capitalize font-[500] text-base text-muted-foreground cursor-pointer `}
        >
          all doctors
        </Link>

        <Link
          href={"/about"}
          className={`${
            pathName === "/about" ? "after-element " : ""
          } transition-all duration-1000 relative capitalize font-[500] text-base text-muted-foreground cursor-pointer `}
        >
          about
        </Link>
        <Link
          href={"/contact"}
          className={`${
            pathName === "/contact" ? "after-element " : ""
          } transition-all duration-1000 relative capitalize font-[500] text-base text-muted-foreground cursor-pointer `}
        >
          contact
        </Link>
        <Link
          href={"/appointment"}
          className={`${
            pathName === "/appointment" ? "after-element " : ""
          } transition-all duration-1000 relative capitalize font-[500] text-base text-muted-foreground cursor-pointer `}
        >
         appointment
        </Link>
      </div>
      <div className="block md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Domains</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px] md:hidden ">
            <DropdownMenuLabel>My Domain
            
            </DropdownMenuLabel>
            
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem>
              <Link
                href={"/doctors"}
                className={` relative capitalize font-[400] text-sm text-muted-foreground cursor-pointer flex items-center gap-1 `}
              >
                all doctors
              </Link>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              <Link
                href={"/contact"}
                className={`
           
          relative capitalize font-[400] text-sm flex items-center gap-1 text-muted-foreground cursor-pointer `}
              >
                contact
              </Link>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              <Link
                href={"/about"}
                className={` relative capitalize font-[400] text-sm flex items-center gap-1 text-muted-foreground cursor-pointer `}
              >
                about
              </Link>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              <Link
                href={"/appointment"}
                className={` relative capitalize font-[400] text-sm flex items-center gap-1 text-muted-foreground cursor-pointer `}
              >
               appointment
              </Link>
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    
    </div>
  );
};

export default Navbar;
