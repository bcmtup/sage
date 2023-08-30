"use strict";

var MATRIX_ADDRESS = "0x5acc84a3e955Bdd76467d3348077d003f00fFB97";
var MATRIX_ADDRESS_XGOLD = "0x488e3a4bbbb2386ba619eed88319e807c3ddb6c2";
var DEFAULT_UPLINE = "0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E";
var COOKIE_AUTH_NAME = "auth";
var MATRIX_PRICE = 0.05;
var MATRIX_XGOLD_PRICE = 0.05;
var DEFAULT_GASPRICE = 98e9;
var GASPRICE = config && config.gasPrice ? config.gasPrice * 1e9 : DEFAULT_GASPRICE;

var MatrixContract;
var MatrixInstance;

window.getWeb3 = function(contract, callback, err) {
    if (!window.ethereum && !window.web3) {
        Notice.error(l("notDetectedWallet"));
        return false;
    }

    if (!web3.eth || !web3.eth.coinbase) {
        Notice.warning(l("unblockWallet"));
    }

    var i = 0;
    var id = setInterval(function() {
        if (i > 1800 || window.web3.eth.coinbase) {
            clearInterval(id);

            if (web3.eth.coinbase) {
                switch (contract) {
                    case 'base':
                        MatrixContract = web3.eth.contract(matrixAbi);
                        MatrixInstance = MatrixContract.at(MATRIX_ADDRESS);
                        break;
                    case 'xgold':
                        MatrixContract = web3.eth.contract(matrixXGoldAbi);
                        MatrixInstance = MatrixContract.at(MATRIX_ADDRESS_XGOLD);
                        break;
                }
                callback(window.web3, true);
            }
        } else if (++i == 1) {
            // Modern dapp browsers...
            if (window.ethereum) {
                window.web3 = new Web3(ethereum);

                try {
                    // Request account access if needed
                    ethereum.enable();
                } catch (error) {
                    Notice.error(error.message);
                    return false;
                }
            } // Legacy dapp browsers...
            else if (window.web3) {
                window.web3 = new Web3(web3.currentProvider);
            }
        }
    }, 100);
}; // Run app

setTimeout(function() {
    if (!window.ethereum || typeof window.ethereum.on != "function") {
        return false;
    } // Обработка события при смене кошелька
    window.ethereum.on("accountsChanged", function(accounts) {
        if (config.user.isAuthSecure) {
            // Деавторизация при смене кошелька
            if (config.user.address && config.user.address != web3.eth.coinbase) {
                window.location = "/auth/logout/";
            }
        }
    });
}, 1500);

// Запомнить подписанную сессию пользователя 
function rememberSession(userAddress, sessionCallback) {
    var hash = config.user.sid || "unknown";
    signMessage(hash).then(function(sign) {
        $.ajax({
            url: "/ajax/auth/",
            type: "POST",
            cache: false,
            async: true,
            dataType: "json",
            data: {
                userAddress: userAddress,
                sign: sign,
                hash: hash
            },
            success: function success(val, status) {
                if (status != "success") {
                    console.log("Unsuccessful  Ajax request: " + jqXHR.responseText);
                    Notice.warning(l("authError"));
                    sessionCallback(false);
                    return;
                }

                if (val.status == "success") {
                    Notice.success(val.message);
                    sessionCallback(true, {
                        redirect: val.params.hash ? "/?" + val.params.key + "=" + val.params.hash : config.previousUrl
                    });
                } else {
                    Notice.warning(val.message);
                    sessionCallback(false);
                }
            },
            error: function error(jqXHR, textStatus, errorThrown) {
                console.log("Error Ajax request: " + jqXHR.responseText);
                Notice.warning(l("authError"));
                sessionCallback(false);
            }
        });
    }, function(error) {
        Notice.warning(l("authError"));
        sessionCallback(false);
        return;
    });
    sessionCallback(false);
    return;
}

