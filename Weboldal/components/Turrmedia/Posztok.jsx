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
          <div>
            <img src={image.media_url} width={50} height={50} />
            <h1>{image.caption}</h1>

            <img src={images.profile_picture} width={10} height={10} />
          </div>
        );
      })}
    </>
  );
};

export default Posztok;
