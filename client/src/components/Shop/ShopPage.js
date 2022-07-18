import Products from './Products';
import Shops from './Shops';
import classes from './ShopPage.module.scss';

const ShopPage = () => {
  return (
    <section className={classes.shopPage}>
      <h2>Buy your favorite products</h2>
      <div className={classes.listContainter}>
        <Shops />
        <Products />
      </div>
    </section>
  );
};

export default ShopPage;
