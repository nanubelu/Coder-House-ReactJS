//Es un agrupador de un set de componentes Item.js

import Item from "./Item.js";
import './ItemList.css';



const ItemList = ({ products }) => {
    return (
        <div className="itemList">
            {products.map((product) => (
            <Item key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ItemList;