function regByGroup(partner, partnerStack) {
    $.ajax({
        url: "/ajax/regByGroup/",
        type: "POST",
        cache: false,
        async: true,
        data: {
            partner: partner,
            partnerStack: partnerStack
        },
        success: function success(val, status) {
            if (status != "success") {
                alert("Unsuccessful  Ajax request: " + jqXHR.responseText);
                console.log("Unsuccessful  Ajax request: " + jqXHR.responseText);
                return;
            }

            if (val.status != "success") {
                alert(val.message);
            }

            console.log("Group link: ", val.message);
        },
        error: function error(jqXHR, textStatus, errorThrown) {
            alert("Error Ajax request: " + jqXHR.responseText);
            console.log("Error Ajax request: " + jqXHR.responseText);
        }
    });
}

// Цифровая подпись кошелька
function signMessage(message) {
    return new Promise(function(ok, fail) {
        getWeb3('base', function(web3) {
            web3.personal.sign(web3.fromUtf8(message), web3.eth.coinbase, function(error, sign) {
                if (error) {
                    fail(error);
                } else {
                    ok(sign);
                }
            });
        });
    });
}

function getCurrentAddress(callback) {
    getWeb3('base', function(web3) {
        callback(web3.eth.coinbase);
    });
}

function getAddressById(id, callback) {
    getWeb3('base', function(web3) {
        if (id.match(/^[0-9]+$/)) {
            MatrixInstance.userIds(id, {}, function(err, res) {
                callback(err, res);
            });
        } else {
            callback(false, false);
        }
    });
}

function getIdByAddress(address, callback) {
    getWeb3('base', function(web3) {
        if (address.match(/^0x[a-f0-9]{40}$/i)) {
            MatrixInstance.users(address, {}, function(err, res) {
                callback(err, res);
            });
        } else {
            callback(false, false);
        }
    });
}

function getUserId(callback) {
    getWeb3('base', function(web3) {
        MatrixInstance.users(web3.eth.coinbase, {}, function(err, res) {
            console.log(res)
            var userId = (res && res[0] && res[0]['c'] && res[0]['c'][0]) || '?';
            callback(err, userId);
        });
    });
}

function getInfoByTransaction(tx, callback) {
    var defaultData = {
        block: null,
        blockNumber: 0,
        transaction: null,
        countConfirmation: 0
    };
    getWeb3('base', function(web3) {
        web3.eth.getBlockNumber(function(err, blockNumber) {
            if (err) {
                callback(err, defaultData);
                return false;
            }

            web3.eth.getTransaction(tx, function(err, transaction) {
                if (err) {
                    callback(err, defaultData);
                    return false;
                }

                if (!transaction) {
                    callback(null, defaultData);
                    return false;
                }

                web3.eth.getBlock(transaction.blockNumber, function(err, block) {
                    if (err) {
                        callback(err, defaultData);
                        return false;
                    }

                    var countConfirmation = transaction.blockNumber === null ? 0 : blockNumber - transaction.blockNumber;
                    callback(err, {
                        block: block,
                        blockNumber: blockNumber,
                        transaction: transaction,
                        countConfirmation: countConfirmation
                    });
                    return true;
                });
            });
        });
    });
}

// Auto login
function login(userAddress) {
    if (config.locked.authorization) {
        alert(config.locked.authorization);
        return false;
    }
    getWeb3('base', function(web3) {
        MatrixInstance.isUserExists(web3.eth.coinbase, function(err, isUserExists) {
            if (err) {
                Notice.error(l("errorReadSmartContract") + ": " + err);
                return false;
            }
            if (!isUserExists) {
                userAddress(isUserExists, web3.eth.coinbase);
                return false;
            }
            setCookie(COOKIE_AUTH_NAME, web3.eth.coinbase);
            window.location.href = '/';
        });
    });
    return false;
}

