import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class ItemModel {
  constructor(brand, title, description, descriptionFull, price, currency) {
    this.brand = brand;
    this.title = title;
    this.description = description;
    this.descriptionFull = descriptionFull;
    this.price = price;
    this.currency = currency;
  }
}

function App(props) {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={props.item} />
      </div>
    </div>
  )
}

function ShopItemFunc(props) {
  return (
    <div className="main-content">
       <h2>{props.item.brand}</h2>
       <h1>{props.item.title}</h1>
       <h3>{props.item.description}</h3>
       <div className="description">{props.item.descriptionFull}</div>
       <div className="highlight-window  mobile"><div className="highlight-overlay"></div></div>
       <div className="divider"></div>
       <div className="purchase-info">
         <div className="price">{props.item.currency}{props.item.price.toFixed(2)}</div>
       <button>Добавить в корзину</button>
       </div>
     </div>
   );
}

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(ItemModel).isRequired
}

export default App;
