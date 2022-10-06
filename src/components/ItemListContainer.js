import { useEffect , useState } from "react";
import ItemList from "./ItemList";
import { getAllProducts, getProductsByCategory } from "../utils/products";
import { useParams } from "react-router-dom";


const ItemListContainer = ({}) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        if (categoryId) {
            getProductsByCategory(categoryId)
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        } else {
            getAllProducts()
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        }
    }, [categoryId])


return (
    <>
        <h2>Productos</h2>
        <ItemList products={products}></ItemList>;
    </>
);

}

export default ItemListContainer;