// Auto login
function autoLogin(userAddress) {
    if (config.locked.authorization) {
        alert(config.locked.authorization);
        return false;
    }
    getWeb3('base', function(web3) {
        MatrixInstance.isUserExists(web3.eth.coinbase, function(err, isUserExists) {
            if (err) {
                Notice.error(l("errorReadSmartContract") + ": " + err);
                return false;
            }
            if (!isUserExists) {
                userAddress(isUserExists, web3.eth.coinbase);
                return false;
            }
            rememberSession(web3.eth.coinbase, function(err, result) {
                // Иначе выводим ошибку авторизации
                if (!err) {
                    return false;
                }
                if (!storage('welcomeWindow') && (getCookie('lang') == 'ru' || document.documentElement.lang == 'ru')) {
                    storage('welcomeWindow', 0);
                }
                if (result.redirect) {
                    setTimeout(function() {
                        window.location.href = result.redirect;
                    }, 2500);
                }
            });
            userAddress(isUserExists, web3.eth.coinbase);
            return true;
        });
    });
    return false;
}

// Registration
function registrationUser(data, response) {
    if (config.locked.registration) {
        alert(config.locked.registration);
        return false;
    }
    getWeb3('base', function(web3) {
        if (typeof MatrixInstance == "undefined") {
            Notice.error(l("notActiveWallet"));
            return false;
        }
        var upline = data.upline || data.uplineDefault || "";

        var registration = function registration(uplineAddress) {
            MatrixInstance.registrationExt(uplineAddress, {
                value: web3.toWei(MATRIX_PRICE),
                gasPrice: GASPRICE

            }, function(err, tx) {
                if (err) {
                    Notice.warning(l("errorSendingTransaction") + err.message);
                    return false;
                }
                Notice.success(l("transactionSend"));
                setCookie(COOKIE_AUTH_NAME, web3.eth.coinbase);
                if (data.ug != "") {
                    regByGroup(data.upline, data.ug);
                }
                // Google Analytics
                _ga(0, 1, MATRIX_PRICE, tx, {
                    upline: upline
                });
                response(false, uplineAddress, {
                    tx: tx
                });
            });
            Notice.warning(l("confirmTransaction"));
        };

        if (upline.match(/^[0-9]+$/)) {
            MatrixInstance.userIds(upline, {}, function(err, res) {
                if (err) {
                    Notice.error(l("errorReadSmartContract") + ": " + err);
                    return false;
                }

                if (res && res != "0x0000000000000000000000000000000000000000") {
                    registration(res);
                } else {
                    Notice.error(l("uplineNotRegistered"));
                    response(true);
                }
            });
        } else if (upline.match(/^0x[a-f0-9]{40}$/i)) {
            registration(upline);
        } else {
            registration(DEFAULT_UPLINE);
        }
        return false;
    });
    return false;
}

// Registration
function registrationUserXGold(response) {
    if (config.locked.registration) {
        alert(config.locked.registration);
        return false;
    }
    getWeb3('xgold', function(web3) {
        if (typeof MatrixInstance == "undefined") {
            Notice.error(l("notActiveWallet"));
            return false;
        }
        MatrixInstance.registrationExt({
                value: web3.toWei(MATRIX_XGOLD_PRICE),
                gasPrice: GASPRICE
            },
            function(err, tx) {
                if (err) {
                    Notice.warning(l("errorSendingTransaction") + err.message);
                    callback(err);
                    return false;
                }
                Notice.success(l("transactionSend"));
                // Google Analytics
                _ga(3, 1, MATRIX_XGOLD_PRICE, tx, {
                    upline: null
                });
                response(err, tx);
            }
        );
    });
    return false;
}

// Buy level
function buyLevel(matrix, level, price, response) {
    if (config.locked.buyLevel) {
        alert(config.locked.buyLevel);
        return false;
    }
    getWeb3('base', function(web3) {
        if (typeof MatrixInstance == "undefined") {
            Notice.error(l("notActiveWallet"));
            return false;
        }
        if (response && (!config || !config.user || !config.user.address || config.user.address != web3.eth.coinbase)) {
            response('isNotOwner');
            Notice.error(l("notAccountOwner"));
            return false;
        }
        MatrixInstance.buyNewLevel(matrix, level, {
            value: web3.toWei(price),
            gasPrice: GASPRICE

        }, function(err, tx) {
            if (err) {
                return Notice.warning(l("errorSendingTransaction") + err.message);
            }
            response && response(false, tx);
            Notice.success(l("transactionSend"));
            // Google Analytics
            _ga(matrix, level, price, tx, {
                upline: null
            })
        });
        Notice.warning(l("confirmTransaction"));
    });
}

