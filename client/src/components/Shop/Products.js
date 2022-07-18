import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.scss';

const Products = () => {
  const shopProducts = useSelector((state) => state.shop.shopProducts);
  return (
    <ul className={classes.productsList}>
      {shopProducts.length === 0 && (
        <li className={classes.emptyList}>
          Click on the shop in the left list to show its products!
        </li>
      )}
      {shopProducts.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          imgLink={product.imgLink}
        />
      ))}
    </ul>
  );
};

export default Products;
