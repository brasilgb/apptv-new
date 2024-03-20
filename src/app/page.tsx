import { getDataFaturamento } from './apiData';

const Home = async () => {
  const faturamento = await getDataFaturamento();
  return (
    <main
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="h-[92.4vh] flex items-center justify-center"
    >
      <div className="flex w-full h-full">
        <div className="flex-1 h-[full] bg-solar-blue-dark bg-opacity-80 flex items-center justify-center rounded-r-full border-r-2 border-r-solar-blue-dark">
          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-white inline-block text-transparent bg-clip-text text-4xl font-extrabold text-white uppercase">
              PROJEÇÃO DE VENDAS
            </h1>
            <h1 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-white inline-block text-transparent bg-clip-text mt-2 text-3xl font-extrabold text-white drop-shadow-lg uppercase">
              LOJAS SOLAR
            </h1>
            <h1 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-white inline-block text-transparent bg-clip-text mt-2 text-lg font-medium text-white drop-shadow-lg">
              <span className="mr-2">Atualização de dados: </span>{' '}
              {faturamento[0].Atualizacao}
            </h1>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </main>
  );
};
export default Home;
