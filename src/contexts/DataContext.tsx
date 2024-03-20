'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';

export const DataContext = createContext<any>({} as any);

interface DataProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProps) => {
  const [dataFaturamento, setDataFaturamento] = useState<any>([]);
  const [dataGrafico, setDataGrafico] = useState<any>([]);

  return (
    <DataContext.Provider
      value={{
        dataFaturamento,
        dataGrafico,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
