import { promises as fs } from 'fs';

export const getDataFaturamento = async () => {
  // const file:any = await fs.readFile(process.cwd() + '/src/lib/faturamento-painel-tv.json');
  const file: any = await fs.readFile('/mnt/apptv/faturamento-painel-tv.json');
  const data = JSON.parse(file);
  return data;
};

export const getDataGrafico = async () => {
  // const file = await fs.readFile(process.cwd() + '/src/lib/grafico-painel-tv.json', 'utf8');
  const file = await fs.readFile('/mnt/apptv/grafico-painel-tv.json', 'utf8');
  const data = JSON.parse(file);
  return data;
};
