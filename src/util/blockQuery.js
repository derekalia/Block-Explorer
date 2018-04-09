const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const provider = new HDWalletProvider(
  'monitor lemon garlic quiz churn reduce clip forget love sketch idle ketchup',
  'https://rinkeby.infura.io/2RpzfS8Dgjn0Naimu4Os'
);

const web3 = new Web3(provider);

let getLastBlockNumber = async () => {
  let currentBlock = await web3.eth.getBlockNumber();
  return currentBlock;
};

export const getTransactionFromHash = async trans => {
  const result = await web3.eth.getTransaction(trans);
  return result;
};

export const getLastTenBlocks = async () => {
  let transArray = [];
  let lastBlock = await getLastBlockNumber();

  let blockNumber;
  let i = 0;
  let block;

  while (transArray.length < 10) {
    blockNumber = lastBlock - i;
    block = await getBlock(blockNumber);
    if (block.transactions && block.transactions.length > 0) {
      transArray.push(block);
    }
    i++;
  }

  return transArray;
};

export const getBlock = async blockNumber => {
  let block = await web3.eth.getBlock(blockNumber, 'returnTransactionObjects');
  block.transactions = block.transactions.filter(t => {
    if (t.value !== '0') {
      return t;
    }
    return 0;
  });

  return block;
};
