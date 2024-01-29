import { useEffect } from "react";
import { store } from "./stores/CatalogListStore"
import { observer } from "mobx-react-lite";
import './CatalogList.css'
import { Button } from "antd";
import { Link } from "react-router-dom";

export const CatalogList = observer(() => {
    const {loadingData, productsData,  loadCategories, allCategories} = store;

    useEffect(() => {
        loadCategories()
    }, [])

    useEffect(() => {
        if(allCategories){
            loadingData()
        }
    }, [allCategories])

    const handleCategoryClick = (selectCategory: string) => {
        loadingData(selectCategory);
    }

    
    return  <div className="products">
                <h1 className="catalog__title">Каталог</h1>
                <h2 className="products__title">Выберите раздел:</h2>
                <div className="products__sort">
                    {allCategories && allCategories.map((category) => 
                        <Button
                            key={category}
                            className="btn__sort"
                            onClick={()=>{handleCategoryClick(category)}}
                        >
                            {category}
                        </Button>
                    )}
                </div>
                <h2 className="products__title">Товары</h2>
                <div className="products__list">
                    {productsData && productsData.length > 0 && productsData.map((product)=> 
                        <div key={product.id} className="product">
                            <img className="product__img" src={product.thumbnail} />
                            <div className="product__title"><Link to={`${product.id}`}>{product.title}</Link></div>
                        </div>
                    )}
                </div>
            </div>
})