export const AboutAbility = {
    openWebView: async function(){
        var actionData = {};

        var action = {};
        action.bundleName = 'com.example.myapplication';
        action.abilityName = 'com.example.phone.ability.ServiceB';
        action.messageCode = 1001;
        action.data = actionData;
        action.abilityType = 0;
        action.syncOption = 0;

        var result = await FeatureAbility.callAbility(action);
        var ret = JSON.parse(result);
        if (ret.code == 0) {
            console.log(ret);
        } else {
            console.error(JSON.stringify(ret.code));
        }
    },
}

export default {
    data: {
        title: 'World'
    },
    async openWebView(){
        AboutAbility.openWebView();
    }
}