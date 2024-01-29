import { Route, Routes } from "react-router-dom"
import { CatalogList } from "./CatalogList"
import { CatalogPage } from "./CatalogPage"

export const Catalog = () => {
    return  <Routes>
                <Route index element={<CatalogList />} />
                <Route path="/:productId" element={<CatalogPage />}/>
            </Routes>
}