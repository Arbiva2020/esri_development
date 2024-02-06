"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_composed-offset-position_esm_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/composed-offset-position.esm.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/composed-offset-position.esm.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offsetLeft": () => (/* binding */ offsetLeft),
/* harmony export */   "offsetParent": () => (/* binding */ offsetParent),
/* harmony export */   "offsetTop": () => (/* binding */ offsetTop)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
/* eslint-disable @typescript-eslint/ban-types */
function offsetParent(element) {
    return offsetParentPolyfill(element);
}
function offsetTop(element) {
    return offsetTopLeftPolyfill(element, 'offsetTop');
}
function offsetLeft(element) {
    return offsetTopLeftPolyfill(element, 'offsetLeft');
}
function flatTreeParent(element) {
    if (element.assignedSlot) {
        return element.assignedSlot;
    }
    if (element.parentNode instanceof ShadowRoot) {
        return element.parentNode.host;
    }
    return element.parentNode;
}
function ancestorTreeScopes(element) {
    const scopes = new Set();
    let currentScope = element.getRootNode();
    while (currentScope) {
        scopes.add(currentScope);
        currentScope = currentScope.parentNode
            ? currentScope.parentNode.getRootNode()
            : null;
    }
    return scopes;
}
function offsetParentPolyfill(element) {
    // Do an initial walk to check for display:none ancestors.
    for (let ancestor = element; ancestor; ancestor = flatTreeParent(ancestor)) {
        if (!(ancestor instanceof Element)) {
            continue;
        }
        if (getComputedStyle(ancestor).display === 'none') {
            return null;
        }
    }
    for (let ancestor = flatTreeParent(element); ancestor; ancestor = flatTreeParent(ancestor)) {
        if (!(ancestor instanceof Element)) {
            continue;
        }
        const style = getComputedStyle(ancestor);
        // Display:contents nodes aren't in the layout tree so they should be skipped.
        if (style.display === 'contents') {
            continue;
        }
        if (style.position !== 'static' || style.filter !== 'none') {
            return ancestor;
        }
        if (ancestor.tagName === 'BODY') {
            return ancestor;
        }
    }
    return null;
}
function offsetTopLeftPolyfill(element, offsetTopOrLeft) {
    let value = element[offsetTopOrLeft];
    let nextOffsetParent = offsetParentPolyfill(element);
    const scopes = ancestorTreeScopes(element);
    while (nextOffsetParent && !scopes.has(nextOffsetParent.getRootNode())) {
        value -= nextOffsetParent[offsetTopOrLeft];
        nextOffsetParent = offsetParentPolyfill(nextOffsetParent);
    }
    return value;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZGNhYWU4Mjg5ZDk1M2Y4OTRiMjcxODFiMGM1NTc5ZTYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvY29tcG9zZWQtb2Zmc2V0LXBvc2l0aW9uLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuZnVuY3Rpb24gb2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gb2Zmc2V0UGFyZW50UG9seWZpbGwoZWxlbWVudCk7XG59XG5mdW5jdGlvbiBvZmZzZXRUb3AoZWxlbWVudCkge1xuICAgIHJldHVybiBvZmZzZXRUb3BMZWZ0UG9seWZpbGwoZWxlbWVudCwgJ29mZnNldFRvcCcpO1xufVxuZnVuY3Rpb24gb2Zmc2V0TGVmdChlbGVtZW50KSB7XG4gICAgcmV0dXJuIG9mZnNldFRvcExlZnRQb2x5ZmlsbChlbGVtZW50LCAnb2Zmc2V0TGVmdCcpO1xufVxuZnVuY3Rpb24gZmxhdFRyZWVQYXJlbnQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5hc3NpZ25lZFNsb3Q7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUuaG9zdDtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZTtcbn1cbmZ1bmN0aW9uIGFuY2VzdG9yVHJlZVNjb3BlcyhlbGVtZW50KSB7XG4gICAgY29uc3Qgc2NvcGVzID0gbmV3IFNldCgpO1xuICAgIGxldCBjdXJyZW50U2NvcGUgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG4gICAgd2hpbGUgKGN1cnJlbnRTY29wZSkge1xuICAgICAgICBzY29wZXMuYWRkKGN1cnJlbnRTY29wZSk7XG4gICAgICAgIGN1cnJlbnRTY29wZSA9IGN1cnJlbnRTY29wZS5wYXJlbnROb2RlXG4gICAgICAgICAgICA/IGN1cnJlbnRTY29wZS5wYXJlbnROb2RlLmdldFJvb3ROb2RlKClcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHNjb3Blcztcbn1cbmZ1bmN0aW9uIG9mZnNldFBhcmVudFBvbHlmaWxsKGVsZW1lbnQpIHtcbiAgICAvLyBEbyBhbiBpbml0aWFsIHdhbGsgdG8gY2hlY2sgZm9yIGRpc3BsYXk6bm9uZSBhbmNlc3RvcnMuXG4gICAgZm9yIChsZXQgYW5jZXN0b3IgPSBlbGVtZW50OyBhbmNlc3RvcjsgYW5jZXN0b3IgPSBmbGF0VHJlZVBhcmVudChhbmNlc3RvcikpIHtcbiAgICAgICAgaWYgKCEoYW5jZXN0b3IgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUoYW5jZXN0b3IpLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgYW5jZXN0b3IgPSBmbGF0VHJlZVBhcmVudChlbGVtZW50KTsgYW5jZXN0b3I7IGFuY2VzdG9yID0gZmxhdFRyZWVQYXJlbnQoYW5jZXN0b3IpKSB7XG4gICAgICAgIGlmICghKGFuY2VzdG9yIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShhbmNlc3Rvcik7XG4gICAgICAgIC8vIERpc3BsYXk6Y29udGVudHMgbm9kZXMgYXJlbid0IGluIHRoZSBsYXlvdXQgdHJlZSBzbyB0aGV5IHNob3VsZCBiZSBza2lwcGVkLlxuICAgICAgICBpZiAoc3R5bGUuZGlzcGxheSA9PT0gJ2NvbnRlbnRzJykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0eWxlLnBvc2l0aW9uICE9PSAnc3RhdGljJyB8fCBzdHlsZS5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgICAgICAgcmV0dXJuIGFuY2VzdG9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbmNlc3Rvci50YWdOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgICAgIHJldHVybiBhbmNlc3RvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIG9mZnNldFRvcExlZnRQb2x5ZmlsbChlbGVtZW50LCBvZmZzZXRUb3BPckxlZnQpIHtcbiAgICBsZXQgdmFsdWUgPSBlbGVtZW50W29mZnNldFRvcE9yTGVmdF07XG4gICAgbGV0IG5leHRPZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnRQb2x5ZmlsbChlbGVtZW50KTtcbiAgICBjb25zdCBzY29wZXMgPSBhbmNlc3RvclRyZWVTY29wZXMoZWxlbWVudCk7XG4gICAgd2hpbGUgKG5leHRPZmZzZXRQYXJlbnQgJiYgIXNjb3Blcy5oYXMobmV4dE9mZnNldFBhcmVudC5nZXRSb290Tm9kZSgpKSkge1xuICAgICAgICB2YWx1ZSAtPSBuZXh0T2Zmc2V0UGFyZW50W29mZnNldFRvcE9yTGVmdF07XG4gICAgICAgIG5leHRPZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnRQb2x5ZmlsbChuZXh0T2Zmc2V0UGFyZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgeyBvZmZzZXRMZWZ0LCBvZmZzZXRQYXJlbnQsIG9mZnNldFRvcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9