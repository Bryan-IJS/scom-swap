var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/scom-swap/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.storageModalStyle = exports.swapStyle = void 0;
    const Theme = components_1.Styles.Theme.ThemeVars;
    // const colorVar = {
    //   primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
    //   primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
    //   darkBg: '#181E3E 0% 0% no-repeat padding-box',
    //   primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important'
    // }
    exports.swapStyle = components_1.Styles.style({
        $nest: {
            '::-webkit-scrollbar': {
                width: '3px',
            },
            '::-webkit-scrollbar-thumb': {
                background: Theme.colors.primary.main,
                borderRadius: '5px',
            },
            // '*': {
            //   boxSizing: 'border-box',
            // },
            '#swapContainer': {
                // width: 720,
                // maxWidth: '100%',
                // minHeight: 340,
                // padding: '1rem',
                // marginInline: 'auto',
                $nest: {
                    '#btnToken': {
                        // height: 'auto !important',
                        // background: `${Theme.background.main} !important`,
                        // padding: '0.5rem !important',
                        // borderRadius: '8px',
                        // fontSize: '1rem',
                        // fontWeight: 700,
                        // lineHeight: 1.5,
                        // alignSelf: 'center',
                        // textAlign: 'center',
                        // opacity: 1,
                        // color: Theme.input.fontColor,
                        $nest: {
                            '&:not(.disabled):hover': {
                                color: Theme.input.fontColor
                            },
                            // '&> span': {
                            //   verticalAlign: 'middle',
                            // },
                            // '&> i-icon': {
                            //   maxWidth: 10,
                            //   height: '16px !important',
                            //   opacity: 0.5,
                            //   marginRight: 'unset',
                            //   fill: Theme.input.fontColor,
                            //   $nest: {
                            //     'svg': {
                            //       fill: `${Theme.input.fontColor} !important`
                            //     }
                            //   }
                            // },
                            '&> :not(:last-child)': {
                                marginRight: '0.5rem'
                            }
                        }
                    }
                }
            },
            // '.swap-flex--col': {
            //   flexDirection: 'column',
            //   $nest: {
            //     '& > i-vstack': {
            //       width: '100% !important'
            //     },
            //     '.custom-ic--swap': {
            //       margin: 'auto',
            //       bottom: '0 !important',
            //       transform: 'none !important'
            //     }
            //   }
            // },
            // '.visibility-hidden': {
            //   visibility: 'hidden'
            // },
            // '.content-swap': {
            //   marginTop: '0.5rem',
            //   marginBottom: '1rem',
            //   borderRadius: '1rem'
            // },
            // 'i-label.text--grey *': {
            //   color: Theme.text.primary,
            //   opacity: 0.55, // 'hsla(0,0%,100%,0.55)'
            // },
            '.btn-max': {
                // position: 'relative',
                // borderRadius: '0.5rem',
                // fontSize: '1rem',
                // padding: '0 0.5rem',
                // marginLeft: '0.5rem',
                // bottom: '1.5px',
                background: 'var(--max-button-background)',
                // color: Theme.colors.primary.contrastText
            },
            // '.bg-box': {
            //   margin: '0.5rem 0',
            //   border: '2px solid transparent',
            //   borderRadius: '1rem',
            //   $nest: {
            //     '&.bg-box--active': {
            //       borderColor: '#E53780'
            //     }
            //   }
            // },
            // '.rounded-icon': {
            //   display: 'inline-flex',
            //   padding: '3px',
            //   background: Theme.input.background,
            //   border: '2px solid transparent',
            //   borderRadius: '50%',
            //   cursor: 'pointer'
            // },
            // '.swap-btn-container': {
            //   marginTop: 10,
            //   $nest: {
            //     '.btn-swap': {
            //       position: 'relative',
            //       width: '100%',
            //       borderRadius: '0.65rem',
            //       fontSize: '1.125rem',
            //       padding: '0.5rem 0.75rem',
            //       opacity: 1,
            //       color: Theme.colors.primary.contrastText
            //     }
            //   }
            // },
            // '#receiveCol': {
            //   maxWidth: 'calc(100% - 9rem)',
            // },
            // '.hints': {
            //   display: 'flex',
            //   alignItems: 'center',
            //   marginTop: '-0.5rem',
            //   $nest: {
            //     '*': {
            //       fontSize: '0.8rem',
            //       opacity: 0.9,
            //     },
            //     'i-label *': {
            //       marginLeft: '0.25rem',
            //     },
            //   },
            // },
            '.chain-icon': {
                // margin: '0.25rem 0.5rem 0 0',
                // borderRadius: '50%',
                // border: '2px solid transparent',
                // padding: '0.25rem',
                // cursor: 'pointer',
                filter: 'grayscale(1)',
                $nest: {
                    // '&.icon-disabled': {
                    //   cursor: 'default',
                    // },
                    '&.icon-selected': {
                        // borderColor: Theme.colors.primary.main,
                        // cursor: 'default',
                        filter: 'inherit',
                    },
                    // 'img': {
                    //   width: '32px',
                    //   height: '32px',
                    // },
                },
            },
            // '.chain-text': {
            //   whiteSpace: 'nowrap',
            //   overflow: 'hidden !important',
            //   textOverflow: 'ellipsis'
            // },
            // '.cursor-default': {
            //   cursor: 'default !important',
            // },
            // '.hidden': {
            //   display: 'none !important'
            // },
            // '.custom-md--view': {
            //   $nest: {
            //     'i-label > *': {
            //       fontSize: '.875rem',
            //       wordBreak: 'normal'
            //     },
            //     '.i-modal_content': {
            //       padding: '0 1rem 1rem',
            //     },
            //     '.flex-col': {
            //       flexDirection: 'column',
            //     },
            //     'i-button': {
            //       display: 'flex',
            //       alignItems: 'center',
            //       justifyContent: 'center',
            //       width: '150px',
            //       height: '50px !important',
            //       fontWeight: 600,
            //       borderRadius: 5,
            //       margin: '0.5rem',
            //     }
            //   }
            // },
            // '.custom-modal': {
            //   $nest: {
            //     '.modal': {
            //       background: Theme.background.modal,
            //       width: 490,
            //       maxWidth: '100%',
            //       padding: '0.75rem 1rem',
            //       borderRadius: '1rem',
            //       color: Theme.text.primary
            //     },
            //     '.i-modal_header': {
            //       marginBottom: '1.5rem',
            //       paddingBottom: '0.5rem',
            //       borderBottom: `2px soid ${Theme.background.main}`,
            //       color: Theme.colors.primary.main,
            //       fontSize: '1.25rem',
            //       fontWeight: 700,
            //       $nest: {
            //         '&> span': {
            //           color: Theme.colors.primary.main,
            //         },
            //         '&> i-icon': {
            //           fill: `${Theme.colors.primary.main} !important`
            //         },
            //         '& ~ i-icon': {
            //           display: 'inline-block',
            //           margin: '0.75rem 0',
            //           background: Theme.input.background,
            //           border: '2px solid transparent',
            //           borderRadius: '50%',
            //           padding: '0.25rem'
            //         }
            //       }
            //     },
            //   }
            // },
            // '#registerPairModal': {
            //   $nest: {
            //     '.modal': {
            //       background: Theme.background.modal,
            //       width: 420,
            //       maxWidth: '100%',
            //       padding: '0.75rem 1rem 1.25rem 1rem',
            //       borderRadius: '1rem',
            //       color: Theme.text.primary
            //     },
            //     '.i-modal_header': {
            //       marginBottom: '1.5rem',
            //       paddingBottom: '0.5rem',
            //       borderBottom: `2px soid ${Theme.background.main}`,
            //       color: Theme.colors.primary.main,
            //       fontSize: '1.25rem',
            //       fontWeight: 700,
            //       $nest: {
            //         '&> span': {
            //           color: Theme.colors.primary.main,
            //         },
            //         '.i-modal-close': {
            //           fill: `${Theme.colors.primary.main} !important`,
            //         }
            //       }
            //     },
            //   }
            // },
            // '#swapModal': {
            //   $nest: {
            //     '.icon-swap': {
            //       margin: 0
            //     },
            //     'i-image:not(.rounded-icon)': {
            //       display: 'inline-block',
            //       marginRight: '0.5rem'
            //     },
            //     '#tokenReceiveValue': {
            //       margin: '0 5px'
            //     },
            //     '#payOrReceiveValue': {
            //       marginInline: '0.25rem',
            //     },
            //     '.text-primary *': {
            //       color: Theme.colors.primary.main,
            //     },
            //     '.price-info': {
            //       padding: '1rem'
            //     },
            //     '.arrow-down': {
            //       display: 'inline-block',
            //       margin: '0.75rem 0',
            //       background: Theme.input.background,
            //       border: '2px solid transparent',
            //       borderRadius: '50%',
            //       padding: '0.25rem'
            //     },
            //     '.arrow-down--chain': {
            //       margin: '0.75rem 6rem !important',
            //     },
            //     '.token-value': {
            //       marginLeft: 'auto',
            //     },
            //     '.token-value > *, #swapModal .token-name > *': {
            //       fontSize: '1.1rem'
            //     },
            //     '.row-chain': {
            //       display: 'flex',
            //       alignItems: 'center',
            //     },
            //     'i-icon.custom-icon--fill': {
            //       fill: Theme.input.fontColor,
            //       $nest: {
            //         'svg': {
            //           fill: `${Theme.input.fontColor} !important`
            //         }
            //       }
            //     }
            //   }
            // },
            // '#modalFees': {
            //   $nest: {
            //     '.i-modal_header': {
            //       marginBottom: '0.5rem !important',
            //     },
            //     '.i-modal_content': {
            //       $nest: {
            //         'i-label *': {
            //           fontSize: '0.875rem',
            //         },
            //         'i-button': {
            //           width: '150px',
            //           paddingBlock: '0.25rem',
            //           textAlign: 'center',
            //         },
            //       },
            //     },
            //   },
            // },
            '.btn-os': {
                background: 'var(--primary-button-background)',
                transition: 'background .3s ease'
            },
            '.btn-os:not(.disabled):not(.is-spinning):hover, .btn-os:not(.disabled):not(.is-spinning):focus': {
                background: 'var(--primary-button-hover-background)',
                boxShadow: 'none',
                opacity: .9
            },
            '.btn-os:not(.disabled):not(.is-spinning):focus': {
                boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)',
                outline: 0
            },
            '.btn-os.disabled, .btn-os.is-spinning': {
                background: 'var(--primary-button-disabled-background)',
                opacity: 0.4
            },
            '.btn-max:not(.disabled):hover': {
                transition: 'all .2s ease-out',
                background: 'var(--max-button-hover-background)'
            }
        }
    });
    exports.storageModalStyle = components_1.Styles.style({
        $nest: {
            '.modal > div:nth-child(2)': {
                width: '100%',
                height: '100%',
                overflow: 'hidden'
            },
            'i-scom-storage': {
                display: 'block',
                width: '100%',
                height: 'calc(100% - 1.5rem)',
                overflow: 'hidden'
            }
        }
    });
});
define("@scom/scom-swap/global/utils/helper.ts", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet"], function (require, exports, components_2, eth_wallet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAPI = exports.isInvalidInput = exports.formatNumber = void 0;
    const formatNumber = (value, decimalFigures) => {
        const newValue = (typeof value === 'object') ? value.toFixed() : value;
        const minValue = '0.0000001';
        return components_2.FormatUtils.formatNumber(newValue, { decimalFigures: decimalFigures || 4, minValue });
    };
    exports.formatNumber = formatNumber;
    const isInvalidInput = (val) => {
        const value = new eth_wallet_1.BigNumber(val);
        if (value.lt(0))
            return true;
        return (val || '').toString().substring(0, 2) === '00' || val === '-';
    };
    exports.isInvalidInput = isInvalidInput;
    async function getAPI(url, paramsObj) {
        let queries = '';
        if (paramsObj) {
            try {
                queries = new URLSearchParams(paramsObj).toString();
            }
            catch (err) {
                console.log('err', err);
            }
        }
        let fullURL = url + (queries ? `?${queries}` : '');
        const response = await fetch(fullURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        return response.json();
    }
    exports.getAPI = getAPI;
});
define("@scom/scom-swap/global/utils/swapInterface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-swap/global/utils/index.ts", ["require", "exports", "@scom/scom-swap/global/utils/helper.ts"], function (require, exports, helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isInvalidInput = exports.formatNumber = exports.getAPI = void 0;
    Object.defineProperty(exports, "getAPI", { enumerable: true, get: function () { return helper_1.getAPI; } });
    Object.defineProperty(exports, "formatNumber", { enumerable: true, get: function () { return helper_1.formatNumber; } });
    Object.defineProperty(exports, "isInvalidInput", { enumerable: true, get: function () { return helper_1.isInvalidInput; } });
});
define("@scom/scom-swap/global/index.ts", ["require", "exports", "@scom/scom-swap/global/utils/index.ts"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApprovalStatus = void 0;
    var ApprovalStatus;
    (function (ApprovalStatus) {
        ApprovalStatus[ApprovalStatus["TO_BE_APPROVED"] = 0] = "TO_BE_APPROVED";
        ApprovalStatus[ApprovalStatus["APPROVING"] = 1] = "APPROVING";
        ApprovalStatus[ApprovalStatus["NONE"] = 2] = "NONE";
    })(ApprovalStatus = exports.ApprovalStatus || (exports.ApprovalStatus = {}));
    __exportStar(index_1, exports);
});
define("@scom/scom-swap/store/utils.ts", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@scom/scom-token-list", "@scom/scom-token-list"], function (require, exports, components_3, eth_wallet_2, scom_token_list_1, scom_token_list_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getClientWallet = exports.getChainNativeToken = exports.isClientWalletConnected = exports.getTokenObjArr = exports.getNetworkInfo = exports.State = exports.WalletPlugin = void 0;
    var WalletPlugin;
    (function (WalletPlugin) {
        WalletPlugin["MetaMask"] = "metamask";
        WalletPlugin["WalletConnect"] = "walletconnect";
    })(WalletPlugin = exports.WalletPlugin || (exports.WalletPlugin = {}));
    class State {
        constructor(options) {
            this.isExpertMode = false;
            this.slippageTolerance = 0.5;
            this.swapTransactionDeadline = 30;
            this.bridgeTransactionDeadline = 120;
            this.infuraId = "";
            this.dexInfoList = [];
            this.providerList = [];
            this.proxyAddresses = {};
            this.apiEndpoints = {};
            this.rpcWalletId = "";
            this.initData(options);
        }
        initRpcWallet(defaultChainId) {
            if (this.rpcWalletId) {
                return this.rpcWalletId;
            }
            const clientWallet = eth_wallet_2.Wallet.getClientInstance();
            const networkList = Object.values(components_3.application.store?.networkMap || []);
            const instanceId = clientWallet.initRpcWallet({
                networks: networkList,
                defaultChainId,
                infuraId: components_3.application.store?.infuraId,
                multicalls: components_3.application.store?.multicalls
            });
            this.rpcWalletId = instanceId;
            if (clientWallet.address) {
                const rpcWallet = eth_wallet_2.Wallet.getRpcWalletInstance(instanceId);
                rpcWallet.address = clientWallet.address;
            }
            return instanceId;
        }
        setProviderList(value) {
            this.providerList = value;
        }
        setDexInfoList(value) {
            this.dexInfoList = value;
        }
        getDexInfoList(options) {
            if (!options)
                return this.dexInfoList;
            const { key, chainId } = options;
            let dexList = this.dexInfoList;
            if (key) {
                dexList = dexList.filter(v => v.dexCode === key);
            }
            if (chainId) {
                dexList = dexList.filter(v => v.details.some(d => d.chainId === chainId));
            }
            return dexList;
        }
        getDexDetail(key, chainId) {
            for (const dex of this.dexInfoList) {
                if (dex.dexCode === key) {
                    const dexDetail = dex.details.find(v => v.chainId === chainId);
                    if (dexDetail) {
                        return dexDetail;
                    }
                }
            }
            return undefined;
        }
        getProxyAddress(chainId) {
            const _chainId = chainId || eth_wallet_2.Wallet.getInstance().chainId;
            const proxyAddresses = this.proxyAddresses;
            if (proxyAddresses) {
                return proxyAddresses[_chainId];
            }
            return null;
        }
        getProviderByKey(providerKey) {
            const providers = this.providerList || [];
            return providers.find(item => item.key === providerKey) || null;
        }
        getRpcWallet() {
            return this.rpcWalletId ? eth_wallet_2.Wallet.getRpcWalletInstance(this.rpcWalletId) : null;
        }
        isRpcWalletConnected() {
            const wallet = this.getRpcWallet();
            return wallet?.isConnected;
        }
        getChainId() {
            const rpcWallet = this.getRpcWallet();
            return rpcWallet?.chainId;
        }
        toggleExpertMode() {
            this.isExpertMode = !this.isExpertMode;
        }
        initData(options) {
            if (options.infuraId) {
                this.infuraId = options.infuraId;
            }
            if (options.proxyAddresses) {
                this.proxyAddresses = options.proxyAddresses;
            }
            if (options.apiEndpoints) {
                this.setAPIEnpoints(options.apiEndpoints);
            }
        }
        setAPIEnpoints(apiEndpoints) {
            this.apiEndpoints = apiEndpoints;
        }
        getAPIEndpoint(key) {
            return this.apiEndpoints[key];
        }
        async setApprovalModelAction(options) {
            const approvalOptions = {
                ...options,
                spenderAddress: ''
            };
            let wallet = this.getRpcWallet();
            this.approvalModel = new eth_wallet_2.ERC20ApprovalModel(wallet, approvalOptions);
            let approvalModelAction = this.approvalModel.getAction();
            return approvalModelAction;
        }
    }
    exports.State = State;
    const getNetworkInfo = (chainId) => {
        const networkMap = components_3.application.store["networkMap"];
        return networkMap[chainId];
    };
    exports.getNetworkInfo = getNetworkInfo;
    const getTokenObjArr = (tokens) => {
        let tokenObjArr = [];
        for (let token of tokens) {
            let tokenMap = scom_token_list_1.tokenStore.getTokenMapByChainId(token.chainId);
            const tokenAddress = token.address?.startsWith('0x') ? token.address.toLowerCase() : scom_token_list_2.ChainNativeTokenByChainId[token.chainId].symbol;
            const tokenObj = tokenMap[tokenAddress];
            if (tokenObj) {
                tokenObjArr.push({ ...tokenObj, chainId: token.chainId });
            }
        }
        return tokenObjArr;
    };
    exports.getTokenObjArr = getTokenObjArr;
    // wallet
    function isClientWalletConnected() {
        const wallet = eth_wallet_2.Wallet.getClientInstance();
        return wallet.isConnected;
    }
    exports.isClientWalletConnected = isClientWalletConnected;
    const getChainNativeToken = (chainId) => {
        return scom_token_list_2.ChainNativeTokenByChainId[chainId];
    };
    exports.getChainNativeToken = getChainNativeToken;
    function getClientWallet() {
        return eth_wallet_2.Wallet.getClientInstance();
    }
    exports.getClientWallet = getClientWallet;
});
define("@scom/scom-swap/store/providers.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProviderConfigMap = void 0;
    const ProviderConfigMap = {
        OpenSwap: {
            key: 'OpenSwap',
            dexId: 1,
            supportedChains: [42, 56, 97, 4002, 43113, 43114, 137, 80001, 13370, 338, 42161, 421613]
        },
        Uniswap: {
            key: 'Uniswap',
            dexId: 10,
            supportedChains: [1, 42]
        },
        SushiSwap: {
            key: 'SushiSwap',
            dexId: 8,
            supportedChains: [1, 42, 137, 250, 43113, 43114, 42161]
        },
        PancakeSwap: {
            key: 'PancakeSwap',
            dexId: 2,
            supportedChains: [56, 97]
        },
        BakerySwap: {
            key: 'BakerySwap',
            dexId: 3,
            supportedChains: [56, 97]
        },
        BurgerSwap: {
            key: 'BurgerSwap',
            dexId: 4,
            supportedChains: []
        },
        Oracle: {
            key: 'Oracle',
            dexId: 5,
            supportedChains: [56, 97, 43113, 43114]
        },
        IFSwapV1: {
            key: 'IFSwapV1',
            dexId: 7,
            supportedChains: [56]
        },
        IFSwapV3: {
            key: 'IFSwapV3',
            dexId: 18,
            supportedChains: [56]
        },
        Hybrid: {
            key: 'Hybrid',
            dexId: 0,
            supportedChains: [42, 56, 97, 43113, 43114]
        },
        QuickSwap: {
            key: 'QuickSwap',
            dexId: 9,
            supportedChains: [137]
        },
        BiSwap: {
            key: 'BiSwap',
            dexId: 11,
            supportedChains: [56]
        },
        Pangolin: {
            key: 'Pangolin',
            dexId: 12,
            supportedChains: [43113, 43114]
        },
        TraderJoe: {
            key: 'TraderJoe',
            dexId: 13,
            supportedChains: [43114]
        },
        SpiritSwap: {
            key: 'SpiritSwap',
            dexId: 15,
            supportedChains: [250]
        },
        SpookySwap: {
            key: 'SpookySwap',
            dexId: 14,
            supportedChains: [250]
        }
    };
    exports.ProviderConfigMap = ProviderConfigMap;
});
define("@scom/scom-swap/store/cross-chain.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bridgeVaultConstantMap = exports.getBridgeSupportedChainList = exports.getBridgeVaultVersion = exports.MockOracleMap = exports.crossChainSupportedChainIds = exports.CrossChainAddressMap = exports.BridgeVaultGroupList = void 0;
    var VaultType;
    (function (VaultType) {
        VaultType["Project"] = "Project";
        VaultType["Exchange"] = "Exchange";
    })(VaultType || (VaultType = {}));
    const BridgeVaultGroupList = [
        {
            "name": "USDT",
            "vaultType": VaultType.Exchange,
            "vaults": {
                "56": {
                    "tokenAddress": "0x55d398326f99059fF775485246999027B3197955",
                    "vaultRegistryAddress": "0x1026deABF37C452F8aF8672cC9B9181fab709154",
                    "vaultAddress": "0xE9CAAFD124831562423FE129b02e938Cc33B45E2",
                    "vaultDecimals": 18,
                    "softCap": 100000,
                },
                "43114": {
                    "tokenAddress": "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
                    "vaultRegistryAddress": "0x2e102E6E9546433aB9c2a32ddd6eAFDfE987910B",
                    "vaultAddress": "0x55570d7EcAeFF86a6425815def25447A8b14A222",
                    "vaultDecimals": 18,
                    "softCap": 100000,
                }
            }
        },
        {
            "name": "OSWAP",
            "vaultType": VaultType.Project,
            "vaults": {
                "56": {
                    "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
                    "vaultRegistryAddress": "0xd8f7a9E2cE096670A27238487a62e1e000334F81",
                    "vaultAddress": "0x65d6d677e102C2758224a797f7fb2b60DBeA8635",
                    "softCap": 30000,
                    "vaultDecimals": 18
                },
                "43114": {
                    "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
                    "vaultRegistryAddress": "0x39dfbdF2a8b4719D009F3CEE1d000899FeD8B00a",
                    "vaultAddress": "0x8Af3e8596acE65D9c1EDE6d5356a34eAb46a46f5",
                    "vaultDecimals": 18,
                    "softCap": 30000,
                }
            }
        },
        {
            "name": "PROJECT",
            "vaultType": VaultType.Project,
            "vaults": {
                "97": {
                    "tokenAddress": "0x3cb66f6057d80015D0cf7c4c4e00dfC79ff6c836",
                    "vaultRegistryAddress": "0xC4E40bCf83cF57c932D82CA22Bc0B5b534BAa0D3",
                    "vaultAddress": "0x8e99f3ACc224b0eafa109De0c3E95E34A20a1aDA",
                    "softCap": 30000,
                },
                "43113": {
                    "tokenAddress": "0x1B23B0dBB8D142596443999Dd0197299Fa17eb03",
                    "vaultRegistryAddress": "0xE72Ae94De5c2BA8C4f87bd8C7B2b8cF0ebCD1dAd",
                    "vaultAddress": "0xe9Ee7b58404440ffC4A4941dECe71e273e6954EB",
                    "softCap": 30000,
                }
            }
        }
    ];
    exports.BridgeVaultGroupList = BridgeVaultGroupList;
    const CrossChainAddressMap = {
        56: {
            wrapperAddress: '0xce194324a8ddaf43e5c00f38593f37c9f21ed297',
        },
        97: {
            wrapperAddress: '0x7369D771e0680b2cb8e10c63D5D17fA6C4571a85'
        },
        43113: {
            wrapperAddress: '0x945ddEa84f9b9A6f8231c698148E510d91355A33'
        },
        43114: {
            wrapperAddress: '0xcD050070b53924E1965418d7D940fa2ABB4302f3',
        }
    };
    exports.CrossChainAddressMap = CrossChainAddressMap;
    // Dependent
    const MockOracleMap = {
        56: {
            '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93': '0xd9df1285e2effbaaa580513b256bd21c041973f7',
            '0x55d398326f99059fF775485246999027B3197955': '0x6979c00cc49e0b5e77a920b25a0e16445b0f665a', // USDT
        },
        97: {
            '0x3cb66f6057d80015D0cf7c4c4e00dfC79ff6c836': '0x50C41443c3F05d469644675235249F375a5AA622',
            '0x45eee762aaea4e5ce317471bda8782724972ee19': '0x50C41443c3F05d469644675235249F375a5AA622', //OSWAP
        },
        43113: {
            '0x1B23B0dBB8D142596443999Dd0197299Fa17eb03': '0xe4dfc0E5772405483F71FE1c234290d62C102e02',
            '0x78d9d80e67bc80a11efbf84b7c8a65da51a8ef3c': '0xe4dfc0E5772405483F71FE1c234290d62C102e02', //OSWAP
        },
        43114: {
            '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93': '0xd9df1285e2effbaaa580513b256bd21c041973f7',
            '0xc7198437980c041c805A1EDcbA50c1Ce5db95118': '0x6979c00cc49e0b5e77a920b25a0e16445b0f665a', // USDT
        }
    };
    exports.MockOracleMap = MockOracleMap;
    const crossChainSupportedChainIds = [
        { chainId: 56 },
        { chainId: 97, isTestnet: true },
        { chainId: 43113, isTestnet: true },
        { chainId: 43114 }
    ];
    exports.crossChainSupportedChainIds = crossChainSupportedChainIds;
    const getBridgeVaultVersion = (chainId) => {
        const isTestnet = crossChainSupportedChainIds.find(v => v.chainId === chainId && v.isTestnet);
        // Testnet
        if (isTestnet)
            return '0.2.1';
        // Mainnet
        return '1.1.1';
    };
    exports.getBridgeVaultVersion = getBridgeVaultVersion;
    const getBridgeSupportedChainList = (chainId, networks) => {
        const testnetSupportedList = networks.filter(v => crossChainSupportedChainIds.some(s => s.chainId === v.chainId && s.isTestnet));
        const mainnetSupportedList = networks.filter(v => !crossChainSupportedChainIds.some(s => s.chainId === v.chainId && s.isTestnet));
        const isMainnet = mainnetSupportedList.some((item) => item.chainId == chainId);
        return isMainnet ? mainnetSupportedList : testnetSupportedList;
    };
    exports.getBridgeSupportedChainList = getBridgeSupportedChainList;
    const bridgeVaultConstantMap = BridgeVaultGroupList.reduce((acc, cur) => {
        if (cur.deprecated)
            return acc;
        if (acc[cur.name] == null)
            acc[cur.name] = {};
        Object.entries(cur.vaults).forEach(([chainId, v]) => {
            acc[cur.name][chainId] = v;
        });
        return acc;
    }, {});
    exports.bridgeVaultConstantMap = bridgeVaultConstantMap;
});
define("@scom/scom-swap/store/index.ts", ["require", "exports", "@scom/scom-token-list", "@scom/scom-swap/store/utils.ts", "@scom/scom-swap/store/providers.ts", "@scom/scom-swap/store/cross-chain.ts"], function (require, exports, scom_token_list_3, utils_1, providers_1, cross_chain_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSupportedTokens = exports.getWETH = void 0;
    const getWETH = (chainId) => {
        let wrappedToken = scom_token_list_3.WETHByChainId[chainId];
        return wrappedToken;
    };
    exports.getWETH = getWETH;
    const getSupportedTokens = (tokens, chainId) => {
        return tokens.filter(token => token.chainId === chainId) || [];
    };
    exports.getSupportedTokens = getSupportedTokens;
    __exportStar(utils_1, exports);
    __exportStar(providers_1, exports);
    __exportStar(cross_chain_1, exports);
});
define("@scom/scom-swap/crosschain-utils/crosschain-utils.types.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-swap/crosschain-utils/API.ts", ["require", "exports", "@scom/scom-swap/global/index.ts", "@scom/scom-swap/store/index.ts", "@ijstech/eth-wallet", "@scom/oswap-cross-chain-bridge-contract", "@scom/oswap-chainlink-contract", "@scom/scom-token-list", "@ijstech/eth-contract"], function (require, exports, index_2, index_3, eth_wallet_3, oswap_cross_chain_bridge_contract_1, oswap_chainlink_contract_1, scom_token_list_4, eth_contract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getOraclePriceMap = exports.getVaultAssetBalance = exports.getBondsInBridgeVault = exports.getBridgeVault = exports.getAvailableRouteOptions = exports.createBridgeVaultOrder = exports.getTargetChainTokenInfoObj = exports.getTargetChainTokenMap = exports.getTokenByVaultAddress = void 0;
    const getTokenByVaultAddress = (chainId, vaultAddress) => {
        if (!chainId)
            return null;
        let vaultTokenMap = getVaultTokenMap();
        let tokenAddress = vaultTokenMap[chainId][vaultAddress.toLowerCase()];
        let tokenMap = getTargetChainTokenMap(chainId);
        let token = tokenMap[tokenAddress?.toLowerCase()];
        return token;
    };
    exports.getTokenByVaultAddress = getTokenByVaultAddress;
    const getTargetChainTokenMap = (chainId) => {
        let tokenList = scom_token_list_4.tokenStore.getTokenList(chainId);
        tokenList = tokenList.map(v => v = { ...v, address: v.address ? v.address.toLowerCase() : undefined }).sort((a, b) => {
            if (a.symbol.toLowerCase() < b.symbol.toLowerCase()) {
                return -1;
            }
            if (a.symbol.toLowerCase() > b.symbol.toLowerCase()) {
                return 1;
            }
            return 0;
        });
        let tokenMap = {};
        Object.values(tokenList).forEach((v, i) => {
            if (v.isNative)
                v = { ...(0, index_3.getChainNativeToken)(chainId), chainId, isNative: true };
            tokenMap["" + v.address] = v;
        });
        return tokenMap;
    };
    exports.getTargetChainTokenMap = getTargetChainTokenMap;
    const initCrossChainWallet = (chainId) => {
        let crossChainWallet = eth_wallet_3.RpcWallet.getRpcWallet(chainId);
        return crossChainWallet;
    };
    const getTargetChainTokenInfoObj = async (chainId) => {
        let targetChainWallet = initCrossChainWallet(chainId);
        let balances = {};
        let tokenMap = getTargetChainTokenMap(chainId);
        if (!chainId || !scom_token_list_4.DefaultTokens[chainId])
            return { tokenMap, balances };
        const tokenList = scom_token_list_4.tokenStore.getTokenList(chainId).filter((token) => token.address);
        const erc20TokenList = tokenList.filter(token => token.address);
        const nativeToken = tokenList.find(token => !token.address);
        try {
            const erc20 = new eth_wallet_3.Contracts.ERC20(targetChainWallet);
            const data = targetChainWallet.encodeFunctionCall(erc20, 'balanceOf', [targetChainWallet.address]);
            const result = await targetChainWallet.multiCall(erc20TokenList.map(v => {
                return {
                    to: v.address,
                    data
                };
            }));
            if (result) {
                for (let i = 0; i < erc20TokenList.length; i++) {
                    const token = erc20TokenList[i];
                    if (token.address) {
                        balances[token.address.toLowerCase()] = new eth_wallet_3.BigNumber(result.results[i]).shiftedBy(-token.decimals).toFixed();
                    }
                }
                if (nativeToken) {
                    let balance = (await targetChainWallet.balance).toFixed();
                    balances[nativeToken.symbol] = balance;
                }
            }
            else {
                let promises = [];
                promises.push(...tokenList.map(async (token, index) => {
                    try {
                        if (token.address) {
                            let erc20 = new eth_wallet_3.Erc20(targetChainWallet, token.address.toLowerCase(), token.decimals);
                            let balance = (await erc20.balance).toFixed();
                            balances[token.address.toLowerCase()] = balance;
                        }
                        else {
                            let balance = (await targetChainWallet.balance).toFixed();
                            balances[token.symbol] = balance;
                        }
                    }
                    catch (error) {
                        balances[token.address ? token.address.toLowerCase() : token.symbol] = '0';
                    }
                }));
                await Promise.all(promises);
            }
        }
        catch (error) { }
        return {
            tokenMap,
            balances
        };
    };
    exports.getTargetChainTokenInfoObj = getTargetChainTokenInfoObj;
    const getVaultTokenMap = () => {
        let vaultTokenMap = {};
        index_3.BridgeVaultGroupList.forEach((vaultGroup) => {
            for (const [chainId, vault] of Object.entries(vaultGroup.vaults)) {
                vaultTokenMap[chainId] = vaultTokenMap[chainId] || {};
                vaultTokenMap[chainId][vault.vaultAddress.toLowerCase()] = vault.tokenAddress.toLowerCase();
            }
        });
        return vaultTokenMap;
    };
    const getBridgeVault = async (state, chainId, vaultAddress) => {
        try {
            const bridgeVaultAPIEndpoint = state.getAPIEndpoint('bridgeVault');
            let res = await (0, index_2.getAPI)(bridgeVaultAPIEndpoint, { chainId, address: vaultAddress });
            return res.data ? res.data : res;
        }
        catch (err) {
            console.log('err', err);
        }
        return null;
    };
    exports.getBridgeVault = getBridgeVault;
    const getBondsInBridgeVault = async (state, chainId, vaultTrollRegistry, version = (0, index_3.getBridgeVaultVersion)(state.getChainId())) => {
        try {
            const bondsAPIEndpoint = state.getAPIEndpoint('bonds');
            let res = await (0, index_2.getAPI)(bondsAPIEndpoint, { version, chainId, vaultTrollRegistry });
            return Array.isArray(res) ? res : [];
        }
        catch (err) {
            console.log('err', err);
        }
        return [];
    };
    exports.getBondsInBridgeVault = getBondsInBridgeVault;
    // Bridge Swap
    const createBridgeVaultOrder = async (state, params) => {
        try {
            const { vaultAddress, targetChainId, tokenIn, tokenOut, amountIn, minAmountOut, sourceRouteInfo } = params;
            const wallet = eth_wallet_3.Wallet.getClientInstance();
            const transactionDeadlineInMinutes = state.bridgeTransactionDeadline;
            const transactionDeadline = Math.floor(Date.now() / 1000 + (transactionDeadlineInMinutes * 60));
            const slippageTolerance = state.slippageTolerance;
            const amountInTokenAmount = eth_wallet_3.Utils.toDecimals(amountIn, tokenIn.decimals);
            const minAmountOutTokenAmount = eth_wallet_3.Utils.toDecimals(minAmountOut, tokenOut.decimals).dp(0, 1);
            if (tokenOut.isNative) {
                tokenOut.address = eth_contract_1.nullAddress;
            }
            const newOrder = {
                peerChain: targetChainId,
                inAmount: amountInTokenAmount,
                outToken: tokenOut.address || "",
                minOutAmount: minAmountOutTokenAmount,
                to: wallet.address,
                expire: transactionDeadline
            };
            const chainId = await wallet.getChainId();
            const sourceVaultToken = getTokenByVaultAddress(chainId, vaultAddress);
            let receipt;
            if (sourceRouteInfo) {
                const wrapperAddress = index_3.CrossChainAddressMap[chainId].wrapperAddress;
                const wrapperContract = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_RouterVaultWrapper(wallet, wrapperAddress);
                if (!sourceVaultToken?.decimals) {
                    throw new Error("Missing Source Vault Token Decimals");
                }
                newOrder.inAmount = new eth_wallet_3.BigNumber(sourceRouteInfo.amountOut).shiftedBy(sourceVaultToken.decimals).times(1 - slippageTolerance / 100).dp(0, 1);
                if (tokenIn.isNative) {
                    const swapExactETHForTokenParams = {
                        pair: sourceRouteInfo.pairs,
                        vault: vaultAddress,
                        deadline: transactionDeadline,
                        order: newOrder
                    };
                    receipt = await wrapperContract.swapExactETHForTokens(swapExactETHForTokenParams, eth_wallet_3.Utils.toDecimals(amountIn, 18));
                }
                else {
                    const swapExactTokenForTokensParams = {
                        pair: sourceRouteInfo.pairs,
                        vault: vaultAddress,
                        amountIn: eth_wallet_3.Utils.toDecimals(amountIn, tokenIn.decimals),
                        deadline: transactionDeadline,
                        order: newOrder
                    };
                    receipt = await wrapperContract.swapExactTokensForTokens(swapExactTokenForTokensParams);
                }
            }
            else {
                const vaultContract = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_BridgeVault(wallet, vaultAddress);
                receipt = await vaultContract.newOrder(newOrder);
            }
            return { receipt, error: null };
        }
        catch (error) {
            return { receipt: null, error: error };
        }
    };
    exports.createBridgeVaultOrder = createBridgeVaultOrder;
    const composeRouteObjBridge = async (routeObj, firstInput, vaultTokenToTargetChain, bridgeFees, slippageTolerance) => {
        let fromAmount = new eth_wallet_3.BigNumber(0);
        let toAmount = new eth_wallet_3.BigNumber(0);
        let minReceivedMaxSold = 0;
        let priceImpact = 0;
        let price = 0;
        let priceSwap = 0;
        let tradeFee = 0;
        let fees;
        let isApproveButtonShown = false;
        try {
            toAmount = new eth_wallet_3.BigNumber(routeObj.targetRouteObj.amountOut);
            if (toAmount.isZero())
                return null;
            minReceivedMaxSold = toAmount.times(1 - slippageTolerance / 100).toNumber();
            fromAmount = firstInput;
            price = new eth_wallet_3.BigNumber(fromAmount).div(toAmount).toNumber();
            priceSwap = new eth_wallet_3.BigNumber(1).div(price).toNumber();
            // Fee Structure - in InToken
            let sourceRoutingPrice = routeObj.sourceRouteObj ? routeObj.sourceRouteObj.price : 1;
            fees = {
                sourceRouteLiquidityFee: routeObj.sourceRouteObj ? new eth_wallet_3.BigNumber(routeObj.sourceRouteObj.tradeFee).times(fromAmount) : new eth_wallet_3.BigNumber(0),
                targetRouteLiquidityFee: new eth_wallet_3.BigNumber(routeObj.targetRouteObj.tradeFee).times(vaultTokenToTargetChain).times(sourceRoutingPrice),
                baseFee: new eth_wallet_3.BigNumber(bridgeFees.baseFee).times(sourceRoutingPrice),
                transactionFee: new eth_wallet_3.BigNumber(bridgeFees.transactionFee).times(sourceRoutingPrice),
                protocolFee: new eth_wallet_3.BigNumber(bridgeFees.protocolFee).times(sourceRoutingPrice),
                imbalanceFee: new eth_wallet_3.BigNumber(bridgeFees.imbalanceFee).times(sourceRoutingPrice)
            };
            tradeFee = Object.values(fees).reduce((a, b) => a.plus(b));
        }
        catch (err) {
            console.log('err', err);
            return null;
        }
        return {
            ...routeObj,
            price,
            priceSwap,
            fromAmount,
            toAmount,
            priceImpact,
            tradeFee,
            fees,
            minReceivedMaxSold,
            isApproveButtonShown
        };
    };
    const getExtendedRouteObjDataForDirectRoute = async (bestRouteObj, swapPrice) => {
        let fee = new eth_wallet_3.BigNumber(0);
        let priceImpact = new eth_wallet_3.BigNumber(0);
        let extendedRouteObj = {
            pairs: bestRouteObj.pairs,
            market: bestRouteObj.market,
            bestRoute: bestRouteObj.route,
            priceImpact: priceImpact,
            price: swapPrice.toFixed(),
            tradeFee: fee.toFixed(),
        };
        return extendedRouteObj;
    };
    const getAvailableRouteOptions = async (state, params, getTradeFeeMap, getExtendedRouteObjData) => {
        let { fromChainId, toChainId, tokenIn, tokenOut, amountIn } = params;
        // Handle native token
        let isTokenInNative = false;
        let isTokenOutNative = false;
        if (tokenIn.isNative) {
            isTokenInNative = true;
            tokenIn.address = (0, index_3.getWETH)(fromChainId).address;
        }
        if (tokenOut.isNative) {
            tokenOut.address = (0, index_3.getWETH)(toChainId).address;
        }
        const tradeFeeMap = await getTradeFeeMap(state);
        const bridgeRoutingAPIEndpoint = state.getAPIEndpoint('bridgeRouting');
        const routeAPIResult = await (0, index_2.getAPI)(bridgeRoutingAPIEndpoint, {
            fromChainId,
            toChainId,
            tokenIn: tokenIn.address,
            tokenOut: tokenOut.address,
            amountIn: eth_wallet_3.Utils.toDecimals(amountIn, tokenIn.decimals),
            version: (0, index_3.getBridgeVaultVersion)(state.getChainId())
        });
        if (!routeAPIResult)
            return [];
        const routes = routeAPIResult.routes || routeAPIResult.data;
        const composeRoutes = async (routeObj, chainId, fromAmount) => {
            const providerConfigByDexId = Object.values(index_3.ProviderConfigMap)
                .filter(({ supportedChains }) => supportedChains?.includes(chainId))
                .reduce((acc, cur) => {
                if (cur.dexId || cur.dexId === 0)
                    acc[cur.dexId] = cur;
                return acc;
            }, {});
            let dexId = [5, 6].includes(routeObj.dexId) ? 5 : routeObj.dexId;
            let bestRouteObj;
            bestRouteObj = {
                pairs: routeObj.route.map(v => v.address),
                market: routeObj.route.map(v => {
                    let dexId = [5, 6].includes(v.dexId) ? 5 : v.dexId;
                    return providerConfigByDexId[dexId].key;
                }),
                route: routeObj.tokens,
                customDataList: routeObj.route.map(v => {
                    return {
                        queueType: v.queueType,
                        orderIds: v.orderIds,
                        reserveA: v.reserves.reserve0,
                        reserveB: v.reserves.reserve1
                    };
                })
            };
            let amountOut = eth_wallet_3.Utils.fromDecimals(routeObj.amountOut, routeObj.tokens[routeObj.tokens.length - 1].decimals);
            let swapPrice = new eth_wallet_3.BigNumber(fromAmount).div(amountOut);
            let extendedData = bestRouteObj.pairs.length !== 0 ? await getExtendedRouteObjData(bestRouteObj, tradeFeeMap, swapPrice, true) : await getExtendedRouteObjDataForDirectRoute(bestRouteObj, swapPrice);
            let provider = providerConfigByDexId[dexId].key;
            let key = provider + '|' + (routeObj.isDirectRoute ? '0' : '1');
            bestRouteObj = {
                ...extendedData,
                amountOut,
                provider,
                key,
                queueType: routeObj.queueType
            };
            return bestRouteObj;
        };
        let bestRouteObjArr = [];
        let wrapperAddress = index_3.CrossChainAddressMap[fromChainId].wrapperAddress; //TODO: Return from API
        for (let i = 0; i < routes.length; i++) {
            let routeObj = routes[i];
            let sourceVaultToken = getTokenByVaultAddress(fromChainId, routeObj.vault);
            let targetVaultAddresses = index_3.BridgeVaultGroupList.find((v) => {
                if (v.deprecated)
                    return false;
                return v.vaults[fromChainId]?.vaultAddress.toLowerCase() == routeObj.vault.toLowerCase();
            })?.vaults?.[toChainId];
            if (targetVaultAddresses == null)
                continue;
            let targetVaultTokenAddress = targetVaultAddresses.tokenAddress;
            let tokenMap = getTargetChainTokenMap(toChainId);
            let targetVaultToken = tokenMap[targetVaultTokenAddress.toLowerCase()];
            //Get Fee From Router
            const fees = Object.entries(routeObj.fees).reduce((acc, [key, value]) => {
                acc[key] = new eth_wallet_3.BigNumber(value).shiftedBy(-targetVaultToken.decimals);
                return acc;
            }, {});
            amountIn = new eth_wallet_3.BigNumber(amountIn);
            let sourceRouteObj = routeObj.sourceRoute ? await composeRoutes(routeObj.sourceRoute, fromChainId, amountIn) : null;
            let vaultTokenFromSourceChain = routeObj.sourceRoute ? sourceRouteObj.amountOut : amountIn;
            let bridgeFee = new eth_wallet_3.BigNumber(fees.baseFee).plus(fees.protocolFee).plus(fees.transactionFee).plus(fees.imbalanceFee);
            let vaultTokenToTargetChain = new eth_wallet_3.BigNumber(vaultTokenFromSourceChain).minus(bridgeFee).toFixed();
            let targetRouteObj = await composeRoutes(routeObj.targetRoute, toChainId, vaultTokenToTargetChain);
            let bestRouteObj;
            bestRouteObj = {
                sourceRouteObj,
                targetRouteObj,
                sourceVaultToken,
                targetVaultToken,
                vaultTokenFromSourceChain: routeObj.sourceRoute ? vaultTokenFromSourceChain : null,
                vaultTokenToTargetChain,
                vaultAddress: routeObj.vault,
                contractAddress: sourceRouteObj ? wrapperAddress : routeObj.vault,
            };
            bestRouteObj = await composeRouteObjBridge(bestRouteObj, amountIn, new eth_wallet_3.BigNumber(vaultTokenToTargetChain), fees, state.slippageTolerance);
            if (isTokenInNative && bestRouteObj) {
                bestRouteObj.sourceRouteObj.bestRoute[0] = tokenIn;
                bestRouteObj.sourceRouteObj.bestSmartRoute[0].fromToken = tokenIn;
            }
            if (isTokenOutNative) {
                bestRouteObj.targetRouteObj.bestRoute[bestRouteObj.targetRouteObj.bestRoute.length - 1] = tokenOut;
                bestRouteObj.targetRouteObj.bestSmartRoute[bestRouteObj.targetRouteObj.bestSmartRoute.length - 1].toToken = tokenOut;
            }
            bestRouteObjArr.push(bestRouteObj);
        }
        bestRouteObjArr = bestRouteObjArr.filter(v => v !== null);
        // Only direct token swap is enabled
        bestRouteObjArr = bestRouteObjArr.filter(v => !v.sourceRouteObj && v.targetRouteObj.pairs.length === 0);
        bestRouteObjArr = bestRouteObjArr.sort((a, b) => a.toAmount.lt(b.toAmount) ? 1 : -1);
        return bestRouteObjArr;
    };
    exports.getAvailableRouteOptions = getAvailableRouteOptions;
    // Return the current vault asset balance by given chainId and address
    const getVaultAssetBalance = async (chainId, vaultAddress) => {
        try {
            let targetChainWallet = initCrossChainWallet(chainId);
            const vault = new oswap_cross_chain_bridge_contract_1.Contracts.OSWAP_BridgeVault(targetChainWallet, vaultAddress);
            const asset = new eth_wallet_3.Contracts.ERC20(targetChainWallet, await vault.asset());
            return (await asset.balanceOf(vault.address));
        }
        catch (err) {
            console.log('err', err);
        }
        return null;
    };
    exports.getVaultAssetBalance = getVaultAssetBalance;
    const getOraclePriceMap = async (chainId) => {
        const oraclePriceMap = {};
        try {
            const wallet = initCrossChainWallet(chainId);
            await Promise.all(Object.entries(index_3.MockOracleMap[chainId]).map(async ([token, oracle]) => {
                let mockOracleContract = new oswap_chainlink_contract_1.Contracts.AggregatorProxy(wallet, oracle);
                oraclePriceMap[token.toLowerCase()] = (await mockOracleContract.latestAnswer()).shiftedBy(-18); // token -> USD 
            }));
        }
        catch (err) {
            console.log('err', err);
        }
        return oraclePriceMap;
    };
    exports.getOraclePriceMap = getOraclePriceMap;
});
define("@scom/scom-swap/crosschain-utils/index.ts", ["require", "exports", "@scom/scom-swap/crosschain-utils/API.ts"], function (require, exports, API_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getOraclePriceMap = exports.getVaultAssetBalance = exports.getAvailableRouteOptions = exports.createBridgeVaultOrder = exports.getBondsInBridgeVault = exports.getBridgeVault = exports.getTargetChainTokenInfoObj = exports.getTargetChainTokenMap = exports.getTokenByVaultAddress = void 0;
    Object.defineProperty(exports, "getTokenByVaultAddress", { enumerable: true, get: function () { return API_1.getTokenByVaultAddress; } });
    Object.defineProperty(exports, "getTargetChainTokenMap", { enumerable: true, get: function () { return API_1.getTargetChainTokenMap; } });
    Object.defineProperty(exports, "getTargetChainTokenInfoObj", { enumerable: true, get: function () { return API_1.getTargetChainTokenInfoObj; } });
    Object.defineProperty(exports, "getBridgeVault", { enumerable: true, get: function () { return API_1.getBridgeVault; } });
    Object.defineProperty(exports, "getBondsInBridgeVault", { enumerable: true, get: function () { return API_1.getBondsInBridgeVault; } });
    Object.defineProperty(exports, "createBridgeVaultOrder", { enumerable: true, get: function () { return API_1.createBridgeVaultOrder; } });
    Object.defineProperty(exports, "getAvailableRouteOptions", { enumerable: true, get: function () { return API_1.getAvailableRouteOptions; } });
    Object.defineProperty(exports, "getVaultAssetBalance", { enumerable: true, get: function () { return API_1.getVaultAssetBalance; } });
    Object.defineProperty(exports, "getOraclePriceMap", { enumerable: true, get: function () { return API_1.getOraclePriceMap; } });
});
define("@scom/scom-swap/swap-utils/index.ts", ["require", "exports", "@ijstech/eth-wallet", "@scom/oswap-openswap-contract", "@scom/scom-commission-proxy-contract", "@scom/scom-dex-list", "@scom/scom-swap/global/index.ts", "@scom/scom-swap/store/index.ts", "@scom/scom-token-list", "@scom/scom-swap/crosschain-utils/index.ts"], function (require, exports, eth_wallet_4, oswap_openswap_contract_1, scom_commission_proxy_contract_1, scom_dex_list_1, index_4, index_5, scom_token_list_5, index_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createBridgeVaultOrder = exports.getCrossChainRouteOptions = exports.getCommissionRate = exports.getProviderProxySelectors = exports.setApprovalModalSpenderAddress = exports.getRouterAddress = exports.getChainNativeToken = exports.executeSwap = exports.getPair = exports.getAllRoutesData = exports.getTradeFeeMap = exports.getExtendedRouteObjData = void 0;
    const getChainNativeToken = (chainId) => {
        return scom_token_list_5.ChainNativeTokenByChainId[chainId];
    };
    exports.getChainNativeToken = getChainNativeToken;
    const getWETH = (chainId) => {
        return scom_token_list_5.WETHByChainId[chainId];
    };
    const getWrappedTokenAddress = (chainId) => {
        return getWETH(chainId).address;
    };
    const getFactoryAddress = (state, key) => {
        const factoryAddress = state.getDexDetail(key, state.getChainId())?.factoryAddress || '';
        return factoryAddress;
    };
    function getRouterAddress(state, key) {
        const routerAddress = state.getDexDetail(key, state.getChainId())?.routerAddress || '';
        return routerAddress;
    }
    exports.getRouterAddress = getRouterAddress;
    async function composeRouteObj(state, routeObj, firstInput, secondInput, isFromEstimated) {
        const slippageTolerance = state.slippageTolerance;
        if (!slippageTolerance)
            return null;
        let fromAmount = new eth_wallet_4.BigNumber(0);
        let toAmount = new eth_wallet_4.BigNumber(0);
        let minReceivedMaxSold = 0;
        let priceImpact = 0;
        let price = 0;
        let priceSwap = 0;
        let tradeFee = 0;
        let gasFee = 0;
        try {
            if (isFromEstimated) {
                let poolAmount = new eth_wallet_4.BigNumber(routeObj.amountIn);
                if (poolAmount.isZero())
                    return null;
                minReceivedMaxSold = poolAmount.times(1 + slippageTolerance / 100).toNumber();
                fromAmount = poolAmount;
                toAmount = secondInput;
                gasFee = routeObj.gasFee;
            }
            else {
                let poolAmount = new eth_wallet_4.BigNumber(routeObj.amountOut);
                if (poolAmount.isZero())
                    return null;
                minReceivedMaxSold = poolAmount.times(1 - slippageTolerance / 100).toNumber();
                fromAmount = firstInput;
                toAmount = poolAmount;
                gasFee = routeObj.gasFee;
            }
            price = parseFloat(routeObj.price);
            priceSwap = new eth_wallet_4.BigNumber(1).div(routeObj.price).toNumber();
            priceImpact = Number(routeObj.priceImpact) * 100;
            tradeFee = parseFloat(routeObj.tradeFee);
        }
        catch (err) {
            console.log('err', err);
            return null;
        }
        return {
            ...routeObj,
            price,
            priceSwap,
            fromAmount,
            toAmount,
            priceImpact,
            tradeFee,
            gasFee,
            minReceivedMaxSold
        };
    }
    function getTradeFeeMap(state) {
        let tradeFeeMap = {};
        const chainId = state.getChainId();
        const dexInfoList = state.getDexInfoList({ chainId });
        for (let dexInfo of dexInfoList) {
            tradeFeeMap[dexInfo.dexCode] = dexInfo.details.find(v => v.chainId === chainId).tradeFee;
        }
        return tradeFeeMap;
    }
    exports.getTradeFeeMap = getTradeFeeMap;
    async function calculateAPIBestRouteObjArr(state, tokenIn, tokenOut, routeObjArr) {
        let bestRouteObjArr = [];
        let providerConfigByDexId = {};
        let chainId = state.getChainId();
        Object.values(index_5.ProviderConfigMap).filter(v => !!v.supportedChains && v.supportedChains.includes(chainId)).forEach((v, i) => {
            if (v.dexId == undefined)
                return;
            providerConfigByDexId[v.dexId] = v;
        });
        for (let i = 0; i < routeObjArr.length; i++) {
            let routeObj = routeObjArr[i];
            routeObj.tokens[0] = tokenIn;
            routeObj.tokens[routeObj.tokens.length - 1] = tokenOut;
            let dexId = [5, 6].includes(routeObj.dexId) ? 5 : routeObj.dexId;
            if (!providerConfigByDexId[dexId])
                continue;
            let bestRouteObj = {
                pairs: routeObj.route.map(v => v.address),
                isRegistered: routeObj.route.map(v => v.isRegistered),
                market: routeObj.route.map(v => {
                    let dexId = [5, 6].includes(v.dexId) ? 5 : v.dexId;
                    return providerConfigByDexId[dexId].key;
                }),
                route: routeObj.tokens,
                customDataList: routeObj.route.map(v => {
                    return {
                        queueType: v.queueType,
                        orderIds: v.orderIds,
                        reserveA: v.reserves.reserve0,
                        reserveB: v.reserves.reserve1
                    };
                })
            };
            let amountIn = new eth_wallet_4.BigNumber(routeObj.amountIn).shiftedBy(-tokenIn.decimals);
            let amountOut = new eth_wallet_4.BigNumber(routeObj.amountOut).shiftedBy(-tokenOut.decimals);
            let swapPrice = new eth_wallet_4.BigNumber(amountIn).div(amountOut);
            let isHybridOrQueue = providerConfigByDexId[dexId].key == 'Hybrid' || routeObj.queueType;
            let tradeFeeMap = getTradeFeeMap(state);
            let extendedData = await getExtendedRouteObjData(bestRouteObj, tradeFeeMap, swapPrice, isHybridOrQueue);
            let provider = providerConfigByDexId[dexId].key;
            let key = provider + '|' + (routeObj.isDirectRoute ? '0' : '1');
            let extendedBestRouteObj = {
                ...extendedData,
                provider,
                key,
                queueType: routeObj.queueType,
                amountIn,
                amountOut
            };
            bestRouteObjArr.push(extendedBestRouteObj);
        }
        return bestRouteObjArr;
    }
    async function getBestAmountInRouteFromAPI(state, tokenIn, tokenOut, amountOut) {
        let chainId = state.getChainId();
        let wrappedToken = getWETH(chainId);
        const tradingRoutingAPIEndpoint = state.getAPIEndpoint('tradingRouting');
        let amountOutDecimals = eth_wallet_4.Utils.toDecimals(amountOut, tokenOut.decimals).toFixed();
        let APIResult = await (0, index_4.getAPI)(tradingRoutingAPIEndpoint, {
            chainId,
            tokenIn: tokenIn.address ? tokenIn.address : wrappedToken.address,
            tokenOut: tokenOut.address ? tokenOut.address : wrappedToken.address,
            amountOut: amountOutDecimals,
            ignoreHybrid: 1
        });
        let routeObjArr = Array.isArray(APIResult) ? APIResult : APIResult.data; //Backward compatibility
        if (!routeObjArr)
            return [];
        let bestRouteObjArr = await calculateAPIBestRouteObjArr(state, tokenIn, tokenOut, routeObjArr.map(v => ({
            ...v,
            amountOut: amountOutDecimals
        })));
        return bestRouteObjArr;
    }
    async function getBestAmountOutRouteFromAPI(state, tokenIn, tokenOut, amountIn) {
        let chainId = state.getChainId();
        let wrappedToken = getWETH(chainId);
        const tradingRoutingAPIEndpoint = state.getAPIEndpoint('tradingRouting');
        let amountInDecimals = eth_wallet_4.Utils.toDecimals(amountIn, tokenIn.decimals).toFixed();
        let APIResult = await (0, index_4.getAPI)(tradingRoutingAPIEndpoint, {
            chainId,
            tokenIn: tokenIn.address ? tokenIn.address : wrappedToken.address,
            tokenOut: tokenOut.address ? tokenOut.address : wrappedToken.address,
            amountIn: amountInDecimals,
            ignoreHybrid: 1
        });
        let routeObjArr = Array.isArray(APIResult) ? APIResult : APIResult.data; //Backward compatibility
        if (!routeObjArr)
            return [];
        let bestRouteObjArr = await calculateAPIBestRouteObjArr(state, tokenIn, tokenOut, routeObjArr.map(v => ({
            ...v,
            amountIn: amountInDecimals
        })));
        return bestRouteObjArr;
    }
    const getProviderProxySelectors = async (state, providers) => {
        const wallet = state.getRpcWallet();
        await wallet.init();
        let selectorsSet = new Set();
        for (let provider of providers) {
            const dex = state.getDexInfoList({ key: provider.key, chainId: provider.chainId })[0];
            if (dex) {
                const routerAddress = dex.details.find(v => v.chainId === provider.chainId)?.routerAddress || '';
                const selectors = await (0, scom_dex_list_1.getSwapProxySelectors)(dex.dexType, provider.chainId, routerAddress);
                selectors.forEach(v => selectorsSet.add(v));
            }
        }
        return Array.from(selectorsSet);
    };
    exports.getProviderProxySelectors = getProviderProxySelectors;
    const getPair = async (state, market, tokenA, tokenB) => {
        const wallet = state.getRpcWallet();
        let chainId = state.getChainId();
        if (!tokenA.address)
            tokenA = getWETH(chainId);
        if (!tokenB.address)
            tokenB = getWETH(chainId);
        let factory = new oswap_openswap_contract_1.Contracts.OSWAP_Factory(wallet, getFactoryAddress(state, market));
        let pair = await factory.getPair({
            param1: tokenA.address,
            param2: tokenB.address
        });
        return pair;
    };
    exports.getPair = getPair;
    const getAllAvailableRoutes = async (state, markets, tokenList, tokenIn, tokenOut) => {
        const wallet = state.getRpcWallet();
        let getPairPromises = [];
        let availableRoutes = [];
        const getReservesByPair = async (market, pairAddress, tokenIn, tokenOut) => {
            let chainId = state.getChainId();
            if (!tokenIn.address)
                tokenIn = getWETH(chainId);
            if (!tokenOut.address)
                tokenOut = getWETH(chainId);
            let reserveObj = await (0, scom_dex_list_1.getDexPairReserves)(wallet.chainId, market, pairAddress, tokenIn.address, tokenOut.address);
            return reserveObj;
        };
        let composeAvailableRoutePromise = async (state, market, tokenIn, tokenOut) => {
            try {
                let pair = await getPair(state, market, tokenIn, tokenOut);
                if (pair == eth_wallet_4.Utils.nullAddress)
                    return;
                let reserveObj = await getReservesByPair(market, pair, tokenIn, tokenOut);
                availableRoutes.push({
                    pair,
                    market,
                    tokenIn,
                    tokenOut,
                    ...reserveObj
                });
            }
            catch (err) {
                console.log('err', err);
            }
        };
        getPairPromises.push(...markets.map(market => composeAvailableRoutePromise(state, market, tokenIn, tokenOut)));
        for (let i = 0; i < tokenList.length; i++) {
            let hop1 = tokenList[i];
            if (tokenIn.address != hop1.address) {
                getPairPromises.push(...markets.map(market => composeAvailableRoutePromise(state, market, tokenIn, hop1)));
            }
            if (hop1.address != tokenOut.address) {
                getPairPromises.push(...markets.map(market => composeAvailableRoutePromise(state, market, hop1, tokenOut)));
            }
            for (let j = 0; j < tokenList.length; j++) {
                let hop2 = tokenList[j];
                if (hop1.address == hop2.address || hop1.address == tokenIn.address ||
                    hop2.address == tokenIn.address || hop1.address == tokenOut.address ||
                    hop2.address == tokenOut.address) {
                    continue;
                }
                getPairPromises.push(...markets.map(market => composeAvailableRoutePromise(state, market, hop1, hop2)));
            }
        }
        await Promise.all(getPairPromises);
        return availableRoutes;
    };
    const calculateAmountOutByTradeFee = (tradeFeeMap, pairInfo, amountIn) => {
        let tradeFeeObj = tradeFeeMap[pairInfo.market];
        let amountInWithFee = new eth_wallet_4.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee).times(amountIn);
        let amtOut = (new eth_wallet_4.BigNumber(pairInfo.reserveB).times(amountInWithFee)).idiv(new eth_wallet_4.BigNumber(pairInfo.reserveA).times(tradeFeeObj.base).plus(amountInWithFee)).toFixed();
        return amtOut;
    };
    const calculateAmountInByTradeFee = (tradeFeeMap, pairInfo, amountOut) => {
        let tradeFeeObj = tradeFeeMap[pairInfo.market];
        let feeMultiplier = new eth_wallet_4.BigNumber(tradeFeeObj.base).minus(tradeFeeObj.fee);
        if (pairInfo.reserveB.lte(amountOut)) {
            return null;
        }
        let amtIn = new eth_wallet_4.BigNumber(pairInfo.reserveA).times(amountOut).times(tradeFeeObj.base).idiv(new eth_wallet_4.BigNumber(pairInfo.reserveB.minus(amountOut)).times(feeMultiplier)).plus(1).toFixed();
        return amtIn;
    };
    const getPathsByTokenIn = (tradeFeeMap, pairInfoList, routeObj, tokenIn) => {
        let routeObjList = [];
        let listItems = pairInfoList.filter(v => v.tokenOut.address == routeObj.route[routeObj.route.length - 1].address && routeObj.route.every((n) => n.address != v.tokenIn.address));
        let getNewAmmRouteObj = (pairInfo, routeObj, amountOut) => {
            let amtIn = calculateAmountInByTradeFee(tradeFeeMap, pairInfo, amountOut);
            if (!amtIn)
                return null;
            let newRouteObj = {
                pairs: [...routeObj.pairs, pairInfo.pair],
                market: [...routeObj.market, pairInfo.market],
                customDataList: [...routeObj.customDataList, {
                        reserveA: pairInfo.reserveA,
                        reserveB: pairInfo.reserveB
                    }],
                route: [...routeObj.route, pairInfo.tokenIn],
                amounts: [...routeObj.amounts, amtIn]
            };
            return newRouteObj;
        };
        for (let i = 0; i < listItems.length; i++) {
            let listItem = listItems[i];
            let lastAmtIn = routeObj.amounts[routeObj.amounts.length - 1];
            let newRouteObj = getNewAmmRouteObj(listItem, routeObj, lastAmtIn); // listItem.market == Market.MIXED_QUEUE ? getNewQueueRouteObj(listItem, routeObj, lastAmtIn) : getNewAmmRouteObj(listItem, routeObj, lastAmtIn);
            if (!newRouteObj)
                continue;
            if (listItem.tokenIn.address == tokenIn.address) {
                routeObjList.push(newRouteObj);
                break;
            }
            else {
                if (newRouteObj.route.length >= 4)
                    continue;
                let childPaths = getPathsByTokenIn(tradeFeeMap, pairInfoList, { ...newRouteObj }, tokenIn);
                routeObjList.push(...childPaths);
            }
        }
        return routeObjList;
    };
    const getPathsByTokenOut = (tradeFeeMap, pairInfoList, routeObj, tokenOut) => {
        let routeObjList = [];
        let listItems = pairInfoList.filter(v => v.tokenIn.address == routeObj.route[routeObj.route.length - 1].address && routeObj.route.every((n) => n.address != v.tokenOut.address));
        let getNewAmmRouteObj = (pairInfo, routeObj, amountIn) => {
            let amtOut = calculateAmountOutByTradeFee(tradeFeeMap, pairInfo, amountIn);
            let newRouteObj = {
                pairs: [...routeObj.pairs, pairInfo.pair],
                market: [...routeObj.market, pairInfo.market],
                route: [...routeObj.route, pairInfo.tokenOut],
                customDataList: [...routeObj.customDataList, {
                        reserveA: pairInfo.reserveA,
                        reserveB: pairInfo.reserveB
                    }],
                amounts: [...routeObj.amounts, amtOut]
            };
            return newRouteObj;
        };
        for (let i = 0; i < listItems.length; i++) {
            let listItem = listItems[i];
            let lastAmtOut = routeObj.amounts[routeObj.amounts.length - 1];
            let newRouteObj = getNewAmmRouteObj(listItem, routeObj, lastAmtOut); // listItem.market == Market.MIXED_QUEUE ? getNewQueueRouteObj(listItem, routeObj, lastAmtOut) : getNewAmmRouteObj(listItem, routeObj, lastAmtOut);
            if (!newRouteObj)
                continue;
            if (listItem.tokenOut.address == tokenOut.address) {
                routeObjList.push(newRouteObj);
                break;
            }
            else {
                if (newRouteObj.route.length >= 4)
                    continue;
                let childPaths = getPathsByTokenOut(tradeFeeMap, pairInfoList, { ...newRouteObj }, tokenOut);
                routeObjList.push(...childPaths);
            }
        }
        return routeObjList;
    };
    const getAllExactAmountOutPaths = async (tradeFeeMap, availableRoutes, tokenIn, tokenOut, amountOut) => {
        let allPaths = [];
        amountOut = eth_wallet_4.Utils.toDecimals(amountOut, tokenOut.decimals).toFixed();
        let getAmmRouteObj = (pairInfo) => {
            let amtIn = calculateAmountInByTradeFee(tradeFeeMap, pairInfo, amountOut);
            if (!amtIn)
                return null;
            let routeObj = {
                pairs: [pairInfo.pair],
                market: [pairInfo.market],
                customDataList: [{
                        reserveA: pairInfo.reserveA,
                        reserveB: pairInfo.reserveB
                    }],
                route: [pairInfo.tokenOut, pairInfo.tokenIn],
                amounts: [amtIn]
            };
            return routeObj;
        };
        if (availableRoutes.length == 1) {
            let pairInfo = availableRoutes[0];
            if (pairInfo.tokenIn.address == tokenIn.address && pairInfo.tokenOut.address == tokenOut.address) {
                let routeObj = getAmmRouteObj(pairInfo); // pairInfo.market == Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
                if (!routeObj)
                    return allPaths;
                allPaths = [routeObj];
            }
        }
        else if (availableRoutes.length > 1) {
            let entryList = availableRoutes.filter((v) => v.tokenOut.address == tokenOut.address);
            for (let i = 0; i < entryList.length; i++) {
                let pairInfo = entryList[i];
                let routeObj = getAmmRouteObj(pairInfo); // pairInfo.market == Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
                if (!routeObj)
                    continue;
                if ((!pairInfo.tokenIn.address && !tokenIn.address) ||
                    (pairInfo.tokenIn.address && tokenIn.address && pairInfo.tokenIn.address.toLowerCase() == tokenIn.address.toLowerCase())) {
                    allPaths.push(routeObj);
                }
                else {
                    //For the lack of a better way
                    for (let j = 0; j < Object.keys(tradeFeeMap).length; j++) {
                        let market = Object.keys(tradeFeeMap)[j];
                        let routes = availableRoutes.filter(v => v.tokenIn.address != tokenIn.address || v.market == market);
                        allPaths.push(...getPathsByTokenIn(tradeFeeMap, routes, routeObj, tokenIn));
                    }
                }
            }
        }
        let sortedAllPaths = allPaths.sort((a, b) => {
            let amtInA = a.amounts[a.amounts.length - 1];
            let amtInB = b.amounts[b.amounts.length - 1];
            let compare = new eth_wallet_4.BigNumber(amtInA).comparedTo(amtInB);
            return compare || 0;
        });
        return sortedAllPaths;
    };
    const getAllExactAmountInPaths = async (tradeFeeMap, availableRoutes, tokenIn, tokenOut, amountIn) => {
        let allPaths = [];
        amountIn = eth_wallet_4.Utils.toDecimals(amountIn, tokenIn.decimals).toFixed();
        let getAmmRouteObj = (pairInfo) => {
            let amtOut = calculateAmountOutByTradeFee(tradeFeeMap, pairInfo, amountIn);
            let routeObj = {
                pairs: [pairInfo.pair],
                market: [pairInfo.market],
                customDataList: [{
                        reserveA: pairInfo.reserveA,
                        reserveB: pairInfo.reserveB
                    }],
                route: [pairInfo.tokenIn, pairInfo.tokenOut],
                amounts: [amtOut]
            };
            return routeObj;
        };
        if (availableRoutes.length == 1) {
            let pairInfo = availableRoutes[0];
            if (pairInfo.tokenIn.address == tokenIn.address && pairInfo.tokenOut.address == tokenOut.address) {
                let routeObj = getAmmRouteObj(pairInfo); // pairInfo.market == Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
                if (!routeObj)
                    return allPaths;
                allPaths = [routeObj];
            }
        }
        else if (availableRoutes.length > 1) {
            let entryList = availableRoutes.filter((v) => v.tokenIn.address == tokenIn.address);
            for (let i = 0; i < entryList.length; i++) {
                let pairInfo = entryList[i];
                let routeObj = getAmmRouteObj(pairInfo); // pairInfo.market == Market.MIXED_QUEUE ? getQueueRouteObj(pairInfo) : getAmmRouteObj(pairInfo);
                if (!routeObj)
                    continue;
                if ((!pairInfo.tokenOut.address && !tokenOut.address) ||
                    (pairInfo.tokenOut.address && tokenOut.address && pairInfo.tokenOut.address.toLowerCase() == tokenOut.address.toLowerCase())) {
                    allPaths.push(routeObj);
                }
                else {
                    //For the lack of a better way
                    for (let j = 0; j < Object.keys(tradeFeeMap).length; j++) {
                        let market = Object.keys(tradeFeeMap)[j];
                        let routes = availableRoutes.filter(v => v.tokenOut.address != tokenOut.address || v.market == market);
                        allPaths.push(...getPathsByTokenOut(tradeFeeMap, routes, routeObj, tokenOut));
                    }
                }
            }
        }
        let sortedAllPaths = allPaths.sort((a, b) => {
            let lastAmtOutA = a.amounts[a.amounts.length - 1];
            let lastAmtOutB = b.amounts[b.amounts.length - 1];
            if (new eth_wallet_4.BigNumber(lastAmtOutA).gt(lastAmtOutB)) {
                return -1;
            }
            else if (new eth_wallet_4.BigNumber(lastAmtOutA).lt(lastAmtOutB)) {
                return 1;
            }
            return 0;
        });
        return sortedAllPaths;
    };
    const getBestAmountInRoute = async (state, markets, tokenIn, tokenOut, amountOut, tokenList) => {
        let allAvailableRoutes = await getAllAvailableRoutes(state, markets, tokenList, tokenIn, tokenOut);
        if (allAvailableRoutes.length == 0)
            return null;
        let wallet = state.getRpcWallet();
        let tradeFeeMap = getTradeFeeMap(state);
        let allPaths = await getAllExactAmountOutPaths(tradeFeeMap, allAvailableRoutes, tokenIn, tokenOut, amountOut);
        if (allPaths.length == 0) {
            return null;
        }
        let bestRouteObj = {
            pairs: allPaths[0].pairs.reverse(),
            market: allPaths[0].market.reverse(),
            amounts: allPaths[0].amounts.reverse(),
            route: allPaths[0].route.reverse(),
            customDataList: allPaths[0].customDataList.reverse()
        };
        let tokenLowestIn = bestRouteObj.amounts[0];
        let lowestIn = eth_wallet_4.Utils.fromDecimals(tokenLowestIn, tokenIn.decimals).toFixed();
        let swapPrice = new eth_wallet_4.BigNumber(lowestIn).div(amountOut);
        let extendedData = await getExtendedRouteObjData(bestRouteObj, tradeFeeMap, swapPrice, true);
        return {
            ...extendedData,
            amountIn: lowestIn
        };
    };
    const getBestAmountOutRoute = async (state, markets, tokenIn, tokenOut, amountIn, tokenList, isHybrid) => {
        let allAvailableRoutes = await getAllAvailableRoutes(state, markets, tokenList, tokenIn, tokenOut);
        if (allAvailableRoutes.length == 0) {
            return null;
        }
        let wallet = state.getRpcWallet();
        let tradeFeeMap = getTradeFeeMap(state);
        let allPaths = await getAllExactAmountInPaths(tradeFeeMap, allAvailableRoutes, tokenIn, tokenOut, amountIn);
        if (allPaths.length == 0) {
            return null;
        }
        let bestRouteObj = allPaths[0];
        let tokenHighestOut = bestRouteObj.amounts[bestRouteObj.amounts.length - 1];
        let highestOut = eth_wallet_4.Utils.fromDecimals(tokenHighestOut, tokenOut.decimals).toFixed();
        let swapPrice = new eth_wallet_4.BigNumber(amountIn).div(highestOut);
        let extendedData = await getExtendedRouteObjData(bestRouteObj, tradeFeeMap, swapPrice, isHybrid);
        return {
            ...extendedData,
            amountOut: highestOut
        };
    };
    async function getExtendedRouteObjData(bestRouteObj, tradeFeeMap, swapPrice, isHybridOrQueue) {
        let currPrice = new eth_wallet_4.BigNumber(0);
        if (bestRouteObj.customDataList.length > 0) {
            currPrice = bestRouteObj.market.map((v, i) => {
                let customDataObj = bestRouteObj.customDataList[i];
                let reserveA = new eth_wallet_4.BigNumber(customDataObj.reserveA).shiftedBy(-bestRouteObj.route[i].decimals);
                let reserveB = new eth_wallet_4.BigNumber(customDataObj.reserveB).shiftedBy(-bestRouteObj.route[i + 1].decimals);
                return reserveA.div(reserveB);
            })
                .reduce((prev, curr) => prev.times(curr));
        }
        let fee = new eth_wallet_4.BigNumber(1).minus(bestRouteObj.market.map((market) => {
            let tradeFeeObj = tradeFeeMap[market];
            if (!tradeFeeObj)
                return new eth_wallet_4.BigNumber(0);
            let tradeFee = new eth_wallet_4.BigNumber(tradeFeeObj.fee).div(tradeFeeObj.base);
            return new eth_wallet_4.BigNumber(1).minus(tradeFee);
        }).reduce((a, b) => a.times(b)));
        let priceImpact = swapPrice.minus(currPrice).div(swapPrice).minus(fee).toFixed();
        let extendedRouteObj = {
            pairs: bestRouteObj.pairs,
            market: bestRouteObj.market,
            bestRoute: bestRouteObj.route,
            priceImpact: priceImpact,
            price: swapPrice.toFixed(),
            tradeFee: fee.toFixed(),
        };
        return extendedRouteObj;
    }
    exports.getExtendedRouteObjData = getExtendedRouteObjData;
    async function getAllRoutesData(state, firstTokenObject, secondTokenObject, firstInput, secondInput, isFromEstimated, useAPI) {
        let resultArr = [];
        if (firstTokenObject && secondTokenObject && (firstInput.gt(0) || secondInput.gt(0))) {
            let routeDataArr = [];
            if (useAPI) {
                if (isFromEstimated) {
                    routeDataArr = await getBestAmountInRouteFromAPI(state, firstTokenObject, secondTokenObject, secondInput.toString());
                }
                else {
                    routeDataArr = await getBestAmountOutRouteFromAPI(state, firstTokenObject, secondTokenObject, firstInput.toString());
                }
            }
            if (isFromEstimated) {
                if (routeDataArr.length == 0) {
                    const providerList = state.providerList;
                    const providerKey = providerList[0]?.key;
                    let routeObj = await getBestAmountInRoute(state, providerKey ? [providerKey] : [], firstTokenObject, secondTokenObject, secondInput.toString(), []);
                    if (routeObj && routeObj.market.length == 1) {
                        let price = parseFloat(routeObj.price);
                        let priceSwap = new eth_wallet_4.BigNumber(1).div(routeObj.price).toNumber();
                        let priceImpact = Number(routeObj.priceImpact) * 100;
                        let tradeFee = parseFloat(routeObj.tradeFee);
                        const provider = routeObj.market[0];
                        let key = provider + '|0';
                        routeDataArr.push({
                            ...routeObj,
                            price,
                            priceSwap,
                            priceImpact,
                            tradeFee,
                            key,
                            provider
                        });
                    }
                }
            }
            else {
                if (routeDataArr.length == 0) {
                    const providerList = state.providerList;
                    const providerKey = providerList[0]?.key;
                    let routeObj = await getBestAmountOutRoute(state, providerKey ? [providerKey] : [], firstTokenObject, secondTokenObject, firstInput.toString(), [], false);
                    if (routeObj && routeObj.market.length == 1) {
                        let price = parseFloat(routeObj.price);
                        let priceSwap = new eth_wallet_4.BigNumber(1).div(routeObj.price).toNumber();
                        let priceImpact = Number(routeObj.priceImpact) * 100;
                        let tradeFee = parseFloat(routeObj.tradeFee);
                        const provider = routeObj.market[0];
                        let key = provider + '|0';
                        routeDataArr.push({
                            ...routeObj,
                            price,
                            priceSwap,
                            priceImpact,
                            tradeFee,
                            key,
                            provider
                        });
                    }
                }
            }
            if (routeDataArr && routeDataArr.length > 0) {
                for (let i = 0; i < routeDataArr.length; i++) {
                    let optionObj = routeDataArr[i];
                    let routeObj = await composeRouteObj(state, optionObj, firstInput, secondInput, isFromEstimated);
                    if (!routeObj)
                        continue;
                    resultArr.push(routeObj);
                }
            }
        }
        return resultArr;
    }
    exports.getAllRoutesData = getAllRoutesData;
    const AmmTradeExactIn = async function (state, wallet, market, routeTokens, amountIn, amountOutMin, toAddress, deadline, feeOnTransfer, campaignId, referrer) {
        if (routeTokens.length < 2) {
            return null;
        }
        let tokenIn = routeTokens[0];
        let tokenOut = routeTokens[routeTokens.length - 1];
        let routerAddress = getRouterAddress(state, market);
        let addresses = [];
        let chainId = state.getChainId();
        let wrappedTokenAddress = getWrappedTokenAddress(chainId);
        for (let i = 0; i < routeTokens.length; i++) {
            addresses.push(routeTokens[i].address || wrappedTokenAddress);
        }
        let receipt;
        const amount = tokenIn.address ? eth_wallet_4.Utils.toDecimals(amountIn, tokenIn.decimals).dp(0) : eth_wallet_4.Utils.toDecimals(amountIn).dp(0);
        const _amountOutMin = eth_wallet_4.Utils.toDecimals(amountOutMin, tokenOut.decimals).dp(0);
        if (!tokenIn.address) {
            const params = {
                amountOutMin: _amountOutMin,
                path: addresses,
                to: toAddress,
                deadline
            };
            let executeSwapOptions = {
                params,
                exactType: 'exactIn',
                feeOnTransfer,
                tokenInType: 'ETH',
                tokenOutType: 'ERC20',
                txOptions: {
                    value: amount
                }
            };
            if (campaignId !== undefined && campaignId !== null) {
                let txData = await (0, scom_dex_list_1.getRouterSwapTxData)(wallet.chainId, market, executeSwapOptions);
                const proxyAddress = state.getProxyAddress();
                const proxy = new scom_commission_proxy_contract_1.Contracts.ProxyV3(wallet, proxyAddress);
                receipt = await proxy.proxyCall({
                    campaignId,
                    target: routerAddress,
                    tokensIn: [
                        {
                            token: eth_wallet_4.Utils.nullAddress,
                            amount: amount
                        }
                    ],
                    data: txData,
                    referrer,
                    to: wallet.address,
                    tokensOut: [
                        tokenOut.address
                    ]
                });
            }
            else {
                receipt = await (0, scom_dex_list_1.executeRouterSwap)(wallet.chainId, market, executeSwapOptions);
            }
        }
        else {
            const params = {
                amountIn: amount,
                amountOutMin: _amountOutMin,
                path: addresses,
                to: toAddress,
                deadline
            };
            let executeSwapOptions = {
                params,
                exactType: 'exactIn',
                feeOnTransfer,
                tokenInType: 'ERC20',
                tokenOutType: !tokenOut.address ? 'ETH' : 'ERC20'
            };
            if (campaignId !== undefined && campaignId !== null) {
                let txData = await (0, scom_dex_list_1.getRouterSwapTxData)(wallet.chainId, market, executeSwapOptions);
                const proxyAddress = state.getProxyAddress();
                const proxy = new scom_commission_proxy_contract_1.Contracts.ProxyV3(wallet, proxyAddress);
                receipt = await proxy.proxyCall({
                    campaignId,
                    target: routerAddress,
                    tokensIn: [
                        {
                            token: tokenIn.address,
                            amount: amount
                        }
                    ],
                    data: txData,
                    referrer,
                    to: wallet.address,
                    tokensOut: [
                        tokenOut.address ?? eth_wallet_4.Utils.nullAddress
                    ]
                });
            }
            else {
                receipt = await (0, scom_dex_list_1.executeRouterSwap)(wallet.chainId, market, executeSwapOptions);
            }
        }
        return receipt;
    };
    const AmmTradeExactOut = async function (state, wallet, market, routeTokens, amountOut, amountInMax, toAddress, deadline, campaignId, referrer) {
        if (routeTokens.length < 2) {
            return null;
        }
        let tokenIn = routeTokens[0];
        let tokenOut = routeTokens[routeTokens.length - 1];
        let routerAddress = getRouterAddress(state, market);
        let addresses = [];
        let chainId = state.getChainId();
        let wrappedTokenAddress = getWrappedTokenAddress(chainId);
        for (let i = 0; i < routeTokens.length; i++) {
            addresses.push(routeTokens[i].address || wrappedTokenAddress);
        }
        let receipt;
        const _amountInMax = eth_wallet_4.Utils.toDecimals(amountInMax, tokenIn.decimals).dp(0);
        const _amountOut = eth_wallet_4.Utils.toDecimals(amountOut, tokenOut.decimals).dp(0);
        if (!tokenIn.address) {
            const params = {
                amountOut: _amountOut,
                path: addresses,
                to: toAddress,
                deadline
            };
            let executeSwapOptions = {
                params,
                exactType: 'exactOut',
                feeOnTransfer: false,
                tokenInType: 'ETH',
                tokenOutType: 'ERC20',
                txOptions: {
                    value: _amountInMax
                }
            };
            if (campaignId !== undefined && campaignId !== null) {
                let txData = await (0, scom_dex_list_1.getRouterSwapTxData)(wallet.chainId, market, executeSwapOptions);
                const proxyAddress = state.getProxyAddress();
                const proxy = new scom_commission_proxy_contract_1.Contracts.ProxyV3(wallet, proxyAddress);
                receipt = await proxy.proxyCall({
                    campaignId,
                    target: routerAddress,
                    tokensIn: [
                        {
                            token: eth_wallet_4.Utils.nullAddress,
                            amount: _amountInMax
                        }
                    ],
                    data: txData,
                    referrer,
                    to: wallet.address,
                    tokensOut: [
                        tokenOut.address
                    ]
                });
            }
            else {
                receipt = await (0, scom_dex_list_1.executeRouterSwap)(wallet.chainId, market, executeSwapOptions);
            }
        }
        else {
            const params = {
                amountOut: _amountOut,
                amountInMax: _amountInMax,
                path: addresses,
                to: toAddress,
                deadline
            };
            let executeSwapOptions = {
                params,
                exactType: 'exactOut',
                feeOnTransfer: false,
                tokenInType: 'ERC20',
                tokenOutType: !tokenOut.address ? 'ETH' : 'ERC20'
            };
            if (campaignId !== undefined && campaignId !== null) {
                let txData = await (0, scom_dex_list_1.getRouterSwapTxData)(wallet.chainId, market, executeSwapOptions);
                const proxyAddress = state.getProxyAddress();
                const proxy = new scom_commission_proxy_contract_1.Contracts.ProxyV3(wallet, proxyAddress);
                receipt = await proxy.proxyCall({
                    campaignId,
                    target: routerAddress,
                    tokensIn: [
                        {
                            token: tokenIn.address,
                            amount: _amountInMax
                        }
                    ],
                    data: txData,
                    referrer,
                    to: wallet.address,
                    tokensOut: [
                        tokenOut.address ?? eth_wallet_4.Utils.nullAddress
                    ]
                });
            }
            else {
                receipt = await (0, scom_dex_list_1.executeRouterSwap)(wallet.chainId, market, executeSwapOptions);
            }
        }
        return receipt;
    };
    const executeSwap = async (state, swapData) => {
        let receipt = null;
        const wallet = eth_wallet_4.Wallet.getClientInstance();
        try {
            const toAddress = wallet.account.address;
            const slippageTolerance = state.slippageTolerance;
            const transactionDeadlineInMinutes = state.swapTransactionDeadline;
            const transactionDeadline = Math.floor(Date.now() / 1000 + transactionDeadlineInMinutes * 60);
            const providerList = state.providerList;
            const market = providerList.find(item => item.key === swapData.provider)?.key || '';
            if (swapData.isFromEstimated) {
                const amountInMax = swapData.fromAmount.times(1 + slippageTolerance / 100);
                receipt = await AmmTradeExactOut(state, wallet, market, swapData.routeTokens, swapData.toAmount.toString(), amountInMax.toString(), toAddress, transactionDeadline, swapData.campaignId, swapData.referrer);
            }
            else {
                const amountOutMin = swapData.toAmount.times(1 - slippageTolerance / 100);
                receipt = await AmmTradeExactIn(state, wallet, market, swapData.routeTokens, swapData.fromAmount.toString(), amountOutMin.toString(), toAddress, transactionDeadline, false, swapData.campaignId, swapData.referrer);
            }
        }
        catch (error) {
            return { receipt: null, error: error };
        }
        return { receipt, error: null };
    };
    exports.executeSwap = executeSwap;
    const setApprovalModalSpenderAddress = (state, market, contractAddress) => {
        state.approvalModel.spenderAddress = contractAddress || getRouterAddress(state, market);
    };
    exports.setApprovalModalSpenderAddress = setApprovalModalSpenderAddress;
    const getCommissionRate = async (state, campaignId) => {
        const rpcWallet = state.getRpcWallet();
        const proxyAddress = state.getProxyAddress();
        await rpcWallet.init();
        let commissionRate = await scom_commission_proxy_contract_1.ContractUtils.getCommissionRate(rpcWallet, proxyAddress, campaignId);
        return eth_wallet_4.Utils.fromDecimals(commissionRate, 6).toFixed();
    };
    exports.getCommissionRate = getCommissionRate;
    const getCrossChainRouteOptions = async (state, params) => {
        return await (0, index_6.getAvailableRouteOptions)(state, params, getTradeFeeMap, getExtendedRouteObjData);
    };
    exports.getCrossChainRouteOptions = getCrossChainRouteOptions;
    const createBridgeVaultOrder = async (state, newOrderParams) => (0, index_6.createBridgeVaultOrder)(state, { ...newOrderParams });
    exports.createBridgeVaultOrder = createBridgeVaultOrder;
});
define("@scom/scom-swap/price-info/index.tsx", ["require", "exports", "@ijstech/components"], function (require, exports, components_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PriceInfo = void 0;
    const Theme = components_4.Styles.Theme.ThemeVars;
    ;
    let PriceInfo = class PriceInfo extends components_4.Module {
        constructor(parent, options) {
            super(parent, options);
            this.onRenderToggleBtn = (parent) => {
                const image = new components_4.Icon(parent, {
                    width: 18,
                    height: 18,
                    name: 'arrows-alt-v',
                    fill: Theme.text.primary,
                    border: { width: '2px', style: 'solid', color: 'transparent', radius: '50%' },
                    background: { color: Theme.input.background },
                    margin: { left: 5 },
                });
                image.style.transform = "rotate(90deg)";
                image.onClick = (source, event) => {
                    event.stopPropagation();
                    if (this.onTogglePrice)
                        this.onTogglePrice(this);
                };
                return image;
            };
            this.renderIconTooltip = (parent, item) => {
                const iconTooltip = new components_4.Icon(parent, {
                    opacity: 0.75,
                    fill: Theme.text.primary,
                    name: 'question-circle',
                    width: 15,
                    height: 15
                });
                iconTooltip.classList.add('icon-tooltip');
                if (item.onClick) {
                    iconTooltip.cursor = 'pointer';
                    iconTooltip.tooltip.content = 'Click to view details';
                    iconTooltip.tooltip.placement = 'right';
                    iconTooltip.tooltip.maxWidth = '270px';
                    iconTooltip.onClick = item.onClick;
                }
                else {
                    iconTooltip.tooltip.content = item.tooltip;
                    iconTooltip.tooltip.placement = 'right';
                    iconTooltip.tooltip.maxWidth = '270px';
                }
                return iconTooltip;
            };
        }
        get Items() {
            return this._items;
        }
        set Items(value) {
            this._items = value;
        }
        async setData(value) {
            this.Items = value;
            await this.renderItems();
        }
        getData() {
            return this.Items;
        }
        async renderItems() {
            // if (this.priceContent.children.length === this.Items.length) {
            //   this.updateItems();
            //   return;
            // }
            this.priceContent.clearInnerHTML();
            for (let i = 0; i < this.Items.length; i++) {
                const item = this.Items[i];
                const row = (this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "space-between", padding: { top: '0.25rem', bottom: '0.25rem', left: 0, right: 0 }, gap: "0.5rem", visible: !item.isHidden }));
                const pnlTitle = this.$render("i-hstack", { verticalAlignment: "center", gap: "0.5rem" });
                const titleLabel = this.$render("i-label", { caption: item.title, opacity: 0.75 });
                pnlTitle.appendChild(titleLabel);
                if (item.tooltip) {
                    const iconTooltip = this.renderIconTooltip(pnlTitle, item);
                    pnlTitle.appendChild(iconTooltip);
                }
                row.appendChild(pnlTitle);
                const pnlValue = this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "end", gap: "0.5rem" });
                const valueLabel = this.$render("i-label", { caption: item.value });
                pnlValue.appendChild(valueLabel);
                if (item.isToggleShown) {
                    const image = this.onRenderToggleBtn(pnlValue);
                    pnlValue.appendChild(image);
                }
                row.appendChild(pnlValue);
                this.priceContent.appendChild(row);
            }
        }
        // updateItems = async () => {
        //   for (let i = 0; i < this.Items.length; i++) {
        //     const item = this.Items[i];
        //     const row = this.priceContent.children[i] as HStack;
        //     const iconTooltip = row.querySelector('.icon-tooltip');
        //     const titleLabel = row.firstChild as Label;
        //     const valueLabel = row.children[iconTooltip ? 2 : 1] as Label;
        //     if (titleLabel?.caption && item.title != titleLabel.caption) {
        //       titleLabel.caption = item.title
        //     }
        //     if (valueLabel?.caption && item.value != valueLabel.caption) {
        //       valueLabel.caption = item.value
        //     }
        //     if (iconTooltip) {
        //       row.removeChild(iconTooltip);
        //     }
        //     if (item.tooltip) {
        //       const _iconTooltip = this.renderIconTooltip(row, item);
        //       row.insertBefore(_iconTooltip, row.children[1]);
        //     }
        //     if (item.isToggleShown && row.children.length <= 2) {
        //       const image = this.onRenderToggleBtn(row);
        //       row.appendChild(image);
        //     } else if (!item.isToggleShown && row.children.length > 2 && !item.tooltip) {
        //       row.removeChild(row.children[2]);
        //     }
        //     setTimeout(function(){
        //       const iconTooltips = row.querySelectorAll(".icon-tooltip");
        //       if (iconTooltips && iconTooltips.length > 1) {
        //           row.removeChild(iconTooltips[1])
        //       }
        //     }, 2000)
        //   }
        // }
        init() {
            super.init();
        }
        render() {
            return (this.$render("i-vstack", { class: "price-info", width: "auto" },
                this.$render("i-vstack", { id: "priceContent" })));
        }
    };
    PriceInfo = __decorate([
        (0, components_4.customElements)('i-scom-swap-price-info')
    ], PriceInfo);
    exports.PriceInfo = PriceInfo;
});
define("@scom/scom-swap/expert-mode-settings/index.tsx", ["require", "exports", "@ijstech/components"], function (require, exports, components_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExpertModeSettings = void 0;
    const Theme = components_5.Styles.Theme.ThemeVars;
    ;
    let ExpertModeSettings = class ExpertModeSettings extends components_5.Module {
        constructor(state, parent, options) {
            super(parent, options);
            this.state = state;
            this.$eventBus = components_5.application.EventBus;
        }
        ;
        closeModal() {
            this.expertModal.visible = false;
        }
        showModal() {
            this.expertModal.visible = true;
        }
        onToggle() {
            this.state.toggleExpertMode();
            this.closeModal();
            this.$eventBus.dispatch("ExpertModeChanged" /* EventId.ExpertModeChanged */);
        }
        render() {
            return (this.$render("i-modal", { id: "expertModal", border: { radius: '1rem' }, padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, width: 327 },
                this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "space-between", margin: { bottom: '1.25rem' }, padding: { bottom: '0.75rem' }, border: { bottom: { width: '2px', style: 'solid', color: Theme.background.main } } },
                    this.$render("i-label", { font: { color: Theme.colors.primary.main, weight: 700, size: '1.125rem' }, caption: "Expert Mode", margin: { left: 'auto', right: 'auto' }, padding: { left: '2rem', right: '2rem' } }),
                    this.$render("i-icon", { fill: Theme.colors.primary.main, name: "times", width: 16, height: 16, cursor: "pointer", onClick: () => this.closeModal() })),
                this.$render("i-panel", { class: "text-center" },
                    this.$render("i-panel", { padding: { top: '1rem', bottom: '1rem', left: '0.75rem', right: '0.75rem' }, margin: { bottom: '1.25rem' }, background: { color: 'linear-gradient(90deg,#df5869 -19.25%,#bc4c7b 116.5%)' }, border: { width: '1px', style: 'solid', color: '#f15e61', radius: '0.5rem' } },
                        this.$render("i-label", { caption: "Expert mode allows high slippage trades that often result in bad rates and lost funds.", font: { weight: 'bold', color: Theme.colors.primary.contrastText, size: '1rem' } })),
                    this.$render("i-label", { class: "warning-text", caption: "Only use this mode if you know what you are doing.", font: { weight: 'bold', color: Theme.colors.warning.light, size: '1.05rem' } }),
                    this.$render("i-button", { width: "100%", height: "auto", caption: "Turn On Expert Mode", padding: { top: '0.75rem', bottom: '0.75rem', left: '0.75rem', right: '0.75rem' }, margin: { top: '1.25rem', bottom: '0.5rem' }, font: { color: Theme.colors.primary.contrastText, weight: 700 }, background: { color: 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box' }, onClick: this.onToggle.bind(this) }))));
        }
    };
    ExpertModeSettings = __decorate([
        components_5.customModule,
        (0, components_5.customElements)('i-scom-swap-expert-mode-settings')
    ], ExpertModeSettings);
    exports.ExpertModeSettings = ExpertModeSettings;
    ;
});
define("@scom/scom-swap/data.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-swap/data.json.ts'/> 
    const InfuraId = "adc596bf88b648e2a8902bc9093930c5";
    exports.default = {
        "infuraId": InfuraId,
        "apiEndpoints": {
            "tradingRouting": "https://route.openswap.xyz/trading/v1/route",
            "bridgeRouting": "https://route.openswap.xyz/trading/v1/cross-chain-route",
            "bridgeVault": "https://route.openswap.xyz/trading/v1/bridge-vault",
            "bonds": "https://route.openswap.xyz/trading/v1/bonds-by-chain-id-and-vault-troll-registry"
        },
        "proxyAddresses": {
            "43113": "0x83aaf000f0a09f860564e894535cc18f5a50f627"
        },
        "defaultBuilderData": {
            "providers": [
                {
                    "key": "OpenSwap",
                    "chainId": 97
                },
                {
                    "key": "OpenSwap",
                    "chainId": 43113
                }
            ],
            "category": "fixed-pair",
            "tokens": [
                {
                    "address": "0x29386B60e0A9A1a30e1488ADA47256577ca2C385",
                    "chainId": 97
                },
                {
                    "address": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
                    "chainId": 97
                },
                {
                    "address": "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
                    "chainId": 43113
                },
                {
                    "address": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
                    "chainId": 43113
                }
            ],
            "defaultChainId": 43113,
            "networks": [
                {
                    "chainId": 43113
                },
                {
                    "chainId": 97
                }
            ],
            "wallets": [
                {
                    "name": "metamask"
                }
            ],
            "showHeader": true,
            "showFooter": true
        }
    };
});
define("@scom/scom-swap/formSchema.ts", ["require", "exports", "@ijstech/components", "@scom/scom-network-picker", "@scom/scom-token-input", "@scom/scom-storage", "@scom/scom-swap/index.css.ts"], function (require, exports, components_6, scom_network_picker_1, scom_token_input_1, scom_storage_1, index_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getProjectOwnerSchema = exports.getBuilderSchema = void 0;
    const Theme = components_6.Styles.Theme.ThemeVars;
    const chainIds = [1, 56, 137, 250, 97, 80001, 43113, 43114];
    const networks = chainIds.map(v => { return { chainId: v }; });
    const theme = {
        type: 'object',
        properties: {
            backgroundColor: {
                type: 'string',
                format: 'color'
            },
            fontColor: {
                type: 'string',
                format: 'color'
            },
            inputBackgroundColor: {
                type: 'string',
                format: 'color'
            },
            inputFontColor: {
                type: 'string',
                format: 'color'
            },
            maxButtonBackground: {
                type: 'string',
                format: 'color'
            },
            maxButtonHoverBackground: {
                type: 'string',
                format: 'color'
            },
            primaryButtonBackground: {
                type: 'string',
                format: 'color'
            },
            primaryButtonHoverBackground: {
                type: 'string',
                format: 'color'
            },
            primaryButtonDisabledBackground: {
                type: 'string',
                format: 'color'
            }
        }
    };
    const themeUISchema = {
        type: 'Category',
        label: 'Theme',
        elements: [
            {
                type: 'VerticalLayout',
                elements: [
                    {
                        type: 'Group',
                        label: 'Dark',
                        elements: [
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/backgroundColor'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/fontColor'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/inputBackgroundColor'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/inputFontColor'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/maxButtonBackground'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/maxButtonHoverBackground'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/primaryButtonBackground'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/primaryButtonHoverBackground'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/dark/properties/primaryButtonDisabledBackground'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'Group',
                        label: 'Light',
                        elements: [
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/backgroundColor'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/fontColor'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/inputBackgroundColor'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/inputFontColor'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/maxButtonBackground'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/maxButtonHoverBackground'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/primaryButtonBackground'
                                    },
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/primaryButtonHoverBackground'
                                    }
                                ]
                            },
                            {
                                type: 'HorizontalLayout',
                                elements: [
                                    {
                                        type: 'Control',
                                        scope: '#/properties/light/properties/primaryButtonDisabledBackground'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
    function getBuilderSchema() {
        return {
            dataSchema: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    logo: {
                        type: 'string',
                        format: 'data-url'
                    },
                    category: {
                        type: 'string',
                        required: true,
                        enum: [
                            'fixed-pair',
                            'fixed-protocal',
                            'aggregator',
                            'cross-chain-swap'
                        ]
                    },
                    networks: {
                        type: 'array',
                        required: true,
                        items: {
                            type: 'object',
                            properties: {
                                chainId: {
                                    type: 'number',
                                    enum: chainIds,
                                    required: true
                                }
                            }
                        }
                    },
                    tokens: {
                        type: 'array',
                        required: true,
                        items: {
                            type: 'object',
                            properties: {
                                chainId: {
                                    type: 'number',
                                    enum: chainIds,
                                    required: true
                                },
                                address: {
                                    type: 'string'
                                }
                            }
                        }
                    },
                    providers: {
                        type: 'array',
                        required: true,
                        items: {
                            type: 'object',
                            properties: {
                                key: {
                                    type: 'string',
                                    required: true
                                },
                                chainId: {
                                    type: 'number',
                                    enum: chainIds,
                                    required: true
                                }
                            }
                        }
                    },
                    dark: theme,
                    light: theme
                }
            },
            uiSchema: {
                type: 'Categorization',
                elements: [
                    {
                        type: 'Category',
                        label: 'General',
                        elements: [
                            {
                                type: 'VerticalLayout',
                                elements: [
                                    {
                                        type: 'HorizontalLayout',
                                        elements: [
                                            {
                                                type: 'Control',
                                                scope: '#/properties/category'
                                            }
                                        ]
                                    },
                                    {
                                        type: 'HorizontalLayout',
                                        elements: [
                                            {
                                                type: 'Categorization',
                                                elements: [
                                                    {
                                                        type: 'Category',
                                                        label: 'Branding',
                                                        elements: [
                                                            {
                                                                type: 'HorizontalLayout',
                                                                elements: [
                                                                    {
                                                                        type: 'Control',
                                                                        scope: '#/properties/title'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                type: 'HorizontalLayout',
                                                                elements: [
                                                                    {
                                                                        type: 'Control',
                                                                        scope: '#/properties/logo'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        type: 'Category',
                                                        label: 'Networks',
                                                        elements: [
                                                            {
                                                                type: 'Control',
                                                                scope: '#/properties/networks',
                                                                options: {
                                                                    detail: {
                                                                        type: 'VerticalLayout'
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        type: 'Category',
                                                        label: 'Providers',
                                                        elements: [
                                                            {
                                                                type: 'Control',
                                                                scope: '#/properties/providers',
                                                                options: {
                                                                    detail: {
                                                                        type: 'VerticalLayout'
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        type: 'Category',
                                                        label: 'Tokens',
                                                        elements: [
                                                            {
                                                                type: 'Control',
                                                                scope: '#/properties/tokens'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    themeUISchema
                ]
            },
            customControls(rpcWalletId) {
                let networkPickers = [];
                let tokenInputs = [];
                let edtLogo;
                return {
                    '#/properties/logo': {
                        render: () => {
                            const hstack = new components_6.StackLayout(undefined, {
                                width: '100%',
                                alignItems: 'center',
                                background: Theme.input.background
                            });
                            edtLogo = new components_6.Input(hstack, {
                                width: '100%',
                                height: 42,
                                padding: { left: '1rem', right: '1rem' },
                                border: { width: 0 }
                            });
                            const button = new components_6.Button(hstack, {
                                height: 42,
                                padding: { left: '0.5rem', right: '0.5rem' },
                                caption: 'Browse',
                                icon: { width: '0.875rem', height: '0.875rem', name: 'image' },
                                font: { size: '0.875rem', color: Theme.colors.secondary.contrastText },
                                background: { color: Theme.colors.secondary.main }
                            });
                            button.onClick = () => {
                                showStorage(edtLogo);
                            };
                            return hstack;
                        },
                        getData: (control) => {
                            return edtLogo.value;
                        },
                        setData: (control, value) => {
                            edtLogo.value = value;
                        }
                    },
                    '#/properties/networks/properties/chainId': customNetworkPicker(),
                    '#/properties/tokens/properties/chainId': {
                        render: () => {
                            const idx = networkPickers.length;
                            networkPickers[idx] = new scom_network_picker_1.default(undefined, {
                                type: 'combobox',
                                networks,
                                onCustomNetworkSelected: () => {
                                    const chainId = networkPickers[idx].selectedNetwork?.chainId;
                                    tokenInputs[idx].chainId = chainId;
                                }
                            });
                            return networkPickers[idx];
                        },
                        getData: (control) => {
                            return control.selectedNetwork?.chainId;
                        },
                        setData: async (control, value) => {
                            await control.ready();
                            control.setNetworkByChainId(value);
                            const idx = networkPickers.findIndex(f => f === control);
                            if (tokenInputs[idx])
                                tokenInputs[idx].chainId = value;
                        }
                    },
                    '#/properties/tokens/properties/address': {
                        render: () => {
                            const idx = tokenInputs.length;
                            tokenInputs[idx] = new scom_token_input_1.default(undefined, {
                                type: 'combobox',
                                isBalanceShown: false,
                                isBtnMaxShown: false,
                                isInputShown: false
                            });
                            const chainId = networkPickers[idx]?.selectedNetwork?.chainId;
                            tokenInputs[idx].chainId = chainId;
                            return tokenInputs[idx];
                        },
                        getData: (control) => {
                            return control.token?.address || control.token?.symbol;
                        },
                        setData: (control, value, rowData) => {
                            control.chainId = rowData.chainId;
                            control.address = value;
                        }
                    },
                    '#/properties/providers/properties/chainId': customNetworkPicker()
                };
            }
        };
    }
    exports.getBuilderSchema = getBuilderSchema;
    const customNetworkPicker = () => {
        return {
            render: () => {
                const networkPicker = new scom_network_picker_1.default(undefined, {
                    type: 'combobox',
                    networks
                });
                return networkPicker;
            },
            getData: (control) => {
                return control.selectedNetwork?.chainId;
            },
            setData: async (control, value) => {
                await control.ready();
                control.setNetworkByChainId(value);
            }
        };
    };
    const showStorage = (target) => {
        const scomStorage = scom_storage_1.ScomStorage.getInstance();
        scomStorage.onCancel = () => {
            scomStorage.closeModal();
        };
        scomStorage.onOpen = (path) => {
            const imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'];
            const ext = path.split('.').pop().toLowerCase();
            if (imageTypes.includes(ext)) {
                target.value = path;
                scomStorage.closeModal();
            }
        };
        scomStorage.openModal({
            width: 800,
            maxWidth: '100%',
            height: '90vh',
            overflow: 'hidden',
            zIndex: 1002,
            closeIcon: { width: '1rem', height: '1rem', name: 'times', fill: Theme.text.primary, margin: { bottom: '0.5rem' } },
            class: index_css_1.storageModalStyle
        });
        scomStorage.onShow();
    };
    function getProjectOwnerSchema() {
        return {
            general: {
                dataSchema: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string'
                        },
                        logo: {
                            type: 'string',
                            format: 'data-url'
                        },
                        // category: {
                        //     type: 'string',
                        //     required: true,
                        //     enum: [
                        //         'fixed-pair',
                        //         'fixed-protocal',
                        //         'aggregator'
                        //     ]
                        // },
                        // providers: {
                        //     type: 'array',
                        //     required: true,
                        //     items: {
                        //         type: 'object',
                        //         properties: {
                        //             key: {
                        //                 title: 'Name',
                        //                 type: 'string',
                        //                 oneOf: providerOptions,
                        //                 required: true
                        //             }
                        //         }
                        //     }
                        // }
                    }
                },
                uiSchema: {
                    type: 'VerticalLayout',
                    elements: [
                        // {
                        //     type: 'HorizontalLayout',
                        //     elements: [
                        //         {
                        //             type: 'Control',
                        //             scope: '#/properties/category'
                        //         }
                        //     ]
                        // },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Categorization',
                                    elements: [
                                        {
                                            type: 'Category',
                                            label: 'Branding',
                                            elements: [
                                                {
                                                    type: 'HorizontalLayout',
                                                    elements: [
                                                        {
                                                            type: 'Control',
                                                            scope: '#/properties/title'
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'HorizontalLayout',
                                                    elements: [
                                                        {
                                                            type: 'Control',
                                                            scope: '#/properties/logo'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        };
    }
    exports.getProjectOwnerSchema = getProjectOwnerSchema;
});
define("@scom/scom-swap", ["require", "exports", "@ijstech/components", "@ijstech/eth-wallet", "@scom/scom-swap/store/index.ts", "@scom/scom-token-list", "@scom/scom-swap/swap-utils/index.ts", "@scom/scom-swap/crosschain-utils/index.ts", "@scom/scom-swap/global/index.ts", "@scom/scom-swap/expert-mode-settings/index.tsx", "@scom/scom-swap/data.json.ts", "@scom/scom-swap/formSchema.ts", "@scom/scom-dex-list", "@scom/scom-commission-fee-setup", "@scom/scom-swap/index.css.ts", "@scom/scom-swap/index.css.ts"], function (require, exports, components_7, eth_wallet_5, index_7, scom_token_list_6, index_8, index_9, index_10, index_11, data_json_1, formSchema_1, scom_dex_list_2, scom_commission_fee_setup_1, index_css_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_7.Styles.Theme.ThemeVars;
    const priceImpactTooHighMsg = 'Price Impact Too High. If you want to bypass this check, please turn on Expert Mode';
    const ROUNDING_NUMBER = eth_wallet_5.BigNumber.ROUND_DOWN;
    let ScomSwap = class ScomSwap extends components_7.Module {
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        removeRpcWalletEvents() {
            const rpcWallet = this.state.getRpcWallet();
            if (rpcWallet)
                rpcWallet.unregisterAllWalletEvents();
        }
        onHide() {
            this.dappContainer.onHide();
            this.removeRpcWalletEvents();
            for (let event of this.clientEvents) {
                event.unregister();
            }
            this.clientEvents = [];
        }
        get category() {
            return this._data.category;
        }
        set category(value) {
            this._data.category = value;
        }
        get providers() {
            return this._data.providers;
        }
        set providers(value) {
            this._data.providers = value;
        }
        get commissions() {
            return this._data.commissions ?? [];
        }
        set commissions(value) {
            this._data.commissions = value;
        }
        get defaultChainId() {
            return this._data.defaultChainId;
        }
        set defaultChainId(value) {
            this._data.defaultChainId = value;
        }
        get wallets() {
            return this._data.wallets ?? [];
        }
        set wallets(value) {
            this._data.wallets = value;
        }
        get networks() {
            return this._data.networks ?? [];
        }
        set networks(value) {
            this._data.networks = value;
        }
        get showHeader() {
            return this._data.showHeader ?? true;
        }
        set showHeader(value) {
            this._data.showHeader = value;
        }
        get title() {
            return this._data.title ?? '';
        }
        set title(value) {
            this._data.title = value ?? '';
        }
        get logo() {
            return this._data.logo ?? '';
        }
        set logo(value) {
            this._data.logo = value ?? '';
        }
        set width(value) {
            this.resizeLayout();
        }
        get hasData() {
            const { providers, defaultChainId, networks, wallets } = this._data;
            return !!(providers?.length || networks?.length || wallets?.length || !isNaN(Number(defaultChainId)));
        }
        determineActionsByTarget(target, category) {
            if (target === 'builder') {
                return this.getBuilderActions(category);
            }
            else {
                return this.getProjectOwnerActions();
            }
        }
        async loadCommissionFee() {
            if (this._data.campaignId && this.state.embedderCommissionFee === undefined) {
                const commissionRate = await (0, index_8.getCommissionRate)(this.state, this._data.campaignId);
                this.state.embedderCommissionFee = commissionRate;
            }
        }
        getBuilderActions(category) {
            const formSchema = (0, formSchema_1.getBuilderSchema)();
            const dataSchema = formSchema.dataSchema;
            const uiSchema = formSchema.uiSchema;
            const customControls = formSchema.customControls(this.state?.getRpcWallet()?.instanceId);
            let self = this;
            const actions = [
                {
                    name: 'Commissions',
                    icon: 'dollar-sign',
                    command: (builder, userInputData) => {
                        let _oldData = {
                            category: 'fixed-pair',
                            providers: [],
                            defaultChainId: 0,
                            wallets: [],
                            networks: []
                        };
                        return {
                            execute: async () => {
                                _oldData = { ...this._data };
                                if (userInputData.commissions)
                                    this._data.commissions = userInputData.commissions;
                                this.refreshUI();
                                if (builder?.setData)
                                    builder.setData(this._data);
                            },
                            undo: () => {
                                this._data = { ..._oldData };
                                this.refreshUI();
                                if (builder?.setData)
                                    builder.setData(this._data);
                            },
                            redo: () => { }
                        };
                    },
                    customUI: {
                        render: async (data, onConfirm) => {
                            const vstack = new components_7.VStack();
                            await self.loadCommissionFee();
                            const config = new scom_commission_fee_setup_1.default(null, {
                                commissions: self._data.commissions || [],
                                fee: self.state.embedderCommissionFee,
                                networks: self._data.networks
                            });
                            const hstack = new components_7.HStack(null, {
                                verticalAlignment: 'center',
                            });
                            const button = new components_7.Button(hstack, {
                                caption: 'Confirm',
                                width: '100%',
                                height: 40,
                                font: { color: Theme.colors.primary.contrastText }
                            });
                            vstack.append(config);
                            vstack.append(hstack);
                            button.onClick = async () => {
                                const commissions = config.commissions;
                                if (onConfirm)
                                    onConfirm(true, { commissions });
                            };
                            return vstack;
                        }
                    }
                }
            ];
            if (category && category !== 'offers') {
                actions.push({
                    name: 'Edit',
                    icon: 'edit',
                    command: (builder, userInputData) => {
                        let oldData = {
                            category: 'fixed-pair',
                            providers: [],
                            defaultChainId: 0,
                            wallets: [],
                            networks: []
                        };
                        let oldTag = {};
                        return {
                            execute: async () => {
                                oldData = JSON.parse(JSON.stringify(this._data));
                                const { logo, title, networks, category, providers, tokens, ...themeSettings } = userInputData;
                                const generalSettings = {
                                    logo,
                                    title,
                                    networks,
                                    category,
                                    providers,
                                    tokens
                                };
                                this._data.logo = generalSettings.logo;
                                this._data.title = generalSettings.title;
                                this._data.networks = generalSettings.networks;
                                this._data.defaultChainId = this._data.networks[0].chainId;
                                this._data.category = generalSettings.category;
                                this._data.providers = generalSettings.providers;
                                this._tokens = this._data.tokens = [];
                                if (generalSettings.tokens) {
                                    this._data.tokens = generalSettings.tokens;
                                    this._tokens = (0, index_7.getTokenObjArr)(generalSettings.tokens);
                                }
                                await this.resetRpcWallet();
                                this.updateContractAddress();
                                this.refreshUI();
                                if (builder?.setData)
                                    builder.setData(this._data);
                                oldTag = JSON.parse(JSON.stringify(this.tag));
                                if (builder?.setTag)
                                    builder.setTag(themeSettings);
                                else
                                    this.setTag(themeSettings);
                                if (this.dappContainer)
                                    this.dappContainer.setTag(themeSettings);
                            },
                            undo: () => {
                                this._data = JSON.parse(JSON.stringify(oldData));
                                this.refreshUI();
                                if (builder?.setData)
                                    builder.setData(this._data);
                                this.tag = JSON.parse(JSON.stringify(oldTag));
                                if (builder?.setTag)
                                    builder.setTag(this.tag);
                                else
                                    this.setTag(this.tag);
                                if (this.dappContainer)
                                    this.dappContainer.setTag(this.tag);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: dataSchema,
                    userInputUISchema: uiSchema,
                    customControls: customControls
                });
            }
            return actions;
        }
        getProjectOwnerActions() {
            const formSchema = (0, formSchema_1.getProjectOwnerSchema)();
            const propertiesDataSchema = formSchema.general.dataSchema;
            const propertiesUISchema = formSchema.general.uiSchema;
            const actions = [
                {
                    name: 'Settings',
                    userInputDataSchema: propertiesDataSchema,
                    userInputUISchema: propertiesUISchema
                }
            ];
            return actions;
        }
        getConfigurators() {
            let self = this;
            return [
                {
                    name: 'Project Owner Configurator',
                    target: 'Project Owners',
                    getProxySelectors: async () => {
                        const selectors = await (0, index_8.getProviderProxySelectors)(this.state, this._data.providers);
                        return selectors;
                    },
                    getDexProviderOptions: (chainId) => {
                        const providers = this.state.getDexInfoList({ chainId });
                        return providers;
                    },
                    getPair: async (market, tokenA, tokenB) => {
                        const pair = await (0, index_8.getPair)(this.state, market, tokenA, tokenB);
                        return pair;
                    },
                    getActions: (category) => {
                        return this.determineActionsByTarget('projectOwner', category);
                    },
                    getData: this.getData.bind(this),
                    setData: async (value) => {
                        this.setData(value);
                    },
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                },
                {
                    name: 'Builder Configurator',
                    target: 'Builders',
                    getActions: (category) => {
                        return this.determineActionsByTarget('builder', category);
                    },
                    getData: this.getData.bind(this),
                    setData: async (value) => {
                        const defaultData = data_json_1.default.defaultBuilderData;
                        this.setData({ ...defaultData, ...value });
                    },
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                },
                {
                    name: 'Embedder Configurator',
                    target: 'Embedders',
                    elementName: 'i-scom-commission-fee-setup',
                    getLinkParams: () => {
                        const commissions = this._data.commissions || [];
                        return {
                            data: window.btoa(JSON.stringify(commissions))
                        };
                    },
                    // setLinkParams: async (params: any) => {
                    //   if (params.data) {
                    //     const decodedString = window.atob(params.data);
                    //     const commissions = JSON.parse(decodedString);
                    //     let resultingData = {
                    //       ...self._data,
                    //       commissions
                    //     };
                    //     await this.setData(resultingData);
                    //   }
                    // },
                    bindOnChanged: (element, callback) => {
                        element.onChanged = async (data) => {
                            const commissions = data.commissions;
                            if (commissions) {
                                this.supportedChainIds = commissions.map(v => v.chainId).filter((v, i, a) => a.indexOf(v) === i);
                            }
                            let resultingData = {
                                ...self._data,
                                ...data
                            };
                            await this.setData(resultingData);
                            await callback(data);
                        };
                    },
                    getData: async () => {
                        await self.loadCommissionFee();
                        const fee = this.state.embedderCommissionFee;
                        return { ...this._data, fee };
                    },
                    setData: async (properties, linkParams) => {
                        let resultingData = {
                            ...properties
                        };
                        if (linkParams?.data) {
                            const decodedString = window.atob(linkParams.data);
                            const commissions = JSON.parse(decodedString);
                            resultingData.commissions = commissions;
                        }
                        await this.setData(resultingData);
                    },
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                },
                {
                    name: 'Editor',
                    target: 'Editor',
                    getActions: (category) => {
                        const actions = this.determineActionsByTarget('builder', this.category);
                        const editAction = actions.find(action => action.name === 'Edit');
                        return editAction ? [editAction] : [];
                    },
                    getData: this.getData.bind(this),
                    setData: this.setData.bind(this),
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                }
            ];
        }
        getData() {
            return this._data;
        }
        async resetRpcWallet() {
            this.removeRpcWalletEvents();
            const rpcWalletId = await this.state.initRpcWallet(this.defaultChainId);
            const rpcWallet = this.state.getRpcWallet();
            const chainChangedEvent = rpcWallet.registerWalletEvent(this, eth_wallet_5.Constants.RpcWalletEvent.ChainChanged, async (chainId) => {
                this.onChainChange();
            });
            const connectedEvent = rpcWallet.registerWalletEvent(this, eth_wallet_5.Constants.RpcWalletEvent.Connected, async (connected) => {
                if (this.swapBtn)
                    this.swapBtn.visible = true;
                this.updateContractAddress();
                await this.initializeWidgetConfig();
            });
            const data = {
                defaultChainId: this.defaultChainId,
                wallets: this.wallets,
                networks: this.networks,
                showHeader: this.showHeader,
                rpcWalletId: rpcWallet.instanceId
            };
            if (this.dappContainer?.setData)
                this.dappContainer.setData(data);
        }
        async setData(value) {
            this._data = value;
            if (this._data.apiEndpoints) {
                this.state.setAPIEnpoints(this._data.apiEndpoints);
            }
            for (let network of this._data.networks) {
                scom_token_list_6.tokenStore.updateTokenMapData(network.chainId);
            }
            this._tokens = (0, index_7.getTokenObjArr)(this._data.tokens);
            await this.resetRpcWallet();
            this.updateContractAddress();
            await this.refreshUI();
        }
        async getTag() {
            return this.tag;
        }
        updateTag(type, value) {
            this.tag[type] = this.tag[type] ?? {};
            for (let prop in value) {
                if (value.hasOwnProperty(prop))
                    this.tag[type][prop] = value[prop];
            }
        }
        async setTag(value) {
            const newValue = value || {};
            for (let prop in newValue) {
                if (newValue.hasOwnProperty(prop)) {
                    if (prop === 'light' || prop === 'dark')
                        this.updateTag(prop, newValue[prop]);
                    else
                        this.tag[prop] = newValue[prop];
                }
            }
            if (this.dappContainer)
                this.dappContainer.setTag(this.tag);
            this.updateTheme();
            this.resizeLayout();
        }
        updateStyle(name, value) {
            value ?
                this.style.setProperty(name, value) :
                this.style.removeProperty(name);
        }
        updateTheme() {
            const themeVar = this.dappContainer?.theme || 'light';
            this.updateStyle('--text-primary', this.tag[themeVar]?.fontColor);
            this.updateStyle('--background-main', this.tag[themeVar]?.backgroundColor);
            this.updateStyle('--input-font_color', this.tag[themeVar]?.inputFontColor);
            this.updateStyle('--input-background', this.tag[themeVar]?.inputBackgroundColor);
            //FIXME: temporary solution
            this.updateStyle('--primary-button-background', this.tag[themeVar]?.primaryButtonBackground || 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box');
            this.updateStyle('--primary-button-hover-background', this.tag[themeVar]?.primaryButtonHoverBackground || 'linear-gradient(255deg,#f15e61,#b52082)');
            this.updateStyle('--primary-button-disabled-background', this.tag[themeVar]?.primaryButtonDisabledBackground || 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box');
            this.updateStyle('--max-button-background', this.tag[themeVar]?.maxButtonBackground || 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box');
            this.updateStyle('--max-button-hover-background', this.tag[themeVar]?.maxButtonHoverBackground || 'linear-gradient(255deg,#f15e61,#b52082)');
        }
        setProviders() {
            const providers = this.originalData?.providers || [];
            if (this.isFixedPair) {
                this.state.setProviderList([providers[0]]);
            }
            else {
                this.state.setProviderList(providers);
            }
        }
        updateContractAddress() {
            if (this.approvalModelAction) {
                if (this._data.campaignId !== undefined) {
                    this.contractAddress = this.state.getProxyAddress();
                }
                else {
                    this.contractAddress = '';
                }
                this.setApprovalSpenderAddress();
            }
        }
        get isFixedPair() {
            return this._data?.category === 'fixed-pair';
        }
        get originalData() {
            if (!this._data)
                return undefined;
            const { category, providers } = this._data;
            if (!providers.length)
                return undefined;
            let _providers = [];
            if (this.isFixedPair) {
                const { key } = providers[0];
                let defaultProvider = {
                    key
                };
                _providers.push(defaultProvider);
            }
            else {
                let providersByKeys = {};
                providers.forEach(v => {
                    if (!providersByKeys[v.key]) {
                        providersByKeys[v.key] = [];
                    }
                    providersByKeys[v.key].push(v);
                });
                Object.keys(providersByKeys).forEach(k => {
                    const arr = providersByKeys[k];
                    const { key } = arr[0];
                    let defaultProvider = {
                        key
                    };
                    _providers.push(defaultProvider);
                });
            }
            return { category, providers: _providers };
        }
        async refreshUI() {
            this.setProviders();
            await this.initData();
            await this.initializeWidgetConfig();
        }
        constructor(parent, options) {
            super(parent, options);
            this._data = {
                category: 'fixed-pair',
                providers: [],
                tokens: [],
                defaultChainId: 0,
                wallets: [],
                networks: []
            };
            this.tag = {};
            this._tokens = [];
            this.isInited = false;
            this.bridgeSupportedChainList = [];
            this.clientEvents = [];
            // Cross Chain
            this.crossChainApprovalStatus = index_10.ApprovalStatus.NONE;
            this.onChainChange = async () => {
                const currentChainId = this.state.getChainId();
                if (currentChainId != null && currentChainId != undefined)
                    this.swapBtn.visible = true;
                this.updateContractAddress();
                // if (this.originalData?.providers?.length) await this.initializeWidgetConfig();
                await this.initializeWidgetConfig();
            };
            this.fixedNumber = (value) => {
                const val = typeof value === 'object' ? value : new eth_wallet_5.BigNumber(value);
                if (val.isNaN() || val.isZero())
                    return '';
                return components_7.FormatUtils.formatNumber(val.toFixed(), { decimalFigures: 4, useSeparators: false });
            };
            this.initWallet = async () => {
                try {
                    await eth_wallet_5.Wallet.getClientInstance().init();
                    const rpcWallet = this.state.getRpcWallet();
                    await rpcWallet.init();
                }
                catch (err) {
                    console.log(err);
                }
            };
            this.initializeWidgetConfig = async () => {
                setTimeout(async () => {
                    await this.initWallet();
                    this.initializeDefaultTokenPair();
                    await this.renderChainList();
                    await this.updateBalances();
                    this.updateTokenValues(this.fromToken, true);
                    this.updateTokenValues(this.toToken, false);
                    this.hIcon.enabled = this.vIcon.enabled = !this.isFixedPair && !this.isCrossChain;
                    this.firstTokenInput.tokenReadOnly = this.isFixedPair;
                    this.firstTokenInput.inputReadOnly = false;
                    this.secondTokenInput.tokenReadOnly = this.isFixedPair;
                    this.secondTokenInput.inputReadOnly = false;
                    this.pnlBranding.visible = !!this._data.logo || !!this._data.title;
                    if (this._data.logo?.startsWith('ipfs://')) {
                        this.imgLogo.url = this._data.logo.replace('ipfs://', '/ipfs/');
                    }
                    else {
                        this.imgLogo.url = this._data.logo;
                    }
                    this.lbTitle.caption = this._data.title;
                    this.updateSwapButtonCaption();
                    this.toggleReverseImage.cursor = this.isFixedPair ? 'default' : 'pointer';
                    if (this.isCrossChain) {
                        this.initRoutes();
                        this.toInputValue = new eth_wallet_5.BigNumber(0);
                        if (this.secondTokenInput) {
                            this.secondTokenInput.value = '-';
                            this.secondTokenInput.inputReadOnly = true;
                        }
                        this.toggleReverseImage.cursor = 'default';
                        if (this.isEstimated('from')) {
                            this.updateEstimatedPosition(false);
                        }
                    }
                    else {
                        if (this.secondTokenInput) {
                            this.secondTokenInput.inputReadOnly = false;
                        }
                        this.toggleReverseImage.cursor = 'pointer';
                    }
                    if (this.fromInputValue.isGreaterThan(0)) {
                        this.updateEstimatedPosition(false);
                        this.firstTokenInput.value = this.fixedNumber(this.fromInputValue);
                    }
                    else if (this.toInputValue.isGreaterThan(0)) {
                        this.updateEstimatedPosition(true);
                        this.secondTokenInput.value = this.fixedNumber(this.toInputValue);
                    }
                    this.firstTokenInput.tokenDataListProp = (0, index_7.getSupportedTokens)(this._tokens, this.fromToken.chainId);
                    this.secondTokenInput.tokenDataListProp = (0, index_7.getSupportedTokens)(this._tokens, this.toToken.chainId);
                    if (!this.record)
                        this.swapBtn.enabled = false;
                    this.renderPriceInfo();
                    await this.handleAddRoute();
                });
            };
            this.getMinReceivedMaxSold = () => {
                const slippageTolerance = this.state.slippageTolerance;
                if (!slippageTolerance)
                    return null;
                if (this.isFrom) {
                    const poolAmount = new eth_wallet_5.BigNumber(this.record?.amountIn);
                    if (poolAmount.isZero())
                        return null;
                    const minReceivedMaxSold = poolAmount.times(1 + slippageTolerance / 100).toNumber();
                    return minReceivedMaxSold;
                }
                else {
                    const poolAmount = new eth_wallet_5.BigNumber(this.record?.amountOut);
                    if (poolAmount.isZero())
                        return null;
                    const minReceivedMaxSold = poolAmount.times(1 - slippageTolerance / 100).toNumber();
                    return minReceivedMaxSold;
                }
            };
            this.updateEstimatedPosition = (isFrom) => {
                if (this.isFrom != isFrom) {
                    this.isFrom = isFrom;
                }
            };
            this.isEstimated = (tokenPosition, strict = false) => {
                if (tokenPosition === 'from') {
                    return strict ? this.isFrom && !this.fromInputValue.isZero() : this.isFrom;
                }
                else if (tokenPosition === 'to') {
                    return strict ? !this.isFrom && !this.toInputValue.isZero() : !this.isFrom;
                }
                else {
                    return false;
                }
            };
            this.onSwapConfirming = (key) => {
                this.setMapStatus('swap', key, index_10.ApprovalStatus.APPROVING);
                this.updateSwapButtonCaption();
                if (!this.swapBtn.rightIcon.visible)
                    this.swapBtn.rightIcon.visible = true;
            };
            this.onSwapConfirmed = async (data) => {
                const { key, isCrossChain } = data;
                this.setMapStatus('swap', key, index_10.ApprovalStatus.TO_BE_APPROVED);
                this.updateSwapButtonCaption();
                if (this.swapBtn.rightIcon.visible)
                    this.swapBtn.rightIcon.visible = false;
                await this.handleAddRoute();
            };
            this.onSubmit = async () => {
                try {
                    this.swapModal.visible = false;
                    this.showResultMessage('warning', `Swapping ${(0, index_10.formatNumber)(this.fromInputValue, 4)} ${this.fromToken?.symbol} to ${(0, index_10.formatNumber)(this.toInputValue, 4)} ${this.toToken?.symbol}`);
                    if (this.isCrossChain) {
                        if (this.toToken && this.fromToken && this.desChain) {
                            this.record.minReceivedMaxSold = this.getMinReceivedMaxSold();
                            const { error } = await (0, index_8.createBridgeVaultOrder)(this.state, {
                                vaultAddress: this.record.vaultAddress,
                                targetChainId: this.desChain.chainId,
                                tokenIn: this.fromToken,
                                tokenOut: this.toToken,
                                amountIn: this.record.fromAmount,
                                minAmountOut: this.record.minReceivedMaxSold,
                                sourceRouteInfo: this.record.sourceRouteObj ? { amountOut: this.record.sourceRouteObj.amountOut, pairs: this.record.sourceRouteObj.pairs } : undefined
                            });
                            if (error) {
                                this.showResultMessage('error', error);
                            }
                        }
                        return;
                    }
                    const route = this.record.bestRoute ? this.record.bestRoute : [this.fromToken, this.toToken];
                    const swapData = {
                        provider: this.record.provider,
                        queueType: this.record.queueType,
                        routeTokens: this.record.bestRoute,
                        bestSmartRoute: route,
                        pairs: this.record.pairs,
                        fromAmount: this.record.fromAmount,
                        toAmount: this.record.toAmount,
                        isFromEstimated: this.isFrom,
                        providerList: this.originalData?.providers || [],
                        campaignId: this._data.campaignId,
                        referrer: this.commissions.find(v => v.chainId === this.state.getChainId())?.walletAddress,
                    };
                    const { error } = await (0, index_8.executeSwap)(this.state, swapData);
                    if (error) {
                        this.showResultMessage('error', error);
                    }
                }
                catch (error) {
                    console.error(error);
                }
            };
            this.approveRouterMax = () => {
                this.showResultMessage('warning', 'Approving');
                this.setApprovalSpenderAddress();
                this.approvalModelAction.doApproveAction(this.fromToken, this.fromInputValue.toFixed(), this.record);
            };
            this.onSetMaxBalance = async () => {
                if (!this.fromToken?.symbol)
                    return;
                this.isFrom = false;
                const address = this.fromToken?.address || this.fromToken?.symbol;
                let balance = this.getBalance(this.fromToken);
                let inputVal = new eth_wallet_5.BigNumber(balance);
                if (!address) {
                    inputVal = new eth_wallet_5.BigNumber(0);
                }
                if (inputVal.eq(this.fromInputValue))
                    return;
                this.fromInputValue = inputVal;
                const decimals = this.fromToken?.decimals || 18;
                this.firstTokenInput.value = this.fromInputValue.dp(decimals, ROUNDING_NUMBER).toFixed();
                await this.handleAddRoute();
            };
            this.isMaxDisabled = () => {
                const address = this.fromToken?.address || this.fromToken?.symbol;
                let balance = this.getBalance(this.fromToken);
                return !address || new eth_wallet_5.BigNumber(balance).isLessThanOrEqualTo(0);
            };
            this.disableSelectChain = (disabled, isDes) => {
                const chains = isDes ? this.desChainList : this.srcChainList;
                const imgs = chains.querySelectorAll('i-image');
                imgs.forEach((elm) => {
                    const img = elm;
                    img.enabled = !disabled;
                    if (disabled) {
                        img.cursor = 'default';
                    }
                    else {
                        img.cursor = 'pointer';
                    }
                });
            };
            this.selectSourceChain = async (obj, img) => {
                if (!this.isCrossChainEnabled)
                    return;
                this.disableSelectChain(true, false);
                const selected = this.srcChainList.querySelector('.icon-selected');
                selected && this.updateChainIcon(selected, false);
                const oldDestination = this.srcChain;
                try {
                    this.srcChain = obj;
                    if (img) {
                        this.updateChainIcon(img, true);
                    }
                    else {
                        const currentNetwork = (0, index_7.getNetworkInfo)(this.bridgeSupportedChainList.find((f) => f.chainId == obj.chainId)?.chainId);
                        const img = this.srcChainList.querySelector(`[data-tooltip="${currentNetwork?.chainName}"]`);
                        if (img)
                            this.updateChainIcon(img, true);
                    }
                }
                catch (err) {
                    console.log('err', err);
                    if (oldDestination) {
                        this.srcChain = oldDestination;
                        if (selected)
                            this.updateChainIcon(selected, true);
                    }
                    else {
                        this.srcChain = (0, index_7.getNetworkInfo)(this.bridgeSupportedChainList[0]?.chainId);
                        const elm = this.srcChainList?.firstElementChild;
                        elm && this.updateChainIcon(elm, true);
                    }
                }
                if (this.srcChain) {
                    this.srcChainLabel.caption = this.srcChain.chainName;
                }
                this.firstTokenInput.tokenDataListProp = (0, index_7.getSupportedTokens)(this._tokens, this.srcChain.chainId);
                this.disableSelectChain(false, false);
            };
            this.selectDestinationChain = async (obj, img) => {
                if (!this.isCrossChainEnabled)
                    return;
                this.disableSelectChain(true, true);
                const selected = this.desChainList.querySelector('.icon-selected');
                selected && this.updateChainIcon(selected, false);
                const oldDestination = this.desChain;
                try {
                    this.desChain = obj;
                    if (img) {
                        this.updateChainIcon(img, true);
                    }
                    else {
                        const currentNetwork = (0, index_7.getNetworkInfo)(this.bridgeSupportedChainList.find((f) => f.chainId == obj.chainId)?.chainId);
                        const img = this.desChainList.querySelector(`[data-tooltip="${currentNetwork?.chainName}"]`);
                        img && this.updateChainIcon(img, true);
                    }
                }
                catch (err) {
                    console.log('err', err);
                    if (oldDestination) {
                        this.desChain = oldDestination;
                        selected && this.updateChainIcon(selected, true);
                    }
                    else {
                        this.desChain = (0, index_7.getNetworkInfo)(this.bridgeSupportedChainList[0]?.chainId);
                        const elm = this.desChainList?.firstElementChild;
                        elm && this.updateChainIcon(elm, true);
                    }
                }
                if (this.desChain) {
                    this.desChainLabel.caption = this.desChain.chainName;
                }
                // this.setTargetTokenList();
                this.secondTokenInput.tokenDataListProp = (0, index_7.getSupportedTokens)(this._tokens, this.desChain.chainId);
                this.disableSelectChain(false, true);
            };
            this.onSelectSourceChain = async (obj, img) => {
                this.firstTokenInput.chainId = obj.chainId;
                if (obj.chainId === this.srcChain?.chainId)
                    return;
                const rpcWallet = this.state.getRpcWallet();
                await rpcWallet.switchNetwork(obj.chainId);
            };
            this.onSelectDestinationChain = async (obj, img) => {
                this.secondTokenInput.chainId = obj.chainId;
                if (obj.chainId === this.desChain?.chainId)
                    return;
                await this.selectDestinationChain(obj, img);
                const tokenList = (0, index_7.getSupportedTokens)(this._tokens, obj.chainId);
                this.toToken = tokenList[0];
                this.secondTokenInput.token = this.toToken;
                await scom_token_list_6.tokenStore.updateTokenBalancesByChainId(obj.chainId);
                const balance = this.getBalance(this.toToken);
                this.receiveBalance.caption = `Balance: ${(0, index_10.formatNumber)(balance, 4)} ${this.toToken.symbol}`;
                const enabled = !this.isMaxDisabled();
                this.maxButton.enabled = enabled;
                await this.updateTokenValues(this.toToken, false);
                await this.handleAddRoute();
            };
            this.initChainIcon = (network, isDes) => {
                const img = new components_7.Image(undefined, {
                    width: 32,
                    height: 32,
                    margin: { top: '0.25rem', right: '0.5rem' },
                    border: { radius: '50%', width: '2px', style: 'solid', color: 'transparent' },
                    padding: { top: '0.25rem', right: '0.25rem', bottom: '0.25rem', left: '0.25rem' },
                    url: network.image,
                    tooltip: { content: network.chainName },
                    cursor: 'pointer'
                });
                // img.url = network.image;
                // img.tooltip.content = network.chainName;
                img.classList.add('chain-icon');
                img.setAttribute('data-tooltip', network.chainName); // for query
                if (isDes) {
                    img.onClick = () => this.onSelectDestinationChain(network, img);
                    this.desChainList.appendChild(img);
                }
                else {
                    if (!this.isMetaMask) {
                        img.tooltip.content = `Swap supports this network ${network.chainName} (${network.chainId}), please switch network in the connected wallet.`;
                        img.cursor = 'default';
                    }
                    img.setAttribute('network-name', network.chainName);
                    img.setAttribute('chain-id', `${network.chainId}`);
                    img.onClick = () => this.onSelectSourceChain(network, img);
                    this.srcChainList.appendChild(img);
                }
            };
            this.renderChainList = async () => {
                if (!this.isCrossChainSwap)
                    return;
                this.bridgeSupportedChainList = (0, index_7.getBridgeSupportedChainList)(this.chainId, this.networks);
                if (this.bridgeSupportedChainList.length < 2)
                    return;
                this.srcChainList.innerHTML = '';
                this.desChainList.innerHTML = '';
                this.srcChain = undefined;
                this.desChain = undefined;
                this.bridgeSupportedChainList.forEach((v) => {
                    const network = (0, index_7.getNetworkInfo)(v.chainId);
                    this.initChainIcon(network, false);
                    this.initChainIcon(network, true);
                });
                const firstChainId = this.fromToken?.chainId;
                const secondChainId = this.toToken?.chainId;
                console.log('firstChainId', firstChainId);
                console.log('secondChainId', secondChainId);
                if (firstChainId && secondChainId) {
                    const firstNetwork = (0, index_7.getNetworkInfo)(firstChainId);
                    const secondNetwork = (0, index_7.getNetworkInfo)(secondChainId);
                    await this.selectSourceChain(firstNetwork);
                    await this.selectDestinationChain(secondNetwork);
                }
                this.srcChainBox.visible = true;
                this.desChainBox.visible = true;
            };
            this.showModalFees = () => {
                const fees = this.getFeeDetails();
                this.feesInfo.clearInnerHTML();
                fees.forEach((fee) => {
                    const feeValue = components_7.FormatUtils.formatNumber(fee.value.toFixed(), { decimalFigures: 4 });
                    this.feesInfo.appendChild(this.$render("i-hstack", { horizontalAlignment: "space-between", verticalAlignment: "center", margin: { top: 10 }, border: { bottom: { color: Theme.background.main, width: '2px', style: 'solid' } }, padding: { bottom: 16 } },
                        this.$render("i-hstack", { verticalAlignment: "center" },
                            this.$render("i-label", { caption: fee.title, margin: { right: 4 } }),
                            this.$render("i-icon", { name: "question-circle", width: 15, height: 15, fill: Theme.text.primary, tooltip: { content: fee.description }, "data-placement": "right" })),
                        this.$render("i-label", { margin: { left: 'auto' }, caption: `${feeValue} ${this.fromToken?.symbol}` })));
                });
                this.feesInfo.appendChild(this.$render("i-hstack", { horizontalAlignment: "space-between", verticalAlignment: "center", margin: { top: 16 } },
                    this.$render("i-hstack", { verticalAlignment: "center" },
                        this.$render("i-label", { caption: "Total Transaction Fee" })),
                    this.$render("i-label", { margin: { left: 'auto' }, caption: this.getTradeFeeExactAmount() })));
                this.modalFees.visible = true;
            };
            this.closeModalFees = () => {
                this.modalFees.visible = false;
            };
            this.showResultMessage = (status, content) => {
                if (!this.txStatusModal)
                    return;
                let params = { status };
                if (status === 'success') {
                    params.txtHash = content;
                }
                else {
                    params.content = content;
                }
                this.txStatusModal.message = { ...params };
                this.txStatusModal.showModal();
            };
            this.deferReadyCallback = true;
        }
        registerEvent() {
            this.clientEvents.push(this.$eventBus.register(this, "SlippageToleranceChanged" /* EventId.SlippageToleranceChanged */, () => { this.priceInfo.setData(this.getPriceInfo()); }));
            this.clientEvents.push(this.$eventBus.register(this, "ExpertModeChanged" /* EventId.ExpertModeChanged */, () => {
                this.updateSwapButtonCaption();
            }));
        }
        get isApproveButtonShown() {
            const warningMessageText = this.getWarningMessageText();
            return warningMessageText === '' && this.approveButtonStatus !== undefined && this.approveButtonStatus !== index_10.ApprovalStatus.NONE;
        }
        get isPriceImpactTooHigh() {
            if (this.isCrossChain)
                return false;
            const warningMessageText = this.getWarningMessageText();
            return this.record?.priceImpact > 15 && !this.state.isExpertMode && warningMessageText === priceImpactTooHighMsg;
        }
        get isInsufficientBalance() {
            if (!this.fromToken || !this.record)
                return false;
            const balance = this.getBalance(this.fromToken);
            return this.maxSold.gt(balance);
        }
        get maxSold() {
            if (!this.fromToken || !this.record)
                return new eth_wallet_5.BigNumber(0);
            if (!this.isFrom)
                return new eth_wallet_5.BigNumber(this.record.fromAmount);
            return new eth_wallet_5.BigNumber(this.getMinReceivedMaxSold() || this.record.fromAmount);
        }
        get isSwapping() {
            const key = this.record?.key;
            return key && this.swapButtonStatusMap[key] === index_10.ApprovalStatus.APPROVING;
        }
        get approveButtonStatus() {
            const key = this.record?.key;
            return this.approveButtonStatusMap[key];
        }
        get isApprovingRouter() {
            return this.approveButtonStatus === index_10.ApprovalStatus.APPROVING;
        }
        get isValidToken() {
            if (this.fromToken?.symbol && this.toToken?.symbol) {
                return true;
            }
            return false;
        }
        getTokenKey(token) {
            if (token.isNative) {
                return token.symbol;
            }
            return token.address.toLowerCase();
        }
        calculateDefaultTokens() {
            let firstDefaultToken;
            let secondDefaultToken;
            const currentChainId = this.state.getChainId();
            const currentChainTokens = (0, index_7.getSupportedTokens)(this._tokens, currentChainId);
            if (!this._data.defaultInputToken && !this._data.defaultOutputToken) {
                firstDefaultToken = currentChainTokens[0];
                secondDefaultToken = currentChainTokens[1];
            }
            else {
                if (this._data.defaultInputToken && currentChainId === this._data.defaultInputToken.chainId) {
                    let inputTokens = (0, index_7.getSupportedTokens)(this._tokens, this._data.defaultInputToken.chainId);
                    firstDefaultToken = inputTokens.find(v => v.chainId === this._data.defaultInputToken.chainId && v.address === this._data.defaultInputToken.address);
                }
                else {
                    firstDefaultToken = currentChainTokens[0];
                }
                if (this._data.defaultOutputToken) {
                    let outputTokens = (0, index_7.getSupportedTokens)(this._tokens, this._data.defaultOutputToken.chainId);
                    secondDefaultToken = outputTokens.find(v => v.chainId === this._data.defaultOutputToken.chainId && v.address === this._data.defaultOutputToken.address);
                }
                else {
                    secondDefaultToken = currentChainTokens[0];
                }
            }
            return {
                firstDefaultToken,
                secondDefaultToken
            };
        }
        initializeDefaultTokenPair() {
            if (this.isCrossChain) {
                let { firstDefaultToken, secondDefaultToken } = this.calculateDefaultTokens();
                this.fromToken = firstDefaultToken;
                this.toToken = secondDefaultToken;
                this.firstTokenInput.chainId = firstDefaultToken.chainId;
                this.secondTokenInput.chainId = secondDefaultToken.chainId;
                this.fromInputValue = new eth_wallet_5.BigNumber(this._data.defaultInputValue);
                this.firstTokenInput.token = this.fromToken;
                this.secondTokenInput.token = this.toToken;
            }
            else {
                const providers = this.originalData?.providers;
                if (providers && providers.length) {
                    let { firstDefaultToken, secondDefaultToken } = this.calculateDefaultTokens();
                    this.fromToken = firstDefaultToken;
                    this.toToken = secondDefaultToken;
                    this.firstTokenInput.chainId = firstDefaultToken.chainId;
                    this.secondTokenInput.chainId = secondDefaultToken.chainId;
                    this.fromInputValue = new eth_wallet_5.BigNumber(this._data.defaultInputValue);
                    this.toInputValue = new eth_wallet_5.BigNumber(this._data.defaultOutputValue);
                    this.firstTokenInput.token = this.fromToken;
                    this.secondTokenInput.token = this.toToken;
                    this.toggleReverseImage.cursor = 'default';
                }
            }
        }
        async initApprovalModelAction() {
            this.approvalModelAction = await this.state.setApprovalModelAction({
                sender: this,
                payAction: this.onSubmit,
                onToBeApproved: async (token, data) => {
                    if (this.isCrossChain) {
                        this.crossChainApprovalStatus = index_10.ApprovalStatus.TO_BE_APPROVED;
                    }
                    else {
                        this.setMapStatus('approve', data.key, index_10.ApprovalStatus.TO_BE_APPROVED);
                        this.setMapStatus('swap', data.key, index_10.ApprovalStatus.TO_BE_APPROVED);
                    }
                    this.updateSwapButtonCaption();
                    const enabled = !this.isSwapButtonDisabled();
                    this.swapBtn.enabled = enabled;
                },
                onToBePaid: async (token, data) => {
                    if (this.isCrossChain) {
                        this.crossChainApprovalStatus = index_10.ApprovalStatus.NONE;
                    }
                    else {
                        this.setMapStatus('approve', data.key, index_10.ApprovalStatus.NONE);
                        this.setMapStatus('swap', data.key, index_10.ApprovalStatus.TO_BE_APPROVED);
                    }
                    this.updateSwapButtonCaption();
                    const enabled = !this.isSwapButtonDisabled();
                    this.swapBtn.enabled = enabled;
                },
                onApproving: async (token, receipt, data) => {
                    if (this.isCrossChain) {
                        this.crossChainApprovalStatus = index_10.ApprovalStatus.APPROVING;
                    }
                    else {
                        this.setMapStatus('approve', data.key, index_10.ApprovalStatus.APPROVING);
                    }
                    this.updateSwapButtonCaption();
                    this.showResultMessage('success', receipt);
                    if ((this.isApprovingRouter || this.isCrossChain) && !this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = true;
                },
                onApproved: async (token, data) => {
                    if (this.isCrossChain) {
                        this.crossChainApprovalStatus = index_10.ApprovalStatus.NONE;
                    }
                    else {
                        this.setMapStatus('approve', data.key, index_10.ApprovalStatus.NONE);
                    }
                    this.updateSwapButtonCaption();
                    if (this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = false;
                    await this.handleAddRoute();
                },
                onApprovingError: async (token, err) => {
                    this.showResultMessage('error', err);
                    this.crossChainApprovalStatus = index_10.ApprovalStatus.TO_BE_APPROVED;
                    if (this.swapBtn.rightIcon.visible)
                        this.swapBtn.rightIcon.visible = false;
                },
                onPaying: async (receipt, data) => {
                    this.showResultMessage('success', receipt);
                    this.onSwapConfirming(data.key);
                },
                onPaid: async (data, receipt) => {
                    this.onSwapConfirmed({ key: data.key, isCrossChain: this.isCrossChain });
                    await this.updateBalances();
                    components_7.application.EventBus.dispatch("Paid" /* EventId.Paid */, {
                        isCrossChain: this.isCrossChain,
                        data: data ?? null,
                        id: this.uuid,
                        receipt: receipt
                    });
                },
                onPayingError: async (err) => {
                    this.showResultMessage('error', err);
                }
            });
        }
        async onRevertSwap() {
            if (this.isCrossChain)
                return;
            this.updateEstimatedPosition(!this.isEstimated('from'));
            [this.fromToken, this.toToken] = [this.toToken, this.fromToken];
            const enabled = !this.isMaxDisabled();
            this.maxButton.enabled = enabled;
            [this.fromInputValue, this.toInputValue] = [this.toInputValue, this.fromInputValue];
            [this.payBalance.caption, this.receiveBalance.caption] = [this.receiveBalance.caption, this.payBalance.caption];
            this.firstTokenInput.token = this.fromToken;
            this.secondTokenInput.token = this.toToken;
            this.firstTokenInput.value = this.getInputValue(true);
            this.secondTokenInput.value = this.getInputValue(false);
            await this.handleAddRoute();
        }
        setupCrossChainPopup() {
            const arrows = this.swapModal.querySelectorAll('i-icon.arrow-down');
            if (!this.isCrossChain) {
                arrows.forEach((arrow) => {
                    arrow.margin = { top: '0.75rem', bottom: '0.75rem' };
                });
            }
            else {
                arrows.forEach((arrow) => {
                    arrow.margin = { top: '0.75rem', left: '6rem', bottom: '0.75rem', right: '6rem' };
                });
            }
            if (this.lbReminderRejected)
                this.lbReminderRejected.visible = false;
            if (this.isCrossChain && this.srcChain && this.desChain) {
                this.srcChainFirstPanel.visible = true;
                this.targetChainFirstPanel.visible = true;
                this.srcChainTokenImage.url = this.srcChain.image;
                this.srcChainTokenLabel.caption = this.srcChain.chainName;
                this.targetChainTokenImage.url = this.desChain.image;
                this.targetChainTokenLabel.caption = this.desChain.chainName;
                const { sourceVaultToken, targetVaultToken, sourceRouteObj, vaultTokenFromSourceChain, vaultTokenToTargetChain } = this.record;
                if (sourceVaultToken && sourceRouteObj) {
                    this.srcChainSecondPanel.visible = true;
                    this.srcChainVaultImage.url = this.srcChain.image;
                    this.srcChainVaultLabel.caption = this.srcChain.chainName;
                    this.srcVaultTokenImage.url = scom_token_list_6.assets.getTokenIconPath(sourceVaultToken, this.srcChain.chainId);
                    this.srcVaultTokenLabel.caption = sourceVaultToken.symbol;
                    this.srcVaultTokenValue.caption = (0, index_10.formatNumber)(vaultTokenFromSourceChain);
                    if (this.lbReminderRejected) {
                        this.lbReminderRejected.visible = true;
                        this.lbReminderRejected.caption = `If the order is not executed in the target chain, the estimated withdrawalble amount is <b class="text-pink">${(0, index_10.formatNumber)(vaultTokenFromSourceChain)} ${sourceVaultToken?.symbol}</b>`;
                    }
                }
                else {
                    this.srcChainSecondPanel.visible = false;
                }
                if (targetVaultToken && targetVaultToken.symbol !== this.toToken?.symbol) {
                    this.targetChainSecondPanel.visible = true;
                    this.targetChainVaultImage.url = this.desChain.image;
                    this.targetChainVaultLabel.caption = this.desChain.chainName;
                    this.targetVaultTokenImage.url = scom_token_list_6.assets.getTokenIconPath(targetVaultToken, this.desChain.chainId);
                    this.targetVaultTokenLabel.caption = targetVaultToken.symbol;
                    this.targetVaultTokenValue.caption = (0, index_10.formatNumber)(vaultTokenToTargetChain);
                    // Hide vault info at toToken
                    this.crossChainVaultInfoVstack.visible = false;
                }
                else {
                    this.targetChainSecondPanel.visible = false;
                    // Show vault info at the end if vaultTokenSymbol same as toToken
                    this.crossChainVaultInfoVstack.visible = true;
                }
            }
            else {
                this.srcChainFirstPanel.visible = false;
                this.targetChainFirstPanel.visible = false;
                this.srcChainSecondPanel.visible = false;
                this.targetChainSecondPanel.visible = false;
                this.crossChainVaultInfoVstack.visible = false;
            }
        }
        handleSwapPopup() {
            if (!this.record)
                return;
            this.setupCrossChainPopup();
            const currentChainId = this.state.getChainId();
            const slippageTolerance = this.state.slippageTolerance;
            this.fromTokenImage.url = scom_token_list_6.assets.tokenPath(this.fromToken, currentChainId);
            this.fromTokenLabel.caption = this.fromToken?.symbol ?? '';
            this.fromTokenValue.caption = (0, index_10.formatNumber)(this.fromInputValue, 4);
            this.toTokenImage.url = scom_token_list_6.assets.tokenPath(this.toToken, this.isCrossChain ? this.desChain?.chainId : currentChainId);
            this.toTokenLabel.caption = this.toToken?.symbol ?? '';
            this.toTokenValue.caption = (0, index_10.formatNumber)(this.toInputValue, 4);
            const minimumReceived = this.getMinReceivedMaxSold();
            if (minimumReceived || minimumReceived == 0) {
                this.payOrReceiveValue.caption = (0, index_10.formatNumber)(minimumReceived, 4);
            }
            else {
                this.payOrReceiveValue.caption = ' - ';
            }
            this.payOrReceiveToken.caption = this.isFrom ? this.fromTokenLabel.caption : this.toTokenLabel.caption;
            this.lbEstimate.caption = `${this.isFrom ? 'Input' : 'Output'} is estimated. If the price change by more than ${slippageTolerance}%, your transaction will revert`;
            this.lbPayOrReceive.caption = this.isFrom ? 'You will pay at most' : 'You will receive at least';
            this.priceInfo2.setData(this.getPriceInfo());
            this.swapModal.visible = true;
        }
        onCloseModal(name) {
            this[name].visible = false;
        }
        doSwap() {
            this.approvalModelAction.doPayAction(this.record);
        }
        async updateTokenValues(token, isFrom) {
            if (!token)
                return;
            const balance = this.getBalance(token);
            if (isFrom) {
                this.fromToken = token;
                const enabled = !this.isMaxDisabled();
                this.maxButton.enabled = enabled;
                if (this.fromInputValue.gt(0)) {
                    const formattedValue = new eth_wallet_5.BigNumber(this.fromInputValue).dp(token.decimals || 18, ROUNDING_NUMBER).toFixed();
                    if (!this.fromInputValue.eq(formattedValue)) {
                        if (this.firstTokenInput) {
                            this.firstTokenInput.value = formattedValue === '0' ? '' : formattedValue;
                        }
                        this.fromInputValue = new eth_wallet_5.BigNumber(formattedValue);
                    }
                }
                else if (this.fromInputValue.isZero()) {
                    this.updateEstimatedPosition(true);
                }
                this.payBalance.caption = `Balance: ${(0, index_10.formatNumber)(balance, 4)} ${token.symbol}`;
                this.updateTokenInput(true);
            }
            else {
                this.toToken = token;
                if (this.toInputValue.gt(0)) {
                    const formattedValue = new eth_wallet_5.BigNumber(this.toInputValue).dp(token.decimals || 18, ROUNDING_NUMBER).toFixed();
                    if (!this.toInputValue.eq(formattedValue)) {
                        if (this.secondTokenInput) {
                            this.secondTokenInput.value = formattedValue === '0' ? '' : formattedValue;
                        }
                        this.toInputValue = new eth_wallet_5.BigNumber(formattedValue);
                    }
                }
                else if (this.toInputValue.isZero()) {
                    this.updateEstimatedPosition(false);
                }
                this.receiveBalance.caption = `Balance: ${(0, index_10.formatNumber)(balance, 4)} ${token.symbol}`;
                await this.updateTokenInput(false);
            }
        }
        async onSelectToken(token, isFrom) {
            if (!token)
                return;
            this.firstTokenInput.enabled = false;
            this.secondTokenInput.enabled = false;
            // if (token.isNew && this.state.isRpcWalletConnected()) {
            //   const rpcWallet = this.state.getRpcWallet();
            //   await tokenStore.updateAllTokenBalances(rpcWallet);
            // }
            await this.updateTokenValues(token, isFrom);
            await this.handleAddRoute();
            this.firstTokenInput.enabled = true;
            this.secondTokenInput.enabled = true;
        }
        setApprovalSpenderAddress() {
            const item = this.record;
            if (!item)
                return;
            const market = this.state.getProviderByKey(item.provider)?.key || '';
            if (this.approvalModelAction) {
                if (this.isCrossChain && item.contractAddress) {
                    (0, index_8.setApprovalModalSpenderAddress)(this.state, market, item.contractAddress);
                }
                else if (this._data.campaignId !== undefined) {
                    this.contractAddress = this.state.getProxyAddress();
                    (0, index_8.setApprovalModalSpenderAddress)(this.state, market, this.contractAddress);
                }
                else {
                    (0, index_8.setApprovalModalSpenderAddress)(this.state, market);
                }
            }
        }
        getInputValue(isFrom) {
            const token = isFrom ? this.fromToken : this.toToken;
            const value = isFrom ? this.fromInputValue : this.toInputValue;
            if (!value || value.isNaN())
                return '';
            const newValue = value.dp(token?.decimals || 18, ROUNDING_NUMBER).toFixed();
            return newValue;
        }
        async updateTokenInput(isFrom, init) {
            const inputEl = isFrom ? this.firstTokenInput : this.secondTokenInput;
            if (inputEl)
                inputEl.value = this.getInputValue(isFrom);
        }
        async onSelectRouteItem(item) {
            if (this.isFrom) {
                if (this.payCol.children) {
                    let balanceValue = item.amountIn;
                    this.firstTokenInput.value = this.fixedNumber(balanceValue);
                    this.fromInputValue = typeof balanceValue !== 'object' ? new eth_wallet_5.BigNumber(balanceValue) : balanceValue;
                }
            }
            else {
                if (this.receiveCol.children) {
                    let balanceValue = item.amountOut;
                    this.secondTokenInput.value = this.fixedNumber(balanceValue);
                    this.toInputValue = typeof balanceValue !== 'object' ? new eth_wallet_5.BigNumber(balanceValue) : balanceValue;
                }
            }
            this.record = item;
            if (this.isCrossChain && this.fromToken && !this.fromToken.isNative && this.state.isRpcWalletConnected()) {
                try {
                    this.setApprovalSpenderAddress();
                    await this.approvalModelAction.checkAllowance(this.fromToken, this.fromInputValue.toFixed());
                }
                catch (e) {
                    console.log('Cannot check the Approval status (Cross Chain)', e);
                }
            }
            const isButtonLoading = this.isButtonLoading();
            if (this.swapBtn.rightIcon.visible != isButtonLoading) {
                this.swapBtn.rightIcon.visible = isButtonLoading;
            }
            if (this.priceInfo)
                await this.priceInfo.setData(this.getPriceInfo());
        }
        onTokenInputChange(source) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(async () => {
                const fromInput = this.payCol.getElementsByTagName('I-INPUT')?.[0];
                const toInput = this.receiveCol.getElementsByTagName('I-INPUT')?.[0];
                const isFrom = source.isSameNode(fromInput);
                const amount = source.value;
                if ((0, index_10.isInvalidInput)(amount)) {
                    this.resetValuesByInput();
                    if (fromInput)
                        fromInput.value = '0';
                    if (toInput)
                        toInput.value = '0';
                    return;
                }
                const limit = (isFrom ? this.fromToken?.decimals : this.toToken?.decimals) || 18;
                const value = new eth_wallet_5.BigNumber(amount).dp(limit, ROUNDING_NUMBER);
                if (!value.gt(0)) {
                    this.resetValuesByInput();
                    if (isFrom && toInput) {
                        toInput.value = '0';
                    }
                    else if (!isFrom && fromInput) {
                        fromInput.value = '0';
                    }
                }
                else {
                    let valueChanged = false;
                    const isLastDot = amount.indexOf('.') === amount.length - 1;
                    if (isFrom) {
                        if (!this.fromInputValue.eq(value)) {
                            this.fromInputValue = value;
                            this.updateEstimatedPosition(false);
                            valueChanged = true;
                        }
                        if (!isLastDot)
                            fromInput.value = value.toFixed();
                    }
                    else {
                        if (!this.toInputValue.eq(value)) {
                            this.toInputValue = value;
                            this.updateEstimatedPosition(true);
                            valueChanged = true;
                        }
                        if (!isLastDot)
                            toInput.value = value.toFixed();
                    }
                    if (valueChanged)
                        await this.handleAddRoute();
                }
            }, 1000);
        }
        resetValuesByInput() {
            this.initRoutes();
            if (this.priceInfo)
                this.priceInfo.setData(this.getPriceInfo());
            this.fromInputValue = new eth_wallet_5.BigNumber(0);
            this.toInputValue = new eth_wallet_5.BigNumber(0);
        }
        initRoutes() {
            this.record = null;
            this.isPriceToggled = false;
            this.swapBtn.visible = false;
        }
        async handleAddRoute() {
            if (!this.fromToken || !this.toToken || !(this.fromInputValue.gt(0) || this.toInputValue.gt(0)))
                return;
            this.initRoutes();
            let listRouting = [];
            const useAPI = this._data.category === 'aggregator' || this._data.category === 'cross-chain-swap';
            this.updateContractAddress();
            if (!this.isCrossChain) {
                listRouting = await (0, index_8.getAllRoutesData)(this.state, this.fromToken, this.toToken, this.fromInputValue, this.toInputValue, this.isFrom, useAPI);
                listRouting = listRouting.map((v) => {
                    return {
                        ...v,
                        isHybrid: false // market == Market.HYBRID,
                    };
                });
            }
            else if (this.srcChain && this.desChain) {
                const tokenIn = Object.assign({}, this.fromToken);
                const tokenOut = Object.assign({}, this.toToken);
                listRouting = await (0, index_8.getCrossChainRouteOptions)(this.state, {
                    fromChainId: this.srcChain.chainId,
                    toChainId: this.desChain.chainId,
                    tokenIn: tokenIn,
                    tokenOut: tokenOut,
                    amountIn: this.fromInputValue
                });
                listRouting = listRouting.map((v) => {
                    let route = {};
                    if (v.sourceRouteObj) {
                        const amountOut = v.targetRouteObj ? v.targetRouteObj.amountOut : v.sourceRouteObj.amountOut;
                        route = {
                            ...v,
                            ...v.sourceRouteObj,
                            tradeFee: v.tradeFee,
                            price: v.price,
                            amountOut: new eth_wallet_5.BigNumber(amountOut),
                        };
                        if (v.targetRouteObj) {
                            const market = this.state.getProviderByKey(v.targetRouteObj.provider)?.key || '';
                            if (market) {
                                route.targetRouteObj = {
                                    ...route.targetRouteObj,
                                    route: v.targetRouteObj.bestRoute,
                                    isHybrid: false //market == Market.HYBRID,
                                };
                            }
                            else {
                                route.targetRouteObj = undefined;
                            }
                        }
                    }
                    else {
                        route = {
                            ...v,
                            ...v.targetRouteObj,
                            tradeFee: v.tradeFee,
                            price: v.price,
                        };
                    }
                    return { ...route, fromAmount: new eth_wallet_5.BigNumber(route.fromAmount) };
                });
                if (this.minSwapHintLabel) {
                    this.minSwapHintLabel.visible = !listRouting.length;
                }
            }
            if (listRouting[0] && this.isCrossChain) {
                const assetSymbol = listRouting[0].targetVaultToken.symbol;
                const { vaultAddress, vaultRegistryAddress, tokenAddress: vaultTokenAddress, softCap } = index_7.bridgeVaultConstantMap[assetSymbol === 'USDT.e' ? 'USDT' : assetSymbol][this.desChain.chainId];
                const [vault, vaultAssetBalance, bonds, oraclePriceMap] = await Promise.all([
                    (0, index_9.getBridgeVault)(this.state, this.desChain.chainId, vaultAddress),
                    (0, index_9.getVaultAssetBalance)(this.desChain.chainId, vaultAddress),
                    (0, index_9.getBondsInBridgeVault)(this.state, this.desChain.chainId, vaultRegistryAddress),
                    (0, index_9.getOraclePriceMap)(this.desChain.chainId)
                ]);
                const assetBalance = vaultAssetBalance ?? 0;
                const assetDecimal = listRouting[0].targetVaultToken.decimals;
                const targetVaultAssetBalance = (new eth_wallet_5.BigNumber(assetBalance)).shiftedBy(-assetDecimal);
                const targetVaultBondBalance = bonds.reduce((acc, cur) => {
                    if (cur.chainId !== this.desChain?.chainId)
                        return acc;
                    acc = acc.plus((new eth_wallet_5.BigNumber(cur.bond)).shiftedBy(-18));
                    return acc;
                }, new eth_wallet_5.BigNumber(0));
                const vaultTokenToTargetChain = new eth_wallet_5.BigNumber(listRouting[0].vaultTokenToTargetChain);
                const vaultToUsdPrice = oraclePriceMap[vaultTokenAddress.toLowerCase()]; // This will be the vaultToken -> USD Price
                const oswapToken = Object.values(scom_token_list_6.tokenStore.getTokenMapByChainId(this.desChain.chainId)).find(v => v.symbol === 'OSWAP');
                const oswapToUsdPrice = oraclePriceMap[oswapToken.address.toLowerCase()];
                const vaultToOswapPrice = vaultToUsdPrice.div(oswapToUsdPrice); // This will vaultToken -> oswap price;
                this.targetVaultAssetBalanceLabel1.caption = `Vault Asset Balance: ${(0, index_10.formatNumber)(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol}`;
                this.targetVaultAssetBalanceLabel2.caption = `Vault Asset Balance: ${(0, index_10.formatNumber)(targetVaultAssetBalance.toNumber(), 4)} ${assetSymbol}`;
                if (!vault.vaultGroup) {
                    this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${(0, index_10.formatNumber)(targetVaultBondBalance.toNumber(), 4)} ${assetSymbol}`;
                    this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${(0, index_10.formatNumber)(targetVaultBondBalance.toNumber(), 4)} ${assetSymbol}`;
                }
                else if (vault.vaultGroup === 'OSWAP') {
                    this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${(0, index_10.formatNumber)(targetVaultBondBalance.toNumber(), 4)} OSWAP`;
                    this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${(0, index_10.formatNumber)(targetVaultBondBalance.toNumber(), 4)} OSWAP`;
                }
                else {
                    this.targetVaultBondBalanceLabel1.caption = `Vault Bond Balance: ${(0, index_10.formatNumber)(targetVaultBondBalance.toNumber(), 4)} OSWAP &#8776; ${(0, index_10.formatNumber)(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4)} ${assetSymbol}`;
                    this.targetVaultBondBalanceLabel2.caption = `Vault Bond Balance: ${(0, index_10.formatNumber)(targetVaultBondBalance.toNumber(), 4)} OSWAP &#8776; ${(0, index_10.formatNumber)(targetVaultBondBalance.div(vaultToOswapPrice).toNumber(), 4)} ${assetSymbol}`;
                }
                this.crossChainSoftCapLabel1.caption = softCap ? `Cap: ${(0, index_10.formatNumber)(softCap)} ${assetSymbol}` : "-";
                this.crossChainSoftCapLabel2.caption = softCap ? `Cap: ${(0, index_10.formatNumber)(softCap)} ${assetSymbol}` : "-";
                const minValue = eth_wallet_5.BigNumber.min(targetVaultAssetBalance, targetVaultBondBalance, softCap);
                if (minValue.eq(targetVaultAssetBalance)) {
                    this.targetVaultAssetBalanceLabel1.classList.add('text--limit');
                    this.targetVaultAssetBalanceLabel2.classList.add('text--limit');
                    this.targetVaultBondBalanceLabel1.classList.remove('text--limit');
                    this.targetVaultBondBalanceLabel2.classList.remove('text--limit');
                    this.crossChainSoftCapLabel1.classList.remove('text--limit');
                    this.crossChainSoftCapLabel2.classList.remove('text--limit');
                }
                else if (minValue.eq(targetVaultBondBalance)) {
                    this.targetVaultAssetBalanceLabel1.classList.remove('text--limit');
                    this.targetVaultAssetBalanceLabel2.classList.remove('text--limit');
                    this.targetVaultBondBalanceLabel1.classList.add('text--limit');
                    this.targetVaultBondBalanceLabel2.classList.add('text--limit');
                    this.crossChainSoftCapLabel1.classList.remove('text--limit');
                    this.crossChainSoftCapLabel2.classList.remove('text--limit');
                }
                else {
                    this.targetVaultAssetBalanceLabel1.classList.remove('text--limit');
                    this.targetVaultAssetBalanceLabel2.classList.remove('text--limit');
                    this.targetVaultBondBalanceLabel1.classList.remove('text--limit');
                    this.targetVaultBondBalanceLabel2.classList.remove('text--limit');
                    this.crossChainSoftCapLabel1.classList.add('text--limit');
                    this.crossChainSoftCapLabel2.classList.add('text--limit');
                }
                if (softCap && vaultTokenToTargetChain.toNumber() >= softCap) {
                    this.swapModalConfirmBtn.caption = 'Cap Reached';
                    this.swapModalConfirmBtn.enabled = false;
                }
                else if (vaultTokenToTargetChain.gt(targetVaultAssetBalance) || vaultTokenToTargetChain.multipliedBy(vaultToOswapPrice).gt(targetVaultBondBalance)) {
                    this.swapModalConfirmBtn.caption = 'Exceed Vault Asset Balance or Bond Balance';
                    this.swapModalConfirmBtn.enabled = false;
                }
                else {
                    this.swapModalConfirmBtn.enabled = true;
                }
                this.crossChainApprovalStatus = listRouting[0].isApproveButtonShown ? index_10.ApprovalStatus.TO_BE_APPROVED : index_10.ApprovalStatus.NONE;
            }
            this.disableSelectChain(false);
            this.disableSelectChain(false, true);
            this.swapModalConfirmBtn.caption = 'Confirm Swap';
            this.swapModalConfirmBtn.enabled = true;
            this.record = listRouting[0] || null;
            this.swapButtonStatusMap = {};
            this.approveButtonStatusMap = {};
            this.initRoutes();
            if (listRouting.length) {
                // this.receiveCol.classList.add('bg-box--active');
                this.lbRouting.opacity = 0;
                const option = listRouting[0];
                await this.onSelectRouteItem(option);
            }
            else {
                // this.receiveCol.classList.remove('bg-box--active');
                this.lbRouting.opacity = 0.75;
                if (this.priceInfo)
                    this.priceInfo.setData(this.getPriceInfo());
                if (this.isEstimated('to')) {
                    this.toInputValue = new eth_wallet_5.BigNumber(0);
                    this.secondTokenInput.value = '';
                }
                else {
                    this.fromInputValue = new eth_wallet_5.BigNumber(0);
                    this.firstTokenInput.value = '';
                }
            }
            if (this.record) {
                this.setApprovalSpenderAddress();
                await this.approvalModelAction.checkAllowance(this.fromToken, this.fromInputValue.toFixed(), this.record);
                this.swapBtn.visible = true;
                const total = this.record?.fromAmount ? new eth_wallet_5.BigNumber(this.record.fromAmount) : new eth_wallet_5.BigNumber(0);
                this.lbYouPayTitle.caption = `You Pay`;
                this.lbYouPayValue.caption = `${(0, index_10.formatNumber)(total)} ${this.fromToken?.symbol}`;
            }
            else {
                this.updateSwapButtonCaption();
                this.swapBtn.visible = true;
                this.swapBtn.enabled = !this.isSwapButtonDisabled();
            }
        }
        // Price Info
        onTogglePrice(priceInfo) {
            this.isPriceToggled = !this.isPriceToggled;
            priceInfo.setData(this.getPriceInfo());
        }
        getRate() {
            const value = this.isPriceToggled ? this.record?.priceSwap : this.record?.price;
            let fromSymbol = this.fromToken?.symbol;
            let toSymbol = this.toToken?.symbol;
            if (this.isCrossChain) {
                const srcName = this.srcChain?.chainName;
                const desName = this.desChain?.chainName;
                if (srcName) {
                    fromSymbol = `${fromSymbol} (${srcName})`;
                }
                if (desName) {
                    toSymbol = `${toSymbol} (${desName})`;
                }
            }
            if (value || value == 0) {
                if (this.isPriceToggled) {
                    return `1 ${fromSymbol} &#8776; ${(0, index_10.formatNumber)(value)} ${toSymbol}`;
                }
                return `1 ${toSymbol} &#8776; ${(0, index_10.formatNumber)(value)} ${fromSymbol}`;
            }
            return '-';
        }
        getPriceImpact() {
            const value = this.record?.priceImpact;
            if (value || value == 0) {
                return `${(0, index_10.formatNumber)(value)}%`;
            }
            return '-';
        }
        getMinimumReceived() {
            const value = this.getMinReceivedMaxSold();
            if (value || value == 0) {
                if (this.isFrom) {
                    return `${(0, index_10.formatNumber)(value)} ${this.fromToken?.symbol}`;
                }
                return `${(0, index_10.formatNumber)(value)} ${this.toToken?.symbol}`;
            }
            return '-';
        }
        getTradeFeeExactAmount() {
            const tradeFee = this.isCrossChain ? new eth_wallet_5.BigNumber(this.record?.tradeFee) : this.record?.fromAmount.times(this.record?.tradeFee);
            if (tradeFee && !tradeFee.isNaN()) {
                return `${(0, index_10.formatNumber)(tradeFee)} ${this.fromToken?.symbol}`;
            }
            return '-';
        }
        getFeeDetails() {
            if (this.isCrossChain && this.record) {
                let record = this.record;
                let detail = [
                    {
                        title: "Source Chain Liquidity Fee",
                        description: "This fee is paid to the AMM Liquidity Providers on the Source Chain.",
                        value: record.fees.sourceRouteLiquidityFee,
                        isHidden: record.fees.sourceRouteLiquidityFee?.isZero()
                    },
                    {
                        title: "Target Chain Liquidity Fee",
                        description: "This fee is paid to the AMM Liquidity Providers on the Target Chain.",
                        value: record.fees.targetRouteLiquidityFee,
                        isHidden: record.targetRouteObj.pairs.length == 0
                    },
                    {
                        title: "Base Fee",
                        description: "This fee is paid to the trolls to cover gas fee on the Target Chain",
                        value: record.fees.baseFee,
                    },
                    {
                        title: "Bridge Vault Liquidity Fee",
                        description: "This fee is paid to the Bridge Vault Liquidity Provider on Target Chain",
                        value: record.fees.transactionFee,
                    },
                    {
                        title: "Protocol Fee",
                        description: "This fee is paid to the troll owners on the Cross Chain Network",
                        value: record.fees.protocolFee,
                    },
                    {
                        title: "Imbalance Fee",
                        description: "This fee is acted as an incentive to balance the vault.",
                        value: record.fees.imbalanceFee,
                    }
                ];
                return detail.filter(v => !v.isHidden);
            }
            if (!this.isCrossChain && this.record) {
                return [{
                        title: "Liquidity Provider Fee",
                        description: "This fee is paid to the AMM Liquidity Provider.",
                        value: this.record.tradeFee
                    }];
            }
            return [];
        }
        getPriceInfo() {
            const rate = this.getRate();
            const priceImpact = this.getPriceImpact();
            const minimumReceived = this.getMinimumReceived();
            const tradeFeeExactAmount = this.getTradeFeeExactAmount();
            const fees = this.getFeeDetails();
            const countFees = fees.length;
            let feeTooltip;
            if (countFees === 1) {
                const fee = fees[0];
                feeTooltip = `${fee.description}`;
            }
            else if (countFees > 1) {
                feeTooltip = fees;
            }
            let info = [
                {
                    title: "Rate",
                    value: this.isValidToken ? rate : '-',
                    isToggleShown: this.record && this.isValidToken,
                },
                {
                    title: "Price Impact",
                    value: this.isValidToken ? priceImpact : '-',
                    isHidden: this.isCrossChain,
                },
                {
                    title: this.isFrom ? "Maximum Sold" : "Minimum Received",
                    value: this.isValidToken ? minimumReceived : '-',
                },
                {
                    title: "Transaction Fee",
                    value: this.isValidToken ? tradeFeeExactAmount : '-',
                    tooltip: feeTooltip,
                    onClick: countFees > 1 ? () => this.showModalFees() : null
                },
                {
                    title: "Estimated Time",
                    value: this.isValidToken && this.record ? '30 seconds' : '-',
                    isHidden: !this.isCrossChain
                }
            ];
            return info.filter((f) => !f.isHidden);
        }
        getBalance(token) {
            if (!token)
                return '0';
            let tokenBalances = scom_token_list_6.tokenStore.getTokenBalancesByChainId(token.chainId);
            if (!tokenBalances)
                return '0';
            const address = token.address || '';
            let balance = address ? tokenBalances[address.toLowerCase()] ?? '0' : tokenBalances[token.symbol] || '0';
            return balance;
        }
        async updateBalances() {
            const chainIds = [...new Set([this.fromToken.chainId, this.toToken.chainId])];
            for (let chainId of chainIds) {
                await scom_token_list_6.tokenStore.updateTokenBalancesByChainId(chainId);
            }
            if (this.fromToken) {
                const balance = this.getBalance(this.fromToken);
                this.payBalance.caption = `Balance: ${(0, index_10.formatNumber)(balance, 4)} ${this.fromToken.symbol}`;
            }
            if (this.toToken) {
                const balance = this.getBalance(this.toToken);
                this.receiveBalance.caption = `Balance: ${(0, index_10.formatNumber)(balance, 4)} ${this.toToken.symbol}`;
            }
            const enabled = !this.isMaxDisabled();
            this.maxButton.enabled = enabled;
        }
        updateSwapButtonCaption() {
            if (this.swapBtn && this.swapBtn.hasChildNodes()) {
                this.swapBtn.caption = this.determineSwapButtonCaption();
            }
        }
        determineSwapButtonCaption() {
            const isApproveButtonShown = this.isCrossChain ? this.crossChainApprovalStatus !== index_10.ApprovalStatus.NONE : this.isApproveButtonShown;
            if (!(0, index_7.isClientWalletConnected)()) {
                return "Connect Wallet";
            }
            if (!this.state.isRpcWalletConnected()) {
                return "Switch Network";
            }
            if (isApproveButtonShown) {
                const status = this.isCrossChain ? this.crossChainApprovalStatus : this.approveButtonStatus;
                switch (status) {
                    case index_10.ApprovalStatus.APPROVING:
                        return "Approving";
                    case index_10.ApprovalStatus.TO_BE_APPROVED:
                        return "Approve";
                }
                return '';
            }
            else {
                if (this.isSwapping) {
                    return this.isCrossChain ? "Creating Order" : "Swapping";
                }
                if (this.isInsufficientBalance) {
                    return `Insufficient ${this.fromToken?.symbol} balance`;
                }
                if (this.isCrossChain) {
                    return "Create Order";
                }
                if (this.isPriceImpactTooHigh) {
                    return "Turn on Expert Mode";
                }
                return "Swap";
            }
        }
        getWarningMessageText() {
            const tokens = [this.fromToken?.symbol, this.toToken?.symbol];
            if (tokens.every(v => v === 'ETH' || v === 'WETH')) {
                return 'Invalid pair';
            }
            if (!this.record) {
                return '';
            }
            if (this.record.key === 'Oracle' && (this.record.fromAmount.isZero() || this.record.toAmount.isZero())) {
                return 'Circuit breaker triggered';
            }
            const balance = this.getBalance(this.fromToken);
            if (this.maxSold.gt(balance)) {
                return `Insufficient ${this.fromToken?.symbol} balance`;
            }
            if (this.record.priceImpact > 15 && !this.state.isExpertMode) {
                return priceImpactTooHighMsg;
            }
            return '';
        }
        setMapStatus(type, key, status) {
            if (type === 'approve') {
                let mapStatus = this.approveButtonStatusMap;
                mapStatus[key] = status;
                this.approveButtonStatusMap = {
                    ...mapStatus
                };
            }
            else {
                let mapStatus = this.swapButtonStatusMap;
                mapStatus[key] = status;
                this.swapButtonStatusMap = {
                    ...mapStatus
                };
            }
        }
        isButtonLoading() {
            if (this.isApproveButtonShown || (this.isCrossChain && this.crossChainApprovalStatus === index_10.ApprovalStatus.APPROVING)) {
                return this.isApprovingRouter;
            }
            return this.isSwapping;
        }
        isSwapButtonDisabled() {
            if ((0, index_7.isClientWalletConnected)() && this.state.isRpcWalletConnected() && !this.record) {
                return true;
            }
            const warningMessageText = this.getWarningMessageText();
            return (this.state.isRpcWalletConnected() && (warningMessageText != '' && !this.isPriceImpactTooHigh));
        }
        async onClickSwapButton() {
            if (!(0, index_7.isClientWalletConnected)()) {
                if (this.mdWallet) {
                    await components_7.application.loadPackage('@scom/scom-wallet-modal', '*');
                    this.mdWallet.networks = this.networks;
                    this.mdWallet.wallets = this.wallets;
                    this.mdWallet.showModal();
                }
                return;
            }
            else if (!this.state.isRpcWalletConnected()) {
                const chainId = this.state.getChainId();
                const clientWallet = eth_wallet_5.Wallet.getClientInstance();
                await clientWallet.switchNetwork(chainId);
                return;
            }
            if (!this.record || this.isSwapButtonDisabled())
                return;
            const isApproveButtonShown = this.isCrossChain ? this.crossChainApprovalStatus !== index_10.ApprovalStatus.NONE : this.isApproveButtonShown;
            if (isApproveButtonShown) {
                this.approveRouterMax();
                return;
            }
            if (this.isPriceImpactTooHigh) {
                this.$eventBus.dispatch("ShowExpertModal" /* EventId.ShowExpertModal */);
                return;
            }
            this.handleSwapPopup();
        }
        renderPriceInfo() {
            const padding = { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' };
            if (!this.priceInfo) {
                this.priceInfo = this.$render("i-scom-swap-price-info", { display: "block", width: 'auto', height: 'auto' });
                this.pnlPriceInfo.appendChild(this.priceInfo);
                this.priceInfo.onTogglePrice = this.onTogglePrice.bind(this);
            }
            this.priceInfo.setData(this.getPriceInfo());
            if (!this.priceInfo2) {
                this.priceInfo2 = this.$render("i-scom-swap-price-info", { padding: { ...padding }, display: "block", width: 'auto', height: 'auto' });
                this.priceInfo2.onTogglePrice = this.onTogglePrice.bind(this);
            }
            this.priceInfoContainer.appendChild(this.priceInfo2);
        }
        get chainId() {
            return this.state.getChainId();
        }
        // Cross Chain
        get isCrossChainSwap() {
            return this._data.category === 'cross-chain-swap';
        }
        get isCrossChainEnabled() {
            let chainId = this.state.getChainId();
            if (!this.bridgeSupportedChainList.some((v) => v.chainId == chainId) || !this.isCrossChainSwap) {
                return false;
            }
            return true;
        }
        ;
        get isCrossChain() {
            const srcChainId = this.srcChain?.chainId;
            const desChainId = this.desChain?.chainId;
            if (this.isCrossChainEnabled && index_7.crossChainSupportedChainIds.some(v => v.chainId === srcChainId) && srcChainId != desChainId) {
                return true;
            }
            if (this.minSwapHintLabel)
                this.minSwapHintLabel.visible = false;
            return false;
        }
        ;
        get isMetaMask() {
            return eth_wallet_5.Wallet.getClientInstance().clientSideProvider?.name === index_7.WalletPlugin.MetaMask;
        }
        updateChainIcon(el, selected) {
            if (selected) {
                el.classList.add('icon-selected');
                el.border.color = Theme.colors.primary.main;
                el.cursor = 'default';
            }
            else {
                el.classList.remove('icon-selected');
                el.border.color = 'transparent';
                el.cursor = 'pointer';
            }
        }
        initExpertModal() {
            this.expertModal = new index_11.ExpertModeSettings(this.state);
            this.swapComponent.appendChild(this.expertModal);
            this.$eventBus.register(this, "ShowExpertModal" /* EventId.ShowExpertModal */, () => {
                this.expertModal.showModal();
            });
        }
        resizeLayout() {
            if (!this.wrapperSwap)
                return;
            const tagWidth = Number(this.tag?.width);
            if ((this.offsetWidth !== 0 && this.offsetWidth < 550) || window.innerWidth < 550 || (!isNaN(tagWidth) && tagWidth !== 0 && tagWidth < 550)) {
                this.wrapperSwap.templateColumns = ['auto'];
                this.toggleReverseImage.alignItems = 'center';
                this.toggleReverseImage.padding = { bottom: '1rem', top: '1rem' };
                this.hIcon.visible = false;
                this.vIcon.visible = true;
            }
            else {
                this.wrapperSwap.templateColumns = ['1fr', '32px', '1fr'];
                this.toggleReverseImage.alignItems = 'end';
                this.toggleReverseImage.padding = { bottom: '40px' };
                this.hIcon.visible = true;
                this.vIcon.visible = false;
            }
        }
        async initData() {
            if (!this.isInited) {
                await this.initApprovalModelAction();
                this.isInited = true;
            }
        }
        isEmptyData(value) {
            return !value || !value.networks || value.networks.length === 0;
        }
        async init() {
            await super.init();
            this.state = new index_7.State(data_json_1.default);
            this.fromInputValue = new eth_wallet_5.BigNumber(0);
            this.toInputValue = new eth_wallet_5.BigNumber(0);
            this.swapButtonStatusMap = {};
            this.approveButtonStatusMap = {};
            this.$eventBus = components_7.application.EventBus;
            this.registerEvent();
            this.updateSwapButtonCaption();
            this.initExpertModal();
            const dexList = (0, scom_dex_list_2.default)();
            this.state.setDexInfoList(dexList);
            const lazyLoad = this.getAttribute('lazyLoad', true, false);
            if (!lazyLoad) {
                const campaignId = this.getAttribute('campaignId', true);
                const category = this.getAttribute('category', true, "fixed-pair");
                const providers = this.getAttribute('providers', true, []);
                const commissions = this.getAttribute('commissions', true, []);
                const tokens = this.getAttribute('tokens', true, []);
                const defaultChainId = this.getAttribute('defaultChainId', true);
                const networks = this.getAttribute('networks', true);
                const wallets = this.getAttribute('wallets', true);
                const showHeader = this.getAttribute('showHeader', true);
                const title = this.getAttribute('title', true);
                const logo = this.getAttribute('logo', true);
                const defaultInputValue = this.getAttribute('defaultInputValue', true);
                const defaultOutputValue = this.getAttribute('defaultOutputValue', true);
                const defaultInputToken = this.getAttribute('defaultInputToken', true);
                const defaultOutputToken = this.getAttribute('defaultOutputToken', true);
                const apiEndpoints = this.getAttribute('apiEndpoints', true);
                let data = {
                    campaignId,
                    category,
                    providers,
                    commissions,
                    tokens,
                    defaultChainId,
                    networks,
                    wallets,
                    showHeader,
                    title,
                    logo,
                    defaultInputValue,
                    defaultOutputValue,
                    defaultInputToken,
                    defaultOutputToken,
                    apiEndpoints
                };
                if (!this.isEmptyData(data)) {
                    await this.setData(data);
                }
            }
            ;
            this.executeReadyCallback();
            window.addEventListener('resize', () => {
                setTimeout(() => {
                    this.resizeLayout();
                }, 300);
            });
        }
        render() {
            return (this.$render("i-scom-dapp-container", { id: "dappContainer" },
                this.$render("i-panel", { id: "swapComponent", background: { color: Theme.background.main }, overflow: 'hidden' },
                    this.$render("i-panel", { class: index_css_2.swapStyle },
                        this.$render("i-panel", { id: "swapContainer", width: 720, maxWidth: '100%', minHeight: 340, margin: { left: 'auto', right: 'auto' }, padding: { top: '1rem', left: '1rem', right: '1rem', bottom: '1rem' } },
                            this.$render("i-vstack", { id: "pnlBranding", margin: { bottom: '0.25rem' }, gap: "0.5rem", horizontalAlignment: "center" },
                                this.$render("i-image", { id: 'imgLogo', height: 100 }),
                                this.$render("i-label", { id: 'lbTitle', font: { bold: true, size: '1.5rem' } })),
                            this.$render("i-panel", { margin: { top: '0.5rem', bottom: '1rem' }, border: { radius: '1rem' } },
                                this.$render("i-grid-layout", { id: "wrapperSwap", templateColumns: ['1fr', '32px', '1fr'], gap: { column: 10 }, mediaQueries: [
                                        {
                                            maxWidth: '767px',
                                            properties: {
                                                templateColumns: ['auto']
                                            }
                                        }
                                    ] },
                                    this.$render("i-vstack", { gap: 5, minWidth: 230, width: "100%" },
                                        this.$render("i-vstack", { id: "srcChainBox", width: "100%", margin: { top: 8, bottom: 8 }, visible: false },
                                            this.$render("i-hstack", { gap: 8, horizontalAlignment: "space-between" },
                                                this.$render("i-label", { opacity: 0.8, caption: "Source Chain", minWidth: "7rem" }),
                                                this.$render("i-label", { id: "srcChainLabel", textOverflow: "ellipsis", margin: { left: 'auto' }, caption: "-" })),
                                            this.$render("i-hstack", { id: "srcChainList", wrap: "wrap", verticalAlignment: "center", maxWidth: "100%" })),
                                        this.$render("i-panel", { minHeight: 120, margin: { top: 'auto' } },
                                            this.$render("i-vstack", { gap: 8 },
                                                this.$render("i-vstack", { width: "100%", gap: 8 },
                                                    this.$render("i-vstack", { width: "100%" },
                                                        this.$render("i-label", { caption: "You Swap", font: { size: '1.125rem' } })),
                                                    this.$render("i-hstack", { gap: '0.5rem', horizontalAlignment: "end", verticalAlignment: "center", width: "100%" },
                                                        this.$render("i-label", { id: "payBalance", opacity: 0.55, caption: "Balance: 0" }),
                                                        this.$render("i-button", { id: "maxButton", class: "btn-max", caption: "Max", enabled: false, font: { weight: 600, size: '1rem', color: Theme.colors.primary.contrastText }, lineHeight: 1.5, border: { radius: '0.5rem' }, padding: { left: '0.5rem', right: '0.5rem' }, onClick: this.onSetMaxBalance }))),
                                                this.$render("i-panel", { id: "payCol", class: "bg-box", background: { color: Theme.input.background }, width: "100%", margin: { top: 'auto' }, border: { radius: '1rem', width: '2px', style: 'solid', color: 'transparent' } },
                                                    this.$render("i-scom-token-input", { id: "firstTokenInput", placeholder: '0.0', value: '-', tokenReadOnly: false, isBalanceShown: false, isBtnMaxShown: false, isCommonShown: true, inputReadOnly: true, background: { color: Theme.input.background }, border: { radius: '1rem' }, height: 'auto', width: '100%', display: 'flex', font: { size: '1.25rem' }, padding: { left: '0.75rem', right: '0.75rem' }, tokenButtonStyles: {
                                                            background: { color: Theme.background.main },
                                                            padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' },
                                                            border: { radius: 8 },
                                                            font: { size: '1rem', weight: 700, color: Theme.input.fontColor },
                                                            lineHeight: 1.5,
                                                            opacity: 1
                                                        }, onInputAmountChanged: this.onTokenInputChange, onSelectToken: (token) => this.onSelectToken(token, true) })))),
                                        this.$render("i-hstack", { horizontalAlignment: "space-between" },
                                            this.$render("i-label", { id: "lbYouPayTitle", caption: "You Pay", font: { size: '1rem' } }),
                                            this.$render("i-label", { id: "lbYouPayValue", caption: "0", font: { size: '1rem' } }))),
                                    this.$render("i-hstack", { id: "toggleReverseImage", alignItems: "end", justifyContent: "center", stack: { basis: '32px' }, padding: { bottom: 40 }, onClick: this.onRevertSwap, mediaQueries: [
                                            {
                                                maxWidth: '767px',
                                                properties: {
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    padding: { bottom: '1rem', top: '1rem' }
                                                }
                                            }
                                        ] },
                                        this.$render("i-icon", { id: "hIcon", width: 32, height: 32, name: "arrows-alt-h", fill: Theme.text.primary, padding: { left: '0.45rem', right: '0.45rem', top: '0.45rem', bottom: '0.45rem' }, background: { color: Theme.input.background }, border: { radius: '50%' }, mediaQueries: [
                                                {
                                                    maxWidth: '767px',
                                                    properties: {
                                                        visible: false
                                                    }
                                                }
                                            ] }),
                                        this.$render("i-icon", { id: "vIcon", width: 32, height: 32, name: "arrows-alt-v", fill: Theme.text.primary, padding: { left: '0.45rem', right: '0.45rem', top: '0.45rem', bottom: '0.45rem' }, background: { color: Theme.input.background }, border: { radius: '50%' }, visible: false, mediaQueries: [
                                                {
                                                    maxWidth: '767px',
                                                    properties: {
                                                        visible: true
                                                    }
                                                }
                                            ] })),
                                    this.$render("i-vstack", { gap: 5, minWidth: 230, width: "100%" },
                                        this.$render("i-vstack", { id: "desChainBox", width: "100%", margin: { top: 8, bottom: 8 }, visible: false },
                                            this.$render("i-hstack", { gap: 8, horizontalAlignment: "space-between" },
                                                this.$render("i-label", { opacity: 0.8, caption: "Destination Chain", minWidth: "7rem" }),
                                                this.$render("i-label", { id: "desChainLabel", textOverflow: "ellipsis", margin: { left: 'auto' }, caption: "-" })),
                                            this.$render("i-hstack", { id: "desChainList", wrap: "wrap", verticalAlignment: "center", maxWidth: "100%" })),
                                        this.$render("i-panel", { height: "100%", minHeight: 120, margin: { top: 'auto' } },
                                            this.$render("i-vstack", { height: "100%", gap: 8 },
                                                this.$render("i-vstack", { width: "100%", gap: 8 },
                                                    this.$render("i-vstack", { width: "100%" },
                                                        this.$render("i-label", { caption: "You Receive", font: { size: '1.125rem' } })),
                                                    this.$render("i-hstack", { horizontalAlignment: "end", width: "100%" },
                                                        this.$render("i-label", { id: "receiveBalance", opacity: 0.55, margin: { left: 'auto' }, caption: "Balance: 0" }))),
                                                this.$render("i-panel", { id: "receiveCol", background: { color: Theme.input.background }, width: "100%", margin: { top: 'auto' }, border: { radius: '1rem', width: '2px', style: 'solid', color: 'transparent' } },
                                                    this.$render("i-scom-token-input", { id: "secondTokenInput", value: '-', placeholder: '0.0', inputReadOnly: true, tokenReadOnly: false, isBalanceShown: false, isBtnMaxShown: false, isCommonShown: true, background: { color: Theme.input.background }, border: { radius: '1rem' }, height: 'auto', width: '100%', display: 'flex', font: { size: '1.25rem' }, padding: { left: '0.75rem', right: '0.75rem' }, tokenButtonStyles: {
                                                            background: { color: Theme.background.main },
                                                            padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' },
                                                            border: { radius: 8 },
                                                            font: { size: '1rem', weight: 700, color: Theme.input.fontColor },
                                                            lineHeight: 1.5,
                                                            opacity: 1
                                                        }, onInputAmountChanged: this.onTokenInputChange, onSelectToken: (token) => this.onSelectToken(token, false) })))),
                                        this.$render("i-hstack", { horizontalAlignment: "end" },
                                            this.$render("i-label", { id: "lbRouting", caption: "No routing", opacity: 0, font: { size: '1rem' } }))))),
                            this.$render("i-hstack", { id: "minSwapHintLabel", verticalAlignment: "center", margin: { top: '-0.5rem' }, gap: '0.25rem' },
                                this.$render("i-icon", { name: "star", fill: Theme.colors.primary.main, width: 13, height: 13 }),
                                this.$render("i-label", { caption: "No crosschain routes are found. You may try updating the input amount or selecting another token.", opacity: 0.9, font: { color: Theme.colors.primary.main, size: '0.8rem' } })),
                            this.$render("i-panel", { id: "pnlPriceInfo" }),
                            this.$render("i-vstack", { horizontalAlignment: "center", width: "100%", margin: { top: 10 } },
                                this.$render("i-button", { id: "swapBtn", class: "btn-os", maxWidth: 360, height: 60, width: '100%', visible: false, rightIcon: { spin: true, visible: false, fill: Theme.colors.primary.contrastText, width: 16, height: 16 }, border: { radius: '0.65rem' }, font: { size: '1.125rem', color: Theme.colors.primary.contrastText, bold: true }, opacity: 1, lineHeight: 1.5, padding: { left: '0.75rem', right: '0.75rem', top: '0.5rem', bottom: '0.5rem' }, onClick: this.onClickSwapButton.bind(this) }))),
                        this.$render("i-modal", { id: "swapModal", width: 490, maxWidth: '100%', padding: { left: '1rem', right: '1rem', top: '0.75rem', bottom: '0.75rem' }, border: { radius: '1rem' } },
                            this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "space-between", margin: { bottom: '1.5rem' }, padding: { bottom: '0.5rem' }, border: { bottom: { width: '2px', style: 'solid', color: Theme.background.main } } },
                                this.$render("i-label", { font: { color: Theme.colors.primary.main, size: '1.25rem', weight: 700 }, caption: "Confirm Swap" }),
                                this.$render("i-icon", { fill: Theme.colors.primary.main, name: "times", width: 16, height: 16, cursor: "pointer", onClick: () => this.onCloseModal('swapModal') })),
                            this.$render("i-vstack", null,
                                this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'start' },
                                    this.$render("i-hstack", { id: "srcChainFirstPanel", verticalAlignment: "center", gap: '0.5rem' },
                                        this.$render("i-image", { id: "srcChainTokenImage", width: "30px", height: "30px", url: "#" }),
                                        this.$render("i-label", { id: "srcChainTokenLabel", font: { size: '1.1rem' }, caption: "" }),
                                        this.$render("i-icon", { name: "minus", fill: Theme.input.fontColor, width: 28, height: 10 })),
                                    this.$render("i-hstack", { verticalAlignment: "center", gap: '0.5rem' },
                                        this.$render("i-image", { id: "fromTokenImage", width: "30px", height: "30px", url: "#" }),
                                        this.$render("i-label", { id: "fromTokenLabel", font: { size: '1.1rem' }, caption: "" })),
                                    this.$render("i-label", { id: "fromTokenValue", margin: { left: 'auto' }, font: { size: '1.1rem' }, caption: " - " })),
                                this.$render("i-icon", { width: 28, height: 28, name: "arrow-down", fill: Theme.input.fontColor, border: { width: '2px', style: 'solid', color: 'transparent', radius: '50%' }, padding: { left: '0.25rem', right: '0.25rem', top: '0.25rem', bottom: '0.25rem' }, background: { color: Theme.input.background }, margin: { top: '0.75rem', bottom: '0.75rem' }, class: "arrow-down" }),
                                this.$render("i-panel", { id: "srcChainSecondPanel" },
                                    this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'start' },
                                        this.$render("i-hstack", { verticalAlignment: "center", gap: '0.5rem' },
                                            this.$render("i-image", { id: "srcChainVaultImage", width: "30px", height: "30px", url: "#" }),
                                            this.$render("i-label", { id: "srcChainVaultLabel", font: { size: '1.1rem' }, caption: "" }),
                                            this.$render("i-icon", { name: "minus", fill: Theme.input.fontColor, width: 28, height: 10 })),
                                        this.$render("i-hstack", { verticalAlignment: "center", gap: '0.5rem' },
                                            this.$render("i-image", { id: "srcVaultTokenImage", fallbackUrl: scom_token_list_6.assets.fallbackUrl, width: "30px", height: "30px", url: "#" }),
                                            this.$render("i-label", { id: "srcVaultTokenLabel", font: { size: '1.1rem' }, caption: "" })),
                                        this.$render("i-label", { id: "srcVaultTokenValue", margin: { left: 'auto' }, font: { size: '1.1rem' }, caption: "-" })),
                                    this.$render("i-icon", { width: 28, height: 28, name: "arrow-down", fill: Theme.input.fontColor, border: { width: '2px', style: 'solid', color: 'transparent', radius: '50%' }, padding: { left: '0.25rem', right: '0.25rem', top: '0.25rem', bottom: '0.25rem' }, background: { color: Theme.input.background }, margin: { top: '0.75rem', bottom: '0.75rem' }, class: "arrow-down" })),
                                this.$render("i-panel", { id: "targetChainSecondPanel" },
                                    this.$render("i-hstack", { verticalAlignment: 'center', horizontalAlignment: 'start' },
                                        this.$render("i-hstack", { verticalAlignment: "center", gap: '0.5rem' },
                                            this.$render("i-image", { id: "targetChainVaultImage", width: "30px", height: "30px", url: "#" }),
                                            this.$render("i-label", { id: "targetChainVaultLabel", font: { size: '1.1rem' }, caption: "" }),
                                            this.$render("i-icon", { name: "minus", fill: Theme.input.fontColor, width: 28, height: 10 })),
                                        this.$render("i-hstack", { verticalAlignment: "center", gap: '0.5rem' },
                                            this.$render("i-image", { id: "targetVaultTokenImage", fallbackUrl: scom_token_list_6.assets.fallbackUrl, width: "30px", height: "30px", url: "#" }),
                                            this.$render("i-label", { id: "targetVaultTokenLabel", font: { size: '1.1rem' }, caption: "" })),
                                        this.$render("i-label", { id: "targetVaultTokenValue", margin: { left: 'auto' }, font: { size: '1.1rem' }, caption: "-" })),
                                    this.$render("i-vstack", { justifyContent: 'end' },
                                        this.$render("i-label", { id: "crossChainSoftCapLabel1", opacity: 0.55, margin: { left: 'auto' } }),
                                        this.$render("i-label", { id: "targetVaultAssetBalanceLabel1", opacity: 0.55, margin: { left: 'auto' }, caption: "Vault Asset Balance: 0" }),
                                        this.$render("i-label", { id: "targetVaultBondBalanceLabel1", opacity: 0.55, margin: { left: 'auto' }, caption: "Vault Bond Balance: 0" })),
                                    this.$render("i-icon", { width: 28, height: 28, name: "arrow-down", fill: Theme.input.fontColor, border: { width: '2px', style: 'solid', color: 'transparent', radius: '50%' }, padding: { left: '0.25rem', right: '0.25rem', top: '0.25rem', bottom: '0.25rem' }, margin: { top: '0.75rem', bottom: '0.75rem' }, background: { color: Theme.input.background }, class: "arrow-down" })),
                                this.$render("i-hstack", { margin: { bottom: '1rem' }, verticalAlignment: 'center', horizontalAlignment: 'start' },
                                    this.$render("i-hstack", { id: "targetChainFirstPanel", verticalAlignment: "center", gap: '0.5rem' },
                                        this.$render("i-image", { id: "targetChainTokenImage", fallbackUrl: scom_token_list_6.assets.fallbackUrl, width: "30px", height: "30px", url: "#" }),
                                        this.$render("i-label", { id: "targetChainTokenLabel", font: { size: '1.1rem' }, caption: "" }),
                                        this.$render("i-icon", { name: "minus", fill: Theme.input.fontColor, width: 28, height: 10 })),
                                    this.$render("i-hstack", { verticalAlignment: "center", gap: '0.5rem' },
                                        this.$render("i-image", { id: "toTokenImage", width: "30px", height: "30px", url: "#" }),
                                        this.$render("i-label", { id: "toTokenLabel", font: { size: '1.1rem' }, caption: "" })),
                                    this.$render("i-label", { id: "toTokenValue", margin: { left: 'auto' }, font: { weight: 700, color: Theme.colors.primary.main }, caption: " - " })),
                                this.$render("i-vstack", { id: "crossChainVaultInfoVstack", justifyContent: 'end' },
                                    this.$render("i-label", { id: "crossChainSoftCapLabel2", opacity: 0.55, margin: { left: 'auto' } }),
                                    this.$render("i-label", { id: "targetVaultAssetBalanceLabel2", opacity: 0.55, margin: { left: 'auto' }, caption: "Vault Asset Balance: 0" }),
                                    this.$render("i-label", { id: "targetVaultBondBalanceLabel2", opacity: 0.55, margin: { left: 'auto' }, caption: "Vault Bond Balance: 0" })),
                                this.$render("i-label", { id: "lbEstimate", display: "block", margin: { bottom: '1rem' } }),
                                this.$render("i-hstack", { margin: { bottom: '1rem' }, gap: '0.25rem' },
                                    this.$render("i-label", { id: "lbPayOrReceive" }),
                                    this.$render("i-label", { id: "payOrReceiveValue", font: { weight: 700, color: Theme.colors.primary.main }, caption: "" }),
                                    this.$render("i-label", { id: "payOrReceiveToken", caption: "" }))),
                            this.$render("i-panel", { id: "priceInfoContainer", background: { color: Theme.background.main }, border: { radius: '1rem', width: '2px', style: 'solid', color: 'transparent' }, margin: { top: '1rem', bottom: '1rem' }, width: "100%" }),
                            this.$render("i-panel", { width: "100%", margin: { top: 10 } },
                                this.$render("i-button", { id: "swapModalConfirmBtn", class: "btn-os", height: "auto", width: '100%', caption: "Confirm Swap", border: { radius: '0.65rem' }, font: { size: '1.125rem', color: Theme.colors.primary.contrastText, bold: true }, opacity: 1, lineHeight: 1.5, padding: { left: '0.75rem', right: '0.75rem', top: '0.5rem', bottom: '0.5rem' }, onClick: this.doSwap }))),
                        this.$render("i-modal", { id: "modalFees", width: 490, maxWidth: '100%', padding: { left: '1rem', right: '1rem', top: '0.75rem', bottom: '0.75rem' }, border: { radius: '1rem' } },
                            this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "space-between", margin: { bottom: '0.5rem' }, padding: { bottom: '0.5rem' }, border: { bottom: { width: '2px', style: 'solid', color: Theme.background.main } } },
                                this.$render("i-label", { font: { color: Theme.colors.primary.main, size: '0.875rem', weight: 700 }, caption: "Transaction Fee Details" }),
                                this.$render("i-icon", { fill: Theme.colors.primary.main, name: "times", width: 16, height: 16, cursor: "pointer", onClick: () => this.onCloseModal('modalFees') })),
                            this.$render("i-vstack", { gap: "1rem" },
                                this.$render("i-vstack", { id: "feesInfo" }),
                                this.$render("i-hstack", { verticalAlignment: "center", horizontalAlignment: "center", margin: { bottom: '0.5rem' } },
                                    this.$render("i-button", { caption: "Close", class: "btn-os", lineHeight: 1.5, width: '150px', height: "auto", padding: { top: '0.25rem', bottom: '0.25rem', left: '0.25rem', right: '0.25rem' }, font: { size: '1rem', color: Theme.colors.primary.contrastText, weight: 700 }, onClick: () => this.closeModalFees() }))))),
                    this.$render("i-scom-tx-status-modal", { id: "txStatusModal" }),
                    this.$render("i-scom-wallet-modal", { id: "mdWallet", wallets: [] }))));
        }
    };
    ScomSwap = __decorate([
        components_7.customModule,
        (0, components_7.customElements)('i-scom-swap')
    ], ScomSwap);
    exports.default = ScomSwap;
});
