const navbar = (state = '' , action) => {
    switch (action.type) {
      case 'UPDATE_NAV_TITLE':
        return action.title;      
      default:
        return state;
    }
  };
  
  export default navbar;
  