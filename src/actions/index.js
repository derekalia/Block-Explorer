
export const updateBlocks = blocks => {
  return {
    type: 'UPDATE_BLOCK_DATA',
    blocks
  };
};

export const updateSelectedBlock = block => {
  return {
    type: 'SELECTED_BLOCK',
    block
  };
};


export const updateSelectedTrans = trans => {
  return {
    type: 'SELECTED_TRANS',
    trans
  };
};


export const updateNavTitle = title => {
  return {
    type: 'UPDATE_NAV_TITLE',
    title
  };
};
