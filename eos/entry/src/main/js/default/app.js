export default {
    globalData: {
        buyData: {
            payAmount: '',                      // 购买总金额
            eachPrice: '23232324324',           // 每一个数字货币购买单价
            num: '',                            // 购买数量
            coinName: '',                        // 货币名称
            coinData: {}                        // 货币对象
        }
    },
    onCreate() {
        console.info('AceApplication onCreate');
    },
    onDestroy() {
        console.info('AceApplication onDestroy');
    }
};
