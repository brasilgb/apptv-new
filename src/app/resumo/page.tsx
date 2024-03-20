import React from 'react'
import { getDataFaturamento, getDataGrafico } from "../apiData"
import Kpis from "@/components/Kpis";
import PieChart from "@/components/Charts/PieChart";
import BarChart from "@/components/Charts/BarChart";
import Connectors from "@/components/Connectors";
import TitleSection from "@/components/TitleSection";
import Section from "@/components/Section";

const Resumo = async () => {

  const faturamentos = await getDataFaturamento();
  const grafico = await getDataGrafico();

  return (
    <main
      data-aos="zoom-in"
      data-aos-offset="250"
      data-aos-delay="50"
      data-aos-duration="500"
      className="m-2">
      <div className="grid grid-cols-3 gap-2">
        <Section>
          <TitleSection title={`Vendas do dia: ${faturamentos[0].Dia}`} />
          <Connectors />
          <div className="flex gap-1.5">
            <Kpis title="Meta" value={(faturamentos[0]?.MetaDia)} tcolor="text-gray-500" vcolor="text-blue-500" />
            <Kpis title="Vendas" value={(faturamentos[0]?.VendaDia)} tcolor="text-gray-500" vcolor="text-red-500" />
            <Kpis title="Falta Vender" value={(faturamentos[0]?.DiferencaDia)} tcolor="text-gray-500" vcolor="text-red-500" />
          </div>
          <Connectors />
          <div className="">
            <PieChart
              title={"Performance"}
              value={faturamentos[0].PerformanceDia}
              colorBar="#019EE3"
              colorText="#000"
              height={250} />
          </div>
        </Section>

        <Section>
          <TitleSection title={`Vendas do mês: ${faturamentos[0].Mes}`} />
          <Connectors />
          <div className="flex gap-1.5">
            <Kpis title="Meta" value={(faturamentos[0]?.MetaMes)} tcolor="text-gray-500" vcolor="text-blue-500" />
            <Kpis title="Vendas" value={(faturamentos[0]?.VendaMes)} tcolor="text-gray-500" vcolor="text-red-500" />
            <Kpis title="Falta Vender" value={(faturamentos[0]?.DiferencaMes)} tcolor="text-gray-500" vcolor="text-red-500" />
          </div>
          <Connectors />
          <div className="flex w-full bg-white rounded-b-md">
            <div className="w-1/2">
              <PieChart
                title={"Vendas"}
                value={((faturamentos[0]?.PerformanceMes) * 100).toFixed()}
                colorBar="#019EE3"
                colorText="#000"
                height={250} />
            </div>
            <div className="w-1/2">
              <PieChart title={"Meta Acum."} value={((faturamentos[0]?.MetaAcumuladaMes) * 100).toFixed()} colorBar="#019EE3" colorText="#000" height={250} />
            </div>
          </div>
        </Section>

        <Section>
          <TitleSection title={`Vendas do ano: ${faturamentos[0].Ano}`} />
          <Connectors />
          <div className="flex gap-1.5">
            <Kpis title="Meta" value={(faturamentos[0]?.MetaAcumuladaAno)} tcolor="text-gray-500" vcolor="text-blue-500" />
            <Kpis title="Vendas" value={(faturamentos[0]?.VendaAno)} tcolor="text-gray-500" vcolor="text-red-500" />
            <Kpis title="Falta Vender" value={(faturamentos[0]?.DiferencaAno)} tcolor="text-gray-500" vcolor="text-red-500" />
          </div>
          <Connectors />
          <div className="">
            <PieChart
              title={"Performance"}
              value={((faturamentos[0]?.PerformanceAno) * 100).toFixed()}
              colorBar="#019EE3"
              colorText="#202020"
              height={250} />
          </div>
        </Section>
      </div>

      <Section style="mt-4">
        <TitleSection title={`Evolução do mês: ${faturamentos[0].Mes}`} />
        <Connectors />
        <div className="bg-white rounded-b-md p-1">
          <BarChart grafico={grafico} altura={520} />
        </div>
      </Section>
    </main>
  )
}

export default Resumo