import { promises as fs } from 'fs';

export default async function getJsonData(filePath: string) {

  let data; 

  try {
    const file = await fs.readFile(process.cwd() + filePath, 'utf8');
    data = JSON.parse(file.toString());
  }
  catch(error) {
    console.log(error);
  }

  return data;
};