import axios from 'axios';
import { useState, useEffect} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default() => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data.products);
                setLoaded(true);
            });
    }, [])

    return(
        <div>
            <ProductForm/>
            <br/>
            {loaded && <ProductList products={products}/>}
        </div>
    )
}