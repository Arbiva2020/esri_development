import { type LayoutJson } from './config'

const layoutJson1: LayoutJson = {
  elements: {
    leftTopContainer: {
      type: 'GROUP',
      groupName: 'leftTopContainer',
      direction: 'horizontal',
      style: {
        position: 'absolute',
        top: '15px',
        left: '15px'
      }
    },
    navigator: {
      type: 'GROUP',
      groupName: 'navigator',
      direction: 'vertical',
      style: {
        'margin-right': '10px'
      }
    },
    interact: {
      type: 'GROUP',
      groupName: 'interact',
      direction: 'vertical',
      isResponsive: true,
      style: {
        position: 'absolute',
        top: '15px',
        right: '15px'
      }
    },
    bottom: {
      type: 'GROUP',
      groupName: 'bottom',
      direction: 'vertical',
      className: 'w-100',
      style: {
        position: 'absolute',
        bottom: '0px',
        left: '0px'
      }
    },
    'bottom-line1': {
      type: 'GROUP',
      groupName: 'bottom-line1',
      direction: 'horizontal',
      className: 'd-flex align-items-center justify-content-between w-100 scale-attribution-xy-group',
      style: {
        'margin-bottom': '0px',
        'margin-top': '0px'
      }
    },
    'bottom-line2': {
      type: 'GROUP',
      groupName: 'bottom-line2',
      direction: 'horizontal',
      className: 'd-flex align-items-end justify-content-between w-100',
      style: {
        'padding-left': '15px',
        'padding-right': '15px',
        'margin-bottom': '10px'
      }
    },
    'SelectState-FullScreen-Container': {
      type: 'GROUP',
      groupName: 'SelectState-FullScreen-Container',
      direction: 'vertical',
      className: 'align-items-end'
    },
    attributionGroup: {
      type: 'GROUP',
      groupName: 'attributionGroup',
      direction: 'horizontal',
      style: {
        'max-width': '60%'
      }
    },
    Zoom: {
      type: 'TOOL',
      toolName: 'Zoom',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      style: {
        'margin-bottom': '10px'
      }
    },
    Home: {
      type: 'TOOL',
      toolName: 'Home',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      style: {
        'margin-bottom': '10px'
      }
    },
    Compass: {
      type: 'TOOL',
      toolName: 'Compass',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Navigation: {
      type: 'TOOL',
      toolName: 'Navigation',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      style: {
        'margin-bottom': '10px'
      }
    },
    Locate: {
      type: 'TOOL',
      toolName: 'Locate',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      style: {
        'margin-bottom': '10px'
      }
    },
    Layers: {
      type: 'TOOL',
      toolName: 'Layers',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'left-start',
      style: {
        'margin-bottom': '10px'
      }
    },
    BaseMap: {
      type: 'TOOL',
      toolName: 'BaseMap',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'left-start',
      style: {
        'margin-bottom': '10px'
      }
    },
    Select: {
      type: 'TOOL',
      toolName: 'Select',
      isOnlyExpanded: true,
      isShowIconTitle: true
    },
    SelectState: {
      type: 'TOOL',
      toolName: 'SelectState',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      style: {
        'margin-top': '10px',
        'box-shadow': '0 1px 2px 0 rgba(0,0,0,0)'
      }
    },
    Measure: {
      type: 'TOOL',
      toolName: 'Measure',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'left-start'
    },
    MapSwitch: {
      type: 'TOOL',
      toolName: 'MapSwitch',
      isOnlyExpanded: true,
      isShowIconTitle: true
    },
    FullScreen: {
      type: 'TOOL',
      toolName: 'FullScreen',
      isOnlyExpanded: false,
      isShowIconTitle: true
    },
    ClearActionData: {
      type: 'TOOL',
      toolName: 'ClearActionData',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    ScaleBar: {
      type: 'TOOL',
      toolName: 'ScaleBar',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Attribution: {
      type: 'TOOL',
      toolName: 'Attribution',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      className: 'w-100'
    },
    Search: {
      type: 'TOOL',
      toolName: 'Search',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'left-start',
      style: {
        'margin-bottom': '10px'
      }
    }
  },
  layout: {
    leftTopContainer: {
      isMainGroup: true,
      children: ['navigator', 'Select']
    },
    navigator: {
      children: ['Zoom', 'Home', 'Navigation', 'Locate', 'Compass']
    },
    interact: {
      isMainGroup: true,
      children: ['Search', 'Layers', 'BaseMap', 'Measure']
    },
    'bottom-line1': {
      children: ['ScaleBar', 'attributionGroup']
    },
    'bottom-line2': {
      children: ['MapSwitch', 'SelectState-FullScreen-Container']
    },
    'SelectState-FullScreen-Container': {
      children: ['FullScreen', 'ClearActionData', 'SelectState']
    },
    bottom: {
      isMainGroup: true,
      children: ['bottom-line2', 'bottom-line1']
    },
    attributionGroup: {
      children: ['Attribution']
    }
  }
}

const layoutJson2: LayoutJson = {
  elements: {
    navigator: {
      type: 'GROUP',
      groupName: 'navigator',
      direction: 'vertical',
      className: 'align-items-end'
    },
    interact: {
      type: 'GROUP',
      groupName: 'interact',
      direction: 'horizontal',
      isResponsive: true,
      style: {
        position: 'absolute',
        top: '15px',
        left: '15px'
      }
    },
    fullScreenGroup: {
      type: 'GROUP',
      groupName: 'fullScreenGroup',
      direction: 'horizontal',
      style: {
        position: 'absolute',
        top: '15px',
        right: '15px'
      }
    },
    bottom: {
      type: 'GROUP',
      groupName: 'bottom',
      direction: 'vertical',
      className: 'w-100',
      style: {
        position: 'absolute',
        bottom: '0px',
        left: '0px'
      }
    },
    'bottom-line1': {
      type: 'GROUP',
      groupName: 'bottom-line1',
      direction: 'horizontal',
      className: 'd-flex align-items-center justify-content-between w-100 scale-attribution-xy-group',
      style: {
        'margin-bottom': '0px',
        'margin-top': '0px'
      }
    },
    'bottom-line2': {
      type: 'GROUP',
      groupName: 'bottom-line2',
      direction: 'horizontal',
      className: 'd-flex align-items-end justify-content-between w-100',
      style: {
        'padding-left': '15px',
        'padding-right': '15px',
        'margin-bottom': '10px'
      }
    },
    attributionGroup: {
      type: 'GROUP',
      groupName: 'attributionGroup',
      direction: 'horizontal',
      style: {
        'max-width': '60%'
      },
      className: 'attibute-group'
    },
    Zoom: {
      type: 'TOOL',
      toolName: 'Zoom',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      style: {
        'margin-top': '10px'
      }
    },
    Home: {
      type: 'TOOL',
      toolName: 'Home',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      style: {
        'margin-top': '10px'
      }
    },
    Compass: {
      type: 'TOOL',
      toolName: 'Compass',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Navigation: {
      type: 'TOOL',
      toolName: 'Navigation',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      style: {
        'margin-top': '10px'
      }
    },
    Locate: {
      type: 'TOOL',
      toolName: 'Locate',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      style: {
        'margin-top': '10px'
      }
    },
    Layers: {
      type: 'TOOL',
      toolName: 'Layers',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'bottom',
      style: {
        'margin-right': '10px'
      }
    },
    BaseMap: {
      type: 'TOOL',
      toolName: 'BaseMap',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'bottom',
      style: {
        'margin-right': '10px'
      }
    },
    Select: {
      type: 'TOOL',
      toolName: 'Select',
      isOnlyExpanded: true,
      isShowIconTitle: true
    },
    SelectState: {
      type: 'TOOL',
      toolName: 'SelectState',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      style: {
        'margin-top': '10px',
        'box-shadow': '0 1px 2px 0 rgba(0,0,0,0)'
      }
    },
    Measure: {
      type: 'TOOL',
      toolName: 'Measure',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'bottom',
      style: {
        'margin-right': '10px'
      }
    },
    MapSwitch: {
      type: 'TOOL',
      toolName: 'MapSwitch',
      isOnlyExpanded: true,
      isShowIconTitle: true
    },
    FullScreen: {
      type: 'TOOL',
      toolName: 'FullScreen',
      isOnlyExpanded: false,
      isShowIconTitle: true
    },
    ClearActionData: {
      type: 'TOOL',
      toolName: 'ClearActionData',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    ScaleBar: {
      type: 'TOOL',
      toolName: 'ScaleBar',
      isOnlyExpanded: true,
      isShowIconTitle: false
    },
    Attribution: {
      type: 'TOOL',
      toolName: 'Attribution',
      isOnlyExpanded: true,
      isShowIconTitle: false,
      className: 'w-100'
    },
    Search: {
      type: 'TOOL',
      toolName: 'Search',
      isOnlyExpanded: false,
      isShowIconTitle: true,
      panelPlacement: 'bottom',
      style: {
        'margin-right': '10px'
      }
    }
  },
  layout: {
    navigator: {
      children: ['Compass', 'Locate', 'Navigation', 'Zoom', 'Home', 'SelectState']
    },
    interact: {
      isMainGroup: true,
      children: ['Search', 'Layers', 'BaseMap', 'Measure', 'Select']
    },
    fullScreenGroup: {
      isMainGroup: true,
      children: ['FullScreen', 'ClearActionData']
    },
    'bottom-line1': {
      children: ['ScaleBar', 'attributionGroup']
    },
    'bottom-line2': {
      children: ['MapSwitch', 'navigator']
    },
    bottom: {
      isMainGroup: true,
      children: ['bottom-line2', 'bottom-line1']
    },
    attributionGroup: {
      children: ['Attribution']
    }
  }
}

const layoutJsons: LayoutJson[] = [layoutJson1, layoutJson2]

export default layoutJsons
