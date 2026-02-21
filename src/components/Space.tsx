import { ReactNode } from 'react'

interface SpaceProps {
  children?: ReactNode
  width?: number
  height?: number
}

export const Space = ({ children, width = 800, height = 600 }: SpaceProps) => {
  return (
    <div
      className="space"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        border: '1px solid #ccc',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  )
}

export default Space
