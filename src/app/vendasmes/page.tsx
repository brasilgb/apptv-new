import PieChart from '@/components/Charts/PieChart';
import Connectors from '@/components/Connectors';
import Kpis from '@/components/Kpis';
import TitleSection from '@/components/TitleSection';
import React from 'react';
import { getDataFaturamento } from '../apiData';
import Section from '@/components/Section';

const VendasMes = async () => {
  const faturamentos = await getDataFaturamento();

  return (
    <main
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      className="m-2"
    >
      <Section>
        <TitleSection
          title={`Vendas do mês: ${faturamentos[0].Mes}`}
          fsize="text-4xl p-4"
        />
        <Connectors size="h-6 w-8" />
        <div className="flex gap-4">
          <Kpis
            title="Meta"
            value={faturamentos[0]?.MetaMes}
            tstyles="py-4"
            vstyles="py-8"
            tsize="text-3xl"
            vsize="text-6xl"
            tcolor="text-gray-500"
            vcolor="text-blue-500"
          />
          <Kpis
            title="Vendas"
            value={faturamentos[0]?.VendaMes}
            tstyles="py-4"
            vstyles="py-8"
            tsize="text-3xl"
            vsize="text-6xl"
            tcolor="text-gray-500"
            vcolor="text-red-500"
          />
          <Kpis
            title="Falta Vender"
            value={faturamentos[0]?.DiferencaMes}
            tstyles="p-4"
            vstyles="p-8"
            tsize="text-3xl"
            vsize="text-6xl"
            tcolor="text-gray-500"
            vcolor="text-red-500"
          />
        </div>
        <Connectors size="h-6 w-8" />
        <div className="p-7 bg-white shadow rounded-b-md">
          <div className="flex w-full">
            <div className="w-1/2">
              <PieChart
                title={'Vendas'}
                value={(faturamentos[0]?.PerformanceMes * 100).toFixed()}
                colorBar="#019EE3"
                colorText="#000"
                height={565}
              />
            </div>
            <div className="w-1/2">
              <PieChart
                title={'Meta Acum.'}
                value={(faturamentos[0]?.MetaAcumuladaMes * 100).toFixed()}
                colorBar="#019EE3"
                colorText="#000"
                height={565}
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default VendasMes;
