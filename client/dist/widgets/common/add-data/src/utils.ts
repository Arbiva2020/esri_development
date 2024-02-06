import { type useTranslation } from 'jimu-core/lib/hooks'
import { ItemCategory } from 'jimu-ui/basic/item-selector'
import { type ItemCategoryInfo } from './config'

export const getDefaultItemCategoriesInfo = () => {
  return [
    {
      type: ItemCategory.MyContent,
      customLabel: '',
      enabled: true,
      id: ItemCategory.MyContent
    },
    {
      type: ItemCategory.MyGroup,
      customLabel: '',
      enabled: true,
      id: ItemCategory.MyGroup
    },
    {
      type: ItemCategory.MyOrganization,
      customLabel: '',
      enabled: true,
      id: ItemCategory.MyOrganization
    },
    {
      type: ItemCategory.Public,
      customLabel: '',
      enabled: true,
      id: ItemCategory.Public
    },
    {
      type: ItemCategory.LivingAtlas,
      customLabel: '',
      enabled: true,
      id: ItemCategory.LivingAtlas
    }
  ] as ItemCategoryInfo[]
}

export const useDefaultItemCategoryNames = (translate: ReturnType<typeof useTranslation>) => {
  return new Map([
    [ItemCategory.MyContent, translate('myContent')],
    [ItemCategory.MyGroup, translate('myGroup')],
    [ItemCategory.MyOrganization, translate('myOrganization')],
    [ItemCategory.Public, translate('public')],
    [ItemCategory.LivingAtlas, translate('livingAtlas')],
    [ItemCategory.Curated, translate('curated')]
  ])
}
