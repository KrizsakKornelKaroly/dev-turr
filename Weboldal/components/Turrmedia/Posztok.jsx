import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GoHeart } from "react-icons/go";
import { TbMessages } from "react-icons/tb";
import { CiLocationArrow1 } from "react-icons/ci";

const Posztok = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,profile_picture&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  const images = feed.data;
  return (
    <span className="h-screen">
      <h1 className=" text-2xl ">Posztok</h1>
      <div className="flex justify-evenly flex-wrap">
        {images.map((image) => {
          return (
            <div key={image.caption} className="p-2">
              <div className="border-2 border-gray h-1/2">
                <div className=" flex justify-center self-center items-center mx-auto  rounded-sm bg-white max-h-fit min-h-full flex-wrap">
                  <div className="mx-auto items-center self-center text-center">
                    <div className=" ">
                      <div className=""> 
                        <div className="flex">
                          <Avatar className="m-1 rounded-sm">
                            <AvatarImage
                              src="https://scontent.cdninstagram.com/v/t51.2885-19/337339947_1643788049397292_1980261598677310174_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=nkntMBPaAU4AX_JnmJZ&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCAahzcfZzXpH_QI8bJQjfI1cPStPdfoi6tJtfeRpmOeg&oe=65E231EE&_nc_sid=10d13b"
                              alt="@shadcn"
                            />
                            <AvatarFallback>Türr</AvatarFallback>
                          </Avatar>
                          <p className=" bg-gray-500/30 h-6 mt-2 rounded-md px-2">
                            Türr100
                          </p>
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-1/8"
                      src={image.media_url}
                      width={500}
                      height={500}
                    />{" "}
                      <div className="max-w-72 flex mx-14 bg-gray-100 rounded-xl  w-fit overflow-hidden  ">
                        <h1 className="text-wrap w-1/2">{image.caption}</h1>
                      </div>
                  </div>
                </div>
                <div className="flex text-3xl">
                  <GoHeart className="" />
                  <TbMessages />
                  <CiLocationArrow1 />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="h-screen"></div>
    </span>
  );
};

export default Posztok;