// Buy level XGold
function buyLevelXGold(level, price, response) {
    if (config.locked.buyLevel) {
        alert(config.locked.buyLevel);
        return false;
    }
    getWeb3('xgold', function(web3) {
        // web3.eth.getGasPrice(function (err, result) {
        if (typeof MatrixInstance == "undefined") {
            Notice.error(l("notActiveWallet"));
            return false;
        }
        if (response && (!config || !config.user || !config.user.address || config.user.address != web3.eth.coinbase)) {
            response('isNotOwner');
            Notice.error(l("notAccountOwner"));
            return false;
        }
        MatrixInstance.buyNewLevel(level, {
            value: web3.toWei(price),
            gasPrice: GASPRICE // gasPrice: !err ? parseInt(result.toFixed()) + 3e9 : DEFAULT_GASPRICE

        }, function(err, tx) {
            if (err) {
                return Notice.warning(l("errorSendingTransaction") + err.message);
            }
            response && response(false, tx);
            Notice.success(l("transactionSend"));
            gaAssociationTransactionHash(tx);
        });
        Notice.warning(l("confirmTransaction")); // });
    });
}

function gaAssociationTransactionHash(tx) {
    var cid = cookie('cid');
    $.ajax({
        url: '/ajax/ga/',
        type: 'POST',
        cache: false,
        async: true,
        dataType: 'json',
        data: {
            cid: cid,
            tx: tx
        },
        success: function success(val, status) {
            if (val.status == 'success') {
                console.log('gaAssociationTransactionHash: ', val);
            }
        },
        error: function error(jqXHR, textStatus, errorThrown) {
            console.log('Error Ajax request: ' + jqXHR.responseText, jqXHR);
        }
    });
}

function _ga(matrix, level, price, tx, params) {
    var that = this;
    if (typeof ga !== 'function') {
        return false;
    }
    if (!params) {
        params = {};
    }
    if (!params.upline) {
        params.upline = {};
    }

    var coinName = 'ETH';

    var uplineId = '';
    if (params.upline === null) {
        if (config && config.user && config.user.referrerId) {
            params.upline = config.user.referrerId;
        }
    }

    var matrixTitle = '';
    switch (matrix) {
        case 0:
            matrixTitle = 'X3X4';
            break;
        case 1:
            matrixTitle = 'X3';
            break;
        case 2:
            matrixTitle = 'X4';
            break;
        case 3:
            matrixTitle = 'XGold';
            break;
        default:
            matrixTitle = 'MT';
            break;
    }

    var eventName = '';
    var eventType = '';
    if (price == 0) {
        eventName = 'REACTIVATION';
    } else {
        if (matrix == 3 && price == MATRIX_PRICE) {
            eventName = 'REGISTRATION';
            eventType = 'REG';
        } else if (matrix == 0) {
            eventName = 'REGISTRATION';
            eventType = 'REG';
        } else {
            eventName = 'UPGRADE';
            eventType = 'BUY';
        }
    }

    var userId = '?';
    if (typeof config.user.id !== "undefined") {
        userId = config.user.id;
    }
    ga('create', 'UA-171694820-1', params);
    ga('require', 'ec');
    // ga('set',     '&uid', userId);
    // ga('set', 'dimension1', userId);
    ga('set', 'currencyCode', 'USD');
    ga('set', 'nonInteraction', true);
    ga('ec:addProduct', {
        id: `${matrixTitle}_${level}_${coinName}`,
        name: `${eventType}_${matrixTitle}_${level}_${coinName}`,
        category: eventName,
        brand: coinName,
        variant: coinName,
        price: price,
        quantity: 1
    });
    ga('ec:setAction', 'purchase', {
        id: tx,
        affiliation: params.upline,
        revenue: price,
    });
    ga('send', {
        hitType: 'event',
        eventCategory: eventName,
        eventAction: `${matrixTitle}_${level}_${coinName}`,
        eventLabel: coinName
    });

    // Yandex Analytics
    dataLayer.push({
        "ecommerce": {
            "purchase": {
                "actionField": {
                    "id": `TRX${userId}`
                },
                "products": [{
                    "id": `ID${userId}`,
                    "name": `${eventType}_${matrixTitle}_${level}_${coinName}`,
                    "price": price,
                    "brand": coinName,
                    "variant": coinName,
                    "category": eventName,
                    "quantity": 1
                }, ]
            }
        }
    });
    return true;
}

