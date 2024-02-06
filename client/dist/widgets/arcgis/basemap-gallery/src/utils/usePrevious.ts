import { React } from 'jimu-core'
const { useEffect, useRef } = React

export function usePrevious (value): any {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
