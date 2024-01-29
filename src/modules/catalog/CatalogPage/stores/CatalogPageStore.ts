import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "../../models/Product";

export class CatalogPageStore {

    productDataState:Product | undefined = undefined;

    constructor(){
        makeAutoObservable(this)
    }

    loadProduct = async (productId:string) => {
        try{
            const response = await fetch(`https://dummyjson.com/products/${productId}`)
            if(response.status === 200){
                const data:Product = await response.json()
                runInAction(() => {this.productDataState = data})
            }
        } catch(error) {
            console.log(error);
            
        }
    }

}