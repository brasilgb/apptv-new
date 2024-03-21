import PieChart from '@/components/Charts/PieChart';
import Connectors from '@/components/Connectors';
import Kpis from '@/components/Kpis';
import TitleSection from '@/components/TitleSection';
import React from 'react';
import Section from '@/components/Section';
import { getDataFaturamento } from "@/lib/apitv";
import { colorProgress } from "@/utils/dataColors";

const VendasAno = async () => {
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
          title={`Vendas do ano: ${faturamentos[0].Ano}`}
          fsize="text-4xl py-4"
        />
        <Connectors size="h-6 w-8" />
        <div className="flex gap-4">
          <Kpis
            title="Meta"
            value={faturamentos[0]?.MetaAcumuladaAno}
            tstyles="py-4"
            vstyles="py-8"
            tsize="text-3xl"
            vsize="text-6xl"
            tcolor="text-gray-500"
            vcolor="#019EE3"
          />
          <Kpis
            title="Vendas"
            value={faturamentos[0]?.VendaAno}
            tstyles="py-4"
            vstyles="py-8"
            tsize="text-3xl"
            vsize="text-6xl"
            tcolor="text-gray-500"
            vcolor={colorProgress((faturamentos[0]?.PerformanceAno * 100).toFixed())}
          />
          <Kpis
            title="Falta Vender"
            value={faturamentos[0]?.DiferencaAno}
            tstyles="py-4"
            vstyles="p-8"
            tsize="text-3xl"
            vsize="text-6xl"
            tcolor="text-gray-500"
            vcolor={colorProgress((faturamentos[0]?.PerformanceAno * 100).toFixed())}
          />
        </div>
        <Connectors size="h-6 w-8" />
        <div className="p-7 bg-white shadow rounded-b-md">
          <PieChart
            title={'Performance'}
            value={(faturamentos[0]?.PerformanceAno * 100).toFixed()}
            colorBar={colorProgress((faturamentos[0]?.PerformanceAno * 100).toFixed())}
            colorText={colorProgress((faturamentos[0]?.PerformanceAno * 100).toFixed())}
            height={565}
            sizeValue="100px"
            sizeTitle="30px"
          />
        </div>
      </Section>
    </main>
  );
};

export default VendasAno;
