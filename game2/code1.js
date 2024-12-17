gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDDeathObjects1= [];
gdjs.Game_32OverCode.GDDeathObjects2= [];
gdjs.Game_32OverCode.GDTextObjects1= [];
gdjs.Game_32OverCode.GDTextObjects2= [];
gdjs.Game_32OverCode.GDdead_9595signObjects1= [];
gdjs.Game_32OverCode.GDdead_9595signObjects2= [];
gdjs.Game_32OverCode.GDBrownButtonWithShadowObjects1= [];
gdjs.Game_32OverCode.GDBrownButtonWithShadowObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "fail.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.Game_32OverCode.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDBrownButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDBrownButtonWithShadowObjects1[k] = gdjs.Game_32OverCode.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDDeathObjects1.length = 0;
gdjs.Game_32OverCode.GDDeathObjects2.length = 0;
gdjs.Game_32OverCode.GDTextObjects1.length = 0;
gdjs.Game_32OverCode.GDTextObjects2.length = 0;
gdjs.Game_32OverCode.GDdead_9595signObjects1.length = 0;
gdjs.Game_32OverCode.GDdead_9595signObjects2.length = 0;
gdjs.Game_32OverCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.Game_32OverCode.GDBrownButtonWithShadowObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
