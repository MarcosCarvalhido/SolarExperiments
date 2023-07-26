gdjs.Cena_32sem_32t_237tuloCode = {};
gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewTiledSpriteObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewTiledSpriteObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewTiledSprite2Objects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewTiledSprite2Objects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewShapePainterObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewShapePainterObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDDeathZoneObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDDeathZoneObjects2= [];


gdjs.Cena_32sem_32t_237tuloCode.eventsList0 = function(runtimeScene) {

};gdjs.Cena_32sem_32t_237tuloCode.eventsList1 = function(runtimeScene) {

};gdjs.Cena_32sem_32t_237tuloCode.eventsList2 = function(runtimeScene) {

};gdjs.Cena_32sem_32t_237tuloCode.eventsList3 = function(runtimeScene) {

};gdjs.Cena_32sem_32t_237tuloCode.eventsList4 = function(runtimeScene) {

};gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDCat1Objects1Objects = Hashtable.newFrom({"Cat1": gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1});
gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDDeathZoneObjects1Objects = Hashtable.newFrom({"DeathZone": gdjs.Cena_32sem_32t_237tuloCode.GDDeathZoneObjects1});
gdjs.Cena_32sem_32t_237tuloCode.eventsList5 = function(runtimeScene) {

};gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1});
gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDCat1Objects1Objects = Hashtable.newFrom({"Cat1": gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1});
gdjs.Cena_32sem_32t_237tuloCode.eventsList6 = function(runtimeScene) {

{


gdjs.Cena_32sem_32t_237tuloCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length !== 0 ? gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[0] : null), true, "", 0);
}}

}


{


gdjs.Cena_32sem_32t_237tuloCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9633484);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].setAnimationName("Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length;i<l;++i) {
    if ( !(gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length;i<l;++i) {
    if ( !(gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9634972);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].flipX(false);
}
}}

}


{


gdjs.Cena_32sem_32t_237tuloCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].rotate(15000, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].rotateTowardAngle(360, 0, runtimeScene);
}
}}

}


{


gdjs.Cena_32sem_32t_237tuloCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9638404);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].getBehavior("PlatformerObject").setMaxSpeed(3000);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].getBehavior("PlatformerObject").setDeceleration(gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].getBehavior("PlatformerObject").getDeceleration() + (1000));
}
}}

}


{


gdjs.Cena_32sem_32t_237tuloCode.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].setPosition(590,448);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1);
gdjs.copyArray(runtimeScene.getObjects("DeathZone"), gdjs.Cena_32sem_32t_237tuloCode.GDDeathZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDCat1Objects1Objects, gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDDeathZoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1[i].setPosition(590,448);
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects1[i].setString("Murreu");
}
}}

}


{


gdjs.Cena_32sem_32t_237tuloCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Cat1"), gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDNewSpriteObjects1Objects, gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_46Cena_9532sem_9532t_95237tuloCode_46GDCat1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1[i].resetTimer("timer1");
}
}{runtimeScene.getScene().getVariables().get("Score").add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1[i].getTimerElapsedTimeInSecondsOrNaN("timer1") >= 2 ) {
        isConditionTrue_0 = true;
        gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1[k] = gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Score")));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Cena_32sem_32t_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDCat1Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewTextObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewShapePainterObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewShapePainterObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDDeathZoneObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDDeathZoneObjects2.length = 0;

gdjs.Cena_32sem_32t_237tuloCode.eventsList6(runtimeScene);

return;

}

gdjs['Cena_32sem_32t_237tuloCode'] = gdjs.Cena_32sem_32t_237tuloCode;
