import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { parse } from "csv-parse";
import { Ship, shipProps } from "./ship";

export const csvFilePath = resolve(__dirname, '../../data/shipstats.csv');
export const headers = ['Name', 'Class', 'HP',  'Weapon', 'Skills', 'Modules', 'Training'];


  export const inventoryFromCSV = () => {
    const fileContent = readFileSync(csvFilePath, { encoding: 'utf-8' });
    parse(fileContent, {
      delimiter: ',',
      columns: headers,
    }, (error: any | undefined, result: shipProps[]) => {
      if (error) {
        console.error('There\'s been a problem translating the shipProps.');
      }
      console.log("Result", result.slice(1));
    });
  };
