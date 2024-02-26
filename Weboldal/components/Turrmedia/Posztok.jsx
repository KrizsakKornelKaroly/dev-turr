import Image from "next/image";

const Posztok = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,profile_picture&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  const images = feed.data;
  return (
    <>
      <h1 className=" text-2xl">Posztok</h1>
      {images.map((image) => {
        return (
          <div key={image.caption} className="flex justify-evenly gap-5">
            <div className="flex justify-center self-center items-center mx-auto border-2 border-black/70 rounded-sm bg-white">
              <div className="mx-auto items-center self-center text-center">
                <div className="">asd</div>
                <img
                  className="w-1/8"
                  src={image.media_url}
                  width={500}
                  height={500}
                />{" "}
                <br />
                <h1>{image.caption}</h1>
              </div>
            </div>
            <div>b</div>
            <div>c</div>
          </div>
        );
      })}
    </>
  );
};

export default Posztok;
