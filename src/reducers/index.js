const initialState = {
  menu: [],
  loading: true,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return { ...state, menu: action.payloaded, loading: false };
    case 'MENU_REQUESTED':
      return { ...state, menu: state.menu, loading: true };
    case 'MENU_DENIED':
      return { ...state, menu: state.menu, loading: true, error: true };
    case 'ITEM_ADD_TO_CART':
      const id = action.payloaded;
      const item = state.menu.find((item) => item.id === id);
      const newItem = {
        title:item.title,
        price: item.price,
        url: item.url,
        id: item.id
      }
      console.log([...state.items, newItem])

      return { ...state, items:[...state.items, newItem] };

      case 'ITEM_DELETE_FROM_CART':
        const id2 = action.payloaded;
        const newItems = state.items.filter((item) => item.id !== id2);
        console.log(newItems)
        return { ...state, items:newItems };

    default:
      return state;
  }
};

export default reducer;
