'use client'
import { ReactNode, createContext, useEffect, useState } from "react";

export const DataContext = createContext<any>({} as any);

interface DataProps {
    children: ReactNode;
}

export const DataProvider = ({ children }: DataProps) => {
    const [dataFaturamento, setDataFaturamento] = useState<any>([]);
    const [dataGrafico, setDataGrafico] = useState<any>([]);

    useEffect(() => {
        const getDataFaturamento =  () => {
            // const file = await fs.readFile(process.cwd() + '/public/data/faturamento-painel-tv.json', 'utf8');
            // const data = JSON.parse(file);
            fetch('/public/data/faturamento-painel-tv.json')
            .then((res) => res.json())
            .then((data) => {
                setDataFaturamento(data)
            })
        };
        getDataFaturamento();
    }, [fs]);

    // useEffect(() => {
    //     const getDataGrafico = async () => {
    //         const file = await fs.readFile(process.cwd() + '/public/data/grafico-painel-tv.json', 'utf8');
    //         const data = JSON.parse(file);
    //         setDataGrafico(data);
    //     };
    //     getDataGrafico();
    // }, [fs]);

    return (
        <DataContext.Provider value={{
            dataFaturamento,
            dataGrafico
        }}>
            {children}
        </DataContext.Provider>
    )
}