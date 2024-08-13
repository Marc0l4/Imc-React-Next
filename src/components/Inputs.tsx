'use client'

import { ImcContext } from "@/contexts/ImcContext";
import { useContext } from "react";

export const Inputs = () => {
    const Imc = useContext(ImcContext)

    if (!Imc) return null

    return (
        <div className="flex-1
            md:mr-0
            lg:mr-10">
            <h1 className="text-3xl text-gray-600 font-bold mb-4">Calcule o seu IMC</h1>
            <p className="text-lg mb-10 text-gray-500"> IMC é um cálculo simples que permite medir se alguém está ou não com o peso ideal</p>

            <input
                className="w-full border-b border-gray-600 outline-none border-opacity-50 py-2 px-1 mb-5 disabled:opacity-50"
                type="number"
                placeholder="Digite a sua altura. Ex: 1.5(em metros)"
                value={Imc.heightField > 0 ? Imc.heightField : ''}
                onChange={e => Imc.setHeightField(parseFloat(e.target.value))}
                disabled={Imc.toShow ? true : false}
            />

            <input
                className='w-full border-b border-gray-600 outline-none border-opacity-50 py-2 px-1 mb-5 disabled:opacity-50'
                type="number"
                placeholder="Digite o seu peso. Ex: 75.3(em Kg)"
                value={Imc.weightField > 0 ? Imc.weightField : ''}
                onChange={e => Imc.setWeightField(parseFloat(e.target.value))}
                disabled={Imc.toShow ? true : false}
            />

            <button
                className="block bg-sky-700 transition-all hover:bg-sky-600 py-4 mt-10 w-full cursor-pointer text-white rounded-lg disabled:opacity-50"
                onClick={Imc.handleCalculateButton}
                disabled={Imc.toShow ? true : false}
            >
                Calcular</button>
        </div>
    );
}