/** @jsx jsx */
import {
  jsx,
  AppMode,
  React,
  type LinkTo,
  type LinkResult,
  classNames,
  AnimationContext,
  type ImmutableObject,
  type UrlParameters,
  TransitionContainer,
  LinkType,
  type BrowserSizeMode
} from 'jimu-core'
import { styleUtils, _Link as Link, type LinkTarget } from 'jimu-ui'
import { LayoutEntry } from 'jimu-layouts/layout-runtime'
import { Status, type IMTransitionInfo, type IMConfig } from '../../config'
import { type IMLinkParam } from 'jimu-ui/advanced/setting-components'

const { useState, useRef, useEffect } = React

interface Props {
  /**
   * one or more expressions
   */
  linkParam?: IMLinkParam
  queryObject: ImmutableObject<UrlParameters>
  cardConfigs: IMConfig
  layouts: any
  appMode: AppMode
  browserSizeMode: BrowserSizeMode
  hoverPlayId: number
  regularPlayId: number
  previewId: number
  previousIndex: number
  currentIndex: number
}

const CardContent = function (props: Props) {
  const linkRef = useRef<any>(null)
  const didMountRef = useRef<boolean>(false)
  const { cardConfigs, layouts, appMode, linkParam, browserSizeMode, hoverPlayId, regularPlayId, previewId, previousIndex, currentIndex } = props
  let { queryObject } = props

  const [transitionInfo, setTransitionInfo] = useState(null as IMTransitionInfo)
  const [isHoverEnable, setIsHoverEnable] = useState(false)
  const [isInBuilder, setIsInBuilder] = useState(false)

  useEffect(() => {
    setTransitionInfo(cardConfigs?.transitionInfo)
    setIsHoverEnable(cardConfigs?.HOVER?.enable)
    setIsInBuilder(window.jimuConfig?.isInBuilder || false)
  }, [cardConfigs])

  useEffect(() => {
    didMountRef.current = true
  }, [])

  const getCardContent = () => {
    const cardContent = []
    let regularLayout, regularBgStyle, hoverLayout, hoverBgStyle
    let target: LinkTarget
    let linkTo: LinkTo
    if (isInBuilder && appMode !== AppMode.Run) {
      regularBgStyle = getBackgroundStyle(Status.Regular)
      regularLayout = layouts[Status.Regular]
      if (isHoverEnable) {
        hoverBgStyle = getBackgroundStyle(Status.Hover)
        hoverLayout = layouts[Status.Hover]
      }
    } else {
      regularLayout = layouts[Status.Regular]
      regularBgStyle = getBackgroundStyle(Status.Regular)
      if (linkParam && linkParam.linkType) {
        target = linkParam.openType
        linkTo = {
          linkType: linkParam.linkType
        } as LinkResult

        if (linkParam.linkType === LinkType.WebAddress) {
          linkTo.value = linkParam?.value || ''
          queryObject = undefined
        } else {
          linkTo.value = linkParam.value
        }
      }
      if (isHoverEnable) {
        hoverLayout = layouts[Status.Hover]
        hoverBgStyle = getBackgroundStyle(Status.Hover)
      }
    }

    const mergedStyle: any = {
      ...styleUtils.toCSSStyle(regularBgStyle || ({} as any))
    }
    const isShowLink =
      linkParam?.linkType && linkParam?.linkType !== LinkType.None
    const regularElement = (
      <div
        className={classNames(
          'card-content d-flex surface-1',
          isShowLink ? 'card-link' : ''
        )}
        key={Status.Regular}
      >
        <div className='w-100 animation-list' style={mergedStyle}>
          <Link
            className='p-0 w-100 h-100 border-0 clear-background card-link'
            ref={linkRef}
            to={linkTo}
            target={target}
            queryObject={queryObject}
          />
          <div className='d-flex w-100 h-100'>
            <AnimationContext.Provider
              value={{
                setting: transitionInfo?.oneByOneEffect || null,
                playId: regularPlayId,
                oid: regularLayout?.[browserSizeMode]
              }}
            >
              <LayoutEntry layouts={regularLayout} />
            </AnimationContext.Provider>
          </div>
        </div>
      </div>
    )
    cardContent.push(regularElement)

    if (isHoverEnable) {
      const hoverMergedStyle: any = {
        ...styleUtils.toCSSStyle(hoverBgStyle || ({} as any))
      }
      const hoverElement = (
        <div
          className={classNames(
            'card-content d-flex surface-1 w-100 h-100',
            isShowLink ? 'card-link' : ''
          )}
          key={Status.Hover}
        >
          <div className='w-100 h-100 animation-list' style={hoverMergedStyle}>
            <Link
              className='p-0 w-100 h-100 border-0 clear-background card-link'
              ref={linkRef}
              to={linkTo}
              target={target}
              queryObject={queryObject}
            />
            <div className='d-flex w-100 h-100'>
              <AnimationContext.Provider
                value={{
                  setting: transitionInfo?.oneByOneEffect || null,
                  playId: hoverPlayId,
                  oid: hoverLayout[browserSizeMode]
                }}
              >
                <LayoutEntry layouts={hoverLayout} />
              </AnimationContext.Provider>
            </div>
          </div>
        </div>
      )
      cardContent.push(hoverElement)
    }

    return cardContent
  }

  const getBackgroundStyle = (status: Status) => {
    const backgroundStyle = cardConfigs[status].backgroundStyle
    if (backgroundStyle?.boxShadow) {
      return backgroundStyle.setIn(['boxShadow', 'color'], 'transparent')
    } else {
      return backgroundStyle
    }
  }

  // const applyLinkResult = hooks.useApplyLinkResult()
  const handleItemClick = evt => {
    const tagName = (evt.target && evt.target.tagName) || ''
    if (
      !(
        tagName.toLowerCase() === 'a' ||
        tagName.toLowerCase() === 'button' ||
        evt.exbEventType === 'linkClick'
      )
    ) {
      if (linkRef.current) {
        // const target = linkParam?.openType
        // const linkResult: LinkResult = { linkType: linkParam.linkType, value: linkParam.value }
        // applyLinkResult({ evt, linkTo: linkResult, target, replace: false, queryObject })
        linkRef.current?.click()
      }
    }

    if (evt.exbEventType === 'linkClick') {
      delete evt.exbEventType
    }
  }

  return (
    <div onClick={handleItemClick}>
      <TransitionContainer
        previousIndex={previousIndex}
        currentIndex={currentIndex}
        transitionType={transitionInfo?.transition?.type}
        direction={transitionInfo?.transition?.direction}
        playId={didMountRef.current ? previewId : null}
        withOneByOne={!!transitionInfo?.oneByOneEffect}
      >
        {getCardContent()}
      </TransitionContainer>
    </div>
  )
}

export default CardContent
