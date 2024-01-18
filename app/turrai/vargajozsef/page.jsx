import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const aiconv = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <div className="absolute h-full w-56 bg-gray-200 flex justify-center py-1">
          <div className="flex justify-center ">
            <Avatar>
              <AvatarImage
                className="rounded-lg"
                src="https://github.com/shadcn.png"
              />

              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="py-2 px-5 ">Adrián</p>
          </div>
          <div className=" space-y-3 justify-start absolute py-20">
            <p className="font-bold text-center">
              <b>✍️</b> Beszélgetéseid:
            </p>
            <p>A felhasználó előző üzenete #1</p>
            <p>A felhasználó előző üzenete #2</p>
            <p>A felhasználó előző üzenete #3</p>
            <p>A felhasználó előző üzenete #4</p>
            <p>A felhasználó előző üzenete #5</p>
            <div className="w-full absolute mx-auto py-20 text-center self-center justify-center">
              <p>Jelenleg vele beszélgetsz:</p>
              <Image
                width={227}
                height={200}
                quality={100}
                src="/images/vargaAI.jpg"
                className="hover:cursor-pointer hover:opacity-80 hover:bg-gray-500 min-h-32 max-h-32 min-w-32 max-w-32 rounded-sm self-center flex justify-center mx-auto "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center ml-56 self-center relative">
        <p className="border-b w-full self-center text-center p-3 text-lg">
          Még <b>5</b> darab üzenetet küldhetsz.{" "}
          <span className="text-blue-800">
            <u className="hover:cursor-pointer">
              Tovább szeretnél beszélgetni?
            </u>
          </span>
        </p>
      </div>
      <div className="ml-56 text-center bg-slate-50 h-3/4">
        <p>Itt lesznek az üzenetek</p>
        <p>Itt lesznek az üzenetek</p>
        <p>Itt lesznek az üzenetek</p>
      </div>
      <div className="ml-56 flex justify-center">
        <div className="flex w-full max-w-xl items-center relative">
          <Input type="email" placeholder="Ide írd az üzenetet..." />
          <Button className="absolute right-0" type="submit">
            Küldés
          </Button>
        </div>
      </div>
    </>
  );
};

export default aiconv;
