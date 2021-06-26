package com.example.myapplication;

import ohos.aafwk.content.Intent;
import ohos.ace.ability.AceAbility;

/**
 * MainAbility AceAbility
 */
public class MainAbility extends AceAbility {
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        BatteryInternalAbility.getInstance().register();
    }

    @Override
    public void onStop() {
        super.onStop();
        BatteryInternalAbility.getInstance().deregister();
    }
}
