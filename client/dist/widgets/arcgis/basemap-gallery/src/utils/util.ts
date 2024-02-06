import { portalUtils } from 'jimu-arcgis'
import { portalUrlUtils } from 'jimu-core'
import { type basemapItem } from '../config'

export const getBasemapGroupByDefault = async (esriRequest, portalUrl, portalSelf, token: string, isByEsriDefault = false): Promise<any> => {
  const groupUrl = portalUrlUtils.getBaseGroupUrl(portalUrl)
  const esriDefaultGroup = 'title:"ArcGIS Online Basemaps" AND owner:esri_en'
  const basemapGalleryGroupQuery = portalSelf.useVectorBasemaps && portalSelf.vectorBasemapGalleryGroupQuery ? portalSelf.vectorBasemapGalleryGroupQuery : portalSelf.basemapGalleryGroupQuery
  const query = isByEsriDefault ? esriDefaultGroup : basemapGalleryGroupQuery
  return esriRequest(groupUrl, {
    query: {
      f: 'json',
      q: query,
      token: token
    },
    responseType: 'json'
  }).then(groups => {
    return Promise.resolve(groups.data.results[0])
  }, async () => {
    return Promise.reject(null)
  })
}

export const getBasemapItemsByGroupId = async (portal, portalUrl, groupId: string, isRuntime: boolean): Promise<basemapItem[]> => {
  const webMapQueryStr = ' ' + portalUtils.getItemQueryStringByTypes(['Web Map']) + ' '
  const queryStr = 'group:' + groupId + ' AND ' + webMapQueryStr
  return portal.queryItems({
    start: 1,
    num: 100,
    f: 'json',
    sortField: 'title',
    sortOrder: 'asc',
    query: queryStr
  } as any).then(async searchResponse => {
    const items = searchResponse.results
    const newItems: basemapItem[] = organizeBasemaps(items, portalUrl)
    return Promise.resolve(newItems)
  })
}

export const organizeBasemaps = (portalItems, portalUrl): basemapItem[] => {
  const basemaps = []
  portalItems.forEach(item => {
    const itemUrl = portalUrlUtils.getItemUrl(portalUrl, item.id)
    // The token will be appended when the image is rendered
    const thumbnailUrl = itemUrl + '/info/' + item.thumbnail
    const basemap: basemapItem = {
      id: item.id,
      title: item.title,
      thumbnailUrl: thumbnailUrl,
      type: item.type
    }
    basemaps.push(basemap)
  })
  return basemaps
}
