import { Unit } from "./Unit.interface";
export interface Product {
   productName: string;
   categery: string;
   isSold: string;
   productionType: string;
   unit:Unit[];
}

