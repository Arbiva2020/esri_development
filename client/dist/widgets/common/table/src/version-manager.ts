import { BaseVersionManager } from 'jimu-core'

class VersionManager extends BaseVersionManager {
  versions = [{
    version: '1.6.0',
    description: 'Add editable to table fields.',
    upgrader: (oldConfig, id) => {
      let newConfig = oldConfig
      if (newConfig.layersConfig.length === 0) {
        return newConfig
      }
      newConfig.layersConfig.forEach((config, i) => {
        const newTableFields = config.tableFields.map(field => {
          return {
            ...field,
            editAuthority: true
          }
        })
        newConfig = newConfig.setIn(['layersConfig', i, 'tableFields'], newTableFields)
      })
      return newConfig
    }
  }, {
    version: '1.10.0',
    description: 'Add visible to table fields.',
    upgrader: (oldConfig) => {
      let newConfig = oldConfig
      if (newConfig.layersConfig.length === 0) {
        return newConfig
      }
      newConfig.layersConfig.forEach((config, i) => {
        const newTableFields = config.tableFields.map(field => {
          return {
            ...field,
            visible: true
          }
        })
        newConfig = newConfig.setIn(['layersConfig', i, 'tableFields'], newTableFields)
      })
      return newConfig
    }
  }, {
    version: '1.12.0',
    description: 'Add header setting options.',
    upgrader: (oldConfig) => {
      let newConfig = oldConfig
      if (newConfig.layersConfig.length === 0) {
        return newConfig
      }
      newConfig.layersConfig.forEach((config, i) => {
        const defaultHeaderFontSetting = {
          backgroundColor: '',
          fontSize: 14,
          bold: false,
          color: ''
        }
        config = config.set('headerFontSetting', defaultHeaderFontSetting)
        newConfig = newConfig.setIn(['layersConfig', i], config)
      })
      return newConfig
    }
  }]
}

export const versionManager = new VersionManager()
