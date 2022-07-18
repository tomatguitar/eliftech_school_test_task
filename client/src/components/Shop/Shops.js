import ShopsItem from './ShopsItem';

import classes from './Shops.module.scss';

const shops = [
  { id: 'mac', title: 'McDonalds' },
  { id: 'kfc', title: 'KFC' },
  { id: 'srm', title: 'Shaurma' }
];

const Shops = () => {
  return (
    <ul className={classes.shopsList}>
      {shops.map((shop) => {
        return <ShopsItem key={shop.id} shop={shop} classes={classes} />;
      })}
    </ul>
  );
};

export default Shops;
