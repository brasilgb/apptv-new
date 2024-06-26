import { getDataFaturamento } from "@/lib/apitv";
import moment from "moment";

const Home = async () => {
  const faturamento = await getDataFaturamento();
  return (
    <main
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="fixed bottom-[1.55rem] top-[3.55rem] right-0 left-0 flex items-center justify-center"
    >
      <div className="flex w-full h-full">
        <div className="flex-1 h-[full] bg-solar-blue-dark bg-opacity-95 flex items-center justify-center rounded-r-full border-r-2 border-r-solar-blue-light">
          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-white inline-block text-transparent bg-clip-text text-4xl font-extrabold text-white uppercase">
              PROJEÇÃO DE VENDAS
            </h1>
            <h1 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-white inline-block text-transparent bg-clip-text mt-2 text-3xl font-extrabold text-white drop-shadow-md uppercase">
              LOJAS SOLAR
            </h1>
            <h1 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-white inline-block text-transparent bg-clip-text mt-2 text-lg font-medium text-white drop-shadow-md">
              <span className="mr-2">Atualização de dados: </span>{' '}
              {moment(faturamento[0].Atualizacao).format("DD/MM/YYYY HH:mm:ss")}
            </h1>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </main>
  );
};
export default Home;
