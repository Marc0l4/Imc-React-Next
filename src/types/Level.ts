export type Level = {
    title: 'Magreza' | 'Normal' | 'Sobrepeso' | 'Obesidade';
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number
}