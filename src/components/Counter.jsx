import React from 'react'

export default function Counter({ from=0, to=100, duration=1500, suffix='' }){
  const [val, setVal] = React.useState(from)
  React.useEffect(() => {
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.floor(from + (to - from) * eased))
      if (progress < 1) requestAnimationFrame(step)
    }
    const r = requestAnimationFrame(step)
    return () => cancelAnimationFrame(r)
  }, [from, to, duration])
  return <span>{val}{suffix}</span>
}
