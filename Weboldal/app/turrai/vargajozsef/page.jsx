"use client"


import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/TurrAI/Sidebar";

const aiconv = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
};

export default aiconv;
