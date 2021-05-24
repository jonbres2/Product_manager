const ProductList = props => {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Title:</th>
                        <th>Price:</th>
                        <th>Description:</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, idx) => {
                        return <tr key={idx}>
                            <td>{product._id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;