import React, { useEffect, useMemo, useState } from 'react'

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [expr, setExpr] = useState('smile') // 'smile' | 'surprised' | 'shy'

  useEffect(() => {
    const handle = (e) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  const { pupilOffsetX, pupilOffsetY } = useMemo(() => {
    // Compute a gentle pupil offset based on cursor position relative to center
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const dx = (mouse.x - cx) / window.innerWidth
    const dy = (mouse.y - cy) / window.innerHeight
    // limit radius inside eye
    const max = 10 // px
    const ox = clamp(dx * 24, -1, 1) * max
    const oy = clamp(dy * 24, -1, 1) * max
    return { pupilOffsetX: ox, pupilOffsetY: oy }
  }, [mouse])

  const cycleExpression = () => {
    setExpr((prev) => (prev === 'smile' ? 'surprised' : prev === 'surprised' ? 'shy' : 'smile'))
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Soft ambient glows */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      </div>

      {/* Face container */}
      <div className="relative z-10 grid place-items-center min-h-screen select-none">
        <div
          className="relative flex items-center justify-center"
          style={{ width: 520, height: 420 }}
          onClick={cycleExpression}
          aria-label="kawaii face"
          role="img"
        >
          {/* Cheeks */}
          <div className="absolute left-20 bottom-32 h-14 w-14 rounded-full bg-pink-200/60 blur-md" />
          <div className="absolute right-20 bottom-32 h-14 w-14 rounded-full bg-pink-200/60 blur-md" />

          {/* Eyes */}
          <Eye side="left" pupilX={pupilOffsetX} pupilY={pupilOffsetY} />
          <Eye side="right" pupilX={pupilOffsetX} pupilY={pupilOffsetY} />

          {/* Mouth */}
          <Mouth expression={expr} />

          {/* Subtle sparkle accents */}
          <Sparkle x={120} y={90} delay={0} />
          <Sparkle x={390} y={120} delay={0.25} />
        </div>
      </div>
    </div>
  )
}

function Eye({ side, pupilX, pupilY }) {
  const isLeft = side === 'left'
  return (
    <div
      className={`absolute top-36 ${isLeft ? 'left-24' : 'right-24'} h-40 w-40 rounded-full bg-white/80 border border-white/70 backdrop-blur shadow-xl overflow-hidden grid place-items-center`}
    >
      {/* iris */}
      <div className="relative h-24 w-24 rounded-full bg-gradient-to-b from-blue-200 to-blue-300 shadow-inner">
        {/* pupil */}
        <div
          className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900 shadow-[0_0_0_6px_rgba(255,255,255,0.7)]"
          style={{ transform: `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))` }}
        />
        {/* glossy highlight */}
        <div className="absolute left-4 top-3 h-5 w-5 rounded-full bg-white/80" />
        <div className="absolute right-5 bottom-4 h-2 w-2 rounded-full bg-white/60" />
      </div>
    </div>
  )
}

function Mouth({ expression }) {
  // SVG mouth with three expressions
  const common = 'transition-all duration-300 ease-out'
  return (
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
      {expression === 'smile' && (
        <svg width="200" height="120" viewBox="0 0 200 120" className={common}>
          <path d="M20 40 C 60 100, 140 100, 180 40" fill="none" stroke="#111827" strokeWidth="10" strokeLinecap="round" />
        </svg>
      )}
      {expression === 'surprised' && (
        <svg width="200" height="120" viewBox="0 0 200 120" className={common}>
          <circle cx="100" cy="70" r="26" fill="#111827" />
          <circle cx="100" cy="70" r="20" fill="#fff" opacity="0.1" />
        </svg>
      )}
      {expression === 'shy' && (
        <svg width="200" height="120" viewBox="0 0 200 120" className={common}>
          <path d="M40 70 Q 100 40, 160 70" fill="none" stroke="#111827" strokeWidth="10" strokeLinecap="round" />
        </svg>
      )}
    </div>
  )
}

function Sparkle({ x, y, delay = 0 }) {
  return (
    <div
      className="absolute text-yellow-400"
      style={{ left: x, top: y, animation: `float 3s ${delay}s ease-in-out infinite` }}
    >
      <span className="text-xl">✶</span>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default App
