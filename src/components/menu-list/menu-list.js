import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc/with-resto-service';
import { menuLoaded, menuRequested, addedToCart} from '../../actions';
import Spinner from '../spinner';

import './menu-list.scss';

class MenuList extends Component {
  componentDidMount() {
    const { restoService, menuLoaded } = this.props;
    menuRequested();
    restoService.getMenuItems().then((menuItems) => menuLoaded(menuItems));
  }

  render() {
    const { menuItems, loading, addedToCart} = this.props;

    if (loading) {
      return <Spinner />;
    }

    const menuAr = menuItems.map((menuItem) => (
      <MenuListItem key={menuItem.id} onAddToCart={()=>addedToCart(menuItem.id)} menuItem={menuItem} />
    ));

    return <ul className="menu__list">{menuAr}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
  };
};

const mapDispatchToProps = { menuLoaded, menuRequested, addedToCart };

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(MenuList)
);
