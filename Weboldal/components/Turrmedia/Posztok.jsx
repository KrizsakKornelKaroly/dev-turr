import Image from "next/image"


const feeds = [
    {
        title: "Cím",
        img: "/images/fokiAI.jpg"
    },
    {
        title: "Cím2",
        img: "/images/fokiAI.jpg"
    },
    {
        title: "title",
        img: "/images/fokiAI.jpg"
    },
    {
        title: "title",
        img: "/images/fokiAI.jpg"
    },
    {
        title: "title",
        img: "/images/fokiAI.jpg"
    },
    {
        title: "title",
        img: "/images/fokiAI.jpg"
    }
]

const Posztok = () => {
    return (
        <>
            <h1 className=" text-2xl">Posztok</h1>
            {feeds.map((feed) => {
                return (
                    <div className="w-56 min-w-56 max-w-56">
                        <h1>{feed.title}</h1>
                        <Image src={feed.img} width={50} height={50} />
                    </div>
                )
            })}
        </>
    )
}

export default Posztok