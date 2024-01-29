import { Product } from "../../models/Product";

export type CatalogData = {
    limit: number;
    skip: number;
    total: number;
    products: Product[]
}