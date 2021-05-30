const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payloaded: newMenu,
  };
};

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED',
  };
};

// const menuDenied = () => {
//   return {
//     type: 'MENU_DENIED',
//   };
// };

const addedToCart = (id) => {
  return {
    type: 'ITEM_ADD_TO_CART',
    payloaded: id,
  };
};

const deleteFromCart = (id) => {
  return {
    type: 'ITEM_DELETE_FROM_CART',
    payloaded: id,
  };
};

export { menuLoaded, menuRequested, addedToCart, deleteFromCart };
