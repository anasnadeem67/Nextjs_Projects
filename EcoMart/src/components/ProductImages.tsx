"use client"


import { url } from "inspector"
import Image from "next/image"
import { useState } from "react"

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/9443035/pexels-photo-9443035.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/8339541/pexels-photo-8339541.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/11492972/pexels-photo-11492972.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/2164850/pexels-photo-2164850.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
]

const ProductImages = () => {

    const [index, setIndex] = useState(0)
    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                src={images[index].url}
                alt=""
                fill
                sizes="50vw"
                className="object-cover rounded-md"
                />
            </div>       
            <div className="flex justify-between gap-4 mt-8">
            {images.map((img,i) => (
                <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
                key={img.id}
                onClick={() => setIndex(i)}       
                >
                    <Image
                    src={img.url}
                    alt=""
                    fill
                    sizes="30vw"
                    className="object-cover rounded-md"
                    />
                </div>
            ))}
            
            </div>
        </div>
    )
}

export default ProductImages