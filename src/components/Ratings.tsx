'use client'

import { useContext } from "react";
import { GridItem } from "./GridItens/GridItem";
import { ImcContext } from "@/contexts/ImcContext";
import { images } from "@/data/images";


export const Ratings = () => {
    const Imc = useContext(ImcContext)

    if (!Imc) return false;

    const handleBackButtton = () => {
        Imc.setToShow(null);
        Imc.setHeightField(0);
        Imc.setWeightField(0);
    }

    return (
        <div className="flex-1 flex
            md:ml-0">
            {!Imc.toShow &&
                <div className="flex-1 grid gap-5
                md:grid-cols-2
                lg:grid-cols-2">
                    {Imc.levels.map((item, key) => (
                        <GridItem key={key} item={item} />
                    ))}
                </div>
            }
            {Imc.toShow &&
                <div className="flex-1 flex">
                    <div
                        className="hover:bg-sky-600 absolute bg-sky-700 flex justify-center items-center -ml-4 -mt-1 cursor-pointer w-16 h-16 rounded-full
                            md:-ml-4 md:-mt-1
                            lg:-ml-9 lg:mt-36"
                        onClick={handleBackButtton}
                    >
                        <img src={images.leftarrow} className="w-7" />
                    </div>
                    <GridItem item={Imc.toShow} />
                </div>
            }
        </div>
    );
}