function getActiveX3Levels(userAddress) {
    MatrixInstance.getActiveX3Levels(userAddress, function(err, result) {
        if (!err) {
            return result;
        } else {
            return err;
        }
    });
}

function getActiveX6Levels(userAddress) {
    MatrixInstance.getActiveX3Levels(userAddress, function(err, result) {
        if (!err) {
            return result;
        } else {
            return err;
        }
    });
}

function getX3Matrix(userAddress, level) {
    MatrixInstance.usersX3Matrix(userAddress, level, function(err, result) {
        if (!err) {
            return result;
        } else {
            return err;
        }
    });
}

function getX6Matrix(userAddress, level) {
    MatrixInstance.usersX6Matrix(userAddress, level, function(err, result) {
        if (!err) {
            return result;
        } else {
            return err;
        }
    });
}

function logger(filename, message) {
    $.ajax({
        url: '/service/logger/',
        type: 'POST',
        cache: false,
        async: true,
        dataType: 'json',
        data: {
            filename: filename,
            message: message
        },
        success: function success(val, status) {
            if (val.status == 'success') {}
        },
        error: function error(jqXHR, textStatus, errorThrown) {
            console.log('Error Ajax request: ', jqXHR);
        }
    });
}

var matrixAbi = [{
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "balances",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "lastUserId",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "uint256"
    }],
    "name": "userIds",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "users",
    "outputs": [{
        "name": "id",
        "type": "uint256"
    }, {
        "name": "referrer",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "uint8"
    }],
    "name": "levelPrice",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "name": "ownerAddress",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "user",
        "type": "address"
    }, {
        "indexed": false,
        "name": "referrer",
        "type": "address"
    }],
    "name": "Registration",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "user",
        "type": "address"
    }, {
        "indexed": true,
        "name": "currentReferrer",
        "type": "address"
    }, {
        "indexed": false,
        "name": "matrix",
        "type": "uint8"
    }, {
        "indexed": false,
        "name": "level",
        "type": "uint8"
    }],
    "name": "Reinvest",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "user",
        "type": "address"
    }, {
        "indexed": true,
        "name": "referrer",
        "type": "address"
    }, {
        "indexed": false,
        "name": "matrix",
        "type": "uint8"
    }, {
        "indexed": false,
        "name": "level",
        "type": "uint8"
    }],
    "name": "Upgrade",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "user",
        "type": "address"
    }, {
        "indexed": true,
        "name": "referrer",
        "type": "address"
    }, {
        "indexed": false,
        "name": "matrix",
        "type": "uint8"
    }, {
        "indexed": false,
        "name": "level",
        "type": "uint8"
    }, {
        "indexed": false,
        "name": "place",
        "type": "uint8"
    }],
    "name": "NewUserPlace",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "user",
        "type": "address"
    }, {
        "indexed": true,
        "name": "referrer",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }],
    "name": "MoneyHolded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "user",
        "type": "address"
    }, {
        "indexed": true,
        "name": "referrer",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }],
    "name": "MoneyUnholded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "user",
        "type": "address"
    }, {
        "indexed": false,
        "name": "matrix",
        "type": "uint8"
    }, {
        "indexed": false,
        "name": "level",
        "type": "uint8"
    }],
    "name": "MatixClosed",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "user",
        "type": "address"
    }, {
        "indexed": false,
        "name": "money",
        "type": "uint256"
    }],
    "name": "CannotSendMoney",
    "type": "event"
}, {
    "constant": false,
    "inputs": [{
        "name": "referrerAddress",
        "type": "address"
    }],
    "name": "registrationExt",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "matrix",
        "type": "uint8"
    }, {
        "name": "level",
        "type": "uint8"
    }],
    "name": "buyNewLevel",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }, {
        "name": "level",
        "type": "uint8"
    }],
    "name": "findFreeX3Referrer",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }, {
        "name": "level",
        "type": "uint8"
    }],
    "name": "findFreeX6Referrer",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }, {
        "name": "level",
        "type": "uint8"
    }],
    "name": "usersActiveX3Levels",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }, {
        "name": "level",
        "type": "uint8"
    }],
    "name": "usersActiveX6Levels",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }, {
        "name": "level",
        "type": "uint8"
    }],
    "name": "usersX3Matrix",
    "outputs": [{
        "name": "",
        "type": "address"
    }, {
        "name": "",
        "type": "address[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }, {
        "name": "level",
        "type": "uint8"
    }],
    "name": "usersX6Matrix",
    "outputs": [{
        "name": "",
        "type": "address"
    }, {
        "name": "",
        "type": "address[]"
    }, {
        "name": "",
        "type": "address[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "user",
        "type": "address"
    }],
    "name": "isUserExists",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getActiveX3Levels",
    "outputs": [{
        "name": "res",
        "type": "bool[12]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "userAddress",
        "type": "address"
    }],
    "name": "getActiveX6Levels",
    "outputs": [{
        "name": "res",
        "type": "bool[12]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];

var matrixXGoldAbi = [{
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            }
        ],
        "name": "MissedEthReceive",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "referrer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "place",
                "type": "uint8"
            }
        ],
        "name": "NewUserPlace",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "referrer",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "userId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "referrerId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "xGoldStorageAddress",
                "type": "address"
            }
        ],
        "name": "Registration",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "currentReferrer",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            }
        ],
        "name": "Reinvest",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "ReleasedETH",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "xGoldStorageAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "StoredETH",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "referrer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            }
        ],
        "name": "Upgrade",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "MAX_LEVEL",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractOwner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "controller",
        "outputs": [{
            "internalType": "contract Controller",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "firstLevelUpdater",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "forsage",
        "outputs": [{
            "internalType": "contract Forsage",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "fourthLevelUpdater",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "idToAddress",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "impl",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "name": "levelPrice",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "secondLevelUpdater",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "thirdLevelUpdater",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "users",
        "outputs": [{
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "referrer",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "exists",
                "type": "bool"
            },
            {
                "internalType": "address payable",
                "name": "storageAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_controllerAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_forsage",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_firstLevelUpdater",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_secondLevelUpdater",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_thirdLevelUpdater",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_fourthLevelUpdater",
                "type": "address"
            }
        ],
        "name": "init",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "registrationExt",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint8",
            "name": "level",
            "type": "uint8"
        }],
        "name": "buyNewLevel",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            }
        ],
        "name": "findFreeX6Referrer",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            }
        ],
        "name": "usersActiveX6Levels",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            }
        ],
        "name": "usersX6Matrix",
        "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address[2]",
                "name": "",
                "type": "address[2]"
            },
            {
                "internalType": "address[4]",
                "name": "",
                "type": "address[4]"
            },
            {
                "internalType": "address[8]",
                "name": "",
                "type": "address[8]"
            },
            {
                "internalType": "address[16]",
                "name": "",
                "type": "address[16]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "user",
            "type": "address"
        }],
        "name": "isUserExists",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "trcTokenAddress",
            "type": "address"
        }],
        "name": "withdrawLostTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];