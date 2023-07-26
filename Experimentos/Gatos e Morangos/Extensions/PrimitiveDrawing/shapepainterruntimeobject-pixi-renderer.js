var gdjs;(function(l){const n=GlobalPIXIModule.PIXI,c=class{constructor(t,i){this._positionXIsUpToDate=!1;this._positionYIsUpToDate=!1;this._transformationIsUpToDate=!1;this._antialiasingFilter=null;this._object=t,this._graphics=new n.Graphics,i.getLayer("").getRenderer().addRendererObject(this._graphics,t.getZOrder()),this.updateAntialiasing()}getRendererObject(){return this._graphics}clear(){this._graphics.clear(),this.invalidateBounds()}drawRectangle(t,i,a,s){this.updateOutline(),this._graphics.beginFill(this._object._fillColor,this._object._fillOpacity/255),this._graphics.drawRect(t,i,a-t,s-i),this._graphics.endFill(),this.invalidateBounds()}drawCircle(t,i,a){this.updateOutline(),this._graphics.beginFill(this._object._fillColor,this._object._fillOpacity/255),this._graphics.drawCircle(t,i,a),this._graphics.endFill(),this.invalidateBounds()}drawLine(t,i,a,s,e){if(this._graphics.beginFill(this._object._fillColor,this._object._fillOpacity/255),s===i)this._graphics.drawRect(t,i-e/2,a-t,e);else{const o=Math.atan2(s-i,a-t),h=Math.sin(o)*e,r=Math.cos(o)*e;this._graphics.drawPolygon(t+h,i-r,t-h,i+r,a-h,s+r,a+h,s-r)}this._graphics.endFill(),this.invalidateBounds()}drawLineV2(t,i,a,s,e){this._graphics.lineStyle(e,this._object._outlineColor,this._object._outlineOpacity/255),this._graphics.moveTo(t,i),this._graphics.lineTo(a,s),this._graphics.endFill(),this.invalidateBounds()}drawEllipse(t,i,a,s){this.updateOutline(),this._graphics.beginFill(this._object._fillColor,this._object._fillOpacity/255),this._graphics.drawEllipse(t,i,a/2,s/2),this._graphics.endFill(),this.invalidateBounds()}drawRoundedRectangle(t,i,a,s,e){this.updateOutline(),this._graphics.beginFill(this._object._fillColor,this._object._fillOpacity/255),this._graphics.drawRoundedRect(t,i,a-t,s-i,e),this._graphics.closePath(),this._graphics.endFill(),this.invalidateBounds()}drawStar(t,i,a,s,e,o){this.updateOutline(),this._graphics.beginFill(this._object._fillColor,this._object._fillOpacity/255),this._graphics.drawStar(t,i,a,s,e||s/2,o?l.toRad(o):0),this._graphics.closePath(),this._graphics.endFill(),this.invalidateBounds()}drawArc(t,i,a,s,e,o,h){this.updateOutline(),this._graphics.beginFill(this._object._fillColor,this._object._fillOpacity/255),this._graphics.moveTo(t+a*Math.cos(l.toRad(s)),i+a*Math.sin(l.toRad(s))),this._graphics.arc(t,i,a,l.toRad(s),l.toRad(e),!!o),h&&this._graphics.closePath(),this._graphics.endFill(),this.invalidateBounds()}drawBezierCurve(t,i,a,s,e,o,h,r){this.updateOutline(),this._graphics.beginFill(this._object._fillColor,this._object._fillOpacity/255),this._graphics.moveTo(t,i),this._graphics.bezierCurveTo(a,s,e,o,h,r),this._graphics.endFill(),this.invalidateBounds()}drawQuadraticCurve(t,i,a,s,e,o){this.updateOutline(),this._graphics.beginFill(this._object._fillColor,this._object._fillOpacity/255),this._graphics.moveTo(t,i),this._graphics.quadraticCurveTo(a,s,e,o),this._graphics.endFill(),this.invalidateBounds()}beginFillPath(){this.updateOutline(),this._graphics.beginFill(this._object._fillColor,this._object._fillOpacity/255)}endFillPath(){this._graphics.endFill(),this.invalidateBounds()}drawPathMoveTo(t,i){this._graphics.moveTo(t,i)}drawPathLineTo(t,i){this._graphics.lineTo(t,i),this.invalidateBounds()}drawPathBezierCurveTo(t,i,a,s,e,o){this._graphics.bezierCurveTo(t,i,a,s,e,o),this.invalidateBounds()}drawPathArc(t,i,a,s,e,o){this._graphics.arc(t,i,a,l.toRad(s),l.toRad(e),!!o),this.invalidateBounds()}drawPathQuadraticCurveTo(t,i,a,s){this._graphics.quadraticCurveTo(t,i,a,s),this.invalidateBounds()}closePath(){this._graphics.closePath(),this.invalidateBounds()}updateOutline(){this._graphics.lineStyle(this._object._outlineSize,this._object._outlineColor,this._object._outlineOpacity/255)}invalidateBounds(){this._object.invalidateBounds(),this._positionXIsUpToDate=!1,this._positionYIsUpToDate=!1}updatePreRender(){this.updatePositionIfNeeded()}updatePositionX(){this._object._useAbsoluteCoordinates?(this._graphics.pivot.x=0,this._graphics.position.x=0):(this._graphics.pivot.x=this._object.getRotationCenterX(),this._graphics.position.x=this._object.x+this._graphics.pivot.x*Math.abs(this._graphics.scale.x)),this._transformationIsUpToDate=!1}updatePositionY(){this._object._useAbsoluteCoordinates?(this._graphics.pivot.y=0,this._graphics.position.y=0):(this._graphics.pivot.y=this._object.getRotationCenterY(),this._graphics.position.y=this._object.y+this._graphics.pivot.y*Math.abs(this._graphics.scale.y)),this._transformationIsUpToDate=!1}updatePositionIfNeeded(){this._positionXIsUpToDate||(this.updatePositionX(),this._positionXIsUpToDate=!0),this._positionYIsUpToDate||(this.updatePositionY(),this._positionYIsUpToDate=!0)}updateTransformationIfNeeded(){this._transformationIsUpToDate||(this.updatePositionIfNeeded(),this._graphics.updateTransform()),this._transformationIsUpToDate=!0}updateRotationCenter(){this._positionXIsUpToDate=!1,this._positionYIsUpToDate=!1,this._transformationIsUpToDate=!1}updateAngle(){this._object._useAbsoluteCoordinates?this._graphics.angle=0:this._graphics.angle=this._object.angle,this._transformationIsUpToDate=!1}updateScaleX(){this._object._useAbsoluteCoordinates?this._graphics.scale.x=1:this._graphics.scale.x=this._object._scaleX,this._positionXIsUpToDate=!1,this._transformationIsUpToDate=!1}updateScaleY(){this._object._useAbsoluteCoordinates?this._graphics.scale.y=1:this._graphics.scale.y=this._object._scaleY,this._positionYIsUpToDate=!1,this._transformationIsUpToDate=!1}getDrawableX(){if(this._object._useAbsoluteCoordinates)return this._graphics.getLocalBounds().left;let t=this._graphics.getLocalBounds().left;if(this._object._flippedX){const i=this._object.getRotationCenterX();t=2*i-t}return this._object.getX()+t*Math.abs(this._graphics.scale.x)}getDrawableY(){if(this._object._useAbsoluteCoordinates)return this._graphics.getLocalBounds().top;let t=this._graphics.getLocalBounds().top;if(this._object._flippedY){const i=this._object.getRotationCenterY();t=2*i-t}return this._object.getY()+t*Math.abs(this._graphics.scale.y)}getWidth(){return this._graphics.width}getHeight(){return this._graphics.height}getUnscaledWidth(){return this._graphics.getLocalBounds().width}getUnscaledHeight(){return this._graphics.getLocalBounds().height}getFrameRelativeOriginX(){return-this._graphics.getLocalBounds().left}getFrameRelativeOriginY(){return-this._graphics.getLocalBounds().top}transformToDrawing(t){this.updateTransformationIfNeeded();const i=c._positionForTransformation;return i.x=t[0],i.y=t[1],this._graphics.localTransform.applyInverse(i,i),t[0]=i.x,t[1]=i.y,t}transformToScene(t){this.updateTransformationIfNeeded();const i=c._positionForTransformation;return i.x=t[0],i.y=t[1],this._graphics.localTransform.apply(i,i),t[0]=i.x,t[1]=i.y,t}updateAntialiasing(){if(this._object.getAntialiasing()!=="none"){this._antialiasingFilter||(this._antialiasingFilter=new n.filters.FXAAFilter);const t=this._antialiasingFilter;t.enabled=!0,t.multisample=n.MSAA_QUALITY[this._object.getAntialiasing().toUpperCase()]||n.MSAA_QUALITY.LOW,this._graphics.filters||(this._graphics.filters=[]),this._graphics.filters.indexOf(t)===-1&&this._graphics.filters.push(t)}else if(this._antialiasingFilter!==null){if(!this._graphics.filters)return;const t=this._graphics.filters.indexOf(this._antialiasingFilter);t!==-1&&this._graphics.filters.splice(t,1)}}};let _=c;_._positionForTransformation={x:0,y:0},l.ShapePainterRuntimeObjectRenderer=_})(gdjs||(gdjs={}));
//# sourceMappingURL=shapepainterruntimeobject-pixi-renderer.js.map
