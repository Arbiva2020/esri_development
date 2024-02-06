"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_arcgis_core_views_3d_layers_graphics_objectResourceUtils_js"],{

/***/ "./node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Z),
/* harmony export */   "b": () => (/* binding */ Y)
/* harmony export */ });
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/@arcgis/core/chunks/mat3.js");
/* harmony import */ var _mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3f64.js */ "./node_modules/@arcgis/core/chunks/mat3f64.js");
/* harmony import */ var _mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4f64.js */ "./node_modules/@arcgis/core/chunks/mat4f64.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../views/3d/webgl-engine/lib/TransparencyPassType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/TransparencyPassType.js");
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../views/3d/webgl-engine/lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function Y(Y){const Z=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_38__.ShaderBuilder,{vertex:ee,fragment:re,varyings:oe}=Z;if((0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_31__.addProjViewLocalOrigin)(ee,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_10__.PositionAttribute),oe.add("vpos","vec3"),Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_27__.VisualVariables,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_8__.InstancedDoublePrecision,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_15__.VerticalOffset,Y),Y.hasColorTextureTransform&&Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_26__.colorTextureUV),Y.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Color||Y.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Alpha){Y.hasNormalTextureTransform&&Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_26__.normalTextureUV),Y.hasEmissionTextureTransform&&Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_26__.emissiveTextureUV),Y.hasOcclusionTextureTransform&&Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_26__.occlusionTextureUV),Y.hasMetallicRoughnessTextureTransform&&Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_26__.metallicRoughnessTextureUV),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_31__.addCameraPosition)(ee,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__.NormalAttribute,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_7__.Transform,Y);const s=Y.normalType===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__.NormalType.Attribute||Y.normalType===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__.NormalType.Compressed;s&&Y.offsetBackfaces&&Z.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_4__.Offset),Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_17__.ComputeNormalTexture,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_14__.VertexNormal,Y),Y.instancedColor&&Z.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_41__.VertexAttribute.INSTANCECOLOR,"vec4"),oe.add("vPositionLocal","vec3"),Z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_12__.TextureCoordinateAttribute,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__.ForwardLinearDepth,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_11__.SymbolColor,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_13__.VertexColor,Y),ee.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_33__.Float4PassUniform("externalColor",(e=>e.externalColor))),oe.add("vcolorExt","vec4"),Y.hasMultipassTerrain&&oe.add("depth","float");const l=Y.hasModelTransformation;if(l){const a=(0,_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)();ee.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_37__.Matrix4PassUniform("model",(e=>e.modelTransformation??_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__.I))),ee.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_36__.Matrix3PassUniform("normalTransform",(r=>((0,_mat3_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,r.modelTransformation??_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__.I),a))))}ee.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${Y.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl.float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_28__.symbolAlphaCutoff)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          ${l?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${s?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`vNormalWorld = ${l?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormal(vvLocalNormal(normalModel()))"};`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${Y.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${s&&Y.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${Y.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${Y.hasColorTextureTransform?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`forwardColorUV();`:""}
        ${Y.hasNormalTextureTransform?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`forwardNormalUV();`:""}
        ${Y.hasEmissionTextureTransform?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`forwardEmissiveUV();`:""}
        ${Y.hasOcclusionTextureTransform?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`forwardOcclusionUV();`:""}
        ${Y.hasMetallicRoughnessTextureTransform?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(Y.output){case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Alpha:Z.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_6__.SliceDraw,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_29__.DiscardOrAdjustAlphaPass,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_21__.multipassTerrainTest,Y),re.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_34__.FloatPassUniform("opacity",(e=>e.opacity)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_34__.FloatPassUniform("layerOpacity",(e=>e.layerOpacity))),Y.hasColorTexture&&re.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_39__.Texture2DPassUniform("tex",(e=>e.texture))),re.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_30__.MixExternalColor),re.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
      void main() {
        discardBySlice(vpos);
        ${Y.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${Y.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
                vec4 texColor = texture(tex, ${Y.hasColorTextureTransform?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`colorUV`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`vuv0`});
                ${Y.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`vec4 texColor = vec4(1.0);`}
        ${Y.hasVertexColors?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Color:Z.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_6__.SliceDraw,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_19__.EvaluateSceneLighting,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_18__.EvaluateAmbientOcclusion,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_29__.DiscardOrAdjustAlphaPass,Y),Z.include(Y.instancedDoublePrecision?_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_25__.ReadShadowMapPass:_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_25__.ReadShadowMapDraw,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_21__.multipassTerrainTest,Y),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_31__.addCameraPosition)(re,Y),re.uniforms.add(ee.uniforms.get("localOrigin"),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_32__.Float3PassUniform("ambient",(e=>e.ambient)),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_32__.Float3PassUniform("diffuse",(e=>e.diffuse)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_34__.FloatPassUniform("opacity",(e=>e.opacity)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_34__.FloatPassUniform("layerOpacity",(e=>e.layerOpacity))),Y.hasColorTexture&&re.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_39__.Texture2DPassUniform("tex",(e=>e.texture))),Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_24__.PhysicallyBasedRenderingParameters,Y),Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_23__.PhysicallyBasedRendering,Y),re.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_30__.MixExternalColor),Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_22__.Normals,Y),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_19__.addAmbientBoostFactor)(re),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_19__.addLightingGlobalFactor)(re),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_20__.addMainLightIntensity)(re),re.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
      void main() {
        discardBySlice(vpos);
        ${Y.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${Y.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
                vec4 texColor = texture(tex, ${Y.hasColorTextureTransform?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`colorUV`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`vuv0`});
                ${Y.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${Y.normalType===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__.NormalType.ScreenDerivative?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${Y.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_24__.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${Y.receiveShadows?"readShadowMap(vpos, linearDepth)":Y.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${Y.hasVertexColors?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${Y.hasNormalTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
                mat3 tangentSpace = ${Y.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${Y.hasNormalTextureTransform?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`normalUV`:"vuv0"});`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${Y.spherical?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`normalize(posWorld);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`vec3(0.0, 0.0, 1.0);`}

        ${Y.snowCover?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${Y.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_24__.PBRMode.Normal||Y.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_24__.PBRMode.Schematic?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${Y.snowCover?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${Y.transparencyPassType===_views_3d_webgl_engine_lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_40__.TransparencyPassType.Color?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_35__.glsl`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return Z.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_16__.DefaultMaterialAuxiliaryPasses,Y),Z}const Z=Object.freeze(Object.defineProperty({__proto__:null,build:Y},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/RealisticTree.glsl.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/RealisticTree.glsl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ R),
/* harmony export */   "b": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../views/3d/webgl-engine/lib/TransparencyPassType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/TransparencyPassType.js");
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../views/3d/webgl-engine/lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function I(I){const R=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_29__.ShaderBuilder,{vertex:z,fragment:k,varyings:U}=R;return (0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_24__.addProjViewLocalOrigin)(z,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__.PositionAttribute),U.add("vpos","vec3"),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_20__.VisualVariables,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__.InstancedDoublePrecision,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_11__.VerticalOffset,I),I.output!==_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__.ShaderOutput.Color&&I.output!==_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__.ShaderOutput.Alpha||((0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_24__.addCameraPosition)(R.vertex,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__.NormalAttribute,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__.Transform,I),I.offsetBackfaces&&R.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__.Offset),I.instancedColor&&R.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_32__.VertexAttribute.INSTANCECOLOR,"vec4"),U.add("vNormalWorld","vec3"),U.add("localvpos","vec3"),I.hasMultipassTerrain&&U.add("depth","float"),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__.TextureCoordinateAttribute,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__.ForwardLinearDepth,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__.SymbolColor,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__.VertexColor,I),z.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_26__.Float4PassUniform("externalColor",(e=>e.externalColor))),U.add("vcolorExt","vec4"),z.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${I.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl.float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_21__.symbolAlphaCutoff)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${I.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${I.hasMultipassTerrain?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),I.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__.ShaderOutput.Alpha&&(R.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__.SliceDraw,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_22__.DiscardOrAdjustAlphaPass,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_16__.multipassTerrainTest,I),k.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_27__.FloatPassUniform("opacity",(e=>e.opacity)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_27__.FloatPassUniform("layerOpacity",(e=>e.layerOpacity))),I.hasColorTexture&&k.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_30__.Texture2DPassUniform("tex",(e=>e.texture))),k.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_23__.MixExternalColor),k.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`
      void main() {
        discardBySlice(vpos);
        ${I.hasMultipassTerrain?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${I.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`
                vec4 texColor = texture(tex, ${I.hasColorTextureTransform?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`colorUV`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`vuv0`});
                ${I.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`vec4 texColor = vec4(1.0);`}
        ${I.hasVertexColors?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),I.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__.ShaderOutput.Color&&(R.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__.SliceDraw,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__.EvaluateSceneLighting,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_13__.EvaluateAmbientOcclusion,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_22__.DiscardOrAdjustAlphaPass,I),R.include(I.instancedDoublePrecision?_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_19__.ReadShadowMapPass:_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_19__.ReadShadowMapDraw,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_16__.multipassTerrainTest,I),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_24__.addCameraPosition)(R.fragment,I),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_15__.addMainLightDirection)(k),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__.addAmbientBoostFactor)(k),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__.addLightingGlobalFactor)(k),k.uniforms.add(z.uniforms.get("localOrigin"),z.uniforms.get("view"),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_25__.Float3PassUniform("ambient",(e=>e.ambient)),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_25__.Float3PassUniform("diffuse",(e=>e.diffuse)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_27__.FloatPassUniform("opacity",(e=>e.opacity)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_27__.FloatPassUniform("layerOpacity",(e=>e.layerOpacity))),I.hasColorTexture&&k.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_30__.Texture2DPassUniform("tex",(e=>e.texture))),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__.PhysicallyBasedRenderingParameters,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_17__.PhysicallyBasedRendering,I),k.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_23__.MixExternalColor),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_15__.addMainLightIntensity)(k),k.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`
      void main() {
        discardBySlice(vpos);
        ${I.hasMultipassTerrain?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${I.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`
                vec4 texColor = texture(tex, ${I.hasColorTextureTransform?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`colorUV`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`vuv0`});
                ${I.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${I.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${I.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":I.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${I.hasVertexColors?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${I.snowCover?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`albedo = mix(albedo, vec3(1), 0.9);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl``}
        ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${I.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__.PBRMode.Normal||I.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__.PBRMode.Schematic?I.spherical?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`vec3 normalGround = normalize(vpos + localOrigin);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl``}
        ${I.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__.PBRMode.Normal||I.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__.PBRMode.Schematic?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${I.snowCover?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${I.transparencyPassType===_views_3d_webgl_engine_lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_31__.TransparencyPassType.Color?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl`fragColor = premultiplyAlpha(fragColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl``}
      }
    `)),R.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_12__.DefaultMaterialAuxiliaryPasses,I),R}const R=Object.freeze(Object.defineProperty({__proto__:null,build:I},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/SSAO.glsl.js":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/SSAO.glsl.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ v),
/* harmony export */   "b": () => (/* binding */ d),
/* harmony export */   "g": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec2.js */ "./node_modules/@arcgis/core/chunks/vec2.js");
/* harmony import */ var _vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec2f64.js */ "./node_modules/@arcgis/core/chunks/vec2f64.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_CameraSpace_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const f=16;function d(){const r=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_8__.ShaderBuilder,d=r.fragment;return r.include(_views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_2__.ScreenSpacePass),d.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__.ReadLinearDepth),r.include(_views_3d_webgl_engine_core_shaderLibrary_util_CameraSpace_glsl_js__WEBPACK_IMPORTED_MODULE_4__.CameraSpace),d.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__.FloatPassUniform("radius",((e,r)=>m(r.camera)))),d.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),d.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),d.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float2PassUniform("nearFar",((e,r)=>r.camera.nearFar)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Texture2DPassUniform("normalMap",(e=>e.normalTexture)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Texture2DPassUniform("depthMap",(e=>e.depthTexture)),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float2PassUniform("zScale",((e,r)=>(0,_views_3d_webgl_engine_core_shaderLibrary_util_CameraSpace_glsl_js__WEBPACK_IMPORTED_MODULE_4__.getZScale)(r))),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__.FloatPassUniform("projScale",(e=>e.projScale)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Texture2DPassUniform("rnm",(e=>e.noiseTexture)),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float2PassUniform("rnmScale",((r,t)=>(0,_vec2_js__WEBPACK_IMPORTED_MODULE_0__.s)(p,t.camera.fullWidth/r.noiseTexture.descriptor.width,t.camera.fullHeight/r.noiseTexture.descriptor.height))),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__.FloatPassUniform("intensity",(e=>e.intensity)),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float2PassUniform("screenSize",((r,t)=>(0,_vec2_js__WEBPACK_IMPORTED_MODULE_0__.s)(p,t.camera.fullWidth,t.camera.fullHeight)))),d.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        fragColor = vec4(0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl.int(f)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl.int(f)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      fragColor = vec4(A);
    }
  `),r}function m(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const p=(0,_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),v=Object.freeze(Object.defineProperty({__proto__:null,build:d,getRadius:m},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/SSAOBlur.glsl.js":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/SSAOBlur.glsl.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ u),
/* harmony export */   "b": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2DrawUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2DrawUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const f=4;function c(){const c=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_7__.ShaderBuilder,u=c.fragment;c.include(_views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_1__.ScreenSpacePass);const m=(f+1)/2,p=1/(2*m*m);return u.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_2__.ReadLinearDepth),u.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Texture2DPassUniform("depthMap",(e=>e.depthTexture)),new _views_3d_webgl_engine_core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_8__.Texture2DDrawUniform("tex",(e=>e.colorTexture)),new _views_3d_webgl_engine_core_shaderModules_Float2DrawUniform_js__WEBPACK_IMPORTED_MODULE_3__.Float2DrawUniform("blurSize",(e=>e.blurSize)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_5__.FloatPassUniform("projScale",((r,o)=>{const t=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_0__.i)(o.camera.eye,o.camera.center);return t>5e4?Math.max(0,r.projScale-(t-5e4)):r.projScale})),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float2PassUniform("nearFar",((e,r)=>r.camera.nearFar))),u.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl.float(p)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),u.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl.int(f)}; r <= ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl.int(f)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragColor = vec4(b / w_total);
    }
  `),c}const u=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/mat3.js":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat3.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ _),
/* harmony export */   "B": () => (/* binding */ v),
/* harmony export */   "C": () => (/* binding */ A),
/* harmony export */   "D": () => (/* binding */ F),
/* harmony export */   "E": () => (/* binding */ O),
/* harmony export */   "F": () => (/* binding */ z),
/* harmony export */   "G": () => (/* binding */ T),
/* harmony export */   "a": () => (/* binding */ c),
/* harmony export */   "b": () => (/* binding */ g),
/* harmony export */   "c": () => (/* binding */ p),
/* harmony export */   "d": () => (/* binding */ f),
/* harmony export */   "e": () => (/* binding */ u),
/* harmony export */   "f": () => (/* binding */ a),
/* harmony export */   "g": () => (/* binding */ r),
/* harmony export */   "h": () => (/* binding */ M),
/* harmony export */   "i": () => (/* binding */ B),
/* harmony export */   "j": () => (/* binding */ E),
/* harmony export */   "k": () => (/* binding */ l),
/* harmony export */   "l": () => (/* binding */ b),
/* harmony export */   "m": () => (/* binding */ i),
/* harmony export */   "n": () => (/* binding */ y),
/* harmony export */   "o": () => (/* binding */ k),
/* harmony export */   "p": () => (/* binding */ n),
/* harmony export */   "q": () => (/* binding */ e),
/* harmony export */   "r": () => (/* binding */ h),
/* harmony export */   "s": () => (/* binding */ s),
/* harmony export */   "t": () => (/* binding */ o),
/* harmony export */   "u": () => (/* binding */ m),
/* harmony export */   "v": () => (/* binding */ d),
/* harmony export */   "w": () => (/* binding */ x),
/* harmony export */   "x": () => (/* binding */ j),
/* harmony export */   "y": () => (/* binding */ S),
/* harmony export */   "z": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/@arcgis/core/chunks/common.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[4],t[4]=a[5],t[5]=a[6],t[6]=a[8],t[7]=a[9],t[8]=a[10],t}function n(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t}function s(t,a,n,s,r,o,u,c,e,i){return t[0]=a,t[1]=n,t[2]=s,t[3]=r,t[4]=o,t[5]=u,t[6]=c,t[7]=e,t[8]=i,t}function r(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function o(t,a){if(t===a){const n=a[1],s=a[2],r=a[5];t[1]=a[3],t[2]=a[6],t[3]=n,t[5]=a[7],t[6]=s,t[7]=r}else t[0]=a[0],t[1]=a[3],t[2]=a[6],t[3]=a[1],t[4]=a[4],t[5]=a[7],t[6]=a[2],t[7]=a[5],t[8]=a[8];return t}function u(t,a){const n=a[0],s=a[1],r=a[2],o=a[3],u=a[4],c=a[5],e=a[6],i=a[7],M=a[8],h=M*u-c*i,f=-M*o+c*e,b=i*o-u*e;let l=n*h+s*f+r*b;return l?(l=1/l,t[0]=h*l,t[1]=(-M*s+r*i)*l,t[2]=(c*s-r*u)*l,t[3]=f*l,t[4]=(M*n-r*e)*l,t[5]=(-c*n+r*o)*l,t[6]=b*l,t[7]=(-i*n+s*e)*l,t[8]=(u*n-s*o)*l,t):null}function c(t,a){const n=a[0],s=a[1],r=a[2],o=a[3],u=a[4],c=a[5],e=a[6],i=a[7],M=a[8];return t[0]=u*M-c*i,t[1]=r*i-s*M,t[2]=s*c-r*u,t[3]=c*e-o*M,t[4]=n*M-r*e,t[5]=r*o-n*c,t[6]=o*i-u*e,t[7]=s*e-n*i,t[8]=n*u-s*o,t}function e(t){const a=t[0],n=t[1],s=t[2],r=t[3],o=t[4],u=t[5],c=t[6],e=t[7],i=t[8];return a*(i*o-u*e)+n*(-i*r+u*c)+s*(e*r-o*c)}function i(t,a,n){const s=a[0],r=a[1],o=a[2],u=a[3],c=a[4],e=a[5],i=a[6],M=a[7],h=a[8],f=n[0],b=n[1],l=n[2],m=n[3],d=n[4],x=n[5],p=n[6],y=n[7],g=n[8];return t[0]=f*s+b*u+l*i,t[1]=f*r+b*c+l*M,t[2]=f*o+b*e+l*h,t[3]=m*s+d*u+x*i,t[4]=m*r+d*c+x*M,t[5]=m*o+d*e+x*h,t[6]=p*s+y*u+g*i,t[7]=p*r+y*c+g*M,t[8]=p*o+y*e+g*h,t}function M(t,a,n){const s=a[0],r=a[1],o=a[2],u=a[3],c=a[4],e=a[5],i=a[6],M=a[7],h=a[8],f=n[0],b=n[1];return t[0]=s,t[1]=r,t[2]=o,t[3]=u,t[4]=c,t[5]=e,t[6]=f*s+b*u+i,t[7]=f*r+b*c+M,t[8]=f*o+b*e+h,t}function h(t,a,n){const s=a[0],r=a[1],o=a[2],u=a[3],c=a[4],e=a[5],i=a[6],M=a[7],h=a[8],f=Math.sin(n),b=Math.cos(n);return t[0]=b*s+f*u,t[1]=b*r+f*c,t[2]=b*o+f*e,t[3]=b*u-f*s,t[4]=b*c-f*r,t[5]=b*e-f*o,t[6]=i,t[7]=M,t[8]=h,t}function f(t,a,n){const s=n[0],r=n[1],o=n[2];return t[0]=s*a[0],t[1]=s*a[1],t[2]=s*a[2],t[3]=r*a[3],t[4]=r*a[4],t[5]=r*a[5],t[6]=o*a[6],t[7]=o*a[7],t[8]=o*a[8],t}function b(t,a,n){const s=n[0],r=n[1];return t[0]=s*a[0],t[1]=s*a[1],t[2]=s*a[2],t[3]=r*a[3],t[4]=r*a[4],t[5]=r*a[5],t}function l(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=a[0],t[7]=a[1],t[8]=1,t}function m(t,a){const n=Math.sin(a),s=Math.cos(a);return t[0]=s,t[1]=n,t[2]=0,t[3]=-n,t[4]=s,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function d(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=a[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function x(t,a){return t[0]=a[0],t[1]=a[1],t[2]=0,t[3]=a[2],t[4]=a[3],t[5]=0,t[6]=a[4],t[7]=a[5],t[8]=1,t}function p(t,a){const n=a[0],s=a[1],r=a[2],o=a[3],u=n+n,c=s+s,e=r+r,i=n*u,M=s*u,h=s*c,f=r*u,b=r*c,l=r*e,m=o*u,d=o*c,x=o*e;return t[0]=1-h-l,t[3]=M-x,t[6]=f+d,t[1]=M+x,t[4]=1-i-l,t[7]=b-m,t[2]=f-d,t[5]=b+m,t[8]=1-i-h,t}function y(t,a){const n=a[0],s=a[1],r=a[2],o=a[4],u=a[5],c=a[6],e=a[8],i=a[9],M=a[10],h=M*u-c*i,f=-M*o+c*e,b=i*o-u*e,l=n*h+s*f+r*b;if(!l)return null;const m=1/l;return t[0]=h*m,t[1]=(-M*s+r*i)*m,t[2]=(c*s-r*u)*m,t[3]=f*m,t[4]=(M*n-r*e)*m,t[5]=(-c*n+r*o)*m,t[6]=b*m,t[7]=(-i*n+s*e)*m,t[8]=(u*n-s*o)*m,t}function g(t,a){const n=a[0],s=a[1],r=a[2],o=a[3],u=a[4],c=a[5],e=a[6],i=a[7],M=a[8],h=a[9],f=a[10],b=a[11],l=a[12],m=a[13],d=a[14],x=a[15],p=n*c-s*u,y=n*e-r*u,g=n*i-o*u,j=s*e-r*c,S=s*i-o*c,q=r*i-o*e,_=M*m-h*l,v=M*d-f*l,A=M*x-b*l,F=h*d-f*m,O=h*x-b*m,z=f*x-b*d;let B=p*z-y*O+g*F+j*A-S*v+q*_;return B?(B=1/B,t[0]=(c*z-e*O+i*F)*B,t[1]=(e*A-u*z-i*v)*B,t[2]=(u*O-c*A+i*_)*B,t[3]=(r*O-s*z-o*F)*B,t[4]=(n*z-r*A+o*v)*B,t[5]=(s*A-n*O-o*_)*B,t[6]=(m*q-d*S+x*j)*B,t[7]=(d*g-l*q-x*y)*B,t[8]=(l*S-m*g+x*p)*B,t):null}function j(t,a,n){return t[0]=2/a,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/n,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function S(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function q(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2)}function _(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t}function v(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t}function A(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t}function F(t,a,n,s){return t[0]=a[0]+n[0]*s,t[1]=a[1]+n[1]*s,t[2]=a[2]+n[2]*s,t[3]=a[3]+n[3]*s,t[4]=a[4]+n[4]*s,t[5]=a[5]+n[5]*s,t[6]=a[6]+n[6]*s,t[7]=a[7]+n[7]*s,t[8]=a[8]+n[8]*s,t}function O(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]}function z(a,n){const s=a[0],r=a[1],o=a[2],u=a[3],c=a[4],e=a[5],i=a[6],M=a[7],h=a[8],f=n[0],b=n[1],l=n[2],m=n[3],d=n[4],x=n[5],p=n[6],y=n[7],g=n[8],j=(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.g)();return Math.abs(s-f)<=j*Math.max(1,Math.abs(s),Math.abs(f))&&Math.abs(r-b)<=j*Math.max(1,Math.abs(r),Math.abs(b))&&Math.abs(o-l)<=j*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(u-m)<=j*Math.max(1,Math.abs(u),Math.abs(m))&&Math.abs(c-d)<=j*Math.max(1,Math.abs(c),Math.abs(d))&&Math.abs(e-x)<=j*Math.max(1,Math.abs(e),Math.abs(x))&&Math.abs(i-p)<=j*Math.max(1,Math.abs(i),Math.abs(p))&&Math.abs(M-y)<=j*Math.max(1,Math.abs(M),Math.abs(y))&&Math.abs(h-g)<=j*Math.max(1,Math.abs(h),Math.abs(g))}function B(a){const n=(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.g)(),s=a[0],r=a[1],o=a[2],u=a[3],c=a[4],e=a[5],i=a[6],M=a[7],h=a[8];return Math.abs(1-(s*s+u*u+i*i))<=n&&Math.abs(1-(r*r+c*c+M*M))<=n&&Math.abs(1-(o*o+e*e+h*h))<=n}const E=i,T=v,k=Object.freeze(Object.defineProperty({__proto__:null,add:_,adjoint:c,copy:n,determinant:e,equals:z,exactEquals:O,frob:q,fromMat2d:x,fromMat4:a,fromQuat:p,fromRotation:m,fromScaling:d,fromTranslation:l,identity:r,invert:u,isOrthoNormal:B,mul:E,multiply:i,multiplyScalar:A,multiplyScalarAndAdd:F,normalFromMat4:g,normalFromMat4Legacy:y,projection:j,rotate:h,scale:f,scaleByVec2:b,set:s,str:S,sub:T,subtract:v,translate:M,transpose:o},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/mat3f32.js":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat3f32.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ r),
/* harmony export */   "b": () => (/* binding */ n),
/* harmony export */   "c": () => (/* binding */ e),
/* harmony export */   "f": () => (/* binding */ t),
/* harmony export */   "m": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(){const e=new Float32Array(9);return e[0]=1,e[4]=1,e[8]=1,e}function r(e){const r=new Float32Array(9);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r}function t(e,r,t,n,o,a,c,u,l){const s=new Float32Array(9);return s[0]=e,s[1]=r,s[2]=t,s[3]=n,s[4]=o,s[5]=a,s[6]=c,s[7]=u,s[8]=l,s}function n(e,r){return new Float32Array(e,r,9)}const o=Object.freeze(Object.defineProperty({__proto__:null,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/quat.js":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quat.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ W),
/* harmony export */   "B": () => (/* binding */ Y),
/* harmony export */   "C": () => (/* binding */ H),
/* harmony export */   "D": () => (/* binding */ J),
/* harmony export */   "E": () => (/* binding */ N),
/* harmony export */   "F": () => (/* binding */ tt),
/* harmony export */   "G": () => (/* binding */ nt),
/* harmony export */   "a": () => (/* binding */ B),
/* harmony export */   "b": () => (/* binding */ A),
/* harmony export */   "c": () => (/* binding */ S),
/* harmony export */   "d": () => (/* binding */ I),
/* harmony export */   "e": () => (/* binding */ _),
/* harmony export */   "f": () => (/* binding */ R),
/* harmony export */   "g": () => (/* binding */ x),
/* harmony export */   "h": () => (/* binding */ Z),
/* harmony export */   "i": () => (/* binding */ O),
/* harmony export */   "j": () => (/* binding */ K),
/* harmony export */   "k": () => (/* binding */ k),
/* harmony export */   "l": () => (/* binding */ X),
/* harmony export */   "m": () => (/* binding */ y),
/* harmony export */   "n": () => (/* binding */ b),
/* harmony export */   "o": () => (/* binding */ z),
/* harmony export */   "p": () => (/* binding */ E),
/* harmony export */   "q": () => (/* binding */ rt),
/* harmony export */   "r": () => (/* binding */ Q),
/* harmony export */   "s": () => (/* binding */ v),
/* harmony export */   "t": () => (/* binding */ L),
/* harmony export */   "u": () => (/* binding */ T),
/* harmony export */   "v": () => (/* binding */ w),
/* harmony export */   "w": () => (/* binding */ C),
/* harmony export */   "x": () => (/* binding */ D),
/* harmony export */   "y": () => (/* binding */ F),
/* harmony export */   "z": () => (/* binding */ G)
/* harmony export */ });
/* harmony import */ var _mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat3f64.js */ "./node_modules/@arcgis/core/chunks/mat3f64.js");
/* harmony import */ var _quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quatf64.js */ "./node_modules/@arcgis/core/chunks/quatf64.js");
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ "./node_modules/@arcgis/core/chunks/common.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/@arcgis/core/chunks/vec4.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function b(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function v(t,s,a){a*=.5;const n=Math.sin(a);return t[0]=n*s[0],t[1]=n*s[1],t[2]=n*s[2],t[3]=Math.cos(a),t}function x(t,s){const a=2*Math.acos(s[3]),n=Math.sin(a/2);return n>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.g)()?(t[0]=s[0]/n,t[1]=s[1]/n,t[2]=s[2]/n):(t[0]=1,t[1]=0,t[2]=0),a}function y(t,s,a){const n=s[0],o=s[1],r=s[2],e=s[3],c=a[0],u=a[1],i=a[2],h=a[3];return t[0]=n*h+e*c+o*i-r*u,t[1]=o*h+e*u+r*c-n*i,t[2]=r*h+e*i+n*u-o*c,t[3]=e*h-n*c-o*u-r*i,t}function A(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],e=s[3],c=Math.sin(a),u=Math.cos(a);return t[0]=n*u+e*c,t[1]=o*u+r*c,t[2]=r*u-o*c,t[3]=e*u-n*c,t}function I(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],e=s[3],c=Math.sin(a),u=Math.cos(a);return t[0]=n*u-r*c,t[1]=o*u+e*c,t[2]=r*u+n*c,t[3]=e*u-o*c,t}function _(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],e=s[3],c=Math.sin(a),u=Math.cos(a);return t[0]=n*u+o*c,t[1]=o*u-n*c,t[2]=r*u+e*c,t[3]=e*u-r*c,t}function z(t,s){const a=s[0],n=s[1],o=s[2];return t[0]=a,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-o*o)),t}function E(t,s,a,n){const r=s[0],e=s[1],c=s[2],u=s[3];let i,h,M,f,l,m=a[0],p=a[1],q=a[2],g=a[3];return h=r*m+e*p+c*q+u*g,h<0&&(h=-h,m=-m,p=-p,q=-q,g=-g),1-h>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.g)()?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-n)*i)/M,l=Math.sin(n*i)/M):(f=1-n,l=n),t[0]=f*r+l*m,t[1]=f*e+l*p,t[2]=f*c+l*q,t[3]=f*u+l*g,t}function L(t){const s=_common_js__WEBPACK_IMPORTED_MODULE_3__.R,a=s(),n=s(),o=s(),e=Math.sqrt(1-a),c=Math.sqrt(a);return t[0]=e*Math.sin(2*Math.PI*n),t[1]=e*Math.cos(2*Math.PI*n),t[2]=c*Math.sin(2*Math.PI*o),t[3]=c*Math.cos(2*Math.PI*o),t}function O(t,s){const a=s[0],n=s[1],o=s[2],r=s[3],e=a*a+n*n+o*o+r*r,c=e?1/e:0;return t[0]=-a*c,t[1]=-n*c,t[2]=-o*c,t[3]=r*c,t}function S(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function T(t,s){const a=s[0]+s[4]+s[8];let n;if(a>0)n=Math.sqrt(a+1),t[3]=.5*n,n=.5/n,t[0]=(s[5]-s[7])*n,t[1]=(s[6]-s[2])*n,t[2]=(s[1]-s[3])*n;else{let a=0;s[4]>s[0]&&(a=1),s[8]>s[3*a+a]&&(a=2);const o=(a+1)%3,r=(a+2)%3;n=Math.sqrt(s[3*a+a]-s[3*o+o]-s[3*r+r]+1),t[a]=.5*n,n=.5/n,t[3]=(s[3*o+r]-s[3*r+o])*n,t[o]=(s[3*o+a]+s[3*a+o])*n,t[r]=(s[3*r+a]+s[3*a+r])*n}return t}function k(t,s,a,n){const o=.5*Math.PI/180;s*=o,a*=o,n*=o;const r=Math.sin(s),e=Math.cos(s),c=Math.sin(a),u=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=r*u*h-e*c*i,t[1]=e*c*h+r*u*i,t[2]=e*u*i-r*c*h,t[3]=e*u*h+r*c*i,t}function w(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const B=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.c,C=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.s,D=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.a,F=y,G=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.b,R=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.d,W=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.l,X=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.e,Y=X,Z=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.f,H=Z,J=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.n,K=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.g,N=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.h;function Q(t,s,a){const n=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.e)(s,a);return n<-.999999?((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(U,V,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.u)(U)<1e-6&&(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(U,$,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.n)(U,U),v(t,U,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(U,s,a),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+n,J(t,t))}const U=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),V=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(1,0,0),$=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(0,1,0);function tt(t,s,a,n,o,r){return E(st,s,o,r),E(at,a,n,r),E(t,st,at,2*r*(1-r)),t}const st=(0,_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),at=(0,_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.a)();function nt(t,s,a,n){const o=ot;return o[0]=a[0],o[3]=a[1],o[6]=a[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-s[0],o[5]=-s[1],o[8]=-s[2],J(t,T(t,o))}const ot=(0,_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),rt=Object.freeze(Object.defineProperty({__proto__:null,add:D,calculateW:z,conjugate:S,copy:B,dot:R,equals:N,exactEquals:K,fromEuler:k,fromMat3:T,getAxisAngle:x,identity:b,invert:O,len:Y,length:X,lerp:W,mul:F,multiply:y,normalize:J,random:L,rotateX:A,rotateY:I,rotateZ:_,rotationTo:Q,scale:G,set:C,setAxes:nt,setAxisAngle:v,slerp:E,sqlerp:tt,sqrLen:H,squaredLength:Z,str:w},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/vec2f32.js":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec2f32.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ i),
/* harmony export */   "U": () => (/* binding */ f),
/* harmony export */   "Z": () => (/* binding */ c),
/* harmony export */   "a": () => (/* binding */ r),
/* harmony export */   "b": () => (/* binding */ e),
/* harmony export */   "c": () => (/* binding */ n),
/* harmony export */   "d": () => (/* binding */ s),
/* harmony export */   "e": () => (/* binding */ l),
/* harmony export */   "f": () => (/* binding */ t),
/* harmony export */   "o": () => (/* binding */ o),
/* harmony export */   "u": () => (/* binding */ u),
/* harmony export */   "v": () => (/* binding */ y),
/* harmony export */   "z": () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(){return new Float32Array(2)}function r(n){const r=new Float32Array(2);return r[0]=n[0],r[1]=n[1],r}function t(n,r){const t=new Float32Array(2);return t[0]=n,t[1]=r,t}function e(n,r){return new Float32Array(n,r,2)}function a(){return n()}function o(){return t(1,1)}function u(){return t(1,0)}function s(){return t(0,1)}const c=a(),i=o(),f=u(),l=s(),y=Object.freeze(Object.defineProperty({__proto__:null,ONES:i,UNIT_X:f,UNIT_Y:l,ZEROS:c,clone:r,create:n,createView:e,fromValues:t,ones:o,unitX:u,unitY:s,zeros:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/vec32.js":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec32.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ n),
/* harmony export */   "b": () => (/* binding */ f),
/* harmony export */   "c": () => (/* binding */ t),
/* harmony export */   "d": () => (/* binding */ i),
/* harmony export */   "e": () => (/* binding */ o),
/* harmony export */   "f": () => (/* binding */ a),
/* harmony export */   "n": () => (/* binding */ s),
/* harmony export */   "s": () => (/* binding */ u),
/* harmony export */   "t": () => (/* binding */ r),
/* harmony export */   "v": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/support/buffer/math/common.js */ "./node_modules/@arcgis/core/geometry/support/buffer/math/common.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(e,t,f){r(e.typedBuffer,t.typedBuffer,f,e.typedBufferStride,t.typedBufferStride)}function r(t,r,f,n=3,o=n){if(t.length/n!==Math.ceil(r.length/o))return _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__.mathLogger.error("source and destination buffers need to have the same number of elements"),t;const u=t.length/n,i=f[0],s=f[1],a=f[2],d=f[4],c=f[5],l=f[6],p=f[8],y=f[9],h=f[10],m=f[12],B=f[13],g=f[14];let S=0,M=0;for(let e=0;e<u;e++){const e=r[S],f=r[S+1],u=r[S+2];t[M]=i*e+d*f+p*u+m,t[M+1]=s*e+c*f+y*u+B,t[M+2]=a*e+l*f+h*u+g,S+=o,M+=n}return t}function f(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(t,r,f,n=3,o=n){if(t.length/n!==Math.ceil(r.length/o))return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__.mathLogger.error("source and destination buffers need to have the same number of elements");const u=t.length/n,i=f[0],s=f[1],a=f[2],d=f[3],c=f[4],l=f[5],p=f[6],y=f[7],h=f[8];let m=0,B=0;for(let e=0;e<u;e++){const e=r[m],f=r[m+1],u=r[m+2];t[B]=i*e+d*f+p*u,t[B+1]=s*e+c*f+y*u,t[B+2]=a*e+l*f+h*u,m+=o,B+=n}}function o(e,t,r){u(e.typedBuffer,t,r,e.typedBufferStride)}function u(e,t,r,f=3){const n=Math.min(e.length/f,t.count),o=t.typedBuffer,u=t.typedBufferStride;let i=0,s=0;for(let a=0;a<n;a++)e[s]=r*o[i],e[s+1]=r*o[i+1],e[s+2]=r*o[i+2],i+=u,s+=f}function i(e,t){s(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r=3,f=r){const n=Math.min(e.length/r,t.length/f);let o=0,u=0;for(let i=0;i<n;i++){const n=t[o],i=t[o+1],s=t[o+2],a=n*n+i*i+s*s;if(a>0){const t=1/Math.sqrt(a);e[u]=t*n,e[u+1]=t*i,e[u+2]=t*s}o+=f,u+=r}}function a(e,t,r){const f=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,u=t.typedBuffer,i=t.typedBufferStride;let s=0,a=0;for(let d=0;d<f;d++)n[a]=u[s]>>r,n[a+1]=u[s+1]>>r,n[a+2]=u[s+2]>>r,s+=i,a+=o}const d=Object.freeze(Object.defineProperty({__proto__:null,normalize:s,normalizeView:i,scale:u,scaleView:o,shiftRight:a,transformMat3:n,transformMat3View:f,transformMat4:r,transformMat4View:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/vec3f32.js":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec3f32.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ f),
/* harmony export */   "U": () => (/* binding */ l),
/* harmony export */   "Z": () => (/* binding */ i),
/* harmony export */   "a": () => (/* binding */ e),
/* harmony export */   "b": () => (/* binding */ t),
/* harmony export */   "c": () => (/* binding */ n),
/* harmony export */   "d": () => (/* binding */ s),
/* harmony export */   "e": () => (/* binding */ c),
/* harmony export */   "f": () => (/* binding */ r),
/* harmony export */   "g": () => (/* binding */ _),
/* harmony export */   "h": () => (/* binding */ y),
/* harmony export */   "o": () => (/* binding */ o),
/* harmony export */   "u": () => (/* binding */ u),
/* harmony export */   "v": () => (/* binding */ w),
/* harmony export */   "z": () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function t(n){const t=new Float32Array(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function r(n,t,r){const e=new Float32Array(3);return e[0]=n,e[1]=t,e[2]=r,e}function e(n,t){return new Float32Array(n,t,3)}function a(){return n()}function o(){return r(1,1,1)}function u(){return r(1,0,0)}function s(){return r(0,1,0)}function c(){return r(0,0,1)}const i=a(),f=o(),l=u(),_=s(),y=c(),w=Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_X:l,UNIT_Y:_,UNIT_Z:y,ZEROS:i,clone:t,create:n,createView:e,fromValues:r,ones:o,unitX:u,unitY:s,unitZ:c,zeros:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/core/NestedMap.js":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/NestedMap.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NestedMap": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(t,e){return this._outer.get(t)?.get(e)}set(t,e,r){const s=this._outer.get(t);s?s.set(e,r):this._outer.set(t,new Map([[e,r]]))}delete(t,e){const r=this._outer.get(t);r&&(r.delete(e),0===r.size&&this._outer.delete(t))}forEach(t){this._outer.forEach(((e,r)=>t(e,r)))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/byteSizeEstimations.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/byteSizeEstimations.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "estimateAttributesObjectSize": () => (/* binding */ t),
/* harmony export */   "estimateFixedArraySize": () => (/* binding */ c),
/* harmony export */   "estimateNestedObjectSize": () => (/* binding */ e),
/* harmony export */   "estimateNumberByteSize": () => (/* binding */ n),
/* harmony export */   "estimateStringByteSize": () => (/* binding */ r)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r(r){return 32+r.length}function n(r){return 16}function t(t){if(!t)return 0;let e=f;for(const o in t)if(t.hasOwnProperty(o)){const u=t[o];switch(typeof u){case"string":e+=r(u);break;case"number":e+=n();break;case"boolean":e+=4}}return e}function e(r){if(!r)return 0;if(Array.isArray(r))return o(r);let n=f;for(const t in r)r.hasOwnProperty(t)&&(n+=u(r[t]));return n}function o(r){const n=r.length;if(0===n||"number"==typeof r[0])return 32+8*n;let t=i;for(let e=0;e<n;e++)t+=u(r[e]);return t}function u(t){switch(typeof t){case"object":return e(t);case"string":return r(t);case"number":return n();case"boolean":return 4;default:return 8}}function c(r,n){return i+r.length*n}const f=32,i=32;


/***/ }),

/***/ "./node_modules/@arcgis/core/core/devEnvironmentUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustStaticAGOUrl": () => (/* binding */ a),
/* harmony export */   "isDevEnvironment": () => (/* binding */ c),
/* harmony export */   "isTelemetryDevEnvironment": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,m.some((a=>null!=c?.match(a)))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(l)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(s)||null!=a.match(i)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}function o(c){c=c||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(m).some((a=>null!=c?.match(a)))}const t=/^devext.arcgis.com$/,s=/^qaext.arcgis.com$/,l=/^[\w-]*\.mapsdevext.arcgis.com$/,i=/^[\w-]*\.mapsqa.arcgis.com$/,m=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,s,/^jsapps.esri.com$/,l,i];


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/FloatArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/FloatArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compactFloatArray": () => (/* binding */ e),
/* harmony export */   "floatArrayFrom": () => (/* binding */ a),
/* harmony export */   "floatSubArray": () => (/* binding */ o),
/* harmony export */   "newFloatArray": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(n,t=!1){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.NATIVE_ARRAY_MAX_SIZE?t?new Array(n).fill(0):new Array(n):new Float32Array(n)}function e(t){return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(t)?t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.NATIVE_ARRAY_MAX_SIZE?t:new Float32Array(t):t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.NATIVE_ARRAY_MAX_SIZE?Array.from(t):t}function a(t){return((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(t)?t.length:t.byteLength/8)<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.NATIVE_ARRAY_MAX_SIZE?Array.from(t):new Float32Array(t)}function o(r,n,t){return Array.isArray(r)?r.slice(n,n+t):r.subarray(n,n+t)}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/buffer/math/common.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/math/common.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mathLogger": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const e=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.support.buffer.math");


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/lineSegment.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/lineSegment.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closestLineSegmentDistance2": () => (/* binding */ S),
/* harmony export */   "closestLineSegmentPoint": () => (/* binding */ k),
/* harmony export */   "closestRayDistance2": () => (/* binding */ B),
/* harmony export */   "copy": () => (/* binding */ h),
/* harmony export */   "create": () => (/* binding */ v),
/* harmony export */   "distance": () => (/* binding */ d),
/* harmony export */   "distance2": () => (/* binding */ M),
/* harmony export */   "fromPoints": () => (/* binding */ b),
/* harmony export */   "fromValues": () => (/* binding */ m),
/* harmony export */   "pointAt": () => (/* binding */ l),
/* harmony export */   "projectPoint": () => (/* binding */ j),
/* harmony export */   "projectPointClamp": () => (/* binding */ A),
/* harmony export */   "wrap": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "./node_modules/@arcgis/core/core/ObjectStack.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vectorStacks.js */ "./node_modules/@arcgis/core/geometry/support/vectorStacks.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function v(t){return t?{origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(t.origin),vector:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(t.vector)}:{origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),vector:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)()}}function p(t,r){const n=x.get();return n.origin=t,n.vector=r,n}function h(t,r=v()){return m(t.origin,t.vector,r)}function m(t,r,o=v()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(o.origin,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(o.vector,r),o}function b(t,r,e=v()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(e.origin,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(e.vector,r,t),e}function M(r,n){const c=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),n,r.origin),s=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.e)(r.vector,c),u=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.e)(r.vector,r.vector),a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(s/u,0,1),g=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),r.vector,a),c);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.e)(g,g)}function d(t,r){return Math.sqrt(M(t,r))}function j(t,r,n){return A(t,r,0,1,n)}function l(t,r,n){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)(n,t.origin,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(n,t.vector,r))}function A(r,n,u,a,g){const{vector:v,origin:p}=r,h=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),n,p),m=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.e)(v,h)/(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.p)(v);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(g,v,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(m,u,a)),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)(g,g,r.origin)}function B(t,r){if(q(t,p(r.origin,r.direction),!1,w)){const{tA:r,pB:n,distance2:o}=w;if(r>=0&&r<=1)return o;if(r<0)return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.d)(t.origin,n);if(r>1)return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.d)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),t.origin,t.vector),n)}return null}function k(t,r,o){return!!q(t,r,!0,w)&&((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(o,w.pA),!0)}function S(t,r){return q(t,r,!0,w)?w.distance2:null}function q(r,n,o,e){const i=1e-6,s=r.origin,a=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),s,r.vector),g=n.origin,v=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),g,n.vector),p=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),h=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get();if(p[0]=s[0]-g[0],p[1]=s[1]-g[1],p[2]=s[2]-g[2],h[0]=v[0]-g[0],h[1]=v[1]-g[1],h[2]=v[2]-g[2],Math.abs(h[0])<i&&Math.abs(h[1])<i&&Math.abs(h[2])<i)return!1;const m=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get();if(m[0]=a[0]-s[0],m[1]=a[1]-s[1],m[2]=a[2]-s[2],Math.abs(m[0])<i&&Math.abs(m[1])<i&&Math.abs(m[2])<i)return!1;const b=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],M=h[0]*m[0]+h[1]*m[1]+h[2]*m[2],d=p[0]*m[0]+p[1]*m[1]+p[2]*m[2],j=h[0]*h[0]+h[1]*h[1]+h[2]*h[2],l=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*j-M*M;if(Math.abs(l)<i)return!1;let A=(b*M-d*j)/l,B=(b+M*A)/j;o&&(A=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(A,0,1),B=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(B,0,1));const k=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),S=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get();return k[0]=s[0]+A*m[0],k[1]=s[1]+A*m[1],k[2]=s[2]+A*m[2],S[0]=g[0]+B*h[0],S[1]=g[1]+B*h[1],S[2]=g[2]+B*h[2],e.tA=A,e.tB=B,e.pA=k,e.pB=S,e.distance2=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.d)(k,S),!0}const w={tA:0,tB:0,pA:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),pB:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),distance2:0},x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__.ObjectStack((()=>v()));


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/triangle.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/triangle.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "area2d": () => (/* binding */ d),
/* harmony export */   "areaPoints2d": () => (/* binding */ S),
/* harmony export */   "areaPoints3d": () => (/* binding */ w),
/* harmony export */   "copy": () => (/* binding */ k),
/* harmony export */   "create": () => (/* binding */ j),
/* harmony export */   "distance2": () => (/* binding */ l),
/* harmony export */   "fromValues": () => (/* binding */ b),
/* harmony export */   "intersectRay": () => (/* binding */ v),
/* harmony export */   "wrap": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "./node_modules/@arcgis/core/core/ObjectStack.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _lineSegment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lineSegment.js */ "./node_modules/@arcgis/core/geometry/support/lineSegment.js");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vectorStacks.js */ "./node_modules/@arcgis/core/geometry/support/vectorStacks.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function j(t){return t?{p0:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.a)(t.p0),p1:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.a)(t.p1),p2:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.a)(t.p2)}:{p0:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),p1:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),p2:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)()}}function h(t,n,e){const r=x.get();return r.p0=t,r.p1=n,r.p2=e,r}function k(t,n=j()){return b(t.p0,t.p1,t.p2,n)}function b(t,e,r,o=j()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.p0,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.p1,e),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.p2,r),o}function l(t,n){const p=t.p0,c=t.p1,s=t.p2,i=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.b)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),c,p),u=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.b)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),s,c),a=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.b)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),p,s),j=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.b)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),n,p),h=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.b)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),n,c),k=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.b)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),n,s),b=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(i,i,a),l=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.e)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),i,b),j),v=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.e)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),u,b),h),S=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.e)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),a,b),k);if(l>0&&v>0&&S>0){const t=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.e)(b,j);return t*t/(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.e)(b,b)}const d=(0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.distance2)((0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(p,i,M.get()),n),w=(0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.distance2)((0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(c,u,M.get()),n),x=(0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.distance2)((0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(s,a,M.get()),n);return Math.min(d,w,x)}function v(t,n,e){const r=1e-5,{direction:o,origin:s}=n,{p0:i,p1:u,p2:a}=t,f=u[0]-i[0],g=u[1]-i[1],m=u[2]-i[2],j=a[0]-i[0],h=a[1]-i[1],k=a[2]-i[2],b=o[1]*k-h*o[2],l=o[2]*j-k*o[0],v=o[0]*h-j*o[1],S=f*b+g*l+m*v;if(S>-r&&S<r)return!1;const d=1/S,w=s[0]-i[0],M=s[1]-i[1],x=s[2]-i[2],O=d*(w*b+M*l+x*v);if(O<0||O>1)return!1;const V=M*m-g*x,q=x*f-m*w,y=w*g-f*M,z=d*(o[0]*V+o[1]*q+o[2]*y);if(z<0||O+z>1)return!1;if(e){(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(e,o,d*(j*V+h*q+k*y)),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.a)(e,s,e)}return!0}function S(t,n,e){const r=n[0]-t[0],o=n[1]-t[1],p=e[0]-t[0],c=e[1]-t[1];return.5*Math.abs(r*c-o*p)}function d(t){return S(t.p0,t.p1,t.p2)}function w(t,n,o){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.b)(O,n,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.b)(V,o,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.l)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(O,O,V))/2}const M=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__.ObjectStack(_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.create),x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__.ObjectStack((()=>j())),O=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),V=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();


/***/ }),

/***/ "./node_modules/@arcgis/core/libs/basisu/BasisU.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/basisu/BasisU.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBasisTranscoder": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ "./node_modules/@arcgis/core/assets.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(){if(null==s){const t=t=>(0,_assets_js__WEBPACK_IMPORTED_MODULE_0__.getAssetUrl)(`esri/libs/basisu/${t}`);s=__webpack_require__.e(/*! import() */ "vendors-node_modules_arcgis_core_chunks_basis_transcoder_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../chunks/basis_transcoder.js */ "./node_modules/@arcgis/core/chunks/basis_transcoder.js")).then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return s}let s;


/***/ }),

/***/ "./node_modules/@arcgis/core/libs/basisu/TextureFormat.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/basisu/TextureFormat.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextureFormat": () => (/* binding */ _)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var _;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444"}(_||(_={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/support/requestImageUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/requestImageUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestImage": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function t(t,r){const{data:a}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"image",...r});return a}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/glTF/internal/TextureTransformUtils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/TextureTransformUtils.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTransformMatrix": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/mat3f32.js */ "./node_modules/@arcgis/core/chunks/mat3f32.js");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec2f32.js */ "./node_modules/@arcgis/core/chunks/vec2f32.js");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "./node_modules/@arcgis/core/chunks/mat3.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r(r){if(null==r)return null;const f=null!=r.offset?r.offset:_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__.Z,l=null!=r.rotation?r.rotation:0,c=null!=r.scale?r.scale:_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__.O,u=(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.f)(1,0,0,0,1,0,f[0],f[1],1),i=(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.f)(Math.cos(l),-Math.sin(l),0,Math.sin(l),Math.cos(l),0,0,0,1),m=(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.f)(c[0],0,0,0,c[1],0,0,0,1),e=(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)();return (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.m)(e,i,m),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.m)(e,u,e),e}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/graphics/ProcessedObjectResource.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/ProcessedObjectResource.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessedObjectResource": () => (/* binding */ t),
/* harmony export */   "ProcessedObjectStageResources": () => (/* binding */ s)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class t{constructor(t,e,r){this.name=t,this.lodThreshold=e,this.pivotOffset=r,this.stageResources=new s,this.numberOfVertices=0}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetch": () => (/* binding */ X),
/* harmony export */   "gltfToEngineResources": () => (/* binding */ Z),
/* harmony export */   "parseUrl": () => (/* binding */ Y)
/* harmony export */ });
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/devEnvironmentUtils.js */ "./node_modules/@arcgis/core/core/devEnvironmentUtils.js");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "./node_modules/@arcgis/core/chunks/mat3.js");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "./node_modules/@arcgis/core/chunks/mat3f64.js");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "./node_modules/@arcgis/core/chunks/mat4.js");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "./node_modules/@arcgis/core/chunks/mat4f64.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js");
/* harmony import */ var _geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/FloatArray.js */ "./node_modules/@arcgis/core/geometry/support/FloatArray.js");
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/* harmony import */ var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../chunks/vec22.js */ "./node_modules/@arcgis/core/chunks/vec22.js");
/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../chunks/vec33.js */ "./node_modules/@arcgis/core/chunks/vec33.js");
/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../chunks/vec43.js */ "./node_modules/@arcgis/core/chunks/vec43.js");
/* harmony import */ var _glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../glTF/DefaultLoadingContext.js */ "./node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js");
/* harmony import */ var _glTF_loader_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../glTF/loader.js */ "./node_modules/@arcgis/core/views/3d/glTF/loader.js");
/* harmony import */ var _glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../glTF/internal/indexUtils.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js");
/* harmony import */ var _glTF_internal_resourceUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../glTF/internal/resourceUtils.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js");
/* harmony import */ var _glTF_internal_TextureTransformUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../glTF/internal/TextureTransformUtils.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/TextureTransformUtils.js");
/* harmony import */ var _ProcessedObjectResource_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ProcessedObjectResource.js */ "./node_modules/@arcgis/core/views/3d/layers/graphics/ProcessedObjectResource.js");
/* harmony import */ var _wosrLoader_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./wosrLoader.js */ "./node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js");
/* harmony import */ var _webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../webgl-engine/lib/Attribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js");
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../webgl-engine/lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../webgl-engine/lib/Geometry.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js");
/* harmony import */ var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../webgl-engine/lib/Texture.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js");
/* harmony import */ var _webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../webgl-engine/lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js");
/* harmony import */ var _webgl_engine_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../webgl-engine/materials/pbrUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function X(t,r){const o=Y((0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__.adjustStaticAGOUrl)(t));if("wosr"===o.fileType){const e=await(r.cache?r.cache.loadWOSR(o.url,r):(0,_wosrLoader_js__WEBPACK_IMPORTED_MODULE_21__.load)(o.url,r)),{engineResources:t,referenceBoundingBox:s}=(0,_wosrLoader_js__WEBPACK_IMPORTED_MODULE_21__.processLoadResult)(e,r);return{lods:t,referenceBoundingBox:s,isEsriSymbolResource:!1,isWosr:!0}}const s=await(r.cache?r.cache.loadGLTF(o.url,r,!!r.usePBR):(0,_glTF_loader_js__WEBPACK_IMPORTED_MODULE_16__.loadGLTF)(new _glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_15__.DefaultLoadingContext(r.streamDataRequester),o.url,r,r.usePBR)),i=s.model.meta?.ESRI_proxyEllipsoid,n=s.meta.isEsriSymbolResource&&null!=i&&s.meta.uri.includes("/RealisticTrees/");n&&!s.customMeta.esriTreeRendering&&(s.customMeta.esriTreeRendering=!0,se(s,i));const l=!!r.usePBR,u=s.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:n,mrrFactors:[..._webgl_engine_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_30__.defaultEsriSymbologyMRRFactors]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[..._webgl_engine_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_30__.defaultAdvancedMRRFactors]},a={...r.materialParamsMixin,treeRendering:n},{engineResources:c,referenceBoundingBox:m}=Z(s,u,a,r.skipHighLods&&null==o.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:c,referenceBoundingBox:m,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1}}function Y(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Z(e,t,r,o){const s=e.model,i=new Array,n=new Map,l=new Map,u=s.lods.length,a=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__.empty)();return s.lods.forEach(((e,c)=>{const m=!0===o.skipHighLods&&(u>1&&0===c||u>3&&1===c)||!1===o.skipHighLods&&null!=o.singleLodIndex&&c!==o.singleLodIndex;if(m&&0!==c)return;const f=new _ProcessedObjectResource_js__WEBPACK_IMPORTED_MODULE_20__.ProcessedObjectResource(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const o=m?new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_28__.DefaultMaterial({}):ee(s,e,f,t,r,n,l),{geometry:i,vertexCount:u}=te(e,null!=o?o:new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_28__.DefaultMaterial({})),p=i.boundingInfo;null!=p&&0===c&&((0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__.expandWithVec3)(a,p.bbMin),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__.expandWithVec3)(a,p.bbMax)),null!=o&&(f.stageResources.geometries.push(i),f.numberOfVertices+=u)})),m||i.push(f)})),{engineResources:i,referenceBoundingBox:a}}function ee(e,t,r,o,s,i,n){const l=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),u=e.materials.get(t.material),a=null!=t.attributes.texCoord0,c=null!=t.attributes.normal;if(null==u)return null;const m=oe(u.alphaMode);if(!i.has(l)){if(a){const t=(t,r=!1)=>{if(null!=t&&!n.has(t)){const o=e.textures.get(t);if(null!=o){const e=o.data;n.set(t,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_26__.Texture((0,_glTF_internal_resourceUtils_js__WEBPACK_IMPORTED_MODULE_18__.isEncodedMeshTexture)(e)?e.data:e,{...o.parameters,preMultiplyAlpha:!(0,_glTF_internal_resourceUtils_js__WEBPACK_IMPORTED_MODULE_18__.isEncodedMeshTexture)(e)&&r,encoding:(0,_glTF_internal_resourceUtils_js__WEBPACK_IMPORTED_MODULE_18__.isEncodedMeshTexture)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(u.textureColor,m!==_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_24__.AlphaDiscardMode.Opaque),t(u.textureNormal),t(u.textureOcclusion),t(u.textureEmissive),t(u.textureMetallicRoughness)}const r=u.color[0]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_29__.COLOR_GAMMA),f=u.color[1]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_29__.COLOR_GAMMA),d=u.color[2]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_29__.COLOR_GAMMA),p=u.emissiveFactor[0]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_29__.COLOR_GAMMA),g=u.emissiveFactor[1]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_29__.COLOR_GAMMA),x=u.emissiveFactor[2]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_29__.COLOR_GAMMA),b=null!=u.textureColor&&a?n.get(u.textureColor):null,h=(0,_webgl_engine_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_30__.useSchematicPBR)({normalTexture:u.textureNormal,metallicRoughnessTexture:u.textureMetallicRoughness,metallicFactor:u.metallicFactor,roughnessFactor:u.roughnessFactor,emissiveTexture:u.textureEmissive,emissiveFactor:u.emissiveFactor,occlusionTexture:u.textureOcclusion});i.set(l,new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_28__.DefaultMaterial({...o,transparent:m===_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_24__.AlphaDiscardMode.Blend,customDepthTest:_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_24__.DepthTestFunction.Lequal,textureAlphaMode:m,textureAlphaCutoff:u.alphaCutoff,diffuse:[r,f,d],ambient:[r,f,d],opacity:u.opacity,doubleSided:u.doubleSided,doubleSidedType:"winding-order",cullFace:u.doubleSided?_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_24__.CullFaceOptions.None:_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_24__.CullFaceOptions.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:c?_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_22__.NormalType.Attribute:_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_22__.NormalType.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:null!=b?b.id:void 0,colorMixMode:u.colorMixMode,normalTextureId:null!=u.textureNormal&&a?n.get(u.textureNormal).id:void 0,textureAlphaPremultiplied:null!=b&&!!b.parameters.preMultiplyAlpha,occlusionTextureId:null!=u.textureOcclusion&&a?n.get(u.textureOcclusion).id:void 0,emissiveTextureId:null!=u.textureEmissive&&a?n.get(u.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=u.textureMetallicRoughness&&a?n.get(u.textureMetallicRoughness).id:void 0,emissiveFactor:[p,g,x],mrrFactors:h?[..._webgl_engine_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_30__.defaultSchematicMRRFactors]:[u.metallicFactor,u.roughnessFactor,o.mrrFactors[2]],isSchematic:h,colorTextureTransformMatrix:(0,_glTF_internal_TextureTransformUtils_js__WEBPACK_IMPORTED_MODULE_19__.getTransformMatrix)(u.colorTextureTransform),normalTextureTransformMatrix:(0,_glTF_internal_TextureTransformUtils_js__WEBPACK_IMPORTED_MODULE_19__.getTransformMatrix)(u.normalTextureTransform),occlusionTextureTransformMatrix:(0,_glTF_internal_TextureTransformUtils_js__WEBPACK_IMPORTED_MODULE_19__.getTransformMatrix)(u.occlusionTextureTransform),emissiveTextureTransformMatrix:(0,_glTF_internal_TextureTransformUtils_js__WEBPACK_IMPORTED_MODULE_19__.getTransformMatrix)(u.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:(0,_glTF_internal_TextureTransformUtils_js__WEBPACK_IMPORTED_MODULE_19__.getTransformMatrix)(u.metallicRoughnessTextureTransform),...s}))}const f=i.get(l);if(r.stageResources.materials.push(f),a){const e=e=>{null!=e&&r.stageResources.textures.push(n.get(e))};e(u.textureColor),e(u.textureNormal),e(u.textureOcclusion),e(u.textureEmissive),e(u.textureMetallicRoughness)}return f}function te(e,r){const o=e.attributes.position.count,s=(0,_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_17__.convertPrimitiveToTriangles)(e.indices||o,e.primitiveType),i=(0,_geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_8__.newFloatArray)(3*o),{typedBuffer:n,typedBufferStride:l}=e.attributes.position;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__.t)(i,n,e.transform,3,l);const u=[[_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__.VertexAttribute.POSITION,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_23__.Attribute(i,3,!0)]],a=[[_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__.VertexAttribute.POSITION,s]];if(null!=e.attributes.normal){const r=(0,_geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_8__.newFloatArray)(3*o),{typedBuffer:i,typedBufferStride:n}=e.attributes.normal;(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.b)(re,e.transform),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__.a)(r,i,re,3,n),u.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__.VertexAttribute.NORMAL,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_23__.Attribute(r,3,!0)]),a.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__.VertexAttribute.NORMAL,s])}if(null!=e.attributes.tangent){const r=(0,_geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_8__.newFloatArray)(4*o),{typedBuffer:i,typedBufferStride:n}=e.attributes.tangent;(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.b)(re,e.transform),(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_11__.t)(r,i,re,4,n),u.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__.VertexAttribute.TANGENT,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_23__.Attribute(r,4,!0)]),a.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__.VertexAttribute.TANGENT,s])}if(null!=e.attributes.texCoord0){const t=(0,_geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_8__.newFloatArray)(2*o),{typedBuffer:r,typedBufferStride:i}=e.attributes.texCoord0;(0,_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_12__.n)(t,r,2,i),u.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__.VertexAttribute.UV0,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_23__.Attribute(t,2,!0)]),a.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__.VertexAttribute.UV0,s])}if(null!=e.attributes.color){const t=new Uint8Array(4*o);4===e.attributes.color.elementCount?e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec4f?(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_11__.s)(t,e.attributes.color,255):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec4u8?(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_14__.c)(t,e.attributes.color):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec4u16&&(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_11__.s)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__.s)(t,e.attributes.color,255,4):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3u8?(0,_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_13__.c)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3u16&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__.s)(t,e.attributes.color,1/256,4)),u.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__.VertexAttribute.COLOR,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_23__.Attribute(t,4,!0)]),a.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__.VertexAttribute.COLOR,s])}return{geometry:new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_25__.Geometry(r,u,a),vertexCount:o}}const re=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();function oe(e){switch(e){case"BLEND":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_24__.AlphaDiscardMode.Blend;case"MASK":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_24__.AlphaDiscardMode.Mask;case"OPAQUE":case null:case void 0:return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_24__.AlphaDiscardMode.Opaque}}function se(e,t){for(let r=0;r<e.model.lods.length;++r){const f=e.model.lods[r];for(const d of f.parts){const f=d.attributes.normal;if(null==f)return;const p=d.attributes.position,g=p.count,b=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(),T=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(),y=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(),R=new Uint8Array(4*g),w=new Float64Array(3*g),v=(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__.a)((0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__.c)(),d.transform);let M=0,j=0;for(let o=0;o<g;o++){p.getVec(o,T),f.getVec(o,b),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.m)(T,T,d.transform),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.b)(y,T,t.center),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.D)(y,y,t.radius);const s=y[2],m=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.l)(y),g=Math.min(.45+.55*m*m,1);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.D)(y,y,t.radius),null!==v&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.m)(y,y,v),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.n)(y,y),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.h)(y,y,b,s>-1?.2:Math.min(-4*s-3.8,1)),w[M]=y[0],w[M+1]=y[1],w[M+2]=y[2],M+=3,R[j]=255*g,R[j+1]=255*g,R[j+2]=255*g,R[j+3]=255,j+=4}d.attributes.normal=new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f(w),d.attributes.color=new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec4u8(R)}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTextureResources": () => (/* binding */ T),
/* harmony export */   "load": () => (/* binding */ v),
/* harmony export */   "processLoadResult": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/asyncUtils.js */ "./node_modules/@arcgis/core/core/asyncUtils.js");
/* harmony import */ var _core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/byteSizeEstimations.js */ "./node_modules/@arcgis/core/core/byteSizeEstimations.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/NestedMap.js */ "./node_modules/@arcgis/core/core/NestedMap.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/Version.js */ "./node_modules/@arcgis/core/core/Version.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../support/requestImageUtils.js */ "./node_modules/@arcgis/core/support/requestImageUtils.js");
/* harmony import */ var _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../webgl-engine/lib/Attribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js");
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../webgl-engine/lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../webgl-engine/lib/Geometry.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js");
/* harmony import */ var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../webgl-engine/lib/Texture.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js");
/* harmony import */ var _webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../webgl-engine/lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const h=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function v(e,t){const n=await A(e,t),s=await T(n.textureDefinitions??{},t);let a=0;for(const r in s)if(s.hasOwnProperty(r)){const e=s[r];a+=e?.image?e.image.width*e.image.height*4:0}return{resource:n,textures:s,size:a+(0,_core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_2__.estimateNestedObjectSize)(n)}}async function A(r,n){const s=null!=n&&n.streamDataRequester;if(s)return j(r,s,n);const a=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__.result)((0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r,n));if(!0===a.ok)return a.value.data;(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAbortError)(a.error),M(a.error)}async function j(e,r,n){const s=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__.result)(r.request(e,"json",n));if(!0===s.ok)return s.value;(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAbortError)(s.error),M(s.error.details.url)}function M(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("",`Request for object resource failed: ${e}`)}function P(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(h.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(h.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(h.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(h.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else h.warn("Indexed geometries must specify faces"),n=!1;break}default:h.warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(h.warn("Geometry requires material"),n=!1);const s=e.params.vertexAttributes;for(const a in s){s[a].values||(h.warn("Geometries with externally defined attributes are not yet supported"),n=!1)}return n}function I(e,t){const r=new Array,n=new Array,s=new Array,o=new _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_5__.NestedMap,u=e.resource,c=_core_Version_js__WEBPACK_IMPORTED_MODULE_7__.Version.parse(u.version||"1.0","wosr");O.validate(c);const p=u.model.name,d=u.model.geometries,x=u.materialDefinitions??{},h=e.textures;let v=0;const A=new Map;for(let a=0;a<d.length;a++){const e=d[a];if(!P(e))continue;const i=k(e),u=e.params.vertexAttributes,c=[];for(const t in u){const e=u[t],r=e.values;c.push([t,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_11__.Attribute(r,e.valuesPerElement,!0)])}const p=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)p.push([e,t[e].values])}const j=i.texture,M=h&&h[j];if(M&&!A.has(j)){const{image:e,parameters:t}=M,r=new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__.Texture(e,t);n.push(r),A.set(j,r)}const I=A.get(j),U=I?I.id:void 0,T=i.material;let O=o.get(T,j);if(null==O){const e=x[T.substring(T.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=M&&M.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s=M?E(M.alphaChannelUsage):void 0,a={ambient:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.g)(e.diffuse),diffuse:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.g)(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:s,textureAlphaCutoff:.33,textureId:U,initTextureTransparent:!0,doubleSided:!0,cullFace:_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_12__.CullFaceOptions.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:M?.parameters.preMultiplyAlpha??!1};null!=t&&t.materialParamsMixin&&Object.assign(a,t.materialParamsMixin),O=new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_16__.DefaultMaterial(a),o.set(T,j,O)}s.push(O);const q=new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_13__.Geometry(O,c,p);v+=p.find((e=>e[0]===_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__.VertexAttribute.POSITION))?.[1].length??0,r.push(q)}return{engineResources:[{name:p,stageResources:{textures:n,materials:s,geometries:r},pivotOffset:u.model.pivotOffset,numberOfVertices:v,lodThreshold:null}],referenceBoundingBox:U(r)}}function U(e){const t=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__.empty)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__.expandWithVec3)(t,r.bbMin),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__.expandWithVec3)(t,r.bbMax))})),t}async function T(e,t){const r=new Array;for(const a in e){const n=e[a],s=n.images[0].data;if(!s){h.warn("Externally referenced texture data is not yet supported");continue}const o=n.encoding+";base64,"+s,i="/textureDefinitions/"+a,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__.TextureWrapMode.REPEAT,t:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__.TextureWrapMode.REPEAT},preMultiplyAlpha:E(l)!==_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_12__.AlphaDiscardMode.Opaque},c=null!=t&&t.disableTextures?Promise.resolve(null):(0,_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_10__.requestImage)(o,t);r.push(c.then((e=>({refId:i,image:e,parameters:u,alphaChannelUsage:l}))))}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function E(e){switch(e){case"mask":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_12__.AlphaDiscardMode.Mask;case"maskAndTransparency":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_12__.AlphaDiscardMode.MaskBlend;case"none":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_12__.AlphaDiscardMode.Opaque;default:return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_12__.AlphaDiscardMode.Blend}}function k(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const O=new _core_Version_js__WEBPACK_IMPORTED_MODULE_7__.Version(1,2,"wosr");


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/support/FastSymbolUpdates.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/support/FastSymbolUpdates.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConvertOptions": () => (/* binding */ B),
/* harmony export */   "FastColorInfo": () => (/* binding */ b),
/* harmony export */   "FastOpacityInfo": () => (/* binding */ C),
/* harmony export */   "FastRotationInfo": () => (/* binding */ D),
/* harmony export */   "FastRotationType": () => (/* binding */ y),
/* harmony export */   "FastSizeInfo": () => (/* binding */ g),
/* harmony export */   "FastSizeType": () => (/* binding */ S),
/* harmony export */   "FastSymbolUpdatesState": () => (/* binding */ N),
/* harmony export */   "FastVisualVariables": () => (/* binding */ w),
/* harmony export */   "VisualVariablesParameters": () => (/* binding */ J),
/* harmony export */   "convertVisualVariables": () => (/* binding */ L),
/* harmony export */   "evaluateModelTransform": () => (/* binding */ Q),
/* harmony export */   "evaluateModelTransformScale": () => (/* binding */ W),
/* harmony export */   "getAttributeValue": () => (/* binding */ X),
/* harmony export */   "getMaterialParameters": () => (/* binding */ K),
/* harmony export */   "initFastSymbolUpdatesState": () => (/* binding */ O),
/* harmony export */   "updateFastSymbolUpdatesState": () => (/* binding */ G)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "./node_modules/@arcgis/core/chunks/mat3.js");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "./node_modules/@arcgis/core/chunks/mat3f64.js");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "./node_modules/@arcgis/core/chunks/mat4.js");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "./node_modules/@arcgis/core/chunks/mat4f64.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../renderers/support/lengthUtils.js */ "./node_modules/@arcgis/core/renderers/support/lengthUtils.js");
/* harmony import */ var _support_debugFlags_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../support/debugFlags.js */ "./node_modules/@arcgis/core/views/3d/support/debugFlags.js");
/* harmony import */ var _webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl-engine/core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var S,y;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(S||(S={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(y||(y={}));class x{constructor(e){this.field=e}}class g extends x{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[S.Undefined,S.Undefined,S.Undefined]}}class b extends x{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}}class C extends x{constructor(e){super(e),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}}class D extends x{constructor(e){super(e),this.offset=[0,0,0],this.factor=[1,1,1],this.type=[0,0,0]}}class w{}function U(e){return null!=e}function V(e){return"number"==typeof e}function M(e){return"string"==typeof e}function j(e){return null==e||M(e)}function k(e,t){e&&e.push(t)}function A(e,t,o,i=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__.c)()){const n=e||0,s=t||0,r=o||0;return 0!==n&&(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__.o)(i,i,-n/180*Math.PI),0!==s&&(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__.r)(i,i,s/180*Math.PI),0!==r&&(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__.n)(i,i,r/180*Math.PI),i}function I(e,t,o,i,n){const s=e.minSize,r=e.maxSize;if(e.expression)return k(n,"Could not convert size info: expression not supported"),!1;if(e.useSymbolValue){const e=i.symbolSize[o];return t.minSize[o]=e,t.maxSize[o]=e,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=S.DefinedSize,!0}if(U(e.field))return U(e.stops)?2===e.stops.length&&V(e.stops[0].size)&&V(e.stops[1].size)?(T(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,o),t.type[o]=S.DefinedSize,!0):(k(n,"Could not convert size info: stops only supported with 2 elements"),!1):V(s)&&V(r)&&U(e.minDataValue)&&U(e.maxDataValue)?(T(s,r,e.minDataValue,e.maxDataValue,t,o),t.type[o]=S.DefinedSize,!0):"unknown"===e.valueUnit?(k(n,"Could not convert size info: proportional size not supported"),!1):null!=_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_8__.meterIn[e.valueUnit]?(t.minSize[o]=-1/0,t.maxSize[o]=1/0,t.offset[o]=0,t.factor[o]=1/_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_8__.meterIn[e.valueUnit],t.type[o]=S.DefinedSize,!0):(k(n,"Could not convert size info: scale-dependent size not supported"),!1);if(!U(e.field)){if(e.stops&&e.stops[0]&&V(e.stops[0].size))return t.minSize[o]=e.stops[0].size,t.maxSize[o]=e.stops[0].size,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=S.DefinedSize,!0;if(V(s))return t.minSize[o]=s,t.maxSize[o]=s,t.offset[o]=s,t.factor[o]=0,t.type[o]=S.DefinedSize,!0}return k(n,"Could not convert size info: unsupported variant of sizeInfo"),!1}function T(e,t,o,i,n,s){const r=Math.abs(i-o)>0?(t-e)/(i-o):0;n.minSize[s]=r>0?e:t,n.maxSize[s]=r>0?t:e,n.offset[s]=e-o*r,n.factor[s]=r}function F(e,t,o,i){if(e.normalizationField||e.valueRepresentation)return k(i,"Could not convert size info: unsupported property"),null;if(!j(e.field))return k(i,"Could not convert size info: field is not a string"),null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return k(i,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size=new g(e.field);let n;switch(e.axis){case"width":return n=I(e,t.size,0,o,i),n?t:null;case"height":return n=I(e,t.size,2,o,i),n?t:null;case"depth":return n=I(e,t.size,1,o,i),n?t:null;case"width-and-depth":return n=I(e,t.size,0,o,i),n&&I(e,t.size,1,o,i),n?t:null;case null:case void 0:case"all":return n=I(e,t.size,0,o,i),n=n&&I(e,t.size,1,o,i),n=n&&I(e,t.size,2,o,i),n?t:null;default:return k(i,`Could not convert size info: unknown axis "${e.axis}""`),null}}function P(e,t,o){for(let n=0;n<3;++n){let o=t.unitInMeters;e.type[n]===S.DefinedSize&&(o*=t.modelSize[n],e.type[n]=S.DefinedScale),e.minSize[n]=e.minSize[n]/o,e.maxSize[n]=e.maxSize[n]/o,e.offset[n]=e.offset[n]/o,e.factor[n]=e.factor[n]/o}let i;if(e.type[0]!==S.Undefined)i=0;else if(e.type[1]!==S.Undefined)i=1;else{if(e.type[2]===S.Undefined)return k(o,"No size axis contains a valid size or scale"),!1;i=2}for(let n=0;n<3;++n)e.type[n]===S.Undefined&&(e.minSize[n]=e.minSize[i],e.maxSize[n]=e.maxSize[i],e.offset[n]=e.offset[i],e.factor[n]=e.factor[i],e.type[n]=e.type[i]);return!0}function R(e,t,o){e[4*t]=o.r/255,e[4*t+1]=o.g/255,e[4*t+2]=o.b/255,e[4*t+3]=o.a}function E(e,t,o){if(e.normalizationField)return k(o,"Could not convert color info: unsupported property"),null;if(M(e.field)){if(!e.stops)return k(o,"Could not convert color info: missing stops or colors"),null;{if(e.stops.length>8)return k(o,"Could not convert color info: too many color stops"),null;t.color=new b(e.field);const i=e.stops;for(let e=0;e<8;++e){const o=i[Math.min(e,i.length-1)];t.color.values[e]=o.value,R(t.color.colors,e,o.color)}}}else{if(!(e.stops&&e.stops.length>=0))return k(o,"Could not convert color info: no field and no colors/stops"),null;{const o=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let e=0;e<8;e++)t.color.values[e]=1/0,R(t.color.colors,e,o)}}return t}function _(e,t,o){if(e.normalizationField)return k(o,"Could not convert opacity info: unsupported property"),null;if(M(e.field)){if(!e.stops)return k(o,"Could not convert opacity info: missing stops or opacities"),null;{if(e.stops.length>8)return k(o,"Could not convert opacity info: too many opacity stops"),null;t.opacity=new C(e.field);const i=e.stops;for(let e=0;e<8;++e){const o=i[Math.min(e,i.length-1)];t.opacity.values[e]=o.value,t.opacity.opacityValues[e]=o.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return k(o,"Could not convert opacity info: no field and no opacities/stops"),null;{const o=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let e=0;e<8;e++)t.opacity.values[e]=1/0,t.opacity.opacityValues[e]=o}}return t}function q(e,t,o){const i=2===o&&"arithmetic"===e.rotationType;t.offset[o]=i?90:0,t.factor[o]=i?-1:1,t.type[o]=1}function $(e,t,o){if(!M(e.field))return k(o,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return k(o,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return q(e,t.rotation,0),t;case"roll":return q(e,t.rotation,1),t;case null:case void 0:case"heading":return q(e,t.rotation,2),t;default:return k(o,`Could not convert rotation info: unknown axis "${e.axis}""`),null}}class B{constructor(e,t=[1,1,1],o=[1,1,1],i=1,n=[0,0,0],s=[1,1,1],r=[0,0,0]){this.supports=e,this.modelSize=t,this.symbolSize=o,this.unitInMeters=i,this.anchor=n,this.scale=s,this.rotation=r}}function L(e,t,o){if(!e)return null;const i=e.reduce(((e,i)=>{if(!e)return e;if(i.valueExpression)return k(o,"Could not convert visual variables: arcade expressions not supported"),null;switch(i.type){case"size":return t.supports.size?F(i,e,t,o):e;case"color":return t.supports.color?E(i,e,o):e;case"opacity":return t.supports.opacity?_(i,e,o):null;case"rotation":return t.supports.rotation?$(i,e,o):e;default:return null}}),new w);return!(e.length>0&&i)||i.size||i.color||i.opacity||i.rotation?i&&i.size&&!P(i.size,t,o)?null:i:null}class N{constructor(e,t,o){this.visualVariables=e,this.materialParameters=t,this.requiresShaderTransformation=o}}function O(e,t){if(!e)return null;if(_support_debugFlags_js__WEBPACK_IMPORTED_MODULE_9__["default"].TESTS_DISABLE_FAST_UPDATES)return null;const o=L(e.visualVariables,t);return o?new N(o,K(o,t),!!o.size):null}function G(e,t,o){if(!t||!e)return!1;const i=e.visualVariables,n=L(t.visualVariables,o);return!!n&&(!!(H(i.size,n.size,"size")&&H(i.color,n.color,"color")&&H(i.rotation,n.rotation,"rotation")&&H(i.opacity,n.opacity,"opacity"))&&(e.visualVariables=n,e.materialParameters=K(n,o),e.requiresShaderTransformation=!!n.size,!0))}function H(e,t,o){if(!!e!=!!t)return!1;if(e&&e.field!==t?.field)return!1;if(e&&"rotation"===o){const o=e,i=t;for(let e=0;e<3;e++)if(o.type[e]!==i.type[e]||o.offset[e]!==i.offset[e]||o.factor[e]!==i.factor[e])return!1}return!0}class J extends _webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__.NoParameters{constructor(e){super(),this.vvSize=e?.size??null,this.vvColor=e?.color??null,this.vvOpacity=e?.opacity??null}}function K(e,n){const s=new J(e);return s.vvSize&&(s.vvSymbolAnchor=n.anchor,(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__.i)(ee),A(n.rotation[2],n.rotation[0],n.rotation[1],ee),s.vvSymbolRotationMatrix=s.vvSymbolRotationMatrix||(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.f)(s.vvSymbolRotationMatrix,ee)),s}function Q(t,o,i){if(!t.vvSize)return i;(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__.c)(Y,i);const u=t.vvSymbolRotationMatrix;(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__.s)(ee,u[0],u[1],u[2],0,u[3],u[4],u[5],0,u[6],u[7],u[8],0,0,0,0,1),(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__.m)(Y,Y,ee);for(let n=0;n<3;++n){const i=t.vvSize.offset[n]+o[0]*t.vvSize.factor[n];Z[n]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(i,t.vvSize.minSize[n],t.vvSize.maxSize[n])}return (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__.k)(Y,Y,Z),(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__.w)(Y,Y,t.vvSymbolAnchor),Y}function W(t,o,i){if(o.vvSize)for(let n=0;n<3;++n){const s=o.vvSize.offset[n]+i[0]*o.vvSize.factor[n];t[n]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(s,o.vvSize.minSize[n],o.vvSize.maxSize[n])}else (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__.s)(t,1,1,1)}function X(e,t){const o=null==e?0:t.attributes[e];return"number"==typeof o&&isFinite(o)?o:0}const Y=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__.c)(),Z=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.c)(),ee=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__.c)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorMixModeEnum": () => (/* binding */ n),
/* harmony export */   "encodeSymbolColor": () => (/* binding */ r),
/* harmony export */   "parseColorMixMode": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var n;function e(t){switch(t){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}function r(e,r,a){if(null==e||r===n.Ignore)return a[0]=255,a[1]=255,a[2]=255,void(a[3]=255);const c=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.round(e[3]*i),0,i),p=0===c||r===n.Tint?0:r===n.Replace?u:l;a[0]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.round(e[0]*o),0,o),a[1]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.round(e[1]*o),0,o),a[2]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.round(e[2]*o),0,o),a[3]=c+p}!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"}(n||(n={}));const o=255,i=85,u=i,l=2*i;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/support/debugFlags.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/debugFlags.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let T=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"LABELS_SHOW_BORDER",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"TEXT_SHOW_BASELINE",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"TEXT_SHOW_BORDER",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"SHOW_POI",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"LINE_WIREFRAMES",void 0),T=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.3d.support.DebugFlags")],T);const t=new T;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/terrain/Overlay.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/terrain/Overlay.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Overlay": () => (/* binding */ g),
/* harmony export */   "OverlaySource": () => (/* binding */ n),
/* harmony export */   "OverlayStretch": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces.js */ "./node_modules/@arcgis/core/views/3d/terrain/interfaces.js");
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl-engine/lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _webgl_engine_lib_LocalOriginFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl-engine/lib/LocalOriginFactory.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/LocalOriginFactory.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var n;!function(e){e[e.None=0]="None",e[e.ColorAndWater=1]="ColorAndWater",e[e.Highlight=2]="Highlight",e[e.Occluded=3]="Occluded",e[e.ObjectAndLayerIdColor=4]="ObjectAndLayerIdColor"}(n||(n={}));const h=1.3;class g{get extent(){return this._extent}constructor(t,r){this.index=t,this.renderTargets=r,this._extent=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.resolution=0,this.renderLocalOrigin=(0,_webgl_engine_lib_LocalOriginFactory_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new l,this.hasDrapedFeatureSource=!1,this.hasDrapedRasterSource=!1,this.hasTargetWithoutRasterImage=!1,this.index=t,this.validTargets=new Array(r.renderTargets.length).fill(!1)}getValidTexture(e){return this.validTargets[e]?this.renderTargets.getTarget(e).getTexture():null}get _needsColorWithoutRasterImage(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}getColorTexture(e){const t=e===n.ColorAndWater?this.renderTargets.getTarget(_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.Color):e===n.Highlight?this.renderTargets.getTarget(_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.Highlight):e===n.ObjectAndLayerIdColor?this.renderTargets.getTarget(_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.ObjectAndLayerIdColor):this.renderTargets.getTarget(_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.Occluded);return t?t.getTexture():null}getColorTextureNoRasterImage(){return this._needsColorWithoutRasterImage?this.getValidTexture(_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.ColorNoRasterImage):this.hasDrapedFeatureSource?this.getValidTexture(_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.Color):null}getNormalTexture(e){const t=e===n.ColorAndWater?this.renderTargets.getTarget(_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.Water):null;return t?t.getTexture():null}draw(e,t){const r=this.computeRenderTargetValidityBitfield();for(const i of this.renderTargets.renderTargets)i.type!==_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.ColorNoRasterImage||this._needsColorWithoutRasterImage?this.validTargets[i.type]=e.drawTarget(this,i,t):this.validTargets[i.type]=!1;return r^this.computeRenderTargetValidityBitfield()?_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_2__.ValidationState.CHANGED:_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_2__.ValidationState.UNCHANGED}computeRenderTargetValidityBitfield(){const e=this.validTargets;return+e[_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.Color]|+e[_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.ColorNoRasterImage]<<1|+e[_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.Highlight]<<2|+e[_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.Water]<<3|+e[_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.RenderTargetType.Occluded]<<4}setupGeometryViewsCyclical(e){this.setupGeometryViewsDirect();const r=.001*e.range;if(this._extent[0]-r<=e.min){const r=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__.offset)(this._extent,e.range,0,r)}if(this._extent[2]+r>=e.max){const r=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__.offset)(this._extent,-e.range,0,r)}}setupGeometryViewsDirect(){this.canvasGeometries.numViews=1,(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__.copy)(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}applyViewport(e){e.setViewport(this.index===_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.OverlayIndex.INNER?0:this.resolution,0,this.resolution,this.resolution)}}class l{constructor(){this.extents=[(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__.create)(),(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__.create)(),(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__.create)()],this.numViews=0}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/terrain/interfaces.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/terrain/interfaces.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LODSnapping": () => (/* binding */ E),
/* harmony export */   "OverlayIndex": () => (/* binding */ O),
/* harmony export */   "PatchType": () => (/* binding */ o),
/* harmony export */   "RenderTargetType": () => (/* binding */ A),
/* harmony export */   "TextureUpdate": () => (/* binding */ r)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var O,o,E,A,r;!function(O){O[O.INNER=0]="INNER",O[O.OUTER=1]="OUTER"}(O||(O={})),function(O){O[O.REGULAR=0]="REGULAR",O[O.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",O[O.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",O[O.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(o||(o={})),function(O){O[O.OFF=0]="OFF",O[O.ON=1]="ON"}(E||(E={})),function(O){O[O.Color=0]="Color",O[O.ColorNoRasterImage=1]="ColorNoRasterImage",O[O.Highlight=2]="Highlight",O[O.Water=3]="Water",O[O.Occluded=4]="Occluded",O[O.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(A||(A={})),function(O){O[O.FADING=0]="FADING",O[O.IMMEDIATE=1]="IMMEDIATE",O[O.UNFADED=2]="UNFADED"}(r||(r={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecodeSymbolColor": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../layers/support/symbolColorUtils.js */ "./node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add(_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForwardLinearDepth": () => (/* binding */ d),
/* harmony export */   "addCalculateLinearDepth": () => (/* binding */ n),
/* harmony export */   "addLinearDepth": () => (/* binding */ t),
/* harmony export */   "addNearFar": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _attributes_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes/VertexPosition.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js");
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shaderModules/Float2PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(e){e.varyings.add("linearDepth","float")}function i(e){e.vertex.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Float2PassUniform("nearFar",((e,r)=>r.camera.nearFar)))}function n(e){e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(a,d){const{vertex:s}=a;switch(d.output){case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.Color:if(d.receiveShadows)return t(a),void s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.Depth:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.Shadow:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ShadowHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ShadowExcludeHighlight:return a.include(_attributes_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_1__.VertexPosition,d),t(a),i(a),n(a),void s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`void forwardLinearDepth() {}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Offset": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenSpacePass": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o(o,t=!0){o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__.VertexAttribute.POSITION,"vec2"),t&&o.varyings.add("uv","vec2"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShaderOutput": () => (/* binding */ h)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var h;!function(h){h[h.Color=0]="Color",h[h.Depth=1]="Depth",h[h.Normal=2]="Normal",h[h.Shadow=3]="Shadow",h[h.ShadowHighlight=4]="ShadowHighlight",h[h.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",h[h.Highlight=6]="Highlight",h[h.Alpha=7]="Alpha",h[h.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",h[h.COUNT=9]="COUNT"}(h||(h={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliceDraw": () => (/* binding */ P),
/* harmony export */   "SlicePass": () => (/* binding */ _),
/* harmony export */   "SlicePlaneParameters": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/mat4.js */ "./node_modules/@arcgis/core/chunks/mat4.js");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/mat4f64.js */ "./node_modules/@arcgis/core/chunks/mat4f64.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shaderModules/Float3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js");
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class u extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.NoParameters{constructor(e){super(),this.slicePlaneLocalOrigin=e}}function _(e,s){h(e,s,new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("slicePlaneOrigin",((e,i)=>g(s,e,i))),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("slicePlaneBasis1",((e,i)=>I(s,e,i,i.slicePlane?.basis1))),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("slicePlaneBasis2",((e,i)=>I(s,e,i,i.slicePlane?.basis2))))}function P(e,s){h(e,s,new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float3DrawUniform("slicePlaneOrigin",((e,i)=>g(s,e,i))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float3DrawUniform("slicePlaneBasis1",((e,i)=>I(s,e,i,i.slicePlane?.basis1))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float3DrawUniform("slicePlaneBasis2",((e,i)=>I(s,e,i,i.slicePlane?.basis2))))}function h(e,s,...i){if(!s.hasSlicePlane){const i=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}s.hasSliceInVertexProgram&&e.vertex.uniforms.add(...i),e.fragment.uniforms.add(...i);const a=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,l=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,c=s.hasSliceHighlight?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl`
        ${l}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(c)}function p(e,s,i){return e.instancedDoublePrecision?(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.s)(b,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function m(e,s){return null!=e?(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(v,s.origin,e):s.origin}function H(s,i,a){return s.hasSliceTranslatedView?null!=i?(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__.w)(S,a.camera.viewMatrix,i):a.camera.viewMatrix:null}function g(e,s,a){if(null==a.slicePlane)return _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.Z;const l=p(e,s,a),c=m(l,a.slicePlane),r=H(e,l,a);return null!=r?(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.m)(v,c,r):c}function I(e,s,c,r){if(null==r||null==c.slicePlane)return _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.Z;const t=p(e,s,c),n=m(t,c.slicePlane),f=H(e,t,c);return null!=f?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)(B,r,n),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.m)(v,n,f),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.m)(B,B,f),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(B,B,v)):r}const b=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),v=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),B=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),S=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__.c)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForwardLinearDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o(o){(0,_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__.addCalculateLinearDepth)(o),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstancedDoubleConfiguration": () => (/* binding */ v),
/* harmony export */   "InstancedDoublePrecision": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/DoublePrecision.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js");
/* harmony import */ var _util_View_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/View.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js");
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/Float3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shaderTechnique/ShaderTechniqueConfiguration.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../webgl/doublePrecisionUtils.js */ "./node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class v extends _shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_8__.ShaderTechniqueConfiguration{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function p(e,i){i.instanced&&i.instancedDoublePrecision&&(e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_9__.VertexAttribute.MODELORIGINHI,"vec3"),e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_9__.VertexAttribute.MODELORIGINLO,"vec3"),e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_9__.VertexAttribute.MODEL,"mat3"),e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_9__.VertexAttribute.MODELNORMAL,"mat3"));const c=e.vertex;i.instancedDoublePrecision&&(c.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__.DoublePrecision,i),c.uniforms.add(new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float3DrawUniform("viewOriginHi",((e,i)=>(0,_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_10__.encodeDoubleHi)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.s)(b,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),b))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float3DrawUniform("viewOriginLo",((e,i)=>(0,_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_10__.encodeDoubleLo)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.s)(b,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),b))))),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`
    vec3 calculateVPos() {
      ${i.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`
    vec3 subtractOrigin(vec3 _pos) {
      ${i.instancedDoublePrecision?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`
    vec3 dpNormal(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),i.output===_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_3__.ShaderOutput.Normal&&((0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_5__.addViewNormal)(c),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`
    vec3 dpNormalView(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),i.hasVertexTangents&&c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_8__.parameter)()],v.prototype,"instancedDoublePrecision",void 0);const b=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NormalAttribute": () => (/* binding */ t),
/* harmony export */   "NormalType": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(t,s){switch(s.normalType){case a.Compressed:t.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case a.Attribute:t.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMAL,"vec3"),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(s.normalType);case a.COUNT:case a.Ground:}}var a;!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(a||(a={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectAndLayerIdColor": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function d(d,t){const a=t.output===_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ObjectAndLayerIdColor,n=t.objectAndLayerIdColorInstanced;a&&(d.varyings.add("objectAndLayerIdColorVarying","vec4"),n?d.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):d.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.OBJECTANDLAYERIDCOLOR,"vec4")),d.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`
     void forwardObjectAndLayerIdColor() {
      ${a?n?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl``} }`),d.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`
      void outputObjectAndLayerIdColor() {
        ${a?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`fragColor = objectAndLayerIdColorVarying;`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl``} }`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionAttribute": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o(o){o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__.VertexAttribute.POSITION,"vec3"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`vec3 positionModel() { return position; }`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SymbolColor": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../collections/Component/Material/shader/DecodeSymbolColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js");
/* harmony import */ var _shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/IntegerPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../materials/internal/MaterialUtil.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function i(i,t){t.hasSymbolColors?(i.include(_collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_0__.DecodeSymbolColor),i.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.SYMBOLCOLOR,"vec4"),i.varyings.add("colorMixMode","mediump float"),i.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(i.fragment.uniforms.add(new _shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_1__.IntegerPassUniform("colorMixMode",(o=>_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_4__.colorMixModes[o.colorMixMode]))),i.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextureCoordinateAttribute": () => (/* binding */ o),
/* harmony export */   "TextureCoordinateAttributeType": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var d;function o(o,v){switch(v.textureCoordinateType){case d.Default:return o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case d.Compressed:return o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case d.Atlas:return o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.UV0,"vec2"),o.varyings.add("vuv0","vec2"),o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.UVREGION,"vec4"),o.varyings.add("vuvRegion","vec4"),void o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(v.textureCoordinateType);case d.None:return void o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`void forwardTextureCoordinates() {}`);case d.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(d||(d={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexColor": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e,d){d.hasVertexColors?(e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__.VertexAttribute.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexNormal": () => (/* binding */ c),
/* harmony export */   "VertexNormalDrawParameters": () => (/* binding */ v),
/* harmony export */   "VertexNormalPassParameters": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/mat3f64.js */ "./node_modules/@arcgis/core/chunks/mat3f64.js");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/vec4f64.js */ "./node_modules/@arcgis/core/chunks/vec4f64.js");
/* harmony import */ var _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VertexPosition.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/Matrix3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform.js");
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function c(o,a){switch(a.normalType){case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.NormalType.Attribute:case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.NormalType.Compressed:o.include(_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.NormalAttribute,a),o.varyings.add("vNormalWorld","vec3"),o.varyings.add("vNormalView","vec3"),o.vertex.uniforms.add(new _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_6__.Matrix3DrawUniform("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_7__.Matrix3PassUniform("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.NormalType.Ground:o.include(_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__.VertexPosition,a),o.varyings.add("vNormalWorld","vec3"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl`
        void forwardNormal() {
          vNormalWorld = ${a.spherical?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl`normalize(vPositionWorldCameraRelative);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.NormalType.ScreenDerivative:o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl`void forwardNormal() {}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(a.normalType);case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.NormalType.COUNT:}}class f extends _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__.VertexPositionPassParameters{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)()}}class v extends _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__.VertexPositionDrawParameters{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)(),this.toMapSpace=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__.c)()}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexPosition": () => (/* binding */ v),
/* harmony export */   "VertexPositionDrawParameters": () => (/* binding */ W),
/* harmony export */   "VertexPositionPassParameters": () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/mat3f64.js */ "./node_modules/@arcgis/core/chunks/mat3f64.js");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/mat4f64.js */ "./node_modules/@arcgis/core/chunks/mat4f64.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PositionAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js");
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/DoublePrecision.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js");
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Float3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js");
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shaderModules/Matrix3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform.js");
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/* harmony import */ var _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shaderModules/Matrix4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function v(r,o){r.include(_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.PositionAttribute);const e=r.vertex;e.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__.DoublePrecision,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float3PassUniform("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float3PassUniform("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Matrix3PassUniform("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_10__.Matrix4PassUniform("transformProjFromView",(r=>r.transformProjFromView)),new _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__.Matrix3DrawUniform("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3DrawUniform("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3DrawUniform("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))),e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float3PassUniform("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class F extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.NoParameters{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),this.transformWorldFromViewTL=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),this.transformViewFromCameraRelativeRS=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),this.transformProjFromView=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__.c)()}}class W extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.NoParameters{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),this.transformWorldFromModelTH=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),this.transformWorldFromModelTL=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)()}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexTextureCoordinates": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _util_TextureAtlasLookup_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/TextureAtlasLookup.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function s(s,a){switch(s.include(_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.TextureCoordinateAttribute,a),a.textureCoordinateType){case _TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.TextureCoordinateAttributeType.Default:case _TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.TextureCoordinateAttributeType.Compressed:return void s.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case _TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.TextureCoordinateAttributeType.Atlas:return s.include(_util_TextureAtlasLookup_glsl_js__WEBPACK_IMPORTED_MODULE_2__.TextureAtlasLookup),void s.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(a.textureCoordinateType);case _TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.TextureCoordinateAttributeType.None:case _TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.TextureCoordinateAttributeType.COUNT:return}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalOffset": () => (/* binding */ a),
/* harmony export */   "addVerticalOffset": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec4.js */ "./node_modules/@arcgis/core/chunks/vec4.js");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/vec4f64.js */ "./node_modules/@arcgis/core/chunks/vec4f64.js");
/* harmony import */ var _util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/ScreenSizePerspective.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js");
/* harmony import */ var _util_View_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/View.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js");
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a(e,r){const c=e.vertex;r.hasVerticalOffset?(f(c),r.hasScreenSizePerspective&&(e.include(_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_2__.ScreenSizePerspective),(0,_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_2__.addScreenSizePerspectiveAlignment)(c),(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_3__.addCameraPosition)(e.vertex,r)),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl`vec3 worldNormal = normalize(worldPos + localOrigin);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const i=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__.c)();function f(r){r.uniforms.add(new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float4PassUniform("verticalOffset",((r,t)=>{const{minWorldLength:l,maxWorldLength:o,screenLength:c}=r.verticalOffset,s=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return (0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_0__.s)(i,c*a,s,l,o)})))}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultMaterialAuxiliaryPasses": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/mat3.js */ "./node_modules/@arcgis/core/chunks/mat3.js");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/mat3f64.js */ "./node_modules/@arcgis/core/chunks/mat3f64.js");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/mat4f64.js */ "./node_modules/@arcgis/core/chunks/mat4f64.js");
/* harmony import */ var _ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ForwardLinearDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js");
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _Slice_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Slice.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js");
/* harmony import */ var _Transform_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Transform.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js");
/* harmony import */ var _attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../attributes/ObjectAndLayerIdColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl.js");
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../attributes/VertexNormal.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js");
/* harmony import */ var _output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../output/OutputDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js");
/* harmony import */ var _output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../output/OutputHighlight.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js");
/* harmony import */ var _shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shading/VisualVariables.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js");
/* harmony import */ var _util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util/AlphaDiscard.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js");
/* harmony import */ var _util_View_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../util/View.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/* harmony import */ var _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shaderModules/Matrix4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function b(b,C){const{vertex:O,fragment:y}=b,V=C.hasModelTransformation;if(V){const t=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)();O.uniforms.add(new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_18__.Matrix4PassUniform("model",(o=>o.modelTransformation??_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__.I))),O.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_17__.Matrix3PassUniform("normalTransform",(r=>((0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.b)(t,r.modelTransformation??_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__.I),t))))}const A=C.hasColorTexture&&C.alphaDiscardMode!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_20__.AlphaDiscardMode.Opaque;switch(C.output){case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.ShaderOutput.Depth:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.ShaderOutput.Shadow:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.ShaderOutput.ShadowHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.ShaderOutput.ShadowExcludeHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.ShaderOutput.ObjectAndLayerIdColor:(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_15__.addProjViewLocalOrigin)(O,C),b.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_6__.Transform,C),b.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__.TextureCoordinateAttribute,C),b.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_13__.VisualVariables,C),b.include(_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_11__.OutputDepth,C),b.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_5__.SliceDraw,C),b.include(_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__.ObjectAndLayerIdColor,C),(0,_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__.addNearFar)(b),b.varyings.add("depth","float"),A&&y.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_19__.Texture2DPassUniform("tex",(o=>o.texture))),O.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`
          void main(void) {
            vpos = calculateVPos();
            ${V?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),b.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_14__.DiscardOrAdjustAlphaPass,C),y.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`
          void main(void) {
            discardBySlice(vpos);
            ${A?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`
                    vec4 texColor = texture(tex, ${C.hasColorTextureTransform?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`colorUV`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${C.output===_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.ShaderOutput.ObjectAndLayerIdColor?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`outputObjectAndLayerIdColor();`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`outputDepth(depth);`}
          }
        `);break;case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.ShaderOutput.Normal:{(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_15__.addProjViewLocalOrigin)(O,C),b.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_6__.Transform,C),b.include(_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalAttribute,C),b.include(_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_10__.VertexNormal,C),b.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__.TextureCoordinateAttribute,C),b.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_13__.VisualVariables,C),A&&y.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_19__.Texture2DPassUniform("tex",(o=>o.texture))),C.normalType===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalType.ScreenDerivative&&b.varyings.add("vPositionView","vec3");const o=C.normalType===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalType.Attribute||C.normalType===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalType.Compressed;O.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`
          void main(void) {
            vpos = calculateVPos();
            ${V?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}

            ${o?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`vNormalWorld = ${V?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormalView(vvLocalNormal(normalModel()))"};`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),b.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_5__.SliceDraw,C),b.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_14__.DiscardOrAdjustAlphaPass,C),y.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`
          void main() {
            discardBySlice(vpos);
            ${A?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`
                    vec4 texColor = texture(tex, ${C.hasColorTextureTransform?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`colorUV`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${C.normalType===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalType.ScreenDerivative?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`vec3 normal = screenDerivativeNormal(vPositionView);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.ShaderOutput.Highlight:(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_15__.addProjViewLocalOrigin)(O,C),b.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_6__.Transform,C),b.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__.TextureCoordinateAttribute,C),b.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_13__.VisualVariables,C),A&&y.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_19__.Texture2DPassUniform("tex",(o=>o.texture))),O.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`
          void main(void) {
            vpos = calculateVPos();
            ${V?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),b.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_5__.SliceDraw,C),b.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_14__.DiscardOrAdjustAlphaPass,C),b.include(_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_12__.OutputHighlight,C),y.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`
          void main() {
            discardBySlice(vpos);
            ${A?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`
                    vec4 texColor = texture(tex, ${C.hasColorTextureTransform?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`colorUV`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_16__.glsl`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputDepth": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o(o,l){switch(o.fragment.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__.RgbaFloatEncoding),l.output){case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.Shadow:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ShadowHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ShadowExcludeHighlight:o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
fragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.Depth:o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputHighlight": () => (/* binding */ g),
/* harmony export */   "occludedHighlightFlag": () => (/* binding */ r),
/* harmony export */   "unoccludedHighlightFlag": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec4f64.js */ "./node_modules/@arcgis/core/chunks/vec4f64.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const r=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__.f)(1,1,0,1),d=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__.f)(1,0,1,1);function g(e){e.fragment.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Texture2DPassUniform("depthTexture",((e,t)=>t.highlightDepthTexture))),e.fragment.constants.add("occludedHighlightFlag","vec4",r).add("unoccludedHighlightFlag","vec4",d),e.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadLinearDepth": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a(a){a.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__.RgbaFloatEncoding),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture(depthTex, uv)), nearFar);
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticalSkyModel": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(t){const a=t.fragment.code;a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputeNormalTexture": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributes/VertexTextureCoordinates.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js");
/* harmony import */ var _Normals_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Normals.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/Texture2DDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function m(m,c){const i=m.fragment;c.hasVertexTangents?(m.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__.VertexAttribute.TANGENT,"vec4"),m.varyings.add("vTangent","vec4"),c.doubleSidedMode===_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_2__.NormalsDoubleSidedMode.WindingOrder?i.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):i.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),c.textureCoordinateType!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__.TextureCoordinateAttributeType.None&&(m.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__.VertexTextureCoordinates,c),i.uniforms.add(c.pbrTextureBindType===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__.BindType.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Texture2DPassUniform("normalTexture",(e=>e.textureNormal)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Texture2DDrawUniform("normalTexture",(e=>e.textureNormal))),i.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluateAmbientLighting": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/vec4.js */ "./node_modules/@arcgis/core/chunks/vec4.js");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/vec4f64.js */ "./node_modules/@arcgis/core/chunks/vec4f64.js");
/* harmony import */ var _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function m(n,g){const m=n.fragment,o=void 0!==g.lightingSphericalHarmonicsOrder?g.lightingSphericalHarmonicsOrder:2;0===o?(m.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("lightingAmbientSH0",((n,t)=>(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(a,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(m.uniforms.add(new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_R",((i,n)=>(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(r,n.lighting.sh.r[0],n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_G",((i,n)=>(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(r,n.lighting.sh.g[0],n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_B",((i,n)=>(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(r,n.lighting.sh.b[0],n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3])))),m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(m.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("lightingAmbientSH0",((n,t)=>(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(a,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_R1",((i,n)=>(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(r,n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3],n.lighting.sh.r[4]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_G1",((i,n)=>(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(r,n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3],n.lighting.sh.g[4]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_B1",((i,n)=>(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(r,n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3],n.lighting.sh.b[4]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_R2",((i,n)=>(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(r,n.lighting.sh.r[5],n.lighting.sh.r[6],n.lighting.sh.r[7],n.lighting.sh.r[8]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_G2",((i,n)=>(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(r,n.lighting.sh.g[5],n.lighting.sh.g[6],n.lighting.sh.g[7],n.lighting.sh.g[8]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_B2",((i,n)=>(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(r,n.lighting.sh.b[5],n.lighting.sh.b[6],n.lighting.sh.b[7],n.lighting.sh.b[8])))),m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),g.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_4__.PBRMode.Normal&&g.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_4__.PBRMode.Schematic||m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const a=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)(),r=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__.c)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluateAmbientOcclusion": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _lib_SSAOHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/SSAOHelper.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SSAOHelper.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(t,o){const a=t.fragment;o.receiveAmbientOcclusion?(a.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_1__.Texture2DPassUniform("ssaoTex",((e,r)=>r.ssaoHelper.colorTexture))),a.constants.add("blurSizePixelsInverse","float",1/_lib_SSAOHelper_js__WEBPACK_IMPORTED_MODULE_2__.blurSizePixels),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluateSceneLighting": () => (/* binding */ p),
/* harmony export */   "addAmbientBoostFactor": () => (/* binding */ h),
/* harmony export */   "addLightingGlobalFactor": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvaluateAmbientLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js");
/* harmony import */ var _EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EvaluateAmbientOcclusion.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js");
/* harmony import */ var _MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js");
/* harmony import */ var _PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhysicallyBasedRendering.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js");
/* harmony import */ var _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PiUtils.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js");
/* harmony import */ var _shaderModules_BooleanPassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/BooleanPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/BooleanPassUniform.js");
/* harmony import */ var _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lighting_SceneLighting_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lighting/SceneLighting.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function h(n){n.constants.add("ambientBoostFactor","float",_lighting_SceneLighting_js__WEBPACK_IMPORTED_MODULE_10__.ambientBoost)}function u(n){n.uniforms.add(new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_8__.FloatPassUniform("lightingGlobalFactor",((n,i)=>i.lighting.globalFactor)))}function p(g,p){const v=g.fragment;switch(g.include(_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_2__.EvaluateAmbientOcclusion,p),p.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Disabled&&g.include(_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_4__.PhysicallyBasedRendering,p),g.include(_EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_1__.EvaluateAmbientLighting,p),g.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_6__.PiUtils),v.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p.pbrMode===_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),h(v),u(v),(0,_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__.addMainLightDirection)(v),v.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${p.spherical?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`normalize(vPosWorld)`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__.addMainLightIntensity)(v),v.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),p.pbrMode){case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Disabled:case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.WaterOnIntegratedMesh:case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Water:g.include(_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__.MainLighting),v.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Normal:case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Schematic:v.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),v.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),p.useFillLights?v.uniforms.add(new _shaderModules_BooleanPassUniform_js__WEBPACK_IMPORTED_MODULE_7__.BooleanPassUniform("hasFillLights",((n,i)=>i.enableFillLights))):v.constants.add("hasFillLights","bool",!1),v.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),v.uniforms.add(new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_8__.FloatPassUniform("lightingSpecularStrength",((n,i)=>i.lighting.mainLight.specularStrength)),new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_8__.FloatPassUniform("lightingEnvironmentStrength",((n,i)=>i.lighting.mainLight.environmentStrength))),v.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),v.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${p.pbrMode===_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Schematic?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Terrain:case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.TerrainWithWater:g.include(_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__.MainLighting),v.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(p.pbrMode);case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.COUNT:}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLighting": () => (/* binding */ o),
/* harmony export */   "addMainLightDirection": () => (/* binding */ t),
/* harmony export */   "addMainLightIntensity": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(n){n.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("mainLightDirection",((i,n)=>n.lighting.mainLight.direction)))}function a(n){n.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("mainLightIntensity",((i,n)=>n.lighting.mainLight.intensity)))}function o(i){t(i.fragment),a(i.fragment),i.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipassTerrainUniforms": () => (/* binding */ o),
/* harmony export */   "multipassTerrainTest": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../output/ReadLinearDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js");
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/Float2PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(n,o){o.hasMultipassTerrain&&(n.fragment.include(_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__.ReadLinearDepth),n.fragment.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_3__.Texture2DPassUniform("terrainDepthTexture",((e,r)=>r.multipassTerrain.linearDepthTexture))),n.fragment.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_1__.Float2PassUniform("nearFar",((e,r)=>r.camera.nearFar))),n.fragment.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_1__.Float2PassUniform("inverseViewport",((e,r)=>r.inverseViewport))),n.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${o.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class o{constructor(){this.enabled=!1,this.cullAboveGround=!1}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Normals": () => (/* binding */ e),
/* harmony export */   "NormalsDoubleSidedMode": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e,o){const n=e.fragment;switch(n.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case i.None:n.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:n.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:n.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(o.doubleSidedMode);case i.COUNT:}}var i;!function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"}(i||(i={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicallyBasedRendering": () => (/* binding */ n),
/* harmony export */   "PhysicallyBasedRenderingWater": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _AnalyticalSkyModel_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalyticalSkyModel.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js");
/* harmony import */ var _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PiUtils.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(n,r){const l=n.fragment.code;n.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_2__.PiUtils),r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__.PBRMode.Normal&&r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__.PBRMode.Schematic&&r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__.PBRMode.Terrain&&r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__.PBRMode.TerrainWithWater||(l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__.PBRMode.Normal&&r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__.PBRMode.Schematic||(n.include(_AnalyticalSkyModel_glsl_js__WEBPACK_IMPORTED_MODULE_0__.AnalyticalSkyModel),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function r(e,o){const n=e.fragment.code;e.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_2__.PiUtils),n.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${o.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),n.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),n.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),n.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),n.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PBRBindParameters": () => (/* binding */ u),
/* harmony export */   "PBRMode": () => (/* binding */ c),
/* harmony export */   "PhysicallyBasedRenderingParameters": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributes/VertexTextureCoordinates.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js");
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/Float3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js");
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/Texture2DDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/* harmony import */ var _lib_GLTextureMaterial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/GLTextureMaterial.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var c;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(c||(c={}));class u extends _lib_GLTextureMaterial_js__WEBPACK_IMPORTED_MODULE_7__.GLTextureMaterialBindParameters{}function l(n,u){const l=n.fragment,m=u.hasMetallicRoughnessTexture||u.hasEmissionTexture||u.hasOcclusionTexture;if(u.pbrMode===c.Normal&&m&&n.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_0__.VertexTextureCoordinates,u),u.pbrMode!==c.Schematic)if(u.pbrMode!==c.Disabled){if(u.pbrMode===c.Normal){l.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec3 mrr;
vec3 emission;
float occlusion;`);const e=u.pbrTextureBindType;u.hasMetallicRoughnessTexture&&(l.uniforms.add(e===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__.BindType.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Texture2DPassUniform("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Texture2DDrawUniform("texMetallicRoughness",(e=>e.textureMetallicRoughness))),l.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),u.hasEmissionTexture&&(l.uniforms.add(e===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__.BindType.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Texture2DPassUniform("texEmission",(e=>e.textureEmissive)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Texture2DDrawUniform("texEmission",(e=>e.textureEmissive))),l.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),u.hasOcclusionTexture?(l.uniforms.add(e===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__.BindType.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Texture2DPassUniform("texOcclusion",(e=>e.textureOcclusion)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Texture2DDrawUniform("texOcclusion",(e=>e.textureOcclusion))),l.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):l.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`float getBakedOcclusion() { return 1.0; }`),e===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__.BindType.Pass?l.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Float3PassUniform("emissionFactor",(e=>e.emissiveFactor)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Float3PassUniform("mrrFactors",(e=>e.mrrFactors))):l.uniforms.add(new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_1__.Float3DrawUniform("emissionFactor",(e=>e.emissiveFactor)),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_1__.Float3DrawUniform("mrrFactors",(e=>e.mrrFactors))),l.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${u.hasMetallicRoughnessTexture?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`applyMetallnessAndRoughness(${u.hasMetallicRoughnessTextureTransform?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`metallicRoughnessUV`:"vuv0"});`:""}

      ${u.hasEmissionTexture?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`applyEmission(${u.hasEmissiveTextureTransform?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`emissiveUV`:"vuv0"});`:""}

      ${u.hasOcclusionTexture?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`applyOcclusion(${u.hasOcclusionTextureTransform?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else l.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`float getBakedOcclusion() { return 1.0; }`);else l.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PiUtils": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(t){t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`const float PI = 3.141592653589793;`),t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadShadowMapDraw": () => (/* binding */ u),
/* harmony export */   "ReadShadowMapDrawParameters": () => (/* binding */ c),
/* harmony export */   "ReadShadowMapParameters": () => (/* binding */ h),
/* harmony export */   "ReadShadowMapPass": () => (/* binding */ f),
/* harmony export */   "ReadShadowMapPassParameters": () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/mat4f64.js */ "./node_modules/@arcgis/core/chunks/mat4f64.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js");
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/IntegerPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix4sDrawUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/Matrix4sDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sDrawUniform.js");
/* harmony import */ var _shaderModules_Matrix4sPassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/Matrix4sPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sPassUniform.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class p extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.NoParameters{constructor(){super(...arguments),this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)()}}class c extends p{}class h extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.NoParameters{constructor(){super(...arguments),this.modelTransformation=_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__.I}}class v extends h{constructor(){super(...arguments),this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)()}}function f(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new _shaderModules_Matrix4sPassUniform_js__WEBPACK_IMPORTED_MODULE_7__.Matrix4sPassUniform("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),x(e))}function u(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new _shaderModules_Matrix4sDrawUniform_js__WEBPACK_IMPORTED_MODULE_6__.Matrix4sDrawUniform("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),x(e))}function x(e){const a=e.fragment;a.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_2__.RgbaFloatEncoding),a.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_8__.Texture2DPassUniform("shadowMapTex",((e,a)=>a.shadowMap.depthTexture)),new _shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_4__.IntegerPassUniform("numCascades",((e,a)=>a.shadowMap.numCascades)),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_3__.Float4PassUniform("cascadeDistances",((e,a)=>a.shadowMap.cascadeDistances))),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + (numCascades == 1 ? 1.0 : 0.5) * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float texSize, sampler2D _depthTex) {
float halfPixelSize = 0.5 / texSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, float(textureSize(shadowMapTex, 0).x), shadowMapTex);
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorTextureUV": () => (/* binding */ a),
/* harmony export */   "emissiveTextureUV": () => (/* binding */ i),
/* harmony export */   "metallicRoughnessTextureUV": () => (/* binding */ t),
/* harmony export */   "normalTextureUV": () => (/* binding */ s),
/* harmony export */   "occlusionTextureUV": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/mat3f32.js */ "./node_modules/@arcgis/core/chunks/mat3f32.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a(a){a.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Matrix3PassUniform("colorTextureTransformMatrix",(e=>null!=e.colorTextureTransformMatrix?e.colorTextureTransformMatrix:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()))),a.varyings.add("colorUV","vec2"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function s(a){a.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Matrix3PassUniform("normalTextureTransformMatrix",(e=>null!=e.normalTextureTransformMatrix?e.normalTextureTransformMatrix:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()))),a.varyings.add("normalUV","vec2"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function i(a){a.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Matrix3PassUniform("emissiveTextureTransformMatrix",(e=>null!=e.emissiveTextureTransformMatrix?e.emissiveTextureTransformMatrix:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()))),a.varyings.add("emissiveUV","vec2"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function n(a){a.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Matrix3PassUniform("occlusionTextureTransformMatrix",(e=>null!=e.occlusionTextureTransformMatrix?e.occlusionTextureTransformMatrix:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()))),a.varyings.add("occlusionUV","vec2"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function t(a){a.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Matrix3PassUniform("metallicRoughnessTextureTransformMatrix",(e=>null!=e.metallicRoughnessTextureTransformMatrix?e.metallicRoughnessTextureTransformMatrix:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()))),a.varyings.add("metallicRoughnessUV","vec2"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualVariables": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_Float4sPassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/Float4sPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4sPassUniform.js");
/* harmony import */ var _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/FloatsPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatsPassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../materials/VisualVariablePassParameters.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function l(l,n){const{vertex:s,attributes:u}=l;n.hasVvInstancing&&(n.vvSize||n.vvColor)&&u.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__.VertexAttribute.INSTANCEFEATUREATTRIBUTE,"vec4"),n.vvSize?(s.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("vvSizeMinSize",(e=>e.vvSize.minSize))),s.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("vvSizeMaxSize",(e=>e.vvSize.maxSize))),s.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("vvSizeOffset",(e=>e.vvSize.offset))),s.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("vvSizeFactor",(e=>e.vvSize.factor))),s.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_4__.Matrix3PassUniform("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),s.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n.hasVvInstancing?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),n.vvColor?(s.constants.add("vvColorNumber","int",_materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_6__.vvColorNumber),s.uniforms.add(new _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_2__.FloatsPassUniform("vvColorValues",(e=>e.vvColor.values),_materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_6__.vvColorNumber),new _shaderModules_Float4sPassUniform_js__WEBPACK_IMPORTED_MODULE_1__.Float4sPassUniform("vvColorColors",(e=>e.vvColor.colors),_materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_6__.vvColorNumber)),s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${n.hasVvInstancing?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec4 vvColor() { return vec4(1.0); }`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMaskAlphaCutoff": () => (/* binding */ o),
/* harmony export */   "symbolAlphaCutoff": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o=.1,t=.001;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscardOrAdjustAlphaDraw": () => (/* binding */ t),
/* harmony export */   "DiscardOrAdjustAlphaPass": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _DiscardOrAdjustAlphaBlend_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiscardOrAdjustAlphaBlend.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlphaBlend.glsl.js");
/* harmony import */ var _shaderModules_FloatDrawUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/FloatDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatDrawUniform.js");
/* harmony import */ var _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function s(a,e){l(a,e,new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_2__.FloatPassUniform("textureAlphaCutoff",(a=>a.textureAlphaCutoff)))}function t(a,r){l(a,r,new _shaderModules_FloatDrawUniform_js__WEBPACK_IMPORTED_MODULE_1__.FloatDrawUniform("textureAlphaCutoff",(a=>a.textureAlphaCutoff)))}function l(e,r,s){const t=e.fragment;switch(r.alphaDiscardMode!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__.AlphaDiscardMode.Mask&&r.alphaDiscardMode!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__.AlphaDiscardMode.MaskBlend||t.uniforms.add(s),r.alphaDiscardMode){case _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__.AlphaDiscardMode.Blend:return e.include(_DiscardOrAdjustAlphaBlend_glsl_js__WEBPACK_IMPORTED_MODULE_0__.DiscardOrAdjustAlphaBlend);case _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__.AlphaDiscardMode.Opaque:t.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__.AlphaDiscardMode.Mask:t.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__.AlphaDiscardMode.MaskBlend:e.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSpace": () => (/* binding */ n),
/* harmony export */   "getZScale": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec2.js */ "./node_modules/@arcgis/core/chunks/vec2.js");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/vec2f64.js */ "./node_modules/@arcgis/core/chunks/vec2f64.js");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/vec4.js */ "./node_modules/@arcgis/core/chunks/vec4.js");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/vec4f64.js */ "./node_modules/@arcgis/core/chunks/vec4f64.js");
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/Float2PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js");
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(r){r.fragment.uniforms.add(new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float4PassUniform("projInfo",((r,o)=>f(o)))),r.fragment.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float2PassUniform("zScale",((r,o)=>i(o)))),r.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function f(r){const o=r.camera.projectionMatrix;return 0===o[11]?(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,2/(r.camera.fullWidth*o[0]),2/(r.camera.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,-2/(r.camera.fullWidth*o[0]),-2/(r.camera.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}const m=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__.c)();function i(o){return 0===o.camera.projectionMatrix[11]?(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__.s)(d,0,1):(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__.s)(d,1,0)}const d=(0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__.a)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorConversion": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlphaBlend.glsl.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlphaBlend.glsl.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscardOrAdjustAlphaBlend": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlphaCutoff.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function d(d){d.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl`
    #define discardOrAdjustAlpha(color) { if (color.a < ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl.float(_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_0__.symbolAlphaCutoff)}) { discard; } }
  `)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoublePrecision": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function c({code:c},i){i.doublePrecisionRequiresObfuscation?c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MixExternalColor": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layers/support/symbolColorUtils.js */ "./node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js");
/* harmony import */ var _ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorConversion.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function i(i){i.include(_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_1__.ColorConversion),i.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Multiply)}) {
        return allMixed;
      }
      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgbaFloatEncoding": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a(a){a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenSizePerspective": () => (/* binding */ c),
/* harmony export */   "addScreenSizePerspective": () => (/* binding */ t),
/* harmony export */   "addScreenSizePerspectiveAlignment": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec4.js */ "./node_modules/@arcgis/core/chunks/vec4.js");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/vec4f64.js */ "./node_modules/@arcgis/core/chunks/vec4f64.js");
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function c(e){e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function t(e){e.uniforms.add(new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Float4PassUniform("screenSizePerspective",(e=>o(e.screenSizePerspective))))}function i(e){e.uniforms.add(new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Float4PassUniform("screenSizePerspectiveAlignment",(e=>o(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function o(a){return (0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_0__.s)(n,a.parameters.divisor,a.parameters.offset,a.parameters.minPixelSize,a.paddingPixelsOverride)}const n=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__.c)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextureAtlasLookup": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){e.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCameraPosition": () => (/* binding */ f),
/* harmony export */   "addPixelRatio": () => (/* binding */ l),
/* harmony export */   "addProjViewLocalOrigin": () => (/* binding */ p),
/* harmony export */   "addViewNormal": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/mat4.js */ "./node_modules/@arcgis/core/chunks/mat4.js");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/mat4f64.js */ "./node_modules/@arcgis/core/chunks/mat4f64.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _terrain_Overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../terrain/Overlay.js */ "./node_modules/@arcgis/core/views/3d/terrain/Overlay.js");
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Float3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js");
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _shaderModules_Matrix4DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shaderModules/Matrix4DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform.js");
/* harmony import */ var _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shaderModules/Matrix4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function f(r,a){a.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.Z):r.uniforms.add(new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3DrawUniform("cameraPosition",((r,a)=>(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.s)(w,a.camera.viewInverseTransposeMatrix[3]-r.origin[0],a.camera.viewInverseTransposeMatrix[7]-r.origin[1],a.camera.viewInverseTransposeMatrix[11]-r.origin[2]))))}function p(a,i){if(!i.instancedDoublePrecision)return void a.uniforms.add(new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Matrix4PassUniform("proj",((r,a)=>a.camera.projectionMatrix)),new _shaderModules_Matrix4DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__.Matrix4DrawUniform("view",((a,e)=>(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__.w)(v,e.camera.viewMatrix,a.origin))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3DrawUniform("localOrigin",(r=>r.origin)));const o=r=>(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.s)(w,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]);a.uniforms.add(new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Matrix4PassUniform("proj",((r,a)=>a.camera.projectionMatrix)),new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Matrix4PassUniform("view",((a,e)=>(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__.w)(v,e.camera.viewMatrix,o(e)))),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float3PassUniform("localOrigin",((r,a)=>o(a))))}const v=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__.c)(),w=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)();function u(r){r.uniforms.add(new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Matrix4PassUniform("viewNormal",((r,a)=>a.camera.viewInverseTransposeMatrix)))}function l(r,a){r.uniforms.add(new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_7__.FloatPassUniform("pixelRatio",((r,e)=>e.camera.pixelRatio/(a.draped?_terrain_Overlay_js__WEBPACK_IMPORTED_MODULE_4__.OverlayStretch:1))))}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/BooleanPassUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/BooleanPassUniform.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanPassUniform": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(o,s){super(o,"bool",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((r,e,t)=>r.setUniform1b(o,s(e,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2DrawUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2DrawUniform.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Float2DrawUniform": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o){super(r,"vec2",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,s,t,i)=>e.setUniform2fv(r,o(s,t,i))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Float2PassUniform": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"vec2",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniform2fv(r,e(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Float3DrawUniform": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o){super(r,"vec3",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,s,t,i)=>e.setUniform3fv(r,o(s,t,i))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Float3PassUniform": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"vec3",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniform3fv(r,e(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Float4PassUniform": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"vec4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4sPassUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4sPassUniform.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Float4sPassUniform": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e,o){super(r,"vec4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))),o)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatDrawUniform.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatDrawUniform.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatDrawUniform": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"float",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((o,s,t)=>o.setUniform1f(r,e(s,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatPassUniform": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o){super(r,"float",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,e,t)=>s.setUniform1f(r,o(e,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatsPassUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatsPassUniform.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatsPassUniform": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o,e){super(r,"float",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,e,t)=>s.setUniform1fv(r,o(e,t))),e)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegerPassUniform": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"int",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,i)=>s.setUniform1i(r,e(o,i))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix3DrawUniform": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o){super(r,"mat3",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,s,t)=>e.setUniformMatrix3fv(r,o(s,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix3PassUniform": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"mat3",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniformMatrix3fv(r,e(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix4DrawUniform": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o){super(r,"mat4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix4PassUniform": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"mat4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sDrawUniform.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sDrawUniform.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix4sDrawUniform": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o,s){super(r,"mat4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,s,t,i)=>e.setUniformMatrix4fv(r,o(s,t,i))),s)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sPassUniform.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sPassUniform.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix4sPassUniform": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e,o){super(r,"mat4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))),o)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Code": () => (/* binding */ a),
/* harmony export */   "Includes": () => (/* binding */ s),
/* harmony export */   "ShaderBuilder": () => (/* binding */ i),
/* harmony export */   "Stage": () => (/* binding */ c),
/* harmony export */   "Uniforms": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){n.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const n of Object.keys(r))r[n]!==e[n]&&t.add(n);for(const n of Object.keys(e))r[n]!==e[n]&&t.add(n);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class i extends s{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new u,this.varyings=new l,this.extensions=new m,this.constants=new h}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(e),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?_:d,c=this.constants.generateSource().concat(s.constants.generateSource());return`#version 300 es\n${t.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach((t=>{const n=t.bind[e];null!=n&&r.set(t.name,n)})),this.fragment.uniforms.entries.forEach((t=>{const n=t.bind[e];null!=n&&r.set(t.name,n)}));const n=Array.from(r.values()),s=n.length;return(e,r,i)=>{for(let o=0;o<s;++o)n[o](t,e,r,i)}}}class o{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(t){if(null!=t){if(this._entries.has(t.name)&&!this._entries.get(t.name).equals(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`Duplicate uniform name ${t.name} for different uniform type`);this._entries.set(t.name,t)}else n.error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class a{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class c extends s{constructor(){super(...arguments),this.uniforms=new o,this.code=new a,this.constants=new h}get builder(){return this}}class u{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class l{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,n)=>t.push("vertex"===e?`out ${r} ${n};`:`in ${r} ${n};`))),t}}class m{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?m.ALLOWLIST_VERTEX:m.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}m.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],m.ALLOWLIST_VERTEX=[];class h{constructor(){this._entries=new Set}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=h._numberToFloatStr(r);break;case"int":n=h._numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${h._numberToFloatStr(r[0])},                            ${h._numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${h._numberToFloatStr(r[0])},                            ${h._numberToFloatStr(r[1])},                            ${h._numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${h._numberToFloatStr(r[0])},                            ${h._numberToFloatStr(r[1])},                            ${h._numberToFloatStr(r[2])},                            ${h._numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${h._numberToIntStr(r[0])},                             ${h._numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${h._numberToIntStr(r[0])},                             ${h._numberToIntStr(r[1])},                             ${h._numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${h._numberToIntStr(r[0])},                             ${h._numberToIntStr(r[1])},                             ${h._numberToIntStr(r[2])},                             ${h._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>h._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${n};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const d="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif\n\nout vec4 fragColor;",_="precision highp float;\nprecision highp sampler2D;";


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Texture2DDrawUniform": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,s){super(r,"sampler2D",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,o,t)=>e.bindTexture(r,s(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Texture2DPassUniform": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,s){super(r,"sampler2D",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((e,o,t)=>e.bindTexture(r,s(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uniform": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class i{constructor(i,s,t,r,a=null){this.name=i,this.type=s,this.arraySize=a,this.bind={[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__.BindType.Pass]:null,[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__.BindType.Draw]:null},null!=t&&null!=r&&(this.bind[t]=r)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoParameters": () => (/* binding */ n),
/* harmony export */   "glsl": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{}const n=t;function o(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){function n(t){return Math.round(t).toString()}function o(t){return t.toPrecision(8)}t.int=n,t.float=o}(o||(o={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindType": () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var a;!function(a){a[a.Pass=0]="Pass",a[a.Draw=1]="Draw"}(a||(a={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReloadableShaderModule": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{constructor(t,o){this._module=t,this._loadModule=o}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShaderTechnique": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e{constructor(i,t,e){this.release=e,this.initializeConfiguration(i,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i.rctx.capabilities)}destroy(){this._program=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.disposeMaybe)(this._program),this._pipeline=this._configuration=null}reload(t){(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.disposeMaybe)(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(i,t=null,e){i.setPipelineState(this.getPipelineState(t,e))}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i)}get primitiveType(){return _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.PrimitiveType.TRIANGLES}getPipelineState(i,t){return this._pipeline}initializeConfiguration(i,t){}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShaderTechniqueConfiguration": () => (/* binding */ t),
/* harmony export */   "parameter": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.NoParameters{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function r(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const s=t._parameterNames.length-1,a=e.count||2,i=Math.ceil(Math.log2(a)),o=t._parameterBits??[0];let h=0;for(;o[h]+i>16;)h++,h>=o.length&&o.push(0);t._parameterBits=o;const n=o[h],m=(1<<i)-1<<n;o[h]+=i,Object.defineProperty(t,r,{get(){return this[s]},set(e){if(this[s]!==e&&(this[s]=e,this._keyDirty=!0,this._parameterBits[h]=this._parameterBits[h]&~m|+e<<n&m,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AnimationTimer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AnimationTimer.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationTimer": () => (/* binding */ e),
/* harmony export */   "Parameters": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/time.js */ "./node_modules/@arcgis/core/core/time.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e{constructor(){this.enabled=!0,this._time=(0,_core_time_js__WEBPACK_IMPORTED_MODULE_0__.Milliseconds)(0)}get time(){return this._time}advance({deltaTime:e,fixedTime:i}){return null!=i?this._time!==i&&(this._time=i,!0):(this._time=(0,_core_time_js__WEBPACK_IMPORTED_MODULE_0__.Milliseconds)(this._time+e),0!==e)}}class i{constructor(t,e){this.deltaTime=t,this.fixedTime=e}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attribute": () => (/* binding */ s)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s{constructor(s,t,i=!1,e=t){this.data=s,this.size=t,this.exclusive=i,this.stride=e}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneAttributeData": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o(o){if(o.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.NATIVE_ARRAY_MAX_SIZE)return Array.from(o);if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(o))return Float64Array.from(o);if(!("BYTES_PER_ELEMENT"in o))return Array.from(o);switch(o.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(o);case 2:return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isUint16Array)(o)?Uint16Array.from(o):Int16Array.from(o);case 4:return Float32Array.from(o);default:return Float64Array.from(o)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTextureBasis": () => (/* binding */ h),
/* harmony export */   "createTextureKTX2": () => (/* binding */ _),
/* harmony export */   "estimateMemoryBasis": () => (/* binding */ u),
/* harmony export */   "estimateMemoryKTX2": () => (/* binding */ c),
/* harmony export */   "loadBasis": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _libs_basisu_BasisU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../libs/basisu/BasisU.js */ "./node_modules/@arcgis/core/libs/basisu/BasisU.js");
/* harmony import */ var _libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libs/basisu/TextureFormat.js */ "./node_modules/@arcgis/core/libs/basisu/TextureFormat.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/Util.js */ "./node_modules/@arcgis/core/views/webgl/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let l=null,o=null;async function g(){return null==o&&(o=(0,_libs_basisu_BasisU_js__WEBPACK_IMPORTED_MODULE_0__.getBasisTranscoder)(),l=await o),o}function u(e,t){if(null==l)return e.byteLength;const n=new l.BasisFile(new Uint8Array(e)),s=E(n)?m(n.getNumLevels(0),n.getHasAlpha(),n.getImageWidth(0,0),n.getImageHeight(0,0),t):0;return n.close(),n.delete(),s}function c(e,t){if(null==l)return e.byteLength;const n=new l.KTX2File(new Uint8Array(e)),s=T(n)?m(n.getLevels(),n.getHasAlpha(),n.getWidth(),n.getHeight(),t):0;return n.close(),n.delete(),s}function m(e,t,s,r,i){const l=(0,_webgl_Util_js__WEBPACK_IMPORTED_MODULE_4__.getBytesPerElementFormat)(t?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGBA8_ETC2_EAC:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGB8_ETC2),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(s*r*l*o)}function E(e){return e.getNumImages()>=1&&!e.isUASTC()}function T(e){return e.getFaces()>=1&&e.isETC1S()}async function h(e,t,n){null==l&&(l=await g());const s=new l.BasisFile(new Uint8Array(n));if(!E(s))return null;s.startTranscoding();const r=p(e,t,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),r}async function _(e,t,n){null==l&&(l=await g());const s=new l.KTX2File(new Uint8Array(n));if(!T(s))return null;s.startTranscoding();const r=p(e,t,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),r}function p(e,a,l,o,g,u,c,m){const{compressedTextureETC:E,compressedTextureS3TC:T}=e.capabilities,[h,_]=E?o?[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_1__.TextureFormat.ETC2_RGBA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGBA8_ETC2_EAC]:[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_1__.TextureFormat.ETC1_RGB,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGB8_ETC2]:T?o?[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_1__.TextureFormat.BC3_RGBA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_1__.TextureFormat.BC1_RGB,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGB_S3TC_DXT1_EXT]:[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_1__.TextureFormat.RGBA32,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RGBA],p=a.hasMipmap?l:Math.min(1,l),A=[];for(let t=0;t<p;t++)A.push(new Uint8Array(c(t,h))),m(t,h,A[t]);return a.internalFormat=_,a.hasMipmap=A.length>1,a.samplingMode=a.hasMipmap?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.TextureSamplingMode.LINEAR_MIPMAP_LINEAR:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.TextureSamplingMode.LINEAR,a.width=g,a.height=u,new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__.Texture(e,a,{type:"compressed",levels:A})}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoundingInfo": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "./node_modules/@arcgis/core/core/PooledArray.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o{constructor(i,s,o,c){this.primitiveIndices=i,this._numIndexPerPrimitive=s,this.indices=o,this.position=c,this._children=void 0,(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__.assert)(i.length>=1),(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__.assert)(o.length%this._numIndexPerPrimitive==0),(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__.assert)(o.length>=i.length*this._numIndexPerPrimitive),(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__.assert)(3===c.size||4===c.size);const{data:d,size:l}=c,m=i.length;let u=l*o[this._numIndexPerPrimitive*i[0]];a.clear(),a.push(u);const f=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(d[u],d[u+1],d[u+2]),x=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.a)(f);for(let t=0;t<m;++t){const s=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){u=l*o[s+i],a.push(u);let t=d[u];f[0]=Math.min(t,f[0]),x[0]=Math.max(t,x[0]),t=d[u+1],f[1]=Math.min(t,f[1]),x[1]=Math.max(t,x[1]),t=d[u+2],f[2]=Math.min(t,f[2]),x[2]=Math.max(t,x[2])}}this.bbMin=f,this.bbMax=x;const P=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.h)((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(x[0]-f[0],x[1]-f[1]),x[2]-f[2]);let v=this.radius*this.radius;for(let t=0;t<a.length;++t){u=a.at(t);const i=d[u]-P[0],s=d[u+1]-P[1],e=d[u+2]-P[2],n=i*i+s*s+e*e;if(n<=v)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,v=this.radius*this.radius;const o=h/r;P[0]+=i*o,P[1]+=s*o,P[2]+=e*o}this.center=P,a.clear()}getChildren(){if(this._children||(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.bbMin,this.bbMax)<=1)return this._children;const i=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.h)((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,n=new Uint8Array(e),h=new Array(8);for(let t=0;t<8;++t)h[t]=0;const{data:a,size:c}=this.position;for(let t=0;t<e;++t){let s=0;const e=this._numIndexPerPrimitive*this.primitiveIndices[t];let r=c*this.indices[e],o=a[r],d=a[r+1],l=a[r+2];for(let i=1;i<this._numIndexPerPrimitive;++i){r=c*this.indices[e+i];const t=a[r],s=a[r+1],n=a[r+2];t<o&&(o=t),s<d&&(d=s),n<l&&(l=n)}o<i[0]&&(s|=1),d<i[1]&&(s|=2),l<i[2]&&(s|=4),n[t]=s,++h[s]}let d=0;for(let t=0;t<8;++t)h[t]>0&&++d;if(d<2)return;const l=new Array(8);for(let t=0;t<8;++t)l[t]=h[t]>0?new Uint32Array(h[t]):void 0;for(let t=0;t<8;++t)h[t]=0;for(let t=0;t<e;++t){const i=n[t];l[i][h[i]++]=this.primitiveIndices[t]}this._children=new Array;for(let t=0;t<8;++t)void 0!==l[t]&&this._children.push(new o(l[t],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){a.prune()}}const a=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]({deallocator:null});


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentObject": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/uid.js */ "./node_modules/@arcgis/core/core/uid.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r{constructor(){this.id=(0,_core_uid_js__WEBPACK_IMPORTED_MODULE_0__.generateUID)()}unload(){}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentObjectType": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var e;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(e||(e={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDDSTexture": () => (/* binding */ E),
/* harmony export */   "createDDSTextureData": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),a=542327876,i=131072,l=4;function s(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function u(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const c=s("DXT1"),h=s("DXT3"),m=s("DXT5"),d=31,p=0,g=1,D=2,C=3,f=4,w=7,T=20,_=21;function E(e,r,o){const a=S(o,r.hasMipmap??!1);if(null==a)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:l,width:s,height:u}=a;return r.samplingMode=i.levels.length>1?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.TextureSamplingMode.LINEAR_MIPMAP_LINEAR:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.TextureSamplingMode.LINEAR,r.hasMipmap=i.levels.length>1,r.internalFormat=l,r.width=s,r.height=u,new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__.Texture(e,r,i)}function S(e,t){const n=new Int32Array(e,0,d);if(n[p]!==a)return o.error("Invalid magic number in DDS header"),null;if(!(n[T]&l))return o.error("Unsupported format, must contain a FourCC code"),null;const s=n[_];let E,S;switch(s){case c:E=8,S=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case h:E=16,S=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case m:E=16,S=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return o.error("Unsupported FourCC code:",u(s)),null}let A=1,M=n[f],x=n[C];0==(3&M)&&0==(3&x)||(o.warn("Rounding up compressed texture size to nearest multiple of 4."),M=M+3&-4,x=x+3&-4);const R=M,X=x;let b,I;n[D]&i&&!1!==t&&(A=Math.max(1,n[w]));let v=n[g]+4;const F=[];for(let r=0;r<A;++r)I=(M+3>>2)*(x+3>>2)*E,b=new Uint8Array(e,v,I),F.push(b),v+=I,M=Math.max(1,M>>1),x=Math.max(1,x>>1);return{textureData:{type:"compressed",levels:F},internalFormat:S,width:R,height:X}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Default3D": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const E=new Map([[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.POSITION,0],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.NORMAL,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.NORMALCOMPRESSED,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.UV0,2],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.COLOR,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.COLORFEATUREATTRIBUTE,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.SIZE,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.TANGENT,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.AUXPOS1,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.SYMBOLCOLOR,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.AUXPOS2,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.FEATUREATTRIBUTE,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.INSTANCEFEATUREATTRIBUTE,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.INSTANCECOLOR,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.OBJECTANDLAYERIDCOLOR,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.INSTANCEOBJECTANDLAYERIDCOLOR,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.MODEL,8],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.MODELNORMAL,12],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.MODELORIGINHI,11],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.MODELORIGINLO,15]]);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexBufferLayouts.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexBufferLayouts.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pos2": () => (/* binding */ t),
/* harmony export */   "Pos2Tex": () => (/* binding */ A),
/* harmony export */   "Pos3": () => (/* binding */ n),
/* harmony export */   "Pos3Col": () => (/* binding */ r),
/* harmony export */   "Pos3NormalTex": () => (/* binding */ I),
/* harmony export */   "Pos3Tex": () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/VertexElementDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.VertexElementDescriptor(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.POSITION,3,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.DataType.FLOAT,0,12)],w=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.VertexElementDescriptor(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.POSITION,3,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.DataType.FLOAT,0,20),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.VertexElementDescriptor(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.UV0,2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.DataType.FLOAT,12,20)],I=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.VertexElementDescriptor(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.POSITION,3,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.DataType.FLOAT,0,32),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.VertexElementDescriptor(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.NORMAL,3,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.DataType.FLOAT,12,32),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.VertexElementDescriptor(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.UV0,2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.DataType.FLOAT,24,32)],r=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.VertexElementDescriptor(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.POSITION,3,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.DataType.FLOAT,0,16),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.VertexElementDescriptor(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.COLOR,4,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.DataType.UNSIGNED_BYTE,12,16)],t=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.VertexElementDescriptor(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.POSITION,2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.DataType.FLOAT,0,8)],A=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.VertexElementDescriptor(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.POSITION,2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.DataType.FLOAT,0,16),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.VertexElementDescriptor(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.UV0,2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.DataType.FLOAT,8,16)];


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(t){return _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.ResourceState.LOADED}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLTextureMaterial": () => (/* binding */ r),
/* harmony export */   "GLTextureMaterialBindParameters": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _GLMaterial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GLMaterial.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r extends _GLMaterial_js__WEBPACK_IMPORTED_MODULE_4__["default"]{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRep,this._textureId=t.textureId,this._acquire(t.textureId,(t=>this._texture=t)),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t))}dispose(){this._texture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(this._texture),this._textureNormal=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(this._textureNormal),this._textureEmissive=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(this._textureEmissive),this._textureOcclusion=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(this._textureOcclusion),this._textureMetallicRoughness=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return 0===this._numLoading?_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_3__.ResourceState.LOADED:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_3__.ResourceState.LOADING}get textureBindParameters(){return new l(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(this._texture),this._textureId=e,this._acquire(this._textureId,(t=>this._texture=t)))}_acquire(s,i){if(null==s)return void i(null);const u=this._textureRepository.acquire(s);if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.isPromiseLike)(u))return++this._numLoading,void u.then((e=>{if(this._disposed)return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(e),void i(null);i(e)})).finally((()=>--this._numLoading));i(u)}}class l extends _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.NoParameters{constructor(t=null,e=null,s=null,i=null,u=null){super(),this.texture=t,this.textureNormal=e,this.textureEmissive=s,this.textureOcclusion=i,this.textureMetallicRoughness=u}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geometry": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "./node_modules/@arcgis/core/chunks/mat4f64.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/Indices.js */ "./node_modules/@arcgis/core/geometry/support/Indices.js");
/* harmony import */ var _AttributeArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttributeArray.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js");
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _BoundingInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoundingInfo.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentObject.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js");
/* harmony import */ var _ContentObjectType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContentObjectType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js");
/* harmony import */ var _geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./geometryDataUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js");
/* harmony import */ var _Object3DStateID_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Object3DStateID.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../materials/renderers/utils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class b extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_6__.ContentObject{constructor(t,e,i=[],r=null,o=_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_7__.ContentObjectType.Mesh,h=null,a=-1){super(),this.material=t,this.mapPositions=r,this.type=o,this.objectAndLayerIdColor=h,this.edgeIndicesLength=a,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[s,n]of e)n&&this._vertexAttributes.set(s,{...n});if(null==i||0===i.length){const t=p(this._vertexAttributes),e=(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_2__.getContinuousIndexArray)(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e)}else for(const[s,u]of i)u&&(this._indices.set(s,(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_2__.compactIndices)(u)),s===_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__.VertexAttribute.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(s).length:this.edgeIndicesLength))}instantiate(t={}){const e=new b(t.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach(((t,i)=>{t.exclusive=!1,e._vertexAttributes.set(i,t)})),this._indices.forEach(((t,i)=>e._indices.set(i,t))),e._boundingInfo=this._boundingInfo,e.transformation=t.transformation||this.transformation,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){let e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e={...e,exclusive:!0,data:(0,_AttributeArray_js__WEBPACK_IMPORTED_MODULE_3__.cloneAttributeData)(e.data)},this._vertexAttributes.set(t,e)),e}setAttributeData(t,e){const i=this._vertexAttributes.get(t);i&&this._vertexAttributes.set(t,{...i,exclusive:!0,data:e})}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_7__.ContentObjectType.Mesh?this._computeAttachmentOriginTriangles(t):this.type===_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_7__.ContentObjectType.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(null!=this._transformation&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.m)(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const e=this.indices.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__.VertexAttribute.POSITION),i=this.vertexAttributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__.VertexAttribute.POSITION);return (0,_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_8__.computeAttachmentOriginTriangles)(i,e,t)}_computeAttachmentOriginLines(t){const e=this.vertexAttributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__.VertexAttribute.POSITION),i=this.indices.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__.VertexAttribute.POSITION);return (0,_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_8__.computeAttachmentOriginLines)(e,i,i&&v(this.material.parameters,e,i),t)}_computeAttachmentOriginPoints(t){const e=this.indices.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__.VertexAttribute.POSITION),i=this.vertexAttributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__.VertexAttribute.POSITION);return (0,_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_8__.computeAttachmentOriginPoints)(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.indices.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__.VertexAttribute.POSITION),e=this.vertexAttributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__.VertexAttribute.POSITION);if(!t||0===t.length||!e)return null;const i=this.type===_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_7__.ContentObjectType.Mesh?3:1;(0,_Util_js__WEBPACK_IMPORTED_MODULE_10__.assert)(t.length%i==0,"Indexing error: "+t.length+" not divisible by "+i);const n=(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_2__.getContinuousIndexArray)(t.length/i);return new _BoundingInfo_js__WEBPACK_IMPORTED_MODULE_5__.BoundingInfo(n,i,t,e)}get transformation(){return this._transformation??_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__.I}set transformation(i){this._transformation=i&&i!==_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__.I?(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__.b)(i):null}get shaderTransformation(){return null!=this._shaderTransformer?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(t){this._shaderTransformer=t}get hasVolatileTransformation(){return null!=this._shaderTransformer}addHighlight(){const t=new _Object3DStateID_js__WEBPACK_IMPORTED_MODULE_9__.Object3DStateID(_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__.Object3DState.Highlight);return this.highlights=(0,_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_12__.addObject3DStateID)(this.highlights,t),t}removeHighlight(t){this.highlights=(0,_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_12__.removeObject3DStateID)(this.highlights,t)}}function p(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function v(t,e,i){return!(!("isClosed"in t)||!t.isClosed)&&(i?i.length>2:e.data.length>6)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/LocalOriginFactory.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/LocalOriginFactory.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalOrigin": () => (/* binding */ t),
/* harmony export */   "fromValues": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{constructor(s,t){this.vec3=s,this.id=t}}function c(c,r,n,o){return new t((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.f)(c,r,n),o)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/LongVectorMath.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/LongVectorMath.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ l),
/* harmony export */   "dotProduct": () => (/* binding */ t),
/* harmony export */   "elementwiseProduct": () => (/* binding */ n),
/* harmony export */   "scalarProduct": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(t,n){let e=0;for(let l=0;l<t.length;l++)e+=t[l]*n[l];return e}function n(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n[l];return e}function e(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n;return e}function l(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]+n[l];return e}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Material": () => (/* binding */ d),
/* harmony export */   "MaterialParameters": () => (/* binding */ c),
/* harmony export */   "RenderOccludedFlag": () => (/* binding */ o),
/* harmony export */   "UpdateParameters": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _AnimationTimer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimationTimer.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AnimationTimer.js");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentObject.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js");
/* harmony import */ var _ContentObjectType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContentObjectType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js");
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultVertexAttributeLocations.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../materials/internal/MaterialUtil.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class d extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_3__.ContentObject{constructor(t,r){super(),this.type=_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_4__.ContentObjectType.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_5__.Default3D,this._pp0=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.f)(0,0,1),this._pp1=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.f)(0,0,0),this._parameters=(0,_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_6__.copyParameters)(t,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_6__.updateParameters)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){null!=this.repository&&this.repository.materialChanged(this)}intersectDraped(e,t,r,s,i,a){return this._pp0[0]=this._pp1[0]=s[0],this._pp0[1]=this._pp1[1]=s[1],this.intersect(e,t,r,this._pp0,this._pp1,i)}}class h extends _AnimationTimer_js__WEBPACK_IMPORTED_MODULE_2__.Parameters{constructor(e,t,r){super(t,r),this.camera=e}}var o;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(o||(o={}));class c extends _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.NoParameters{constructor(){super(...arguments),this.renderOccluded=o.Occlude}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Object3DStateID": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/uid.js */ "./node_modules/@arcgis/core/core/uid.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r{constructor(r){this.channel=r,this.id=(0,_core_uid_js__WEBPACK_IMPORTED_MODULE_0__.generateUID)()}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OITPolygonOffset": () => (/* binding */ _),
/* harmony export */   "OITPolygonOffsetLimit": () => (/* binding */ S),
/* harmony export */   "blendingAlpha": () => (/* binding */ s),
/* harmony export */   "blendingColor": () => (/* binding */ N),
/* harmony export */   "blendingDefault": () => (/* binding */ c),
/* harmony export */   "getOITPolygonOffset": () => (/* binding */ a),
/* harmony export */   "oitBlending": () => (/* binding */ A),
/* harmony export */   "oitDepthTest": () => (/* binding */ l),
/* harmony export */   "oitDepthWrite": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransparencyPassType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/TransparencyPassType.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "./node_modules/@arcgis/core/views/webgl/renderState.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const c=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__.separateBlendingParams)(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.SRC_ALPHA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE_MINUS_SRC_ALPHA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE_MINUS_SRC_ALPHA),N=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__.simpleBlendingParams)(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE),s=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__.simpleBlendingParams)(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ZERO,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE_MINUS_SRC_ALPHA);function A(r){return r===_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_0__.TransparencyPassType.FrontFace?null:r===_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_0__.TransparencyPassType.Alpha?s:N}function E(r){return r===_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_0__.TransparencyPassType.FrontFace?_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__.defaultDepthWriteParams:null}const S=5e5,_={factor:-1,units:-2};function a(n){return n?_:null}function l(r,e=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.LESS){return r===_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_0__.TransparencyPassType.NONE||r===_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_0__.TransparencyPassType.FrontFace?e:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.LEQUAL}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Program": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "./node_modules/@arcgis/core/core/PooledArray.js");
/* harmony import */ var _core_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "./node_modules/@arcgis/core/views/webgl/checkWebGLError.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class i{constructor(i,s,o){this._context=i,this._locations=o,this._textures=new Map,this._freeTextureUnits=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]({deallocator:null}),this._glProgram=i.programCache.acquire(s.generate("vertex"),s.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=s.generateBind(_core_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,this),this.bindDraw=s.generateBind(_core_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,this),this._fragmentUniforms=(0,_webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__.webglDebugEnabled)()?s.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(t,e){this._glProgram.setUniform1i(t,e?1:0)}setUniform1i(t,e){this._glProgram.setUniform1i(t,e)}setUniform1f(t,e){this._glProgram.setUniform1f(t,e)}setUniform2fv(t,e){this._glProgram.setUniform2fv(t,e)}setUniform3fv(t,e){this._glProgram.setUniform3fv(t,e)}setUniform4fv(t,e){this._glProgram.setUniform4fv(t,e)}setUniformMatrix3fv(t,e){this._glProgram.setUniformMatrix3fv(t,e)}setUniformMatrix4fv(t,e){this._glProgram.setUniformMatrix4fv(t,e)}setUniform1fv(t,e){this._glProgram.setUniform1fv(t,e)}setUniform1iv(t,e){this._glProgram.setUniform1iv(t,e)}setUniform2iv(t,e){this._glProgram.setUniform3iv(t,e)}setUniform3iv(t,e){this._glProgram.setUniform3iv(t,e)}setUniform4iv(t,e){this._glProgram.setUniform4iv(t,e)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,e){if(null==e||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit)})),null!=this._fragmentUniforms&&this._fragmentUniforms.forEach((t=>{"sampler2D"!==t.type&&"samplerCube"!==t.type||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`)}))}_allocTextureUnit(t){return{texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderSlot": () => (/* binding */ E)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var E;!function(E){E[E.INTEGRATED_MESH=0]="INTEGRATED_MESH",E[E.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",E[E.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",E[E.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",E[E.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",E[E.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",E[E.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",E[E.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",E[E.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",E[E.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",E[E.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",E[E.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",E[E.LASERLINES=12]="LASERLINES",E[E.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",E[E.HUD_MATERIAL=14]="HUD_MATERIAL",E[E.LABEL_MATERIAL=15]="LABEL_MATERIAL",E[E.LINE_CALLOUTS=16]="LINE_CALLOUTS",E[E.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",E[E.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",E[E.DRAPED_WATER=19]="DRAPED_WATER",E[E.VOXEL=20]="VOXEL",E[E.MAX_SLOTS=21]="MAX_SLOTS"}(E||(E={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SSAOBlurTechnique.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SSAOBlurTechnique.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSAOBlurTechnique": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js");
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultVertexAttributeLocations.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js");
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Program.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js");
/* harmony import */ var _chunks_SSAOBlur_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/SSAOBlur.glsl.js */ "./node_modules/@arcgis/core/chunks/SSAOBlur.glsl.js");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "./node_modules/@arcgis/core/views/webgl/renderState.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class l extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_1__.ShaderTechnique{initializeProgram(r){return new _Program_js__WEBPACK_IMPORTED_MODULE_3__.Program(r.rctx,l.shader.get().build(),_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_2__.Default3D)}initializePipeline(){return (0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_5__.makePipelineState)({colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_5__.defaultColorWriteParams})}}l.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__.ReloadableShaderModule(_chunks_SSAOBlur_glsl_js__WEBPACK_IMPORTED_MODULE_4__.S,(()=>__webpack_require__.e(/*! import() */ "node_modules_arcgis_core_views_3d_webgl-engine_shaders_SSAOBlur_glsl_js").then(__webpack_require__.bind(__webpack_require__, /*! ../shaders/SSAOBlur.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/SSAOBlur.glsl.js"))));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SSAOHelper.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SSAOHelper.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSAOHelper": () => (/* binding */ w),
/* harmony export */   "blurSizePixels": () => (/* binding */ O)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/time.js */ "./node_modules/@arcgis/core/core/time.js");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "./node_modules/@arcgis/core/chunks/vec2.js");
/* harmony import */ var _glUtil3D_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glUtil3D.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/glUtil3D.js");
/* harmony import */ var _SSAOBlurTechnique_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SSAOBlurTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SSAOBlurTechnique.js");
/* harmony import */ var _SSAONoiseData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SSAONoiseData.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SSAONoiseData.js");
/* harmony import */ var _SSAOTechnique_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SSAOTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SSAOTechnique.js");
/* harmony import */ var _chunks_SSAO_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/SSAO.glsl.js */ "./node_modules/@arcgis/core/chunks/SSAO.glsl.js");
/* harmony import */ var _shaders_SSAOParameters_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shaders/SSAOParameters.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/SSAOParameters.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "./node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../webgl/TextureDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js");
/* harmony import */ var _webgl_Util_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../webgl/Util.js */ "./node_modules/@arcgis/core/views/webgl/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const O=2;class w{constructor(e,s,t,r){this._view=e,this._techniqueRepository=s,this._rctx=t,this._requestRender=r,this._quadVAO=null,this._passParameters=new _shaders_SSAOParameters_js__WEBPACK_IMPORTED_MODULE_8__.SSAOPassParameters,this._drawParameters=new _shaders_SSAOParameters_js__WEBPACK_IMPORTED_MODULE_8__.BlurDrawParameters}dispose(){this.enabled=!1,this._quadVAO=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.disposeMaybe)(this._quadVAO)}destroy(){this.dispose()}disposeOffscreenBuffers(){this._ssaoFBO?.resize(0,0),this._blurFBO?.resize(0,0)}set enabled(e){e?this._enable():this._disable()}get enabled(){return null!=this._enableTime}get active(){return this.enabled&&this._ssaoTechnique.compiled&&this._blurTechnique.compiled}get colorTexture(){return this._ssaoFBO?.colorTexture}render(e,s,i,a){if(null==this._enableTime||null==i||null==a||null==this._ssaoFBO||null==this._blurFBO)return;if(!this.active)return this._enableTime=s,void this._requestRender();0===this._enableTime&&(this._enableTime=s);const h=this._rctx,n=e.camera,u=this._view.qualitySettings.fadeDuration,m=u>0?Math.min(u,s-this._enableTime)/u:1;this._passParameters.normalTexture=a,this._passParameters.depthTexture=i,this._passParameters.projScale=1/n.computeRenderPixelSizeAtDist(1),this._passParameters.intensity=4*f/(0,_chunks_SSAO_glsl_js__WEBPACK_IMPORTED_MODULE_7__.g)(n)**6*m;const c=n.fullViewport,p=c[2],b=c[3],d=p/O,w=b/O;this._ssaoFBO.resize(p,b),this._blurFBO.resize(d,w),null==this._quadVAO&&(this._quadVAO=(0,_glUtil3D_js__WEBPACK_IMPORTED_MODULE_3__.createQuadVAO)(this._rctx)),h.bindFramebuffer(this._ssaoFBO),h.setViewport(0,0,p,b);h.bindTechnique(this._ssaoTechnique,this._passParameters,e).bindDraw(this._drawParameters,e,this._passParameters),h.bindVAO(this._quadVAO);const q=(0,_webgl_Util_js__WEBPACK_IMPORTED_MODULE_13__.vertexCount)(this._quadVAO,"geometry");h.drawArrays(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__.PrimitiveType.TRIANGLE_STRIP,0,q);const P=h.bindTechnique(this._blurTechnique,this._passParameters,e);h.setViewport(0,0,d,w),h.bindFramebuffer(this._blurFBO),this._drawParameters.colorTexture=this._ssaoFBO.colorTexture,(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__.s)(this._drawParameters.blurSize,0,O/b),P.bindDraw(this._drawParameters,e,this._passParameters),h.setViewport(0,0,d,w),h.drawArrays(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__.PrimitiveType.TRIANGLE_STRIP,0,q),h.bindFramebuffer(this._ssaoFBO),h.setViewport(0,0,p,b),h.setClearColor(1,1,1,0),h.clear(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__.ClearBufferBit.COLOR_BUFFER_BIT),h.setViewport(0,0,d,w),this._drawParameters.colorTexture=this._blurFBO.colorTexture,(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__.s)(this._drawParameters.blurSize,O/p,0),P.bindDraw(this._drawParameters,e,this._passParameters),h.drawArrays(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__.PrimitiveType.TRIANGLE_STRIP,0,q),h.setViewport(c[0],c[1],c[2],c[3]),m<1&&this._requestRender()}_enable(){if(null!=this._enableTime)return;const e=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_12__.TextureDescriptor;e.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__.TextureWrapMode.CLAMP_TO_EDGE,this._ssaoFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_10__.FramebufferObject(this._rctx,e),this._blurFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_10__.FramebufferObject(this._rctx,e);const t=Uint8Array.from(atob(_SSAONoiseData_js__WEBPACK_IMPORTED_MODULE_5__.noiseData),(e=>e.charCodeAt(0)));e.pixelFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__.PixelFormat.RGB,e.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__.TextureWrapMode.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__.Texture(this._rctx,e,t),null==this._ssaoTechnique&&(this._ssaoTechnique=this._techniqueRepository.acquire(_SSAOTechnique_js__WEBPACK_IMPORTED_MODULE_6__.SSAOTechnique)),null==this._blurTechnique&&(this._blurTechnique=this._techniqueRepository.acquire(_SSAOBlurTechnique_js__WEBPACK_IMPORTED_MODULE_4__.SSAOBlurTechnique)),this._enableTime=(0,_core_time_js__WEBPACK_IMPORTED_MODULE_1__.Milliseconds)(0),this._requestRender()}_disable(){this._enableTime=null,this._passParameters.noiseTexture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.disposeMaybe)(this._passParameters.noiseTexture),this._blurFBO=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.disposeMaybe)(this._blurFBO),this._ssaoFBO=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.disposeMaybe)(this._ssaoFBO)}get gpuMemoryUsage(){return(this._blurFBO?.gpuMemoryUsage??0)+(this._ssaoFBO?.gpuMemoryUsage??0)}}const f=.5;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SSAONoiseData.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SSAONoiseData.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noiseData": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const e="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SSAOTechnique.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SSAOTechnique.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSAOTechnique": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js");
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultVertexAttributeLocations.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js");
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Program.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js");
/* harmony import */ var _chunks_SSAO_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/SSAO.glsl.js */ "./node_modules/@arcgis/core/chunks/SSAO.glsl.js");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "./node_modules/@arcgis/core/views/webgl/renderState.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class l extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_1__.ShaderTechnique{initializeProgram(e){return new _Program_js__WEBPACK_IMPORTED_MODULE_3__.Program(e.rctx,l.shader.get().build(),_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_2__.Default3D)}initializePipeline(){return (0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_5__.makePipelineState)({colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_5__.defaultColorWriteParams})}}l.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__.ReloadableShaderModule(_chunks_SSAO_glsl_js__WEBPACK_IMPORTED_MODULE_4__.S,(()=>__webpack_require__.e(/*! import() */ "node_modules_arcgis_core_views_3d_webgl-engine_shaders_SSAO_glsl_js").then(__webpack_require__.bind(__webpack_require__, /*! ../shaders/SSAO.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/SSAO.glsl.js"))));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "depthCompareAlways": () => (/* binding */ s),
/* harmony export */   "depthCompareLess": () => (/* binding */ i),
/* harmony export */   "renderWhenBitIsNotSet": () => (/* binding */ t),
/* harmony export */   "replaceBitWhenDepthTestPasses": () => (/* binding */ u),
/* harmony export */   "stencilBaseAllZerosParams": () => (/* binding */ f),
/* harmony export */   "stencilToolMaskBaseParams": () => (/* binding */ o),
/* harmony export */   "stencilToolMaskOccluderParams": () => (/* binding */ P),
/* harmony export */   "stencilToolTransparentOccluderParams": () => (/* binding */ m),
/* harmony export */   "stencilWriteMaskOff": () => (/* binding */ l),
/* harmony export */   "stencilWriteMaskOn": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const i={func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.LESS},s={func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.ALWAYS},e={mask:255},l={mask:0},t=a=>({function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.NOTEQUAL,ref:a,mask:a},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP}}),u=a=>({function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.ALWAYS,ref:a,mask:a},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.REPLACE}}),f={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.ALWAYS,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.ZERO}},o={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.ALWAYS,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.REPLACE}},P={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.EQUAL,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP}},m={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.NOTEQUAL,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP}};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Texture": () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Evented.js */ "./node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../support/requestImageUtils.js */ "./node_modules/@arcgis/core/support/requestImageUtils.js");
/* harmony import */ var _support_requestUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../support/requestUtils.js */ "./node_modules/@arcgis/core/support/requestUtils.js");
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BasisUtil.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ContentObject.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js");
/* harmony import */ var _ContentObjectType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ContentObjectType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js");
/* harmony import */ var _DDSUtil_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DDSUtil.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../webgl/TextureDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class w extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_11__.ContentObject{constructor(t,r){super(),this._data=t,this.type=_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_12__.ContentObjectType.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"],this.parameters=r||{},this.parameters.mipmap=!1!==this.parameters.mipmap,this.parameters.noUnpackFlip=this.parameters.noUnpackFlip||!1,this.parameters.preMultiplyAlpha=this.parameters.preMultiplyAlpha||!1,this.parameters.wrap=this.parameters.wrap||{s:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.TextureWrapMode.REPEAT,t:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.TextureWrapMode.REPEAT},this._startPreload(t)}_startPreload(t){null!=t&&(t instanceof HTMLVideoElement?this._startPreloadVideoElement(t):t instanceof HTMLImageElement&&this._startPreloadImageElement(t))}_startPreloadVideoElement(t){if(!((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.isBlobProtocol)(t.src)||"auto"===t.preload&&t.crossOrigin)){t.preload="auto",t.crossOrigin="anonymous";const e=!t.paused;if(t.src=t.src,e&&t.autoplay){const e=()=>{t.removeEventListener("canplay",e),t.play()};t.addEventListener("canplay",e)}}}_startPreloadImageElement(t){(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.isDataProtocol)(t.src)||(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.isBlobProtocol)(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src)}dispose(){this._data=void 0}_createDescriptor(t){const e=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_17__.TextureDescriptor;return e.wrapMode=this.parameters.wrap??_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.TextureWrapMode.REPEAT,e.flipped=!this.parameters.noUnpackFlip,e.samplingMode=this.parameters.mipmap?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.TextureSamplingMode.LINEAR_MIPMAP_LINEAR:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.TextureSamplingMode.LINEAR,e.hasMipmap=!!this.parameters.mipmap,e.preMultiplyAlpha=!!this.parameters.preMultiplyAlpha,e.maxAnisotropy=this.parameters.maxAnisotropy??(this.parameters.mipmap?t.parameters.maxMaxAnisotropy:1),e}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.gpuMemoryUsage||H(this._data,this.parameters)}load(t){if(null!=this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const e=this._data;return null==e?(this._glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_16__.Texture(t,this._createDescriptor(t),null),this._glTexture):"string"==typeof e?this._loadFromURL(t,e):e instanceof Image?this._loadFromImageElement(t,e):e instanceof HTMLVideoElement?this._loadFromVideoElement(t,e):e instanceof ImageData||e instanceof HTMLCanvasElement?this._loadFromImage(t,e):((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isArrayBuffer)(e)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isUint8Array)(e))&&this.parameters.encoding===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.TextureEncodingMimeType.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(t,e)):((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isArrayBuffer)(e)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isUint8Array)(e))&&this.parameters.encoding===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.TextureEncodingMimeType.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(t,e)):((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isArrayBuffer)(e)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isUint8Array)(e))&&this.parameters.encoding===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.TextureEncodingMimeType.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(t,e)):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isUint8Array)(e)?this._loadFromPixelData(t,e):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isArrayBuffer)(e)?this._loadFromPixelData(t,new Uint8Array(e)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(t){return this._data instanceof HTMLVideoElement&&null!=this._glTexture?this._data.readyState<C.HAVE_CURRENT_DATA||t===this._data.currentTime?t:(this._glTexture.setData(this._data),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.parameters.updateCallback&&this.parameters.updateCallback(),this._data.currentTime):t}_loadFromDDSData(t,e){return this._glTexture=(0,_DDSUtil_js__WEBPACK_IMPORTED_MODULE_13__.createDDSTexture)(t,this._createDescriptor(t),e),this._glTexture}_loadFromKTX2(t,e){return this._loadAsync((()=>(0,_BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__.createTextureKTX2)(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromBasis(t,e){return this._loadAsync((()=>(0,_BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__.createTextureBasis)(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromPixelData(t,e){(0,_Util_js__WEBPACK_IMPORTED_MODULE_14__.assert)(this.parameters.width>0&&this.parameters.height>0);const r=this._createDescriptor(t);return r.pixelFormat=1===this.parameters.components?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.PixelFormat.LUMINANCE:3===this.parameters.components?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.PixelFormat.RGB:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.PixelFormat.RGBA,r.width=this.parameters.width??0,r.height=this.parameters.height??0,this._glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_16__.Texture(t,r,e),this._glTexture}_loadFromURL(t,e){return this._loadAsync((async r=>{const a=await (0,_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_7__.requestImage)(e,{signal:r});return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(r),this._loadFromImage(t,a)}))}_loadFromImageElement(t,e){return e.complete?this._loadFromImage(t,e):this._loadAsync((async r=>{const a=await (0,_support_requestUtils_js__WEBPACK_IMPORTED_MODULE_8__.loadImageAsync)(e,e.src,!1,r);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(r),this._loadFromImage(t,a)}))}_loadFromVideoElement(t,e){return e.readyState>=C.HAVE_CURRENT_DATA?this._loadFromImage(t,e):this._loadFromVideoElementAsync(t,e)}_loadFromVideoElementAsync(e,r){return this._loadAsync((s=>new Promise(((n,l)=>{const m=()=>{r.removeEventListener("loadeddata",h),r.removeEventListener("error",p),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.removeMaybe)(d)},h=()=>{r.readyState>=C.HAVE_CURRENT_DATA&&(m(),n(this._loadFromImage(e,r)))},p=e=>{m(),l(e||new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Failed to load video"))};r.addEventListener("loadeddata",h),r.addEventListener("error",p);const d=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.onAbort)(s,(()=>p((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.createAbortError)())))}))))}_loadFromImage(t,e){const r=N(e);this.parameters.width=r.width,this.parameters.height=r.height;const a=this._createDescriptor(t);return a.pixelFormat=3===this.parameters.components?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.PixelFormat.RGB:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.PixelFormat.RGBA,a.width=r.width,a.height=r.height,this._glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_16__.Texture(t,a,e),this._glTexture}_loadAsync(t){const e=new AbortController;this._loadingController=e;const r=t(e.signal);this._loadingPromise=r;const a=()=>{this._loadingController===e&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(a,a),r}unload(){if(this._glTexture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.disposeMaybe)(this._glTexture),null!=this._loadingController){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort()}this.events.emit("unloaded")}}function H(t,e){if(null==t)return 0;if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isArrayBuffer)(t)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isUint8Array)(t))return e.encoding===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.TextureEncodingMimeType.KTX2_ENCODING?(0,_BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__.estimateMemoryKTX2)(t,!!e.mipmap):e.encoding===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.TextureEncodingMimeType.BASIS_ENCODING?(0,_BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__.estimateMemoryBasis)(t,!!e.mipmap):t.byteLength;const{width:r,height:a}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?N(t):e;return(e.mipmap?4/3:1)*r*a*(e.components||4)||0}function N(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var C;!function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(C||(C={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/TransparencyPassType.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/TransparencyPassType.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransparencyPassType": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var o;!function(o){o[o.Color=0]="Color",o[o.Alpha=1]="Alpha",o[o.FrontFace=2]="FrontFace",o[o.NONE=3]="NONE",o[o.COUNT=4]="COUNT"}(o||(o={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexArrayObject.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexArrayObject.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexArrayObject": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r extends _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_0__.VertexArrayObject{}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeAttachmentOriginLines": () => (/* binding */ f),
/* harmony export */   "computeAttachmentOriginPoints": () => (/* binding */ a),
/* harmony export */   "computeAttachmentOriginTriangles": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _geometry_support_triangle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/triangle.js */ "./node_modules/@arcgis/core/geometry/support/triangle.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function c(r,o,c){if(!r||!o)return!1;const{size:a,data:f}=r;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(c,0,0,0),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(g,0,0,0);let m=0,h=0;for(let p=0;p<o.length-2;p+=3){const r=o[p]*a,j=o[p+1]*a,d=o[p+2]*a;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(i,f[r],f[r+1],f[r+2]),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(u,f[j],f[j+1],f[j+2]),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(l,f[d],f[d+1],f[d+2]);const z=(0,_geometry_support_triangle_js__WEBPACK_IMPORTED_MODULE_2__.areaPoints3d)(i,u,l);z?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(i,i,u),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(i,i,l),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.g)(i,i,1/3*z),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(c,c,i),m+=z):((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(g,g,i),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(g,g,u),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(g,g,l),h+=3)}return(0!==h||0!==m)&&(0!==m?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.g)(c,c,1/m),!0):0!==h&&((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.g)(c,g,1/h),!0))}function a(n,r,o){if(!n||!r)return!1;const{size:s,data:c}=n;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(o,0,0,0);let a=-1,f=0;for(let t=0;t<r.length;t++){const n=r[t]*s;a!==n&&(o[0]+=c[n],o[1]+=c[n+1],o[2]+=c[n+2],f++),a=n}return f>1&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.g)(o,o,1/f),f>0}function f(o,s,c,a){if(!o)return!1;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(a,0,0,0),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(g,0,0,0);let f=0,l=0;const{size:m,data:h}=o,p=s?s.length-1:h.length/m-1,j=p+(c?2:0);for(let t=0;t<j;t+=2){const o=t<p?t:p,c=t<p?t+1:0,j=(s?s[o]:o)*m,d=(s?s[c]:c)*m;i[0]=h[j],i[1]=h[j+1],i[2]=h[j+2],u[0]=h[d],u[1]=h[d+1],u[2]=h[d+2],(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.g)(i,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(i,i,u),.5);const z=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.j)(i,u);z>0?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(a,a,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.g)(i,i,z)),f+=z):0===f&&((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(g,g,i),l++)}return 0!==f?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.g)(a,a,1/f),!0):0!==l&&((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.g)(a,g,1/l),!0)}const i=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)(),u=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)(),l=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)(),g=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/glUtil3D.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/glUtil3D.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createColorTexture": () => (/* binding */ c),
/* harmony export */   "createEmptyDepthTexture": () => (/* binding */ g),
/* harmony export */   "createEmptyTexture": () => (/* binding */ l),
/* harmony export */   "createQuadVAO": () => (/* binding */ f),
/* harmony export */   "createScreenSizeTriangleVAO": () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultVertexAttributeLocations.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js");
/* harmony import */ var _DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultVertexBufferLayouts.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexBufferLayouts.js");
/* harmony import */ var _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VertexArrayObject.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexArrayObject.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "./node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/TextureDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function f(m,s=_DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__.Pos2,u=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__.Default3D,f=-1,w=1){let a=null;if(s===_DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__.Pos2Tex)a=new Float32Array([f,f,0,0,w,f,1,0,f,w,0,1,w,w,1,1]);else a=new Float32Array([f,f,w,f,f,w,w,w]);return new _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_2__.VertexArrayObject(m,u,{geometry:s},{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__.BufferObject.createVertex(m,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.Usage.STATIC_DRAW,a)})}function w(r,m=_DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__.Pos2,s=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__.Default3D){const u=new Float32Array([-1,-1,3,-1,-1,3]);return new _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_2__.VertexArrayObject(r,s,{geometry:m},{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__.BufferObject.createVertex(r,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.Usage.STATIC_DRAW,u)})}const a=4;function l(e,t=a){const r=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_6__.TextureDescriptor;return r.samplingMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.TextureSamplingMode.NEAREST,r.width=r.height=t,new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__.Texture(e,r)}function c(e,t,r=a){const n=new Uint8Array(r*r*4);for(let i=0;i<n.length;i+=4)n[i]=255*t[0],n[i+1]=255*t[1],n[i+2]=255*t[2],n[i+3]=255*t[3];const o=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_6__.TextureDescriptor;return o.samplingMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.TextureSamplingMode.NEAREST,o.width=o.height=r,new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__.Texture(e,o,n)}function g(e){const t=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_6__.TextureDescriptor;return t.samplingMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.TextureSamplingMode.NEAREST,t.width=t.height=1,new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__.Texture(e,t,new Uint8Array([255,255,255,255]))}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyPrecomputedScaleFactor": () => (/* binding */ f),
/* harmony export */   "applyScaleFactor": () => (/* binding */ o),
/* harmony export */   "getLabelSettings": () => (/* binding */ n),
/* harmony export */   "getSettings": () => (/* binding */ r),
/* harmony export */   "precomputeScaleFactor": () => (/* binding */ d),
/* harmony export */   "scale": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ViewingMode.js */ "./node_modules/@arcgis/core/views/ViewingMode.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r(e,t){return new p(e,h,t)}function n(e,t){const{curvatureDependent:a,scaleStart:i,scaleFallOffRange:r}=h;return new p(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:v.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:v.curvatureDependent.max.scaleFallOffFactor}},scaleStart:i,scaleFallOffRange:r,minPixelSize:v.minPixelSize},t)}function l(e){return Math.abs(e*e*e)}function s(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x.scale=Math.min(i.divisor/(t-i.offset),1),x.factor=l(e),x.minPixelSize=i.minPixelSize,x.paddingPixels=r,x}function c(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function o(t,a){return Math.max((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(t*a.scale,t,a.factor),c(t,a))}function u(e,t,a){const i=s(e,t,a);return i.minPixelSize=0,i.paddingPixels=0,o(1,i)}function d(e,t,a,i){i.scale=u(e,t,a),i.factor=0,i.minPixelSize=a.parameters.minPixelSize,i.paddingPixels=a.paddingPixelsOverride}function f(e,t,a=[0,0]){const i=Math.min(Math.max(t.scale,c(e[1],t)/Math.max(1e-5,e[1])),1);return a[0]=e[0]*i,a[1]=e[1]*i,a}function m(e,t,a,i){return o(e,s(t,a,i))}class p{get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}constructor(e,t,a,r=g(),n){this._viewingMode=e,this._description=t,this._ellipsoidRadius=a,this.parameters=r,this._paddingPixelsOverride=n,this._viewingMode===_ViewingMode_js__WEBPACK_IMPORTED_MODULE_1__.ViewingMode.Local?(this._coverageCompensation=this._surfaceCoverageCompensationLocal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this._coverageCompensation=this._surfaceCoverageCompensationGlobal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal)}update(e){return(!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this._calculateParameters(e,this._ellipsoidRadius,this.parameters),!0)}overridePadding(e){return e!==this.paddingPixelsOverride?new p(this._viewingMode,this._description,this._ellipsoidRadius,this.parameters,e):this}_calculateParameters(e,t,a){const{scaleStart:i,scaleFallOffRange:r,minPixelSize:n}=this._description,{fovY:l,distance:s}=e,c=this._calculateCurvatureDependentParameters(e,t),o=this._coverageCompensation(e,t,c),{tiltAngle:u,scaleFallOffFactor:d}=c,f=Math.sin(u)*s,m=.5*Math.PI-u-l*(.5-i*o),p=f/Math.cos(m),h=m+l*r*o,v=(p-d*(f/Math.cos(h)))/(1-d);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=v,a.divisor=p-v,a.minPixelSize=n,a}_calculateCurvatureDependentParametersLocal(e,t,a=P){return a.tiltAngle=this._description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this._description.curvatureDependent.min.scaleFallOffFactor,a}_calculateCurvatureDependentParametersGlobal(t,i,r=P){const n=this._description.curvatureDependent,l=1+t.distance/i,s=Math.sqrt(l*l-1),[c,o]=[n.min.curvature,n.max.curvature],u=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)((s-c)/(o-c),0,1),[d,f]=[n.min,n.max];return r.tiltAngle=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(d.tiltAngle,f.tiltAngle,u),r.scaleFallOffFactor=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(d.scaleFallOffFactor,f.scaleFallOffFactor,u),r}_surfaceCoverageCompensationLocal(e,t,a){return(e.fovY-a.tiltAngle)/e.fovY}_surfaceCoverageCompensationGlobal(e,t,a){const i=t*t,r=a.tiltAngle+.5*Math.PI,{fovY:n,distance:l}=e,s=l*l+i-2*Math.cos(r)*l*t,c=Math.sqrt(s),o=Math.sqrt(s-i);return(Math.acos(o/c)-Math.asin(t/(c/Math.sin(r)))+.5*n)/n}}const h={curvatureDependent:{min:{curvature:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(10),tiltAngle:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(12),scaleFallOffFactor:.5},max:{curvature:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(70),tiltAngle:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},v={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function g(){return{camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0}}const x={scale:0,factor:0,minPixelSize:0,paddingPixels:0},P={tiltAngle:0,scaleFallOffFactor:0};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I3SVerticalOffsetGlobalViewingMode": () => (/* binding */ T),
/* harmony export */   "IntersectorTransform": () => (/* binding */ p),
/* harmony export */   "Object3DVerticalOffsetGlobalViewingMode": () => (/* binding */ g),
/* harmony export */   "TERRAIN_ID": () => (/* binding */ L),
/* harmony export */   "TerrainVerticalOffsetGlobalViewingMode": () => (/* binding */ M),
/* harmony export */   "getVerticalOffsetI3S": () => (/* binding */ y),
/* harmony export */   "getVerticalOffsetObject3D": () => (/* binding */ S),
/* harmony export */   "getVerticalOffsetTerrain": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "./node_modules/@arcgis/core/chunks/mat3.js");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "./node_modules/@arcgis/core/chunks/mat3f64.js");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "./node_modules/@arcgis/core/chunks/mat4.js");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "./node_modules/@arcgis/core/chunks/mat4f64.js");
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/quat.js */ "./node_modules/@arcgis/core/chunks/quat.js");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/quatf64.js */ "./node_modules/@arcgis/core/chunks/quatf64.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec3f32.js */ "./node_modules/@arcgis/core/chunks/vec3f32.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/sphere.js */ "./node_modules/@arcgis/core/chunks/sphere.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class p{constructor(){this._transform=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),this._transformInverse=new u({value:this._transform},_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.a,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.c),this._transformInverseTranspose=new u(this._transformInverse,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.t,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.c),this._transformTranspose=new u({value:this._transform},_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.t,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.c),this._transformInverseRotation=new u({value:this._transform},_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.n,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.c)(this._transform,t)}multiplyTransform(t){(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.m)(this._transform,this._transform,t)}set(t){(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.c)(this._transform,t),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this._invalidateLazyTransforms()}}class u{constructor(t,s,e){this._original=t,this._update=s,this._dirty=!0,this._transform=e()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}class M{constructor(t=0){this.offset=t,this.tmpVertex=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.c)()}applyToVertex(t,s,e){const i=t+this.localOrigin[0],r=s+this.localOrigin[1],a=e+this.localOrigin[2],o=this.offset/Math.sqrt(i*i+r*r+a*a);return this.tmpVertex[0]=t+i*o,this.tmpVertex[1]=s+r*o,this.tmpVertex[2]=e+a*o,this.tmpVertex}applyToAabb(t){for(let r=0;r<3;++r)v[r]=t[0+r]+this.localOrigin[r],O[r]=t[3+r]+this.localOrigin[r],z[r]=v[r];const s=this.applyToVertex(v[0],v[1],v[2]);for(let r=0;r<3;++r)t[r]=s[r],t[r+3]=s[r];const e=s=>{const e=this.applyToVertex(s[0],s[1],s[2]);for(let i=0;i<3;++i)t[i]=Math.min(t[i],e[i]),t[i+3]=Math.max(t[i+3],e[i])};for(let r=1;r<8;++r){for(let t=0;t<3;++t)z[t]=0==(r&1<<t)?v[t]:O[t];e(z)}let i=0;for(let r=0;r<3;++r){v[r]*O[r]<0&&(i|=1<<r)}if(0!==i&&7!==i)for(let r=0;r<8;++r)if(0==(i&r)){for(let t=0;t<3;++t)z[t]=0!=(i&1<<t)?0:0!=(r&1<<t)?v[t]:O[t];e(z)}for(let r=0;r<3;++r)t[r]-=this.localOrigin[r],t[r+3]-=this.localOrigin[r];return t}}const v=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.c)(),O=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.c)(),z=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.c)();class T{constructor(t=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.c)(),this._mbs=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_9__.c)(),this._obb={center:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.c)(),halfSize:(0,_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_7__.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(t)}_resetOffset(t){this._offset=t,this._totalOffset=t}set offset(t){this._resetOffset(t)}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}applyToVertex(t,s,e){const i=t,r=s,a=e+this.componentLocalOriginLength,o=this._totalOffset/Math.sqrt(i*i+r*r+a*a);return this._tmpVertex[0]=t+i*o,this._tmpVertex[1]=s+r*o,this._tmpVertex[2]=e+a*o,this._tmpVertex}applyToAabb(t){const s=t[0],e=t[1],i=t[2]+this.componentLocalOriginLength,r=t[3],a=t[4],o=t[5]+this.componentLocalOriginLength,h=s*r<0?0:Math.min(Math.abs(s),Math.abs(r)),n=e*a<0?0:Math.min(Math.abs(e),Math.abs(a)),f=i*o<0?0:Math.min(Math.abs(i),Math.abs(o)),l=Math.sqrt(h*h+n*n+f*f);if(l<this._totalOffset)return t[0]-=s<0?this._totalOffset:0,t[1]-=e<0?this._totalOffset:0,t[2]-=i<0?this._totalOffset:0,t[3]+=r>0?this._totalOffset:0,t[4]+=a>0?this._totalOffset:0,t[5]+=o>0?this._totalOffset:0,t;const _=Math.max(Math.abs(s),Math.abs(r)),m=Math.max(Math.abs(e),Math.abs(a)),b=Math.max(Math.abs(i),Math.abs(o)),c=Math.sqrt(_*_+m*m+b*b),p=this._totalOffset/c,u=this._totalOffset/l;return t[0]+=s*(s>0?p:u),t[1]+=e*(e>0?p:u),t[2]+=i*(i>0?p:u),t[3]+=r*(r<0?p:u),t[4]+=a*(a<0?p:u),t[5]+=o*(o<0?p:u),t}applyToMbs(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),e=this._totalOffset/s;return this._mbs[0]=t[0]+t[0]*e,this._mbs[1]=t[1]+t[1]*e,this._mbs[2]=t[2]+t[2]*e,this._mbs[3]=t[3]+t[3]*this._totalOffset/s,this._mbs}applyToObb(t){const s=t.center,e=this._totalOffset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this._obb.center[0]=s[0]+s[0]*e,this._obb.center[1]=s[1]+s[1]*e,this._obb.center[2]=s[2]+s[2]*e,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__.q)(this._obb.halfSize,t.halfSize,t.quaternion),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__.a)(this._obb.halfSize,this._obb.halfSize,t.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__.b)(this._obb.halfSize,this._obb.halfSize,t.center),(0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_4__.c)(j,t.quaternion),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__.q)(this._obb.halfSize,this._obb.halfSize,j),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=t.quaternion,this._obb}}class g{constructor(t=0){this.offset=t,this.sphere=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_9__.c)(),this.tmpVertex=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.c)()}applyToVertex(t,s,e){const i=this.objectTransform.transform;let r=i[0]*t+i[4]*s+i[8]*e+i[12],a=i[1]*t+i[5]*s+i[9]*e+i[13],o=i[2]*t+i[6]*s+i[10]*e+i[14];const h=this.offset/Math.sqrt(r*r+a*a+o*o);r+=r*h,a+=a*h,o+=o*h;const n=this.objectTransform.inverse;return this.tmpVertex[0]=n[0]*r+n[4]*a+n[8]*o+n[12],this.tmpVertex[1]=n[1]*r+n[5]*a+n[9]*o+n[13],this.tmpVertex[2]=n[2]*r+n[6]*a+n[10]*o+n[14],this.tmpVertex}applyToMinMax(t,s){const e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;const i=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*i,s[1]+=s[1]*i,s[2]+=s[2]*i}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const e=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*e,t[4]+=t[4]*e,t[5]+=t[5]*e,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),e=this.offset/s;return this.sphere[0]=t[0]+t[0]*e,this.sphere[1]=t[1]+t[1]*e,this.sphere[2]=t[2]+t[2]*e,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const x=new g;function S(t){return null!=t?(x.offset=t,x):null}const q=new T;function y(t){return null!=t?(q.offset=t,q):null}const V=new M;function d(t){return null!=t?(V.offset=t,V):null}const L="terrain",j=(0,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_5__.a)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmbientLight": () => (/* binding */ i),
/* harmony export */   "FillLight": () => (/* binding */ c),
/* harmony export */   "MainLight": () => (/* binding */ n),
/* harmony export */   "SphericalHarmonicsAmbientLight": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class i{constructor(s=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)()){this.intensity=s}}class c{constructor(i=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),c=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.f)(.57735,.57735,.57735)){this.intensity=i,this.direction=c}}class n{constructor(i=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),c=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.f)(.57735,.57735,.57735),n=!0,r=1,h=1){this.intensity=i,this.direction=c,this.castShadows=n,this.specularStrength=r,this.environmentStrength=h}}class r{constructor(){this.r=[0],this.g=[0],this.b=[0]}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneLighting": () => (/* binding */ _),
/* harmony export */   "ambientBoost": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _Lightsources_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lightsources.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js");
/* harmony import */ var _SphericalHarmonics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SphericalHarmonics.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SphericalHarmonics.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class g{constructor(){this.color=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),this.intensity=1}}class m{constructor(){this.direction=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),this.ambient=new g,this.diffuse=new g}}const l=.4;class _{constructor(){this._shOrder=2,this._legacy=new m,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new _Lightsources_js__WEBPACK_IMPORTED_MODULE_3__.SphericalHarmonicsAmbientLight,this._mainLight=new _Lightsources_js__WEBPACK_IMPORTED_MODULE_3__.MainLight((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(i){(0,_SphericalHarmonics_js__WEBPACK_IMPORTED_MODULE_4__.combineLights)(i,this._shOrder,this._mainLight,this._sphericalHarmonics),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(this._legacy.diffuse.color,this._mainLight.intensity,r),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(L,this._legacy.diffuse.color),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(L,L,l*this.globalFactor),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.a)(this._legacy.ambient.color,this._legacy.ambient.color,L)}copyFrom(i){this._sphericalHarmonics.r=Array.from(i.sh.r),this._sphericalHarmonics.g=Array.from(i.sh.g),this._sphericalHarmonics.b=Array.from(i.sh.b),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(this._mainLight.direction,i.mainLight.direction),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(this._mainLight.intensity,i.mainLight.intensity),this._mainLight.castShadows=i.mainLight.castShadows,this._mainLight.specularStrength=i.mainLight.specularStrength,this._mainLight.environmentStrength=i.mainLight.environmentStrength,this.globalFactor=i.globalFactor,this.noonFactor=i.noonFactor}lerpLighting(s,h,n){if((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.h)(this._mainLight.intensity,s.mainLight.intensity,h.mainLight.intensity,n),this._mainLight.environmentStrength=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.mainLight.environmentStrength,h.mainLight.environmentStrength,n),this._mainLight.specularStrength=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.mainLight.specularStrength,h.mainLight.specularStrength,n),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(this._mainLight.direction,h.mainLight.direction),this._mainLight.castShadows=h.mainLight.castShadows,this.globalFactor=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.globalFactor,h.globalFactor,n),this.noonFactor=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.noonFactor,h.noonFactor,n),s.sh.r.length===h.sh.r.length)for(let t=0;t<h.sh.r.length;t++)this._sphericalHarmonics.r[t]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.sh.r[t],h.sh.r[t],n),this._sphericalHarmonics.g[t]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.sh.g[t],h.sh.g[t],n),this._sphericalHarmonics.b[t]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.sh.b[t],h.sh.b[t],n);else for(let i=0;i<h.sh.r.length;i++)this._sphericalHarmonics.r[i]=h.sh.r[i],this._sphericalHarmonics.g[i]=h.sh.g[i],this._sphericalHarmonics.b[i]=h.sh.b[i]}}const L=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SphericalHarmonics.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SphericalHarmonics.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combineLights": () => (/* binding */ M),
/* harmony export */   "computeCoefficients": () => (/* binding */ m),
/* harmony export */   "initSHCoefficients": () => (/* binding */ p),
/* harmony export */   "numberOfCoefficients": () => (/* binding */ u),
/* harmony export */   "orderFromNumberOfCoefficients": () => (/* binding */ l),
/* harmony export */   "projectAmbientLights": () => (/* binding */ b),
/* harmony export */   "projectFillLights": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/LongVectorMath.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/LongVectorMath.js");
/* harmony import */ var _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lightsources.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function u(t){return(t+1)*(t+1)}function l(n){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.floor(Math.sqrt(n)-1),0,2)}function m(t,n,o){const r=t[0],e=t[1],s=t[2],i=o||[];return i.length=u(n),n>=0&&(i[0]=.28209479177),n>=1&&(i[1]=.4886025119*r,i[2]=.4886025119*s,i[3]=.4886025119*e),n>=2&&(i[4]=1.09254843059*r*e,i[5]=1.09254843059*e*s,i[6]=.31539156525*(3*s*s-1),i[7]=1.09254843059*r*s,i[8]=.54627421529*(r*r-e*e)),i}function p(t,n){const o=u(t),r=n||{r:[],g:[],b:[]};r.r.length=r.g.length=r.b.length=o;for(let e=0;e<o;e++)r.r[e]=r.g[e]=r.b[e]=0;return r}function y(t,o){const r=l(o.r.length);for(const e of t)(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.o)(P,e.direction),m(P,r,v),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.elementwiseProduct)(v,k),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.scalarProduct)(v,e.intensity[0],I),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.add)(o.r,I),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.scalarProduct)(v,e.intensity[1],I),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.add)(o.g,I),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.scalarProduct)(v,e.intensity[2],I),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.add)(o.b,I);return o}function b(t,n){m(P,0,v);for(const o of t)n.r[0]+=v[0]*k[0]*o.intensity[0]*4*Math.PI,n.g[0]+=v[0]*k[0]*o.intensity[1]*4*Math.PI,n.b[0]+=v[0]*k[0]*o.intensity[2]*4*Math.PI;return n}function M(t,n,e,s){p(n,s),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.s)(e.intensity,0,0,0);let i=!1;const u=S,l=d,m=j;u.length=0,l.length=0,m.length=0;for(const o of t)o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__.MainLight&&!i?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(e.direction,o.direction),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(e.intensity,o.intensity),e.specularStrength=o.specularStrength,e.environmentStrength=o.environmentStrength,e.castShadows=o.castShadows,i=!0):o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__.MainLight||o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__.FillLight?u.push(o):o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__.AmbientLight?l.push(o):o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__.SphericalHarmonicsAmbientLight&&m.push(o);y(u,s),b(l,s);for(const o of m)(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.add)(s.r,o.r),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.add)(s.g,o.g),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.add)(s.b,o.b)}const S=[],d=[],j=[],v=[0],I=[0],P=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),k=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultBufferWriter": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/bufferWriterUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r{constructor(t){this.vertexBufferLayout=t}elementCount(e){return e.indices.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.POSITION).length}write(t,r,i,o,s){(0,_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_1__.writeDefaultAttributes)(i,this.vertexBufferLayout,t,r,o,s)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultGLMaterial": () => (/* binding */ P),
/* harmony export */   "DefaultMaterial": () => (/* binding */ I),
/* harmony export */   "DefaultMaterialParameters": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ViewingMode.js */ "./node_modules/@arcgis/core/views/ViewingMode.js");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../support/buffer/InterleavedLayout.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js");
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderLibrary/shading/Normals.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _lib_GLTextureMaterial_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/GLTextureMaterial.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/Material.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js");
/* harmony import */ var _lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/RenderSlot.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _lib_verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/verticalOffsetUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js");
/* harmony import */ var _DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DefaultBufferWriter.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js");
/* harmony import */ var _internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./internal/MaterialUtil.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js");
/* harmony import */ var _shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shaders/DefaultMaterialTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js");
/* harmony import */ var _shaders_DefaultMaterialTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shaders/DefaultMaterialTechniqueConfiguration.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechniqueConfiguration.js");
/* harmony import */ var _shaders_RealisticTreeTechnique_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shaders/RealisticTreeTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class I extends _lib_Material_js__WEBPACK_IMPORTED_MODULE_11__.Material{constructor(e){super(e,L),this.supportsEdges=!0,this._configuration=new _shaders_DefaultMaterialTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_19__.DefaultMaterialTechniqueConfiguration,this._vertexBufferLayout=j(this.parameters)}isVisibleForOutput(e){return e!==_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Shadow&&e!==_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.ShadowExcludeHighlight&&e!==_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:s,vvColor:a}=e,i="replace"===e.colorMixMode,o=e.opacity>0,n=e.externalColor&&e.externalColor[3]>0,h=t||a||s;return r&&h?i||o:r?i?n:o:h?i||o:i?n:o}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.CullFaceOptions.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Color&&e!==_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalsDoubleSidedMode.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalsDoubleSidedMode.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalsDoubleSidedMode.WindingOrder:_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalsDoubleSidedMode.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_8__.PBRMode.Schematic:_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_8__.PBRMode.Normal:_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_8__.PBRMode.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_12__.OITPolygonOffsetLimit,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(h,l,u,m,p,d){if(null!=this.parameters.verticalOffset){const h=u.camera;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.s)(z,l[12],l[13],l[14]);let d=null;switch(u.viewingMode){case _ViewingMode_js__WEBPACK_IMPORTED_MODULE_3__.ViewingMode.Global:d=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.n)(B,z);break;case _ViewingMode_js__WEBPACK_IMPORTED_MODULE_3__.ViewingMode.Local:d=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(B,V)}let f=0;const g=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.b)(G,z,h.eye),T=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.l)(g),_=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(g,g,1/T);let x=null;this.parameters.screenSizePerspective&&(x=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.e)(d,_)),f+=(0,_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_17__.verticalOffsetAtDistance)(h,T,this.parameters.verticalOffset,x??0,this.parameters.screenSizePerspective),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(d,d,f),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.t)(H,d,u.transform.inverseRotation),m=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.b)(D,m,H),p=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.b)(N,p,H)}(0,_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_17__.intersectTriangleGeometry)(h,u,m,p,(0,_lib_verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_15__.getVerticalOffsetObject3D)(u.verticalOffset),d)}requiresSlot(e,t){if(t===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Color||t===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Alpha||t===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Depth||t===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Normal||t===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Shadow||t===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.ShadowHighlight||t===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.ShadowExcludeHighlight||t===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Highlight||t===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.ObjectAndLayerIdColor){return e===(this.parameters.transparent?this.parameters.writeDepth?_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_13__.RenderSlot.TRANSPARENT_MATERIAL:_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_13__.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_13__.RenderSlot.OPAQUE_MATERIAL)||e===_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_13__.RenderSlot.DRAPED_MATERIAL}return!1}createGLMaterial(e){return new P(e)}createBufferWriter(){return new _DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_16__.DefaultBufferWriter(this._vertexBufferLayout)}}class P extends _lib_GLTextureMaterial_js__WEBPACK_IMPORTED_MODULE_10__.GLTextureMaterial{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(t){this._output!==_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Color&&this._output!==_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Alpha||(this._updateShadowState(t),this._updateOccludeeState(t));const r=this._material.parameters;this.updateTexture(r.textureId);const s=t.camera.viewInverseTransposeMatrix;return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.s)(r.origin,s[3],s[7],s[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?_shaders_RealisticTreeTechnique_js__WEBPACK_IMPORTED_MODULE_20__.RealisticTreeTechnique:_shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_18__.DefaultMaterialTechnique,t)}}class E extends _shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_18__.DefaultMaterialPassParameters{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const L=new E;function j(e){const t=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_4__.newLayout)().vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__.VertexAttribute.POSITION);e.normalType===_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__.NormalType.Compressed?t.vec2i16(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__.VertexAttribute.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__.VertexAttribute.NORMAL),e.hasVertexTangents&&t.vec4f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__.VertexAttribute.TANGENT);return(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__.VertexAttribute.UV0),e.hasVertexColors&&t.vec4u8(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__.VertexAttribute.COLOR),e.hasSymbolColors&&t.vec4u8(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__.VertexAttribute.SYMBOLCOLOR),(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__.VertexAttribute.OBJECTANDLAYERIDCOLOR),t}const D=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),N=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),V=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(0,0,1),B=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),H=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),z=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),G=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultTechniqueConfiguration": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s extends _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_2__.ShaderTechniqueConfiguration{}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_2__.parameter)({constValue:!0})],s.prototype,"hasSliceHighlight",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_2__.parameter)({constValue:!1})],s.prototype,"hasSliceInVertexProgram",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_2__.parameter)({constValue:!1})],s.prototype,"instancedDoublePrecision",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_2__.parameter)({constValue:!1})],s.prototype,"hasModelTransformation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_2__.parameter)({constValue:_core_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass})],s.prototype,"pbrTextureBindType",void 0);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualVariablePassParameters": () => (/* binding */ t),
/* harmony export */   "vvColorNumber": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _layers_support_FastSymbolUpdates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layers/support/FastSymbolUpdates.js */ "./node_modules/@arcgis/core/views/3d/layers/support/FastSymbolUpdates.js");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Material.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t extends _layers_support_FastSymbolUpdates_js__WEBPACK_IMPORTED_MODULE_0__.VisualVariablesParameters{constructor(){super(...arguments),this.renderOccluded=_lib_Material_js__WEBPACK_IMPORTED_MODULE_1__.RenderOccludedFlag.Occlude}}const e=8;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorMixModes": () => (/* binding */ P),
/* harmony export */   "computeInvDir": () => (/* binding */ T),
/* harmony export */   "computeNormal": () => (/* binding */ v),
/* harmony export */   "copyParameters": () => (/* binding */ L),
/* harmony export */   "intersectAabbInvDir": () => (/* binding */ I),
/* harmony export */   "intersectAabbInvDirBefore": () => (/* binding */ O),
/* harmony export */   "intersectTriangleGeometry": () => (/* binding */ h),
/* harmony export */   "intersectTriangles": () => (/* binding */ g),
/* harmony export */   "updateParameters": () => (/* binding */ N),
/* harmony export */   "verticalOffsetAtDistance": () => (/* binding */ V)
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingBox.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js");
/* harmony import */ var _lib_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/ContentObjectType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js");
/* harmony import */ var _lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/screenSizePerspectiveUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const p=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__.create)();function h(t,n,e,o,i,r){if(t.visible)if(t.boundingInfo){(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_7__.assert)(t.type===_lib_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_5__.ContentObjectType.Mesh);const s=n.tolerance;x(t.boundingInfo,e,o,s,i,r)}else{const n=t.indices.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__.VertexAttribute.POSITION),s=t.vertexAttributes.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__.VertexAttribute.POSITION);g(e,o,0,n.length/3,n,s,void 0,i,r)}}const b=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)();function x(t,n,e,o,i,r){if(null==t)return;const s=T(n,e,b);if((0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__.setMin)(p,t.bbMin),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__.setMax)(p,t.bbMax),null!=i&&i.applyToAabb(p),I(p,n,s,o)){const{primitiveIndices:s,indices:c,position:l}=t,f=s?s.length:c.length/3;if(f>S){const s=t.getChildren();if(void 0!==s){for(const t of s)x(t,n,e,o,i,r);return}}g(n,e,0,f,c,l,s,i,r)}}const d=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)();function g(t,n,e,o,i,r,s,c,l){if(s)return M(t,n,e,o,i,r,s,c,l);const{data:f,stride:u}=r,a=t[0],m=t[1],p=t[2],h=n[0]-a,b=n[1]-m,x=n[2]-p;for(let g=e,M=3*e;g<o;++g){let t=u*i[M++],n=f[t++],e=f[t++],o=f[t];t=u*i[M++];let r=f[t++],s=f[t++],y=f[t];t=u*i[M++];let j=f[t++],T=f[t++],I=f[t];null!=c&&([n,e,o]=c.applyToVertex(n,e,o,g),[r,s,y]=c.applyToVertex(r,s,y,g),[j,T,I]=c.applyToVertex(j,T,I,g));const O=r-n,V=s-e,L=y-o,N=j-n,A=T-e,P=I-o,S=b*P-A*x,E=x*N-P*h,U=h*A-N*b,W=O*S+V*E+L*U;if(Math.abs(W)<=Number.EPSILON)continue;const k=a-n,B=m-e,C=p-o,z=k*S+B*E+C*U;if(W>0){if(z<0||z>W)continue}else if(z>0||z<W)continue;const H=B*L-V*C,R=C*O-L*k,Y=k*V-O*B,q=h*H+b*R+x*Y;if(W>0){if(q<0||z+q>W)continue}else if(q>0||z+q<W)continue;const w=(N*H+A*R+P*Y)/W;if(w>=0){l(w,v(O,V,L,N,A,P,d),g,!1)}}}function M(t,n,e,o,i,r,s,c,l){const{data:f,stride:u}=r,a=t[0],m=t[1],p=t[2],h=n[0]-a,b=n[1]-m,x=n[2]-p;for(let g=e;g<o;++g){const t=s[g];let n=3*t,e=u*i[n++],o=f[e++],r=f[e++],M=f[e];e=u*i[n++];let y=f[e++],j=f[e++],T=f[e];e=u*i[n];let I=f[e++],O=f[e++],V=f[e];null!=c&&([o,r,M]=c.applyToVertex(o,r,M,g),[y,j,T]=c.applyToVertex(y,j,T,g),[I,O,V]=c.applyToVertex(I,O,V,g));const L=y-o,N=j-r,A=T-M,P=I-o,S=O-r,E=V-M,U=b*E-S*x,W=x*P-E*h,k=h*S-P*b,B=L*U+N*W+A*k;if(Math.abs(B)<=Number.EPSILON)continue;const C=a-o,z=m-r,H=p-M,R=C*U+z*W+H*k;if(B>0){if(R<0||R>B)continue}else if(R>0||R<B)continue;const Y=z*A-N*H,q=H*L-A*C,w=C*N-L*z,D=h*Y+b*q+x*w;if(B>0){if(D<0||R+D>B)continue}else if(D>0||R+D<B)continue;const F=(P*Y+S*q+E*w)/B;if(F>=0){l(F,v(L,N,A,P,S,E,d),t,!1)}}}const y=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),j=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)();function v(t,n,r,s,c,l,f){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.s)(y,t,n,r),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.s)(j,s,c,l),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(f,y,j),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.n)(f,f),f}function T(t,n,o){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.s)(o,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function I(t,n,e,o){return O(t,n,e,o,1/0)}function O(t,n,e,o,i){const r=(t[0]-o-n[0])*e[0],s=(t[3]+o-n[0])*e[0];let c=Math.min(r,s),l=Math.max(r,s);const f=(t[1]-o-n[1])*e[1],u=(t[4]+o-n[1])*e[1];if(l=Math.min(l,Math.max(f,u)),l<0)return!1;if(c=Math.max(c,Math.min(f,u)),c>l)return!1;const a=(t[2]-o-n[2])*e[2],m=(t[5]+o-n[2])*e[2];return l=Math.min(l,Math.max(a,m)),!(l<0)&&(c=Math.max(c,Math.min(a,m)),!(c>l)&&c<i)}function V(t,e,o,i,r){let s=(o.screenLength||0)*t.pixelRatio;null!=r&&(s=(0,_lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.scale)(s,i,e,r));const c=s*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(c*e,o.minWorldLength||0,null!=o.maxWorldLength?o.maxWorldLength:1/0)}function L(t,n){const e=n?L(n):{};for(const o in t){let n=t[o];n&&n.forEach&&(n=A(n)),null==n&&o in e||(e[o]=n)}return e}function N(n,e){let o=!1;for(const i in e){const r=e[i];void 0!==r&&(Array.isArray(r)?null===n[i]?(n[i]=r.slice(),o=!0):(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.update)(n[i],r)&&(o=!0):n[i]!==r&&(o=!0,n[i]=r))}return o}function A(t){const n=[];return t.forEach((t=>n.push(t))),n}const P={multiply:1,ignore:2,replace:3,tint:4},S=1e3;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "writeBufferFloat": () => (/* binding */ d),
/* harmony export */   "writeBufferMat3f": () => (/* binding */ B),
/* harmony export */   "writeBufferMat4f": () => (/* binding */ g),
/* harmony export */   "writeBufferVec2": () => (/* binding */ u),
/* harmony export */   "writeBufferVec3": () => (/* binding */ a),
/* harmony export */   "writeBufferVec4": () => (/* binding */ p),
/* harmony export */   "writeBufferVec4Zeros": () => (/* binding */ y),
/* harmony export */   "writeColor": () => (/* binding */ N),
/* harmony export */   "writeColorFeatureAttribute": () => (/* binding */ S),
/* harmony export */   "writeDefaultAttribute": () => (/* binding */ E),
/* harmony export */   "writeDefaultAttributes": () => (/* binding */ A),
/* harmony export */   "writeNormal": () => (/* binding */ O),
/* harmony export */   "writeObjectAndLayerIdColor": () => (/* binding */ R),
/* harmony export */   "writePosition": () => (/* binding */ b),
/* harmony export */   "writeTangent": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/mat4.js */ "./node_modules/@arcgis/core/chunks/mat4.js");
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../geometry/support/buffer/BufferView.js */ "./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function d(e,t,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=e.length;if(o*=n,1===r)for(let c=0;c<i;++c)s[o]=t[e[c]],o+=n;else for(let c=0;c<i;++c){const f=t[e[c]];for(let e=0;e<r;e++)s[o]=f,o+=n}}function u(e,t,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=e.length;o*=s;for(let i=0;i<n;++i){const f=2*e[i];r[o]=t[f],r[o+1]=t[f+1],o+=s}}function a(e,t,f,o,r){const s=f.typedBuffer,n=f.typedBufferStride,i=e.length;if(o*=n,null==r||1===r)for(let c=0;c<i;++c){const f=3*e[c];s[o]=t[f],s[o+1]=t[f+1],s[o+2]=t[f+2],o+=n}else for(let c=0;c<i;++c){const f=3*e[c];for(let e=0;e<r;++e)s[o]=t[f],s[o+1]=t[f+1],s[o+2]=t[f+2],o+=n}}function p(e,t,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=e.length;if(o*=n,1===r)for(let c=0;c<i;++c){const f=4*e[c];s[o]=t[f],s[o+1]=t[f+1],s[o+2]=t[f+2],s[o+3]=t[f+3],o+=n}else for(let c=0;c<i;++c){const f=4*e[c];for(let e=0;e<r;++e)s[o]=t[f],s[o+1]=t[f+1],s[o+2]=t[f+2],s[o+3]=t[f+3],o+=n}}function y(e,t,f){const o=e.typedBuffer,r=e.typedBufferStride;t*=r;for(let s=0;s<f;++s)o[t]=0,o[t+1]=0,o[t+2]=0,o[t+3]=0,t+=r}function B(e,t,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=e.length;o*=s;for(let i=0;i<n;++i){const f=9*e[i];for(let e=0;e<9;++e)r[o+e]=t[f+e];o+=s}}function g(e,t,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=e.length;o*=s;for(let i=0;i<n;++i){const f=16*e[i];for(let e=0;e<16;++e)r[o+e]=t[f+e];o+=s}}function b(t,f,o,r,s,n=1){if(!o)return void a(t,f,r,s,n);const i=r.typedBuffer,c=r.typedBufferStride,l=t.length,d=o[0],u=o[1],p=o[2],y=o[4],B=o[5],g=o[6],b=o[8],O=o[9],h=o[10],N=o[12],S=o[13],R=o[14];s*=c;let A=0,E=0,L=0;const z=(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__.y)(o)?e=>{A=f[e]+N,E=f[e+1]+S,L=f[e+2]+R}:e=>{const t=f[e],o=f[e+1],r=f[e+2];A=d*t+y*o+b*r+N,E=u*t+B*o+O*r+S,L=p*t+g*o+h*r+R};if(1===n)for(let e=0;e<l;++e)z(3*t[e]),i[s]=A,i[s+1]=E,i[s+2]=L,s+=c;else for(let e=0;e<l;++e){z(3*t[e]);for(let e=0;e<n;++e)i[s]=A,i[s+1]=E,i[s+2]=L,s+=c}}function O(f,o,r,s,n,i=1){if(!r)return void a(f,o,s,n,i);const c=r,l=s.typedBuffer,d=s.typedBufferStride,u=f.length,p=c[0],y=c[1],B=c[2],g=c[4],b=c[5],O=c[6],h=c[8],N=c[9],S=c[10],R=!(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__.z)(c),A=1e-6,E=1-A;n*=d;let L=0,z=0,F=0;const v=(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__.y)(c)?e=>{L=o[e],z=o[e+1],F=o[e+2]}:e=>{const t=o[e],f=o[e+1],r=o[e+2];L=p*t+g*f+h*r,z=y*t+b*f+N*r,F=B*t+O*f+S*r};if(1===i)if(R)for(let e=0;e<u;++e){v(3*f[e]);const t=L*L+z*z+F*F;if(t<E&&t>A){const e=1/Math.sqrt(t);l[n]=L*e,l[n+1]=z*e,l[n+2]=F*e}else l[n]=L,l[n+1]=z,l[n+2]=F;n+=d}else for(let e=0;e<u;++e)v(3*f[e]),l[n]=L,l[n+1]=z,l[n+2]=F,n+=d;else for(let e=0;e<u;++e){if(v(3*f[e]),R){const e=L*L+z*z+F*F;if(e<E&&e>A){const t=1/Math.sqrt(e);L*=t,z*=t,F*=t}}for(let e=0;e<i;++e)l[n]=L,l[n+1]=z,l[n+2]=F,n+=d}}function h(e,f,o,r,s,n=1){if(!o)return void p(e,f,r,s,n);const i=o,c=r.typedBuffer,l=r.typedBufferStride,d=e.length,u=i[0],a=i[1],y=i[2],B=i[4],g=i[5],b=i[6],O=i[8],h=i[9],N=i[10],S=!(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__.z)(i),R=1e-6,A=1-R;if(s*=l,1===n)for(let t=0;t<d;++t){const o=4*e[t],r=f[o],n=f[o+1],i=f[o+2],d=f[o+3];let p=u*r+B*n+O*i,E=a*r+g*n+h*i,L=y*r+b*n+N*i;if(S){const e=p*p+E*E+L*L;if(e<A&&e>R){const t=1/Math.sqrt(e);p*=t,E*=t,L*=t}}c[s]=p,c[s+1]=E,c[s+2]=L,c[s+3]=d,s+=l}else for(let t=0;t<d;++t){const o=4*e[t],r=f[o],i=f[o+1],d=f[o+2],p=f[o+3];let E=u*r+B*i+O*d,L=a*r+g*i+h*d,z=y*r+b*i+N*d;if(S){const e=E*E+L*L+z*z;if(e<A&&e>R){const t=1/Math.sqrt(e);E*=t,L*=t,z*=t}}for(let e=0;e<n;++e)c[s]=E,c[s+1]=L,c[s+2]=z,c[s+3]=p,s+=l}}function N(e,t,f,o,r,s=1){const n=o.typedBuffer,i=o.typedBufferStride,c=e.length;if(r*=i,f!==t.length||4!==f)if(1!==s)if(4!==f)for(let l=0;l<c;++l){const f=3*e[l];for(let e=0;e<s;++e)n[r]=t[f],n[r+1]=t[f+1],n[r+2]=t[f+2],n[r+3]=255,r+=i}else for(let l=0;l<c;++l){const f=4*e[l];for(let e=0;e<s;++e)n[r]=t[f],n[r+1]=t[f+1],n[r+2]=t[f+2],n[r+3]=t[f+3],r+=i}else{if(4===f){for(let f=0;f<c;++f){const o=4*e[f];n[r]=t[o],n[r+1]=t[o+1],n[r+2]=t[o+2],n[r+3]=t[o+3],r+=i}return}for(let f=0;f<c;++f){const o=3*e[f];n[r]=t[o],n[r+1]=t[o+1],n[r+2]=t[o+2],n[r+3]=255,r+=i}}else{n[r]=t[0],n[r+1]=t[1],n[r+2]=t[2],n[r+3]=t[3];const e=new Uint32Array(o.typedBuffer.buffer,o.start),f=i/4,l=e[r/=4];r+=f;const d=c*s;for(let t=1;t<d;++t)e[r]=l,r+=f}}function S(e,t,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=e.length,i=t[0];o*=s;for(let c=0;c<n;++c)r[o]=i,o+=s}function R(e,t,f,o,r=1){const s=t.typedBuffer,n=t.typedBufferStride;if(o*=n,1===r)for(let i=0;i<f;++i)s[o]=e[0],s[o+1]=e[1],s[o+2]=e[2],s[o+3]=e[3],o+=n;else for(let i=0;i<f;++i)for(let t=0;t<r;++t)s[o]=e[0],s[o+1]=e[1],s[o+2]=e[2],s[o+3]=e[3],o+=n}function A(e,t,o,r,s,n){for(const i of t.fields.keys()){const t=e.vertexAttributes.get(i),d=e.indices.get(i);if(t&&d)E(i,t,d,o,r,s,n);else if(i===_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.indices.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.POSITION);if((0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!t,`No buffer view for ${i}`),t){const o=t.length,r=s.getField(i,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec4u8);R(e.objectAndLayerIdColor,r,o,n)}}}}function E(e,t,d,a,y,B,g){switch(e){case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.POSITION:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(3===t.size);const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec3f);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),f&&b(d,t.data,a,f,g);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.NORMAL:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(3===t.size);const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec3f);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),f&&O(d,t.data,y,f,g);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.NORMALCOMPRESSED:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(2===t.size);const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec2i16);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),f&&u(d,t.data,f,g);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.UV0:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(2===t.size);const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec2f);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),f&&u(d,t.data,f,g);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.COLOR:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.SYMBOLCOLOR:{const o=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec4u8);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!o,`No buffer view for ${e}`),(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(3===t.size||4===t.size),!o||3!==t.size&&4!==t.size||N(d,t.data,t.size,o,g);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.COLORFEATUREATTRIBUTE:{const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewFloat);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(1===t.size),f&&1===t.size&&S(d,t.data,f,g);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.TANGENT:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(4===t.size);const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec4f);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),f&&h(d,t.data,y,f,g);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.PROFILERIGHT:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.PROFILEUP:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.PROFILEVERTEXANDNORMAL:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.FEATUREVALUE:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(4===t.size);const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec4f);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),f&&p(d,t.data,f,g)}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultAdvancedMRRFactors": () => (/* binding */ n),
/* harmony export */   "defaultEsriSymbologyMRRFactors": () => (/* binding */ s),
/* harmony export */   "defaultSchematicMRRFactors": () => (/* binding */ r),
/* harmony export */   "useSchematicPBR": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function u({normalTexture:u,metallicRoughnessTexture:n,metallicFactor:r,roughnessFactor:s,emissiveTexture:o,emissiveFactor:t,occlusionTexture:c}){return null==u&&null==n&&null==o&&(null==t||(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.k)(t,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.Z))&&null==c&&(null==s||1===s)&&(null==r||1===r||0===r)}const n=[1,1,.5],r=[0,.6,.2],s=[0,1,.2];


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addObject3DStateID": () => (/* binding */ n),
/* harmony export */   "encodeDoubleVec3": () => (/* binding */ s),
/* harmony export */   "removeObject3DStateID": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/doublePrecisionUtils.js */ "./node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(t,e){return null==t&&(t=[]),t.push(e),t}function r(t,e){if(null==t)return null;const n=t.filter((t=>t!==e));return 0===n.length?null:n}function s(t,n,r,s,u){l[0]=t.get(n,0),l[1]=t.get(n,1),l[2]=t.get(n,2),(0,_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_1__.encodeDoubleArray)(l,o,3),r.set(u,0,o[0]),s.set(u,0,o[1]),r.set(u,1,o[2]),s.set(u,1,o[3]),r.set(u,2,o[4]),s.set(u,2,o[5])}const l=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),o=new Float32Array(6);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultMaterialDrawParameters": () => (/* binding */ N),
/* harmony export */   "DefaultMaterialPassParameters": () => (/* binding */ k),
/* harmony export */   "DefaultMaterialTechnique": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "./node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "./node_modules/@arcgis/core/chunks/vec4f64.js");
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ViewingMode.js */ "./node_modules/@arcgis/core/views/ViewingMode.js");
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/VertexNormal.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderLibrary/util/AlphaCutoff.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/DefaultVertexAttributeLocations.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/Material.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js");
/* harmony import */ var _lib_Program_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/Program.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js");
/* harmony import */ var _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/StencilUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js");
/* harmony import */ var _lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/TransparencyPassType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/TransparencyPassType.js");
/* harmony import */ var _materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../materials/pbrUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js");
/* harmony import */ var _chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../chunks/DefaultMaterial.glsl.js */ "./node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "./node_modules/@arcgis/core/views/webgl/renderState.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class k extends _core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_6__.VertexNormalPassParameters{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.g)(_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_17__.defaultAdvancedMRRFactors),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.CullFaceOptions.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__.NormalType.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.f)(.2,.2,.2),this.diffuse=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.f)(.8,.8,.8),this.externalColor=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.DepthTestFunction.Less,this.textureAlphaMode=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.AlphaDiscardMode.Blend,this.textureAlphaCutoff=_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_7__.defaultMaskAlphaCutoff,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=_lib_Material_js__WEBPACK_IMPORTED_MODULE_12__.RenderOccludedFlag.Occlude}}class N extends _core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_6__.VertexNormalDrawParameters{constructor(){super(...arguments),this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),this.slicePlaneLocalOrigin=this.origin}}class q extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_9__.ShaderTechnique{initializeConfiguration(e,t){t.spherical=e.viewingMode===_ViewingMode_js__WEBPACK_IMPORTED_MODULE_2__.ViewingMode.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__.TextureCoordinateAttributeType.Default:_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__.TextureCoordinateAttributeType.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,q.shader)}_initializeProgram(e,t){return new _lib_Program_js__WEBPACK_IMPORTED_MODULE_14__.Program(e.rctx,t.get().build(this.configuration),_lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_11__.Default3D)}_convertDepthTestFunction(e){return e===_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.DepthTestFunction.Lequal?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_19__.CompareFunction.LEQUAL:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_19__.CompareFunction.LESS}_makePipeline(e,t){const i=this.configuration,r=e===_lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_16__.TransparencyPassType.NONE,s=e===_lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_16__.TransparencyPassType.FrontFace;return (0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_20__.makePipelineState)({blending:i.output!==_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_3__.ShaderOutput.Color&&i.output!==_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_3__.ShaderOutput.Alpha||!i.transparent?null:r?_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_13__.blendingDefault:(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_13__.oitBlending)(e),culling:z(i)?(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_20__.cullingParams)(i.cullFace):null,depthTest:{func:(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_13__.oitDepthTest)(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:(r||s)&&i.writeDepth?_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_20__.defaultDepthWriteParams:null,colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_20__.defaultColorWriteParams,stencilWrite:i.hasOccludees?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_15__.stencilWriteMaskOn:null,stencilTest:i.hasOccludees?t?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_15__.stencilToolMaskBaseParams:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_15__.stencilBaseAllZerosParams:null,polygonOffset:r||s?null:(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_13__.getOITPolygonOffset)(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function z(e){return e.cullFace!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.CullFaceOptions.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}q.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_8__.ReloadableShaderModule(_chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_18__.D,(()=>__webpack_require__.e(/*! import() */ "node_modules_arcgis_core_views_3d_webgl-engine_shaders_DefaultMaterial_glsl_js").then(__webpack_require__.bind(__webpack_require__, /*! ./DefaultMaterial.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterial.glsl.js"))));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechniqueConfiguration.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechniqueConfiguration.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultMaterialTechniqueConfiguration": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/shading/Normals.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/TransparencyPassType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/TransparencyPassType.js");
/* harmony import */ var _materials_DefaultTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../materials/DefaultTechniqueConfiguration.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class c extends _materials_DefaultTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__.DefaultTechniqueConfiguration{constructor(){super(...arguments),this.output=_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.Color,this.alphaDiscardMode=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.AlphaDiscardMode.Opaque,this.doubleSidedMode=_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_4__.NormalsDoubleSidedMode.None,this.pbrMode=_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Disabled,this.cullFace=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.CullFaceOptions.None,this.transparencyPassType=_lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_8__.TransparencyPassType.NONE,this.normalType=_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_2__.NormalType.Attribute,this.textureCoordinateType=_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.TextureCoordinateAttributeType.None,this.customDepthTest=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.DepthTestFunction.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.COUNT})],c.prototype,"output",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.AlphaDiscardMode.COUNT})],c.prototype,"alphaDiscardMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_4__.NormalsDoubleSidedMode.COUNT})],c.prototype,"doubleSidedMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.COUNT})],c.prototype,"pbrMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.CullFaceOptions.COUNT})],c.prototype,"cullFace",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_8__.TransparencyPassType.COUNT})],c.prototype,"transparencyPassType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_2__.NormalType.COUNT})],c.prototype,"normalType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.TextureCoordinateAttributeType.COUNT})],c.prototype,"textureCoordinateType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.DepthTestFunction.COUNT})],c.prototype,"customDepthTest",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"spherical",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasVertexColors",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasSymbolColors",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasVerticalOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasSlicePlane",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasSliceHighlight",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasColorTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasMetallicRoughnessTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasEmissionTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasOcclusionTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasNormalTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasScreenSizePerspective",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasVertexTangents",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasOccludees",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasMultipassTerrain",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasModelTransformation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"offsetBackfaces",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"vvSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"vvColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"receiveShadows",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"receiveAmbientOcclusion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"textureAlphaPremultiplied",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"instanced",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"instancedColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"objectAndLayerIdColorInstanced",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"instancedDoublePrecision",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"writeDepth",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"transparent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"enableOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"cullAboveGround",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"snowCover",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasColorTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasEmissionTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasNormalTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasOcclusionTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({constValue:!0})],c.prototype,"hasVvInstancing",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({constValue:!1})],c.prototype,"useCustomDTRExponentForWater",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({constValue:!1})],c.prototype,"supportsTextureAtlas",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({constValue:!0})],c.prototype,"useFillLights",void 0);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealisticTreeTechnique": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderLibrary/shading/Normals.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js");
/* harmony import */ var _DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultMaterialTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js");
/* harmony import */ var _chunks_RealisticTree_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/RealisticTree.glsl.js */ "./node_modules/@arcgis/core/chunks/RealisticTree.glsl.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t extends _DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_3__.DefaultMaterialTechnique{initializeConfiguration(i,a){super.initializeConfiguration(i,a),a.hasMetallicRoughnessTexture=!1,a.hasEmissionTexture=!1,a.hasOcclusionTexture=!1,a.hasNormalTexture=!1,a.hasModelTransformation=!1,a.normalType=_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__.NormalType.Attribute,a.doubleSidedMode=_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_1__.NormalsDoubleSidedMode.WindingOrder,a.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,t.shader)}}t.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_2__.ReloadableShaderModule(_chunks_RealisticTree_glsl_js__WEBPACK_IMPORTED_MODULE_4__.R,(()=>__webpack_require__.e(/*! import() */ "node_modules_arcgis_core_views_3d_webgl-engine_shaders_RealisticTree_glsl_js").then(__webpack_require__.bind(__webpack_require__, /*! ./RealisticTree.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTree.glsl.js"))));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/SSAOParameters.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/SSAOParameters.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlurDrawParameters": () => (/* binding */ o),
/* harmony export */   "BlurPassParameters": () => (/* binding */ r),
/* harmony export */   "SSAODrawParameters": () => (/* binding */ c),
/* harmony export */   "SSAOPassParameters": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "./node_modules/@arcgis/core/chunks/vec2f64.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r extends _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.NoParameters{constructor(){super(...arguments),this.projScale=1}}class t extends r{constructor(){super(...arguments),this.intensity=1}}class c extends _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.NoParameters{}class o extends c{constructor(){super(...arguments),this.blurSize=(0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__.a)()}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/ViewingMode.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/ViewingMode.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewingMode": () => (/* binding */ l),
/* harmony export */   "stringFromViewingMode": () => (/* binding */ a),
/* harmony export */   "viewingModeFromString": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var l;function o(o){return"global"===o?l.Global:l.Local}function a(o){return o===l.Global?"global":"local"}!function(l){l[l.Global=1]="Global",l[l.Local=2]="Local"}(l||(l={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/BufferObject.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/BufferObject.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BufferObject": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkWebGLError.js */ "./node_modules/@arcgis/core/views/webgl/checkWebGLError.js");
/* harmony import */ var _contextUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contextUtils.js */ "./node_modules/@arcgis/core/views/webgl/contextUtils.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const h=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.webgl.BufferObject");class c{static createIndex(e,t,r){return new c(e,_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.ELEMENT_ARRAY_BUFFER,t,r)}static createVertex(e,t,r){return new c(e,_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.ARRAY_BUFFER,t,r)}static createUniform(e,t,r){if(e.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_5__.ContextType.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new c(e,_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.UNIFORM_BUFFER,t,r)}static createPixelPack(e,t=_enums_js__WEBPACK_IMPORTED_MODULE_6__.Usage.STREAM_READ,r){if(e.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_5__.ContextType.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const i=new c(e,_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.PIXEL_PACK_BUFFER,t);return r&&i.setSize(r),i}static createPixelUnpack(e,t=_enums_js__WEBPACK_IMPORTED_MODULE_6__.Usage.STREAM_DRAW,r){if(e.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_5__.ContextType.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new c(e,_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.PIXEL_UNPACK_BUFFER,t,r)}constructor(e,t,r,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_6__.ResourceType.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__.checkWebGLError)(this._context.gl),i&&this.setData(i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteLength(){return this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.ELEMENT_ARRAY_BUFFER?this._indexType===_enums_js__WEBPACK_IMPORTED_MODULE_6__.DataType.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.ELEMENT_ARRAY_BUFFER||this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.ARRAY_BUFFER}dispose(){if(this._context?.gl){if(this._glName){this._context.gl.deleteBuffer(this._glName),this._glName=null}this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_6__.ResourceType.BufferObject,this),this._context=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.nullifyNonNullableForDispose)(this._context)}else this._glName&&h.warn("Leaked WebGL buffer object")}setSize(e,t=null){if(e<=0&&h.error("Buffer size needs to be positive!"),this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.ELEMENT_ARRAY_BUFFER&&null!=t)switch(this._indexType=t,t){case _enums_js__WEBPACK_IMPORTED_MODULE_6__.DataType.UNSIGNED_SHORT:e*=2;break;case _enums_js__WEBPACK_IMPORTED_MODULE_6__.DataType.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.ELEMENT_ARRAY_BUFFER&&((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__.isUint16Array)(e)&&(t/=2,this._indexType=_enums_js__WEBPACK_IMPORTED_MODULE_6__.DataType.UNSIGNED_SHORT),(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__.isUint32Array)(e)&&(t/=4,this._indexType=_enums_js__WEBPACK_IMPORTED_MODULE_6__.DataType.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e,t=null){this._size=e;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;null!=t?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__.checkWebGLError)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(e,t,r,i){if(!e)return;(t<0||t*e.BYTES_PER_ELEMENT>=this.byteLength)&&h.error("offset is out of range!"),r>=i&&h.error("end must be bigger than start!"),(t+(i-r))*e.BYTES_PER_ELEMENT>this.byteLength&&h.error("An attempt to write beyond the end of the buffer!");const s=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const a=this._context.gl;if(this._context.type===_contextUtils_js__WEBPACK_IMPORTED_MODULE_5__.ContextType.WEBGL2)a.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,r,i-r);else{const s=0===r&&i===e.length?e:e.subarray(r,i);a.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,s)}(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__.checkWebGLError)(a),this._isVAOAware&&this._context.bindVAO(s)}getSubData(e,t=0,r,i){if(this._context.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_5__.ContextType.WEBGL2)return void h.error("Get buffer subdata is supported in WebGL2 only!");if(r<0||i<0)return void h.error("Problem getting subdata: offset and length were less than zero!");const s=E(e)?e.BYTES_PER_ELEMENT:1;if(s*((r??0)+(i??0))>e.byteLength)return void h.error("Problem getting subdata: offset and length exceeded destination size!");t+s*(i??0)>this.byteLength&&h.warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this._context.bindBuffer(this,_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.COPY_READ_BUFFER),n.getBufferSubData(_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.COPY_READ_BUFFER,t,e,r,i),this._context.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.COPY_READ_BUFFER)}async getSubDataAsync(e,t=0,r,i){this._context.type===_contextUtils_js__WEBPACK_IMPORTED_MODULE_5__.ContextType.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,t,r,i)):h.error("Get buffer subdata is supported in WebGL2 only!")}}function E(t){return (0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.isArrayLike)(t)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/FramebufferObject.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/FramebufferObject.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FramebufferObject": () => (/* binding */ x),
/* harmony export */   "ensureAttachmentMaxSize": () => (/* binding */ R)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BufferObject.js */ "./node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkWebGLError.js */ "./node_modules/@arcgis/core/views/webgl/checkWebGLError.js");
/* harmony import */ var _contextUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contextUtils.js */ "./node_modules/@arcgis/core/views/webgl/contextUtils.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _GLObjectType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GLObjectType.js */ "./node_modules/@arcgis/core/views/webgl/GLObjectType.js");
/* harmony import */ var _Renderbuffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Renderbuffer.js */ "./node_modules/@arcgis/core/views/webgl/Renderbuffer.js");
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const E=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.webgl.FramebufferObject");class x{constructor(t,e,i=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthBuffer=null,this._stencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_6__.ResourceType.FramebufferObject,this);const r=g(e)?e:new _Texture_js__WEBPACK_IMPORTED_MODULE_9__.Texture(this._context,e);if(this._colorAttachments.set(_enums_js__WEBPACK_IMPORTED_MODULE_6__.ColorAttachment.COLOR_ATTACHMENT0,r),this._validateTextureDescriptor(r.descriptor),this._validateColorAttachmentPoint(_enums_js__WEBPACK_IMPORTED_MODULE_6__.ColorAttachment.COLOR_ATTACHMENT0),null!=i)if(b(i))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=g(i)?i:new _Texture_js__WEBPACK_IMPORTED_MODULE_9__.Texture(this._context,i),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const t=A(i)?i:new _Renderbuffer_js__WEBPACK_IMPORTED_MODULE_8__.Renderbuffer(this._context,i),e=t.descriptor;e.internalFormat===_enums_js__WEBPACK_IMPORTED_MODULE_6__.RenderbufferFormat.STENCIL_INDEX8?this._stencilBuffer=t:this._depthBuffer=t,this._validateRenderBufferDescriptor(e)}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const t=this._context.getBoundFramebufferObject();if(this._colorAttachments.forEach(((t,e)=>this.detachColorTexture(e)?.dispose())),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName){this._context.gl.deleteFramebuffer(this._glName),this._glName=null}this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_6__.ResourceType.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(_enums_js__WEBPACK_IMPORTED_MODULE_6__.ColorAttachment.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthBuffer||this._stencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){const t=this._colorAttachments.get(_enums_js__WEBPACK_IMPORTED_MODULE_6__.ColorAttachment.COLOR_ATTACHMENT0);return t?.descriptor?.width??0}get height(){const t=this._colorAttachments.get(_enums_js__WEBPACK_IMPORTED_MODULE_6__.ColorAttachment.COLOR_ATTACHMENT0);return t?.descriptor?.height??0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce(((t,[e,i])=>t+i.gpuMemoryUsage),this.depthStencilAttachment?.gpuMemoryUsage??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&g(e)?e:null}attachColorTexture(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_6__.ColorAttachment.COLOR_ATTACHMENT0){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;this._validateTextureDescriptor(i),this.detachColorTexture(e)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t)}detachColorTexture(t=_enums_js__WEBPACK_IMPORTED_MODULE_6__.ColorAttachment.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(e)return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t)),this._colorAttachments.delete(t),e}setColorTextureTarget(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_6__.ColorAttachment.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);i&&this._framebufferTexture2D(i.glName,e,t)}attachDepthStencil(t){if(t)switch(t.type){case _GLObjectType_js__WEBPACK_IMPORTED_MODULE_7__.GLObjectType.Texture:return this._attachDepthStencilTexture(t);case _GLObjectType_js__WEBPACK_IMPORTED_MODULE_7__.GLObjectType.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){if(null==t)return;const e=t.descriptor;e.pixelFormat!==_enums_js__WEBPACK_IMPORTED_MODULE_6__.PixelFormat.DEPTH_STENCIL&&e.pixelFormat!==_enums_js__WEBPACK_IMPORTED_MODULE_6__.PixelFormat.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==_enums_js__WEBPACK_IMPORTED_MODULE_6__.PixelType.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,_enums_js__WEBPACK_IMPORTED_MODULE_6__.DepthStencilAttachment)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,_enums_js__WEBPACK_IMPORTED_MODULE_6__.DepthStencilAttachment)),this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(null==t)return;const e=t.descriptor;if(e.internalFormat!==_enums_js__WEBPACK_IMPORTED_MODULE_6__.RenderbufferFormat.DEPTH_STENCIL&&e.internalFormat!==_enums_js__WEBPACK_IMPORTED_MODULE_6__.RenderbufferFormat.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(e);i.framebufferRenderbuffer(_enums_js__WEBPACK_IMPORTED_MODULE_6__.FramebufferTarget.FRAMEBUFFER,r,i.RENDERBUFFER,t.glName)}this._depthBuffer?.dispose(),this._depthBuffer=t}detachDepthStencilBuffer(){const t=this._depthBuffer;if(t&&this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=this._getGLAttachmentPoint(t.descriptor);e.framebufferRenderbuffer(_enums_js__WEBPACK_IMPORTED_MODULE_6__.FramebufferTarget.FRAMEBUFFER,i,e.RENDERBUFFER,null),t.dispose()}return this._depthBuffer=null,t}copyToTexture(t,e,i,r,s,h,n){(t<0||e<0||s<0||h<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const o=n.descriptor;n.descriptor.target!==_enums_js__WEBPACK_IMPORTED_MODULE_6__.TextureType.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==o?.width||null==o?.height||t+i>this.width||e+r>this.height||s+i>o.width||h+r>o.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,a=c.bindTexture(n,_Texture_js__WEBPACK_IMPORTED_MODULE_9__.Texture.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(_Texture_js__WEBPACK_IMPORTED_MODULE_9__.Texture.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(_enums_js__WEBPACK_IMPORTED_MODULE_6__.TextureType.TEXTURE_2D,0,s,h,t,e,i,r),c.bindTexture(a,_Texture_js__WEBPACK_IMPORTED_MODULE_9__.Texture.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,r,s,h,n){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),n||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this);this._context.gl.readPixels(t,e,i,r,s,h,n)}async readPixelsAsync(t,e,h,n,o,c,a){if(this._context.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_5__.ContextType.WEBGL2)return (0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__.webglDebugEnabled)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(t,e,h,n,o,c,a);const u=this._context.gl,_=_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__.BufferObject.createPixelPack(this._context,_enums_js__WEBPACK_IMPORTED_MODULE_6__.Usage.STREAM_READ,a.byteLength);this._context.bindBuffer(_),this._context.bindFramebuffer(this),u.readPixels(t,e,h,n,o,c,0),this._context.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_6__.BufferType.PIXEL_PACK_BUFFER),await _.getSubDataAsync(a),_.dispose()}resize(t,e){if(this.width===t&&this.height===e)return;const i={width:t,height:e};R(i,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((t=>t.resize(i.width,i.height))),this._depthStencilTexture?.resize(i.width,i.height),this._initialized&&(R(i,this._context.parameters.maxRenderbufferSize),this._depthBuffer?.resize(i.width,i.height),this._stencilBuffer?.resize(i.width,i.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(t=_enums_js__WEBPACK_IMPORTED_MODULE_6__.FramebufferTarget.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const i=e.createFramebuffer();e.bindFramebuffer(t,i),this._colorAttachments.forEach(((e,i)=>this._framebufferTexture2D(e.glName,i,N(e),t)));const s=this._depthBuffer||this._stencilBuffer;if(s){const i=this._getGLAttachmentPoint(s.descriptor);e.framebufferRenderbuffer(t,i,e.RENDERBUFFER,s.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,N(this._depthStencilTexture),t);if((0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__.webglDebugEnabled)()){e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!")}this._glName=i,this._initialized=!0}_framebufferTexture2D(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_6__.ColorAttachment.COLOR_ATTACHMENT0,i=_enums_js__WEBPACK_IMPORTED_MODULE_6__.TextureType.TEXTURE_2D,r=_enums_js__WEBPACK_IMPORTED_MODULE_6__.FramebufferTarget.FRAMEBUFFER,s=0){this._context.gl.framebufferTexture2D(r,e,i,t,s)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthBuffer.descriptor);t.framebufferRenderbuffer(_enums_js__WEBPACK_IMPORTED_MODULE_6__.FramebufferTarget.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthBuffer=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.disposeMaybe)(this._depthBuffer)}this._stencilBuffer&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(_enums_js__WEBPACK_IMPORTED_MODULE_6__.FramebufferTarget.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilBuffer=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.disposeMaybe)(this._stencilBuffer)),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.disposeMaybe)(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==_enums_js__WEBPACK_IMPORTED_MODULE_6__.TextureType.TEXTURE_2D&&t.target!==_enums_js__WEBPACK_IMPORTED_MODULE_6__.TextureType.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),R(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){R(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case _enums_js__WEBPACK_IMPORTED_MODULE_6__.RenderbufferFormat.DEPTH_COMPONENT16:case _enums_js__WEBPACK_IMPORTED_MODULE_6__.RenderbufferFormat.DEPTH_COMPONENT24:case _enums_js__WEBPACK_IMPORTED_MODULE_6__.RenderbufferFormat.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case _enums_js__WEBPACK_IMPORTED_MODULE_6__.RenderbufferFormat.DEPTH24_STENCIL8:case _enums_js__WEBPACK_IMPORTED_MODULE_6__.RenderbufferFormat.DEPTH32F_STENCIL8:case _enums_js__WEBPACK_IMPORTED_MODULE_6__.RenderbufferFormat.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case _enums_js__WEBPACK_IMPORTED_MODULE_6__.RenderbufferFormat.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(e){if(-1===x._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;if(t){const e=this._context.gl;x._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS)}else x._MAX_COLOR_ATTACHMENTS=1}const i=e-_enums_js__WEBPACK_IMPORTED_MODULE_6__.ColorAttachment.COLOR_ATTACHMENT0;i+1>x._MAX_COLOR_ATTACHMENTS&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${i+1}. Implementation supports up to ${x._MAX_COLOR_ATTACHMENTS} color attachments`)}}function g(t){return null!=t&&"type"in t&&t.type===_GLObjectType_js__WEBPACK_IMPORTED_MODULE_7__.GLObjectType.Texture}function A(t){return null!=t&&"type"in t&&t.type===_GLObjectType_js__WEBPACK_IMPORTED_MODULE_7__.GLObjectType.RenderBuffer}function b(t){return g(t)||null!=t&&"pixelFormat"in t}function R(t,e){const i=Math.max(t.width,t.height);if(i>e){E.warn(`Resizing FBO attachment size ${t.width}x${t.height} to device limit ${e}`);const r=e/i;return t.width=Math.round(t.width*r),t.height=Math.round(t.height*r),!1}return!0}function N(t){return t.descriptor.target===_enums_js__WEBPACK_IMPORTED_MODULE_6__.TextureType.TEXTURE_CUBE_MAP?_enums_js__WEBPACK_IMPORTED_MODULE_6__.TextureType.TEXTURE_CUBE_MAP_POSITIVE_X:_enums_js__WEBPACK_IMPORTED_MODULE_6__.TextureType.TEXTURE_2D}x._MAX_COLOR_ATTACHMENTS=-1;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/GLObjectType.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/GLObjectType.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLObjectType": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var e;!function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(e||(e={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/Renderbuffer.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/Renderbuffer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderbuffer": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _contextUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contextUtils.js */ "./node_modules/@arcgis/core/views/webgl/contextUtils.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _GLObjectType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GLObjectType.js */ "./node_modules/@arcgis/core/views/webgl/GLObjectType.js");
/* harmony import */ var _RenderbufferDescriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RenderbufferDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/RenderbufferDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class n{constructor(e,i){this._context=e,this._descriptor=i,this.type=_GLObjectType_js__WEBPACK_IMPORTED_MODULE_3__.GLObjectType.RenderBuffer,this._context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_2__.ResourceType.Renderbuffer,this);const n=this._context.gl;this.glName=n.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:o,height:h,internalFormat:c,multisampled:f}=i;if(f){if(this._context.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_1__.ContextType.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,c,o,h)}else n.renderbufferStorage(n.RENDERBUFFER,c,o,h)}get descriptor(){return this._descriptor}get samples(){const e=this._descriptor.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}get gpuMemoryUsage(){return (0,_RenderbufferDescriptor_js__WEBPACK_IMPORTED_MODULE_4__.estimateMemory)(this._descriptor)}resize(e,t){const r=this._descriptor;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const s=this._context.gl;if(this._context.bindRenderbuffer(this),r.multisampled){s.renderbufferStorageMultisample(s.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height)}else s.renderbufferStorage(s.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_2__.ResourceType.Renderbuffer,this),this._context=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.nullifyNonNullableForDispose)(this._context))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/RenderbufferDescriptor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/RenderbufferDescriptor.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderbufferDescriptor": () => (/* binding */ i),
/* harmony export */   "estimateMemory": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/webgl/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class i{constructor(t,i,h=i){this.internalFormat=t,this.width=i,this.height=h,this.multisampled=!1,this.samples=1}}function h(i){return i.width<=0||i.height<=0||null==i.internalFormat?0:i.width*i.height*(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.getBytesPerElementFormat)(i.internalFormat)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/Texture.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/Texture.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Texture": () => (/* binding */ T),
/* harmony export */   "clearUnestimatedTextures": () => (/* binding */ U)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkWebGLError.js */ "./node_modules/@arcgis/core/views/webgl/checkWebGLError.js");
/* harmony import */ var _contextUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contextUtils.js */ "./node_modules/@arcgis/core/views/webgl/contextUtils.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _GLObjectType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GLObjectType.js */ "./node_modules/@arcgis/core/views/webgl/GLObjectType.js");
/* harmony import */ var _TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextureDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js");
/* harmony import */ var _ValidatedTextureDescriptor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValidatedTextureDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/ValidatedTextureDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const u=4;let T=class{constructor(e,i=null,a=null){if(this.type=_GLObjectType_js__WEBPACK_IMPORTED_MODULE_6__.GLObjectType.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,a=i;else{const r=_ValidatedTextureDescriptor_js__WEBPACK_IMPORTED_MODULE_8__.ValidatedTextureDescriptor.validate(e,i);if(!r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Texture descriptor invalid");this._descriptor=r}if(this._descriptor.context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_5__.ResourceType.Texture,this),this._descriptor.context.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_4__.ContextType.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),R(this._descriptor.target)))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("3D and array textures are not supported in WebGL1");this._descriptor.target===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_CUBE_MAP?this._setDataCubeMap(a):this.setData(a)}get glName(){return this._glName}get descriptor(){return this._descriptor}get gpuMemoryUsage(){return P.delete(this),(0,_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_7__.estimateMemory)(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null,this._descriptor.context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_5__.ResourceType.Texture,this))}release(){this.dispose()}resize(e,i){const r=this._descriptor;if(r.width!==e||r.height!==i){if(this._wasImmutablyAllocated)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Immutable textures can't be resized!");r.width=e,r.height=i,this._descriptor.target===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(t=null){for(let e=_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_CUBE_MAP_POSITIVE_X;e<=_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_CUBE_MAP_NEGATIVE_Z;e++)this._setData(t,e)}setData(t){this._setData(t)}_setData(e,r){if(!this._descriptor.context||!this._descriptor.context.gl)return;const s=this._descriptor.context.gl;(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__.checkWebGLError)(s),this._glName||(this._glName=s.createTexture()),void 0===e&&(e=null);const o=this._descriptor,a=r??o.target,n=R(a);null===e&&(o.width=o.width||u,o.height=o.height||u,n&&(o.depth=o.depth??1));const p=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES),g(this._descriptor.context,o),this._configurePixelStorage(),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__.checkWebGLError)(s);const h=this._deriveInternalFormat();if(D(e)){let t=e.width,r=e.height;const p=1;e instanceof HTMLVideoElement&&(t=e.videoWidth,r=e.videoHeight),o.width&&o.height,n&&o.depth,o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(a,h,o.hasMipmap,t,r,p),this._texImage(a,0,h,t,r,p,e),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__.checkWebGLError)(s),o.hasMipmap&&this.generateMipmap(),o.width||(o.width=t),o.height||(o.height=r),n&&!o.depth&&(o.depth=p)}else{const{width:r,height:p,depth:l}=o;if(null==r||null==p)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Width and height must be specified!");if(n&&null==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Depth must be specified!");if(o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(a,h,o.hasMipmap,r,p,l),A(e)){const i=e.levels,n=b(a,r,p,l),d=Math.min(n-1,i.length-1);null!=this._descriptor.context.gl2?s.texParameteri(o.target,this._descriptor.context.gl2.TEXTURE_MAX_LEVEL,d):o.hasMipmap=o.hasMipmap&&n===i.length;const c=h;if(!w(c))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((t,e,r,s)=>{const o=i[Math.min(t,i.length-1)];this._compressedTexImage(a,t,c,e,r,s,o)}),d)}else this._texImage(a,0,h,r,p,l,e),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__.checkWebGLError)(s),o.hasMipmap&&this.generateMipmap()}x(s,this._descriptor),E(s,this._descriptor),f(this._descriptor.context,this._descriptor),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__.checkWebGLError)(s),this._descriptor.context.bindTexture(p,T.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,i,r,s,o,a,n=0){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const p=this._descriptor.context.gl,h=this._descriptor.context.gl2,l=this._descriptor,d=this._deriveInternalFormat(),{pixelFormat:c,dataType:_,target:m,isImmutable:u}=l;if(u&&!this._wasImmutablyAllocated)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Cannot update immutable texture before allocation!");const g=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES,!0);if((i<0||r<0||s>l.width||o>l.height||i+s>l.width||r+o>l.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),n){if(!h)return void console.error("Webgl2 must be enabled to use dataRowOffset!");p.pixelStorei(h.UNPACK_SKIP_ROWS,n)}if(D(a)?h?h.texSubImage2D(m,e,i,r,s,o,c,_,a):p.texSubImage2D(m,e,i,r,c,_,a):A(a)?p.compressedTexSubImage2D(m,e,i,r,s,o,d,a.levels[e]):p.texSubImage2D(m,e,i,r,s,o,c,_,a),n){if(!h)return void console.error("Webgl2 must be enabled to use dataRowOffset!");p.pixelStorei(h.UNPACK_SKIP_ROWS,0)}this._descriptor.context.bindTexture(g,T.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,i,r,s,o,a,n,p){p||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const h=this._descriptor.context.gl2;if(null==h)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("3D textures are not supported in WebGL1");const l=this._descriptor,d=this._deriveInternalFormat(),{pixelFormat:c,dataType:_,isImmutable:m,target:u}=l;if(m&&!this._wasImmutablyAllocated)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Cannot update immutable texture before allocation!");R(u)||console.warn("Attempting to set 3D texture data on a non-3D texture");const g=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES);if(this._descriptor.context.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES),(i<0||r<0||s<0||o>l.width||a>l.height||n>l.depth||i+o>l.width||r+a>l.height||s+n>l.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),A(p))p=p.levels[e],h.compressedTexSubImage3D(u,e,i,r,s,o,a,n,d,p);else{const t=p;h.texSubImage3D(u,e,i,r,s,o,a,n,c,_,t)}this._descriptor.context.bindTexture(g,T.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,g(this._descriptor.context,e)}e.samplingMode===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureSamplingMode.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureSamplingMode.LINEAR_MIPMAP_NEAREST):e.samplingMode===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureSamplingMode.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureSamplingMode.NEAREST_MIPMAP_NEAREST);const i=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(i,T.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,g(this._descriptor.context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._descriptor.context.gl,e=this._descriptor;this._samplingModeDirty&&(x(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(E(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.context.type===_contextUtils_js__WEBPACK_IMPORTED_MODULE_4__.ContextType.WEBGL1)return this._descriptor.internalFormat=this._descriptor.pixelFormat;if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===_enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelFormat.DEPTH_STENCIL&&(this._descriptor.internalFormat=_enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelFormat.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case _enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelType.FLOAT:switch(this._descriptor.pixelFormat){case _enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelFormat.RGBA:return this._descriptor.internalFormat=_enums_js__WEBPACK_IMPORTED_MODULE_5__.SizedPixelFormat.RGBA32F;case _enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelFormat.RGB:return this._descriptor.internalFormat=_enums_js__WEBPACK_IMPORTED_MODULE_5__.SizedPixelFormat.RGB32F;default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Unable to derive format")}case _enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelType.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case _enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelFormat.RGBA:return this._descriptor.internalFormat=_enums_js__WEBPACK_IMPORTED_MODULE_5__.SizedPixelFormat.RGBA8;case _enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelFormat.RGB:return this._descriptor.internalFormat=_enums_js__WEBPACK_IMPORTED_MODULE_5__.SizedPixelFormat.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===_enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelFormat.DEPTH_STENCIL?_enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelFormat.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const t=this._descriptor.context.gl,{unpackAlignment:e,flipped:i,preMultiplyAlpha:r}=this._descriptor;t.pixelStorei(t.UNPACK_ALIGNMENT,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0)}_texStorage(e,i,r,s,o,a){const n=this._descriptor.context.gl2;if(null==n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Immutable textures are not supported in WebGL1");if(!M(i))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const p=r?b(e,s,o,a):1;if(R(e)){if(null==a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Missing depth dimension for 3D texture upload");n.texStorage3D(e,p,i,s,o,a)}else n.texStorage2D(e,p,i,s,o);this._wasImmutablyAllocated=!0}_texImage(e,i,s,o,a,n,p){const h=this._descriptor.context.gl,l=R(e),{isImmutable:d,pixelFormat:c,dataType:_}=this._descriptor,m=this._descriptor.context.type===_contextUtils_js__WEBPACK_IMPORTED_MODULE_4__.ContextType.WEBGL2,u=m?h:null;if(m||!D(p))if(d){if(null!=p){const r=p;if(l){if(null==n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Missing depth dimension for 3D texture upload");u.texSubImage3D(e,i,0,0,0,o,a,n,c,_,r)}else h.texSubImage2D(e,i,0,0,o,a,c,_,r)}}else{const r=p;if(l){if(null==n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Missing depth dimension for 3D texture upload");u.texImage3D(e,i,s,o,a,n,0,c,_,r)}else h.texImage2D(e,i,s,o,a,0,c,_,r)}else h.texImage2D(e,0,s,c,_,p)}_compressedTexImage(e,i,s,o,a,n,p){const h=this._descriptor.context.gl;let l=null;const d=R(e),c=this._descriptor.isImmutable;if(d){if(this._descriptor.context.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_4__.ContextType.WEBGL2)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("3D textures are not supported in WebGL1");l=h}if(c){if(null!=p)if(d){if(null==n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Missing depth dimension for 3D texture upload");l.compressedTexSubImage3D(e,i,0,0,0,o,a,n,s,p)}else h.compressedTexSubImage2D(e,i,0,0,o,a,s,p)}else if(d){if(null==n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Missing depth dimension for 3D texture upload");l.compressedTexImage3D(e,i,s,o,a,n,0,p)}else h.compressedTexImage2D(e,i,s,o,a,0,p)}_forEachMipmapLevel(e,i=1/0){let{width:r,height:s,depth:a,hasMipmap:n,target:p}=this._descriptor;const h=p===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_3D;if(null==r||null==s||h&&null==a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Missing texture dimensions for mipmap calculation");for(let t=0;e(t,r,s,a),n&&(1!==r||1!==s||h&&1!==a)&&!(t>=i);++t)r=Math.max(1,r>>1),s=Math.max(1,s>>1),h&&(a=Math.max(1,a>>1))}};function g(t,i){(null!=i.width&&i.width<0||null!=i.height&&i.height<0||null!=i.depth&&i.depth<0)&&console.error("Negative dimension parameters are not allowed!");const s=t.type===_contextUtils_js__WEBPACK_IMPORTED_MODULE_4__.ContextType.WEBGL2;if(s||!i.isImmutable&&!R(i.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),s)return;null!=i.width&&(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__.isPowerOfTwo)(i.width)&&null!=i.height&&(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__.isPowerOfTwo)(i.height)||("number"==typeof i.wrapMode?i.wrapMode!==_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureWrapMode.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):i.wrapMode.s===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureWrapMode.CLAMP_TO_EDGE&&i.wrapMode.t===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureWrapMode.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),i.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}function x(t,e){let i=e.samplingMode,r=e.samplingMode;i===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureSamplingMode.LINEAR_MIPMAP_NEAREST||i===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureSamplingMode.LINEAR_MIPMAP_LINEAR?(i=_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureSamplingMode.LINEAR,e.hasMipmap||(r=_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureSamplingMode.LINEAR)):i!==_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureSamplingMode.NEAREST_MIPMAP_NEAREST&&i!==_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureSamplingMode.NEAREST_MIPMAP_LINEAR||(i=_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureSamplingMode.NEAREST,e.hasMipmap||(r=_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureSamplingMode.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,r)}function E(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}function f(t,e){const i=t.capabilities.textureFilterAnisotropic;if(!i)return;t.gl.texParameterf(e.target,i.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}function M(t){return t in _enums_js__WEBPACK_IMPORTED_MODULE_5__.SizedPixelFormat}function w(t){return t in _enums_js__WEBPACK_IMPORTED_MODULE_5__.CompressedTextureFormat}function A(t){return null!=t&&"type"in t&&"compressed"===t.type}function I(t){return null!=t&&"byteLength"in t}function D(t){return null!=t&&!A(t)&&!I(t)}function R(t){return t===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_3D||t===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_2D_ARRAY}function b(t,e,i,r=1){let s=Math.max(e,i);return t===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_3D&&(s=Math.max(s,r)),Math.round(Math.log(s)/Math.LN2)+1}function U(){const t=new Array;return P.forEach(((e,i)=>t.push([i.gpuMemoryUsage,e]))),P.clear(),t.sort(((t,e)=>e[0]-t[0])),t.reduce(((t,e)=>`${t}\n\n${Math.round(e[0]/1024)}KB: ${e[1]}`),"")}T.TEXTURE_UNIT_FOR_UPDATES=0;const P=new Map;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextureDescriptor": () => (/* binding */ e),
/* harmony export */   "estimateMemory": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/webgl/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e{constructor(p=0,e=p){this.width=p,this.height=e,this.target=_enums_js__WEBPACK_IMPORTED_MODULE_0__.TextureType.TEXTURE_2D,this.pixelFormat=_enums_js__WEBPACK_IMPORTED_MODULE_0__.PixelFormat.RGBA,this.dataType=_enums_js__WEBPACK_IMPORTED_MODULE_0__.PixelType.UNSIGNED_BYTE,this.samplingMode=_enums_js__WEBPACK_IMPORTED_MODULE_0__.TextureSamplingMode.LINEAR,this.wrapMode=_enums_js__WEBPACK_IMPORTED_MODULE_0__.TextureWrapMode.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function r(t){return t.width<=0||t.height<=0||null==t.internalFormat?0:t.width*t.height*(t.hasMipmap?4/3:1)*(0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.getBytesPerElementFormat)(t.internalFormat)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/Util.js":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/Util.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindVertexBufferLayout": () => (/* binding */ R),
/* harmony export */   "getBytesPerElementFormat": () => (/* binding */ E),
/* harmony export */   "getErrorString": () => (/* binding */ a),
/* harmony export */   "getStride": () => (/* binding */ i),
/* harmony export */   "unbindVertexBufferLayout": () => (/* binding */ o),
/* harmony export */   "vertexCount": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a(e){const r=e.gl;switch(r.getError()){case r.NO_ERROR:return null;case r.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case r.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case r.INVALID_OPERATION:return"The specified command is not allowed for the current state";case r.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case r.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case r.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function n(e,r){return e.vertexBuffers[r].byteLength/i(e.layout[r])}function i(e){return e[0].stride}function R(e,r,t,s,c=0){const a=e.gl,n=e.capabilities.instancing;e.bindBuffer(t);for(const i of s){const e=r.get(i.name);void 0===e&&console.error(`There is no location for vertex attribute '${i.name}' defined.`);const t=c*i.stride;if(i.count<=4)a.vertexAttribPointer(e,i.count,i.type,i.normalized,i.stride,i.offset+t),a.enableVertexAttribArray(e),i.divisor>0&&n&&n.vertexAttribDivisor(e,i.divisor);else if(9===i.count)for(let r=0;r<3;r++)a.vertexAttribPointer(e+r,3,i.type,i.normalized,i.stride,i.offset+12*r+t),a.enableVertexAttribArray(e+r),i.divisor>0&&n&&n.vertexAttribDivisor(e+r,i.divisor);else if(16===i.count)for(let r=0;r<4;r++)a.vertexAttribPointer(e+r,4,i.type,i.normalized,i.stride,i.offset+16*r+t),a.enableVertexAttribArray(e+r),i.divisor>0&&n&&n.vertexAttribDivisor(e+r,i.divisor);else console.error("Unsupported vertex attribute element count: "+i.count)}}function o(r,t,s,c){const a=r.gl,n=r.capabilities.instancing;r.bindBuffer(s);for(const e of c){const r=t.get(e.name);if(e.count<=4)a.disableVertexAttribArray(r),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r,0);else if(9===e.count)for(let t=0;t<3;t++)a.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r+t,0);else if(16===e.count)for(let t=0;t<4;t++)a.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r+t,0);else console.error("Unsupported vertex attribute element count: "+e.count)}r.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_1__.BufferType.ARRAY_BUFFER)}function E(e){switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.ALPHA:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.LUMINANCE:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.RED:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.RED_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.R8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.R8I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.R8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.R8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.RenderbufferFormat.STENCIL_INDEX8:return 1;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.LUMINANCE_ALPHA:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.RG:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.RG_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGBA4:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.R16F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.R16I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.R16UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RG8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RG8I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RG8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RG8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB565:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB5_A1:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.RenderbufferFormat.DEPTH_COMPONENT16:return 2;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.DEPTH_COMPONENT:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.RGB:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.RGB_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB8I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.SRGB8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.RenderbufferFormat.DEPTH_COMPONENT24:return 3;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.DEPTH_STENCIL:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.DEPTH24_STENCIL8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.RGBA:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.PixelFormat.RGBA_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGBA8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.R32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.R11F_G11F_B10F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RG16F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.R32I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.R32UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RG16I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RG16UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGBA8I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGBA8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGBA8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.SRGB8_ALPHA8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB9_E5:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB10_A2UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB10_A2:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.RenderbufferFormat.DEPTH_STENCIL:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.RenderbufferFormat.DEPTH_COMPONENT32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.RenderbufferFormat.DEPTH24_STENCIL8:return 4;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.RenderbufferFormat.DEPTH32F_STENCIL8:return 5;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB16F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB16I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB16UI:return 6;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RG32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RG32I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RG32UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGBA16F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGBA16I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGBA16UI:return 8;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB32I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGB32UI:return 12;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGBA32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGBA32I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.SizedPixelFormat.RGBA32UI:return 16;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGB_S3TC_DXT1_EXT:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT3_EXT:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_R11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_SIGNED_R11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGB8_ETC2:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_SRGB8_ETC2:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RG11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_SIGNED_RG11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGBA8_ETC2_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/ValidatedTextureDescriptor.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ValidatedTextureDescriptor.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidatedTextureDescriptor": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextureDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class a extends _TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__.TextureDescriptor{constructor(t,a){switch(super(),this.context=t,Object.assign(this,a),this.internalFormat){case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R16F:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R16I:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R16UI:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R32F:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R32I:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R32UI:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R8:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R8I:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R8UI:this.pixelFormat=_enums_js__WEBPACK_IMPORTED_MODULE_0__.PixelFormat.RED}}static validate(s,e){return new a(s,e)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexArrayObject": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/webgl/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const f=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.webgl.VertexArrayObject");let u=class{constructor(t,e,i,r,n=null){this._context=t,this._locations=e,this._layout=i,this._buffers=r,this._indexBuffer=n,this._glName=null,this._initialized=!1,t.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_3__.ResourceType.VertexArrayObject,this)}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Object.keys(this._buffers).reduce(((t,e)=>t+this._buffers[e].byteLength),null!=this._indexBuffer?this._indexBuffer.byteLength:0)}get layout(){return this._layout}get locations(){return this._locations}get memoryEstimate(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__.typedArrayStaticSize}dispose(){if(this._context){this._context.getBoundVAO()===this&&this._context.bindVAO(null);for(const t in this._buffers)this._buffers[t]?.dispose(),delete this._buffers[t];this._indexBuffer=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.disposeMaybe)(this._indexBuffer),this.disposeVAOOnly()}else(this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&f.warn("Leaked WebGL VAO")}disposeVAOOnly(){if(this._glName){const t=this._context?.capabilities?.vao;t.deleteVertexArray(this._glName),this._glName=null}this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_3__.ResourceType.VertexArrayObject,this),this._context=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.nullifyNonNullableForDispose)(this._context)}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e}this._initialized=!0}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:t,_layout:e,_indexBuffer:i}=this;t||f.error("Vertex buffer dictionary is empty!");const r=this._context.gl;for(const s in t){const i=t[s];i||f.error("Vertex buffer is uninitialized!");const r=e[s];r||f.error("Vertex element descriptor is empty!"),(0,_Util_js__WEBPACK_IMPORTED_MODULE_4__.bindVertexBufferLayout)(this._context,this._locations,i,r)}if(null!=i){!!this._context.capabilities.vao?r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i)}}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:t,_layout:e}=this;t||f.error("Vertex buffer dictionary is empty!");for(const i in t){const r=t[i];r||f.error("Vertex buffer is uninitialized!");const s=e[i];(0,_Util_js__WEBPACK_IMPORTED_MODULE_4__.unbindVertexBufferLayout)(this._context,this._locations,r,s)}null!=this._indexBuffer&&this._context.unbindBuffer(this._indexBuffer.bufferType)}};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/checkWebGLError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/checkWebGLError.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkWebGLError": () => (/* binding */ u),
/* harmony export */   "hasFeatureFlagWebGLDebug": () => (/* binding */ n),
/* harmony export */   "webglDebugEnabled": () => (/* binding */ a),
/* harmony export */   "webglValidateShadersEnabled": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.webgl.checkWebGLError");function t(e,r){switch(r){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const n=!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("enable-feature:webgl-debug");function a(){return n}function c(){return n}function u(r){if(a()){const n=r.getError();if(n){const a=t(r,n),c=(new Error).stack;o.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("webgl-error","WebGL error occured",{message:a,stack:c}))}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/contextUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/contextUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextType": () => (/* binding */ n),
/* harmony export */   "createContext": () => (/* binding */ t),
/* harmony export */   "createContextForView": () => (/* binding */ o),
/* harmony export */   "getContextTypes": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var n;function t(t,o,r={}){const e=o===n.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];for(const n of e){const o=t.getContext(n,r);if(o)return o}return null}function o(n,o,e={}){const c=r(n);for(const r of c){const n=t(o,r,e);if(n)return n}return null}function r(t){if("3d"===t)return[n.WEBGL2];const o=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-force-webgl");return o===n.WEBGL1||o===n.WEBGL2?[o]:(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mac")&&(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("chrome")?[n.WEBGL1,n.WEBGL2]:[n.WEBGL2,n.WEBGL1]}!function(n){n[n.WEBGL1=1]="WEBGL1",n[n.WEBGL2=2]="WEBGL2"}(n||(n={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeDoubleArray": () => (/* binding */ n),
/* harmony export */   "encodeDoubleArray": () => (/* binding */ t),
/* harmony export */   "encodeDoubleHi": () => (/* binding */ o),
/* harmony export */   "encodeDoubleLo": () => (/* binding */ r)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(t,n,o){for(let r=0;r<o;++r)n[2*r]=t[r],n[2*r+1]=t[r]-n[2*r]}function n(t,n,o){for(let r=0;r<o;++r)n[r]=t[2*r]+t[2*r+1]}function o(t,n){const o=t.length;for(let r=0;r<o;++r)e[0]=t[r],n[r]=e[0];return n}function r(t,n){const o=t.length;for(let r=0;r<o;++r)e[0]=t[r],e[1]=t[r]-e[0],n[r]=e[1];return n}const e=new Float32Array(2);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/renderState.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/renderState.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateTracker": () => (/* binding */ M),
/* harmony export */   "backFaceCullingParams": () => (/* binding */ r),
/* harmony export */   "cullingParams": () => (/* binding */ h),
/* harmony export */   "defaultColorWriteParams": () => (/* binding */ _),
/* harmony export */   "defaultDepthWriteParams": () => (/* binding */ a),
/* harmony export */   "frontFaceCullingParams": () => (/* binding */ o),
/* harmony export */   "makeBlending": () => (/* binding */ c),
/* harmony export */   "makeColorWrite": () => (/* binding */ v),
/* harmony export */   "makeCulling": () => (/* binding */ d),
/* harmony export */   "makeDepthTest": () => (/* binding */ u),
/* harmony export */   "makeDepthWrite": () => (/* binding */ f),
/* harmony export */   "makePipelineState": () => (/* binding */ W),
/* harmony export */   "makePolygonOffset": () => (/* binding */ p),
/* harmony export */   "makeStencilTest": () => (/* binding */ g),
/* harmony export */   "makeStencilWrite": () => (/* binding */ I),
/* harmony export */   "separateBlendingParams": () => (/* binding */ l),
/* harmony export */   "simpleBlendingParams": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../3d/webgl-engine/lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function s(t,e,i=_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendOperation.ADD,s=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}function l(t,e,i,s,l=_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendOperation.ADD,r=_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendOperation.ADD,o=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:s,opRgb:l,opAlpha:r,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}const r={face:_enums_js__WEBPACK_IMPORTED_MODULE_1__.Face.BACK,mode:_enums_js__WEBPACK_IMPORTED_MODULE_1__.CullMode.CCW},o={face:_enums_js__WEBPACK_IMPORTED_MODULE_1__.Face.FRONT,mode:_enums_js__WEBPACK_IMPORTED_MODULE_1__.CullMode.CCW},h=e=>e===_3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.CullFaceOptions.Back?r:e===_3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.CullFaceOptions.Front?o:null,a={zNear:0,zFar:1},_={r:!0,g:!0,b:!0,a:!0};function c(t){return T.intern(t)}function d(t){return D.intern(t)}function p(t){return C.intern(t)}function u(t){return A.intern(t)}function g(t){return w.intern(t)}function f(t){return B.intern(t)}function v(t){return z.intern(t)}function I(t){return j.intern(t)}function W(t){return N.intern(t)}class S{constructor(t,e){this._makeKey=t,this._makeRef=e,this._interns=new Map}intern(t){if(!t)return null;const e=this._makeKey(t),i=this._interns;return i.has(e)||i.set(e,this._makeRef(t)),i.get(e)??null}}function b(t){return"["+t.join(",")+"]"}const T=new S(y,(t=>({__tag:"Blending",...t})));function y(t){return t?b([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const D=new S(O,(t=>({__tag:"Culling",...t})));function O(t){return t?b([t.face,t.mode]):null}const C=new S(m,(t=>({__tag:"PolygonOffset",...t})));function m(t){return t?b([t.factor,t.units]):null}const A=new S(R,(t=>({__tag:"DepthTest",...t})));function R(t){return t?b([t.func]):null}const w=new S(k,(t=>({__tag:"StencilTest",...t})));function k(t){return t?b([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const B=new S(P,(t=>({__tag:"DepthWrite",...t})));function P(t){return t?b([t.zNear,t.zFar]):null}const z=new S(F,(t=>({__tag:"ColorWrite",...t})));function F(t){return t?b([t.r,t.g,t.b,t.a]):null}const j=new S(K,(t=>({__tag:"StencilWrite",...t})));function K(t){return t?b([t.mask]):null}const N=new S(x,(t=>({blending:c(t.blending),culling:d(t.culling),polygonOffset:p(t.polygonOffset),depthTest:u(t.depthTest),stencilTest:g(t.stencilTest),depthWrite:f(t.depthWrite),colorWrite:v(t.colorWrite),stencilWrite:I(t.stencilWrite)})));function x(t){return t?b([y(t.blending),O(t.culling),m(t.polygonOffset),R(t.depthTest),k(t.stencilTest),P(t.depthWrite),F(t.colorWrite),K(t.stencilWrite)]):null}class M{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=t}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this._setBlending(t.blending),this._setCulling(t.culling),this._setPolygonOffset(t.polygonOffset),this._setDepthTest(t.depthTest),this._setStencilTest(t.stencilTest),this._setDepthWrite(t.depthWrite),this._setColorWrite(t.colorWrite),this._setStencilWrite(t.stencilWrite),this._pipeline=t),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(t){this._blending=this._setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(t){this._culling=this._setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(t){this._polygonOffset=this._setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(t){this._depthTest=this._setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(t){this._stencilTest=this._setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(t){this._depthWrite=this._setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(t){this._colorWrite=this._setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(t){this._stencilWrite=this._setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(t,e,i,n){return(i||t!==e)&&(n(t),this._pipelineInvalid=!0),t}}


/***/ })

}]);