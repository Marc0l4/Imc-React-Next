'use client'

import { Level } from "@/types/Level";
import { createContext, ReactNode, useState } from "react";

type ImcContextType = {
    levels: Level[]
    heightField: number;
    weightField: number;
    toShow: Level | null;
    setToShow: (newLevel: Level | null) => void;
    setHeightField: (newHeight: number) => void;
    setWeightField: (newWeight: number) => void;
    handleCalculateButton: () => void;
    calculateImc: (height: number, weight: number) => void;
}
export const ImcContext = createContext<ImcContextType | null>(null);

export const ImcProvider = ({ children }: { children: ReactNode }) => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null)

    const levels: Level[] = [
        {
            title: 'Magreza',
            color: 'gray',
            icon: 'down',
            imc: [0, 18.5]
        }, {
            title: 'Normal',
            color: 'emerald',
            icon: 'up',
            imc: [18.6, 24.9]
        }, {
            title: 'Sobrepeso',
            color: 'yellow',
            icon: 'down',
            imc: [25, 30]
        }, {
            title: 'Obesidade',
            color: 'red',
            icon: 'down',
            imc: [30.1, 99]
        }
    ];

    const calculateImc = (height: number, weight: number) => {
        const imc = weight / (height * height);

        for (let i in levels) {
            if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
                let levelCopy = { ...levels[i] }
                levelCopy.yourImc = parseFloat(imc.toFixed(2));
                return levelCopy;
            };
        }

        return null
    }

    const handleCalculateButton = () => {
        if (heightField && weightField) {
            setToShow(calculateImc(heightField, weightField));
        } else {
            alert('Todos os campos precisam estar preenchidos');
        }
    }

    return (
        <ImcContext.Provider value={{
            levels, calculateImc,
            toShow, setToShow,
            heightField, setHeightField,
            weightField, setWeightField,
            handleCalculateButton
        }}>
            {children}
        </ImcContext.Provider>
    );
}