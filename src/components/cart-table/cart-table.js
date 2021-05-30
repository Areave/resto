import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import {deleteFromCart} from '../../actions/index'

const CartTable = ({ items, deleteFromCart }) => {

  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {items.map((item) => {
          const { title, price, url, id} = item;
          return (
            <div key={id} className="cart__item">
              <img className="cart__item-img" src={url} alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">{price}$</div>
              <div className="cart__close" onClick={() => deleteFromCart(id)}>
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = {deleteFromCart}


export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
