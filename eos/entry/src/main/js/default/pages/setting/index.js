// xxx.js
import prompt from '@system.prompt'
import notification from '@system.notification';
import device from '@system.device';
import pkg from '@system.package';

export default {
    onInit() {



        this.enterkeyClick()
    },
    change(e){
        prompt.showToast({
            message: "value: " + e.value,
            duration: 3000,
        });


    },
    enterkeyClick(e){
//        prompt.showToast({
//            message: "enterkey clicked",
//            duration: 3000,
//        });

        pkg.hasInstalled({
            bundleName: 'com.example.bundlename',
            success: function(data) {
                console.log('package has installed: ' + data);
            },
            fail: function(data, code) {
                console.log('query package fail, code: ' + code + ', data: ' + data);
            },
        });


        device.getInfo({
            success: function(data) {
                console.log('Device information obtained successfully. Device brand:' + data.brand);
            },
            fail: function(data, code) {
                console.log('Failed to obtain device information. Error code:'+ code + '; Error information: ' + data);
            },
        });




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