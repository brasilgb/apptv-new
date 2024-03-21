import React from 'react';
import Section from '@/components/Section';
import TitleSection from '@/components/TitleSection';
import Connectors from '@/components/Connectors';
import BarChart from '@/components/Charts/BarChart';
import { getDataEvolucao, getDataFaturamento } from "@/lib/apitv";

const Evolucao = async () => {
  const faturamentos = await getDataFaturamento();
  const grafico = await getDataEvolucao();

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
          title={`Evolução do mês: ${faturamentos[0].Mes}`}
          fsize="text-4xl py-4"
        />
        <Connectors size="h-6 w-8" />
        <div className="bg-white rounded-b-md p-1">
          <BarChart grafico={grafico} altura={862} />
        </div>
      </Section>
    </main>
  );
};

export default Evolucao;
