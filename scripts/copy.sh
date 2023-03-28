rm -rf src/contracts &&
mkdir -p src/contracts/oswap-openswap-contract &&
mkdir -p src/contracts/oswap-oracle-adaptor-contract &&
mkdir -p src/contracts/oswap-chainlink-contract &&
mkdir -p src/contracts/oswap-cross-chain-bridge-contract &&
mkdir -p src/contracts/scom-commission-proxy-contract &&
cp -r node_modules/@scom/oswap-openswap-contract/src/* src/contracts/oswap-openswap-contract &&
cp -r node_modules/@scom/oswap-oracle-adaptor-contract/src/* src/contracts/oswap-oracle-adaptor-contract &&
cp -r node_modules/@scom/oswap-chainlink-contract/src/* src/contracts/oswap-chainlink-contract &&
cp -r node_modules/@scom/oswap-cross-chain-bridge-contract/src/* src/contracts/oswap-cross-chain-bridge-contract &&
cp -r node_modules/@scom/scom-commission-proxy-contract/src/* src/contracts/scom-commission-proxy-contract