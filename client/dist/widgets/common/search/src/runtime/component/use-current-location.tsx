/** @jsx jsx */
import { React, jsx, hooks } from 'jimu-core'
import { Button, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import defaultMessage from '../translations/default'
import { getCurrentLocation, getCurrentAddress } from '../utils/locator-service'
import { PinOutlined } from 'jimu-icons/outlined/application/pin'
import { WarningOutlined } from 'jimu-icons/outlined/suggested/warning'
import { type GeocodeListItem, type IMServiceList, SearchServiceType, type InitResultServiceListOption } from '../../config'
const { useState } = React
interface CurrentLocationProps {
  isShowCurrentLocation: boolean
  serviceList: IMServiceList
  onLocationChange: (searchText: string, initResultServiceListOption?: InitResultServiceListOption, isUseLocationError?: boolean) => void
}

const CurrentLocation = (props: CurrentLocationProps) => {
  const nls = hooks.useTranslation(defaultMessage, jimuiDefaultMessage)
  const { serviceList, onLocationChange } = props
  const [isGetLocationError, setIsGetLocationError] = useState(false)
  const [geocodeServiceItem, setGeocodeServiceItem] = React.useState<GeocodeListItem>(null)
  const [showLoading, setShowLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    initGeocodeService()
    // eslint-disable-next-line
  }, [serviceList])

  const confirmUseCurrentLocation = () => {
    if (showLoading) {
      return false
    }
    setShowLoading(true)
    getCurrentLocation(getLocationSuccess, getLocationError)
  }

  const initGeocodeService = () => {
    for (const configId in serviceList) {
      const serviceItem = serviceList[configId]?.asMutable({ deep: true })
      if (serviceItem.searchServiceType === SearchServiceType.GeocodeService) {
        setGeocodeServiceItem(serviceItem)
        break
      }
    }
  }

  const getLocationSuccess = (position) => {
    setShowLoading(false)
    const longitude = position.coords.longitude
    const latitude = position.coords.latitude
    const address = `${longitude},${latitude}`
    if (geocodeServiceItem) {
      const geocodeURL = geocodeServiceItem?.geocodeURL
      getCurrentAddress(geocodeURL, position).then(res => {
        onLocationChange(res)
      })
    } else {
      onLocationChange(address)
    }
  }

  const getLocationError = (error) => {
    setIsGetLocationError(true)
    setShowLoading(false)
    onLocationChange(null, null, true)
  }

  return (
    <div>
      {!isGetLocationError && <Button role='button' onClick={confirmUseCurrentLocation} title={nls('useCurrentLocation')}>
        <PinOutlined className='mr-2'/>
        {nls('useCurrentLocation')}
      </Button>}
      {isGetLocationError && <Button role='button' title={nls('couldNotRetrieve')}>
        <WarningOutlined className='mr-2'/>
        {nls('couldNotRetrieve')}
      </Button>}
    </div>
  )
}

export default CurrentLocation
