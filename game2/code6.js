gdjs.host1Code = {};
gdjs.host1Code.GDNewSpriteObjects1= [];
gdjs.host1Code.GDNewSpriteObjects2= [];
gdjs.host1Code.GDflourObjects1= [];
gdjs.host1Code.GDflourObjects2= [];
gdjs.host1Code.GDeggObjects1= [];
gdjs.host1Code.GDeggObjects2= [];
gdjs.host1Code.GDeggiconObjects1= [];
gdjs.host1Code.GDeggiconObjects2= [];
gdjs.host1Code.GDflouriconObjects1= [];
gdjs.host1Code.GDflouriconObjects2= [];
gdjs.host1Code.GDwatericonObjects1= [];
gdjs.host1Code.GDwatericonObjects2= [];
gdjs.host1Code.GDwater_9595scoreObjects1= [];
gdjs.host1Code.GDwater_9595scoreObjects2= [];
gdjs.host1Code.GDflour_9595scoreObjects1= [];
gdjs.host1Code.GDflour_9595scoreObjects2= [];
gdjs.host1Code.GDegg_9595scoreObjects1= [];
gdjs.host1Code.GDegg_9595scoreObjects2= [];
gdjs.host1Code.GDwaterObjects1= [];
gdjs.host1Code.GDwaterObjects2= [];
gdjs.host1Code.GDbuttonObjects1= [];
gdjs.host1Code.GDbuttonObjects2= [];
gdjs.host1Code.GDNewSprite2Objects1= [];
gdjs.host1Code.GDNewSprite2Objects2= [];
gdjs.host1Code.GDNewSprite3Objects1= [];
gdjs.host1Code.GDNewSprite3Objects2= [];
gdjs.host1Code.GDBrownButtonWithShadowObjects1= [];
gdjs.host1Code.GDBrownButtonWithShadowObjects2= [];
gdjs.host1Code.GDBrownButtonWithShadow2Objects1= [];
gdjs.host1Code.GDBrownButtonWithShadow2Objects2= [];


gdjs.host1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.host1Code.GDBrownButtonWithShadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow2"), gdjs.host1Code.GDBrownButtonWithShadow2Objects1);
gdjs.copyArray(runtimeScene.getObjects("egg_score"), gdjs.host1Code.GDegg_9595scoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("flour_score"), gdjs.host1Code.GDflour_9595scoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("water_score"), gdjs.host1Code.GDwater_9595scoreObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "win.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.host1Code.GDwater_9595scoreObjects1.length ;i < len;++i) {
    gdjs.host1Code.GDwater_9595scoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score_water2"))));
}
}{for(var i = 0, len = gdjs.host1Code.GDflour_9595scoreObjects1.length ;i < len;++i) {
    gdjs.host1Code.GDflour_9595scoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.host1Code.GDegg_9595scoreObjects1.length ;i < len;++i) {
    gdjs.host1Code.GDegg_9595scoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score_egg2"))));
}
}{for(var i = 0, len = gdjs.host1Code.GDBrownButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.host1Code.GDBrownButtonWithShadowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.host1Code.GDBrownButtonWithShadow2Objects1.length ;i < len;++i) {
    gdjs.host1Code.GDBrownButtonWithShadow2Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score_water2")) >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score_egg2")) >= 3;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.host1Code.GDBrownButtonWithShadowObjects1);
{for(var i = 0, len = gdjs.host1Code.GDBrownButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.host1Code.GDBrownButtonWithShadowObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score_water2")) < 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score_egg2")) < 3;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow2"), gdjs.host1Code.GDBrownButtonWithShadow2Objects1);
{for(var i = 0, len = gdjs.host1Code.GDBrownButtonWithShadow2Objects1.length ;i < len;++i) {
    gdjs.host1Code.GDBrownButtonWithShadow2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.host1Code.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.host1Code.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.host1Code.GDBrownButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.host1Code.GDBrownButtonWithShadowObjects1[k] = gdjs.host1Code.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.host1Code.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Win", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow2"), gdjs.host1Code.GDBrownButtonWithShadow2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.host1Code.GDBrownButtonWithShadow2Objects1.length;i<l;++i) {
    if ( gdjs.host1Code.GDBrownButtonWithShadow2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.host1Code.GDBrownButtonWithShadow2Objects1[k] = gdjs.host1Code.GDBrownButtonWithShadow2Objects1[i];
        ++k;
    }
}
gdjs.host1Code.GDBrownButtonWithShadow2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};

gdjs.host1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.host1Code.GDNewSpriteObjects1.length = 0;
gdjs.host1Code.GDNewSpriteObjects2.length = 0;
gdjs.host1Code.GDflourObjects1.length = 0;
gdjs.host1Code.GDflourObjects2.length = 0;
gdjs.host1Code.GDeggObjects1.length = 0;
gdjs.host1Code.GDeggObjects2.length = 0;
gdjs.host1Code.GDeggiconObjects1.length = 0;
gdjs.host1Code.GDeggiconObjects2.length = 0;
gdjs.host1Code.GDflouriconObjects1.length = 0;
gdjs.host1Code.GDflouriconObjects2.length = 0;
gdjs.host1Code.GDwatericonObjects1.length = 0;
gdjs.host1Code.GDwatericonObjects2.length = 0;
gdjs.host1Code.GDwater_9595scoreObjects1.length = 0;
gdjs.host1Code.GDwater_9595scoreObjects2.length = 0;
gdjs.host1Code.GDflour_9595scoreObjects1.length = 0;
gdjs.host1Code.GDflour_9595scoreObjects2.length = 0;
gdjs.host1Code.GDegg_9595scoreObjects1.length = 0;
gdjs.host1Code.GDegg_9595scoreObjects2.length = 0;
gdjs.host1Code.GDwaterObjects1.length = 0;
gdjs.host1Code.GDwaterObjects2.length = 0;
gdjs.host1Code.GDbuttonObjects1.length = 0;
gdjs.host1Code.GDbuttonObjects2.length = 0;
gdjs.host1Code.GDNewSprite2Objects1.length = 0;
gdjs.host1Code.GDNewSprite2Objects2.length = 0;
gdjs.host1Code.GDNewSprite3Objects1.length = 0;
gdjs.host1Code.GDNewSprite3Objects2.length = 0;
gdjs.host1Code.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.host1Code.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.host1Code.GDBrownButtonWithShadow2Objects1.length = 0;
gdjs.host1Code.GDBrownButtonWithShadow2Objects2.length = 0;

gdjs.host1Code.eventsList0(runtimeScene);

return;

}

gdjs['host1Code'] = gdjs.host1Code;
