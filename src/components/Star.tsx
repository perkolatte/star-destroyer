interface StarProps {
  x: number
  y: number
  size?: number
  brightness?: number
}

export const Star = ({ x, y, size = 2, brightness = 1 }: StarProps) => {
  return (
    <div
      className="star"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `rgba(255, 255, 255, ${brightness})`,
        borderRadius: '50%',
        boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, ${brightness * 0.8})`,
      }}
    />
  )
}

export default Star
