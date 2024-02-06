import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  exampleConfigProperty: string
  showScale: boolean
  showZoom: boolean
}

export type IMConfig = ImmutableObject<Config>
