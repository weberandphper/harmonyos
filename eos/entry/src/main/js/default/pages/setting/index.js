// xxx.js
import prompt from '@system.prompt'
import notification from '@system.notification';
import storage from '@system.storage';
export default {
    data: {
        urlParams: {},
        payAmount: '',
        eachPrice: '',
        num: ''
    },
    onInit() {
    },
    change(e){
        prompt.showToast({
            message: "value: " + e.value,
            duration: 3000,
        });
    },
    changePayAmount (e) {
        this.payAmount = e.value
    },

    changeEachPrice (e) {
        this.eachPrice = e.value
    },
    enterkeyClick(){
        this.$app.$def.globalData.buyData.payAmount = this.payAmount
        this.$app.$def.globalData.buyData.eachPrice = this.eachPrice
        this.$app.$def.globalData.buyData.coinName = this.urlParams.name
        this.$app.$def.globalData.buyData.coinData = this.urlParams
        prompt.showToast({
            message: "设置成功",
            duration: 3000,
        });
//        return
        let that = this
        storage.set({
            key: 'payAmount',
            value: this.payAmount,
            success: function() {
                console.info('call storage.set success.');

                storage.set({
                    key: 'eachPrice',
                    value: this.eachPrice,
                    success: function() {
                        console.info('call storage.set success.');

                        console.log('24324'+that.payAmount)
                        console.log('24324'+that.eachPrice)
                        console.log('243241'+that.urlParams.price_cny)

                        prompt.showToast({
                            message: "设置成功",
                            duration: 3000,
                        });



                    },
                    fail: function(data, code) {
                        console.info('call storage.set fail, code: ' + code + ', data: ' + data);
                    },
                })

            },
            fail: function(data, code) {
                console.info('call storage.set fail, code: ' + code + ', data: ' + data);
            },
        })


//        storage.get({
//            key: 'payAmount',
//            success: function (payAmount) {
//                console.log('call storage.get success1: ' + payAmount);
//                storage.get({
//                    key: 'eachPrice',
//                    success: function (eachPrice) {
//                        console.log('call storage.get success: ' + eachPrice);
//                        return payAmount / eachPrice * this.urlParams.price_cny
//                    },
//                });
//            }
//        });


//        pkg.hasInstalled({
//            bundleName: 'com.example.bundlename',
//            success: function(data) {
//                console.log('package has installed: ' + data);
//            },
//            fail: function(data, code) {
//                console.log('query package fail, code: ' + code + ', data: ' + data);
//            },
//        });
//
//
//        device.getInfo({
//            success: function(data) {
//                console.log('Device information obtained successfully. Device brand:' + data.brand);
//            },
//            fail: function(data, code) {
//                console.log('Failed to obtain device information. Error code:'+ code + '; Error information: ' + data);
//            },
//        });

        notification.show({
            contentTitle: 'title info',
            contentText: 'text',
            clickAction: {
                bundleName: 'com.huawei.testapp',
                abilityName: 'notificationDemo',
                uri: '/path/to/notification',
            },
        });
    },
    buttonClick(e){
        this.$element("input").showError({
            error: 'error text'
        });
    },


}