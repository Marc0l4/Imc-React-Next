import { Level } from "@/types/Level";
import { images } from "@/data/images";

type Props = {
    item: Level
}
export const GridItem = ({ item }: Props) => {
    return (
        <div className={`flex-1 text-white rounded-lg flex justify-center items-center flex-col p-5
            ${item.color == 'gray' && 'bg-gray-400'}
            ${item.color == 'emerald' && 'bg-emerald-500'}
            ${item.color == 'yellow' && 'bg-yellow-500'}
            ${item.color == 'red' && 'bg-red-600'}
        `}>
            <div className="w-16 h-16 rounded-full bg-black bg-opacity-10 flex justify-center items-center">
                <img src={item.icon == 'up' ? images.up : images.down} className="w-8" />
            </div>
            <div className="text-xl font-bold mt-2">{item.title}</div>
            {item.yourImc &&
                <div className="text-lg mt-3 mb-12">Seu IMC é de {item.yourImc} Kg/m²</div>
            }
            <div className="text-xs mt-4">IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong></div>
        </div>
    );
}