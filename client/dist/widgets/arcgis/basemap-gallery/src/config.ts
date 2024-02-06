import { type ImmutableObject } from 'jimu-core'
export enum BasemapsType {
  Organization = 'ORGANIZATION',
  Custom = 'CUSTOM'
}

export interface config {
  customBasemaps: basemapItem[]
  basemapsType: BasemapsType
}

export interface basemapItem {
  id: string
  title: string
  thumbnailUrl: string
  type: string
}

export interface DatasourceBasemaps {
  [propName: string]: __esri.Basemap
}
export type IMConfig = ImmutableObject<config>
