gdjs.Game_32Win2Code = {};
gdjs.Game_32Win2Code.GDWinObjects1= [];
gdjs.Game_32Win2Code.GDWinObjects2= [];
gdjs.Game_32Win2Code.GDTextObjects1= [];
gdjs.Game_32Win2Code.GDTextObjects2= [];
gdjs.Game_32Win2Code.GDScoreIconObjects1= [];
gdjs.Game_32Win2Code.GDScoreIconObjects2= [];
gdjs.Game_32Win2Code.GDScoreObjects1= [];
gdjs.Game_32Win2Code.GDScoreObjects2= [];
gdjs.Game_32Win2Code.GDWin_9595signObjects1= [];
gdjs.Game_32Win2Code.GDWin_9595signObjects2= [];
gdjs.Game_32Win2Code.GDNewSpriteObjects1= [];
gdjs.Game_32Win2Code.GDNewSpriteObjects2= [];
gdjs.Game_32Win2Code.GDBrownButtonWithShadowObjects1= [];
gdjs.Game_32Win2Code.GDBrownButtonWithShadowObjects2= [];


gdjs.Game_32Win2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32Win2Code.GDScoreObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "win.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Game_32Win2Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32Win2Code.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.Game_32Win2Code.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Win2Code.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Win2Code.GDBrownButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Win2Code.GDBrownButtonWithShadowObjects1[k] = gdjs.Game_32Win2Code.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_32Win2Code.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "end", false);
}}

}


};

gdjs.Game_32Win2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Win2Code.GDWinObjects1.length = 0;
gdjs.Game_32Win2Code.GDWinObjects2.length = 0;
gdjs.Game_32Win2Code.GDTextObjects1.length = 0;
gdjs.Game_32Win2Code.GDTextObjects2.length = 0;
gdjs.Game_32Win2Code.GDScoreIconObjects1.length = 0;
gdjs.Game_32Win2Code.GDScoreIconObjects2.length = 0;
gdjs.Game_32Win2Code.GDScoreObjects1.length = 0;
gdjs.Game_32Win2Code.GDScoreObjects2.length = 0;
gdjs.Game_32Win2Code.GDWin_9595signObjects1.length = 0;
gdjs.Game_32Win2Code.GDWin_9595signObjects2.length = 0;
gdjs.Game_32Win2Code.GDNewSpriteObjects1.length = 0;
gdjs.Game_32Win2Code.GDNewSpriteObjects2.length = 0;
gdjs.Game_32Win2Code.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.Game_32Win2Code.GDBrownButtonWithShadowObjects2.length = 0;

gdjs.Game_32Win2Code.eventsList0(runtimeScene);

return;

}

gdjs['Game_32Win2Code'] = gdjs.Game_32Win2Code;
