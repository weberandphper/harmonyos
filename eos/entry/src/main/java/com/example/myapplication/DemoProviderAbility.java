package com.example.myapplication;

import com.example.myapplication.slice.DemoProviderAbilitySlice;
import ohos.aafwk.ability.Ability;
import ohos.aafwk.content.Intent;
import ohos.wearable.complication.*;

public class DemoProviderAbility extends ComplicationProviderAbility {
    @Override
    public void onRefresh(int complicationIndex, int type, ComplicationCallback callback) {
        // 表盘请求数据时调用，可依据type组装数据，并通过callback发送回表盘
        // complicationIndex是表盘控件的ID，可以用来根据不同的显示控件发送不同的数据


        ComplicationEntity entity = new ComplicationEntity.Builder(getApplicationContext(), Complication.TYPE_LAUNCHER, ComplicationTemplate.TEMPLATE_LAUNCHER_ICON)
                .setIcon(ResourceTable.Media_icon)
                .build();
        callback.refresh(complicationIndex, entity);


    }

    @Override
    public void onAdded(int complicationIndex, int type, ComplicationCallback callback) {
        // 表盘首次添加或者绑定Complication时调用，可以保存complicationIndex，需要主动更新表盘数据时可以作为参数更新指定表盘控件
    }

    @Override
    public void onRemoved(int complicationIndex) {
        // 表盘删除此Complication时调用，可以删除本地保存的complicationIndex，不再需要触发主动更新
    }
}