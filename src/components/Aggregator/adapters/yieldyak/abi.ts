export const ABI = {
  yieldYakRouter: [{"inputs":[{"internalType":"address[]","name":"_adapters","type":"address[]"},{"internalType":"address[]","name":"_trustedTokens","type":"address[]"},{"internalType":"address","name":"_feeClaimer","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Recovered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"_newAdapters","type":"address[]"}],"name":"UpdatedAdapters","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_oldFeeClaimer","type":"address"},{"indexed":false,"internalType":"address","name":"_newFeeClaimer","type":"address"}],"name":"UpdatedFeeClaimer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_oldMinFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_newMinFee","type":"uint256"}],"name":"UpdatedMinFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"_newTrustedTokens","type":"address[]"}],"name":"UpdatedTrustedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_tokenIn","type":"address"},{"indexed":true,"internalType":"address","name":"_tokenOut","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amountIn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amountOut","type":"uint256"}],"name":"YakSwap","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ADAPTERS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AVAX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_CLAIMER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_DENOMINATOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NAME","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"TRUSTED_TOKENS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WAVAX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adaptersCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountIn","type":"uint256"},{"internalType":"address","name":"_tokenIn","type":"address"},{"internalType":"address","name":"_tokenOut","type":"address"},{"internalType":"uint256","name":"_maxSteps","type":"uint256"}],"name":"findBestPath","outputs":[{"components":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"address[]","name":"adapters","type":"address[]"},{"internalType":"address[]","name":"path","type":"address[]"}],"internalType":"struct YakRouter.FormattedOffer","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountIn","type":"uint256"},{"internalType":"address","name":"_tokenIn","type":"address"},{"internalType":"address","name":"_tokenOut","type":"address"},{"internalType":"uint256","name":"_maxSteps","type":"uint256"},{"internalType":"uint256","name":"_gasPrice","type":"uint256"}],"name":"findBestPathWithGas","outputs":[{"components":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"address[]","name":"adapters","type":"address[]"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"uint256","name":"gasEstimate","type":"uint256"}],"internalType":"struct YakRouter.FormattedOfferWithGas","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountIn","type":"uint256"},{"internalType":"address","name":"_tokenIn","type":"address"},{"internalType":"address","name":"_tokenOut","type":"address"},{"internalType":"uint8","name":"_index","type":"uint8"}],"name":"queryAdapter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountIn","type":"uint256"},{"internalType":"address","name":"_tokenIn","type":"address"},{"internalType":"address","name":"_tokenOut","type":"address"},{"internalType":"uint8[]","name":"_options","type":"uint8[]"}],"name":"queryNoSplit","outputs":[{"components":[{"internalType":"address","name":"adapter","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"amountOut","type":"uint256"}],"internalType":"struct YakRouter.Query","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountIn","type":"uint256"},{"internalType":"address","name":"_tokenIn","type":"address"},{"internalType":"address","name":"_tokenOut","type":"address"}],"name":"queryNoSplit","outputs":[{"components":[{"internalType":"address","name":"adapter","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"amountOut","type":"uint256"}],"internalType":"struct YakRouter.Query","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"recoverAVAX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_adapters","type":"address[]"}],"name":"setAdapters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_claimer","type":"address"}],"name":"setFeeClaimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setMinFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_trustedTokens","type":"address[]"}],"name":"setTrustedTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address[]","name":"adapters","type":"address[]"}],"internalType":"struct YakRouter.Trade","name":"_trade","type":"tuple"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"swapNoSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address[]","name":"adapters","type":"address[]"}],"internalType":"struct YakRouter.Trade","name":"_trade","type":"tuple"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"swapNoSplitFromAVAX","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address[]","name":"adapters","type":"address[]"}],"internalType":"struct YakRouter.Trade","name":"_trade","type":"tuple"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"swapNoSplitToAVAX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address[]","name":"adapters","type":"address[]"}],"internalType":"struct YakRouter.Trade","name":"_trade","type":"tuple"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_fee","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"uint8","name":"_v","type":"uint8"},{"internalType":"bytes32","name":"_r","type":"bytes32"},{"internalType":"bytes32","name":"_s","type":"bytes32"}],"name":"swapNoSplitToAVAXWithPermit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address[]","name":"adapters","type":"address[]"}],"internalType":"struct YakRouter.Trade","name":"_trade","type":"tuple"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_fee","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"uint8","name":"_v","type":"uint8"},{"internalType":"bytes32","name":"_r","type":"bytes32"},{"internalType":"bytes32","name":"_s","type":"bytes32"}],"name":"swapNoSplitWithPermit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"trustedTokensCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}],
}