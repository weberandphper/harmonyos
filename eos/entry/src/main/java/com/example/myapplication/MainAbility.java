package com.example.myapplication;

import ohos.aafwk.content.Intent;
import ohos.ace.ability.AceAbility;

import ohos.event.notification.NotificationHelper;
import ohos.event.notification.NotificationRequest;
import ohos.event.notification.NotificationSlot;
import ohos.rpc.RemoteException;

import static ohos.data.search.schema.PhotoItem.TAG;

/**
 * MainAbility AceAbility
 */
public class MainAbility extends AceAbility {
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        BatteryInternalAbility.getInstance().register();

        NotificationSlot slot = new NotificationSlot("43243", "ONGOING_CARD_NAME", 1);
        slot.setDescription("ONGOING_CARD_SLOT_DESCRIPTION");

        try {
            NotificationHelper.addNotificationSlot(slot);
        } catch (RemoteException e) {
            e.printStackTrace();
        }


        NotificationRequest request = new NotificationRequest(1);
////        request.setLittleIcon(PixelMap) // 设置卡片图标
//        String text = "There is an ongoing notification content.";
//        content.setText("text"); // 设置卡片内容
//        String additionalText = "This is additional content";



        String title = "title";
        String text = "祝一朵浪花的eos大涨，谢谢";
        NotificationRequest.NotificationNormalContent content = new NotificationRequest.NotificationNormalContent();
        content.setTitle(title)
                .setText(text);
        NotificationRequest.NotificationContent notificationContent = new NotificationRequest.NotificationContent(content);
        request.setContent(notificationContent); // 设置通知的内容

//        request.setIntentAgent(intentAgent); // 设置通知可以触发的事件



        // 方法一：直接在发送的方法中设置标签
        try {
            NotificationHelper.publishNotification("Ongoing_Overview", request); // 设置ongoing标签
        } catch (RemoteException exception) {
//            LogUtil.error(TAG, "A remote exception occurred when publish ongoing card notification.");
        }



// 或者将相应服务保留在后台并发送通知


    }

    @Override
    public void onStop() {
        super.onStop();
        BatteryInternalAbility.getInstance().deregister();
    }
}
