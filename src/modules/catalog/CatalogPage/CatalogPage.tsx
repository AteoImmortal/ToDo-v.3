import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CatalogPageStore } from "./stores/CatalogPageStore";
import { Image } from 'antd';
import { observer } from "mobx-react-lite";


export const CatalogPage = observer(() => {
    const [store] = useState(()=> new CatalogPageStore())
    const {loadProduct, productDataState} = store;
    const { productId } = useParams();

    useEffect(()=> {
        if(productId){
            loadProduct(productId)
        }
    }, [productId])

    return  <>
                {productDataState && <div className="product">
                    <h1>{productDataState.title}</h1>
                    <Image.PreviewGroup>
                        {productDataState.images.map((img)=> <Image key={img} src={img} width={200}/>)}
                    </Image.PreviewGroup>
                    </div>}
            </>
})