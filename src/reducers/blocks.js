const blocks = (state = { filteredBlocks: [],selectedBlock:{},selectedTrans:{} }, action) => {
  switch (action.type) {
    case 'UPDATE_BLOCK_DATA':
      return { filteredBlocks: action.blocks };
    case 'SELECTED_BLOCK':
      return { ...state, selectedBlock: action.block };
    case 'SELECTED_TRANS':
      return { ...state, selectedTrans: action.trans };
    default:
      return state;
  }
};

export default blocks;
