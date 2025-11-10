import React, { useMemo } from 'react'

function App() {
  return (
    <div className="min-h-screen w-full relative bg-[#0a0f16] text-white overflow-hidden">
      {/* Ambient light trails */}
      <AmbientLights />

      {/* Vignette and noise */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_-10%,rgba(0,200,255,0.25),transparent_60%),radial-gradient(900px_700px_at_20%_120%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(800px_600px_at_90%_100%,rgba(56,189,248,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),transparent_20%,transparent_80%,rgba(0,0,0,0.4))]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.07]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'64\' height=\'64\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'2\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.5\'/></svg>")' }} />
      </div>

      {/* Header (sleek, minimal) */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-cyan-500/20 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.35)] grid place-items-center text-cyan-300 text-xs font-bold">R</div>
            <div className="leading-tight">
              <p className="text-sm tracking-widest text-white/80">RAVEN</p>
              <p className="text-[10px] text-white/40">Realtime Adaptive Vector ENtity</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"/> live</span>
            <span className="hidden sm:inline">v0.1 • secure channel</span>
          </div>
        </div>
      </header>

      {/* Dashboard body */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Layout: center holographic face, side panels, waveform below */}
        <div className="grid lg:grid-cols-[1fr_minmax(640px,900px)_1fr] gap-6 items-start">
          {/* Left subtle panel */}
          <SidePanel side="left" />

          {/* Center: Holographic Face */}
          <section
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* glossy top line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <div className="relative aspect-[16/10] md:aspect-[16/8] grid place-items-center">
              <div
                className="relative"
                style={{ transform: 'perspective(1000px) rotateX(15deg)', transformStyle: 'preserve-3d' }}
              >
                <HoloFace />
              </div>

              {/* Floating UI chips */}
              <div className="absolute left-4 top-4 flex items-center gap-2 text-[10px]">
                <Chip glow="cyan">neural: online</Chip>
                <Chip glow="purple">vision: 4k</Chip>
              </div>
              <div className="absolute right-4 top-4 flex items-center gap-2 text-[10px]">
                <Chip glow="cyan">latency: 12ms</Chip>
                <Chip glow="purple">secure: on</Chip>
              </div>

              {/* Minimal HUD icons */}
              <div className="absolute right-4 bottom-4 flex items-center gap-2 text-white/70">
                <IconGlow>◈</IconGlow>
                <IconGlow>◎</IconGlow>
                <IconGlow>✦</IconGlow>
              </div>
            </div>

            {/* Waveform strip */}
            <div className="border-t border-white/10 bg-black/20">
              <Waveform />
            </div>
          </section>

          {/* Right subtle panel */}
          <SidePanel side="right" />
        </div>

        {/* Minimal chat overlay */}
        <ChatOverlay />
      </main>

      <StyleDefs />
    </div>
  )
}

function HoloFace() {
  // A stylized holographic semi-human face built with SVG particles and neon circuits
  return (
    <svg width="680" height="520" viewBox="0 0 680 520" className="drop-shadow-[0_0_60px_rgba(56,189,248,0.35)]">
      {/* Misty glow */}
      <defs>
        <radialGradient id="holoGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="circuit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>

      <ellipse cx="340" cy="260" rx="300" ry="220" fill="url(#holoGlow)" />

      {/* Face outline */}
      <path d="M120,220 C160,60 520,60 560,220 C560,390 520,460 340,480 C180,460 120,390 120,220 Z" fill="transparent" stroke="url(#circuit)" strokeOpacity="0.6" strokeWidth="2" />

      {/* Neon circuits */}
      {Array.from({ length: 18 }).map((_, i) => (
        <path
          key={i}
          d={`M ${140 + i * 24},${220 + ((i % 2) * 12)} C ${200 + i * 18},${140 + (i % 3) * 10} ${420 - i * 10},${140 + ((i + 1) % 3) * 10} ${500 - i * 18},${220 + ((i % 2) * 12)}`}
          fill="none"
          stroke="url(#circuit)"
          strokeOpacity={0.22 + (i % 3) * 0.06}
          strokeWidth="1.5"
          className="animate-circuit"
          style={{ animationDelay: `${i * 0.08}s` }}
        />
      ))}

      {/* Eyes */}
      <g>
        <Eye cx={250} cy={255} />
        <Eye cx={430} cy={255} />
      </g>

      {/* Particle field */}
      {Array.from({ length: 120 }).map((_, i) => (
        <circle key={i} cx={140 + (i * 4.2) % 400} cy={160 + ((i * 11) % 240)} r={(i % 5) === 0 ? 2.2 : 1.2} fill={i % 2 ? '#67e8f9' : '#a78bfa'} opacity={0.35}
          className="animate-drift" style={{ animationDelay: `${(i % 20) * 0.12}s` }} />
      ))}
    </svg>
  )
}

function Eye({ cx, cy }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={42} fill="#031625" stroke="#22d3ee" strokeOpacity="0.35" />
      <circle cx={cx} cy={cy} r={28} fill="url(#irisGrad)" />
      {/* iris gradient */}
      <defs>
        <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="70%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#60a5fa" />
        </radialGradient>
      </defs>
      {/* pupil */}
      <circle cx={cx} cy={cy} r={12} fill="#0b1220" className="drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
      {/* glow rings */}
      <circle cx={cx} cy={cy} r={36} fill="none" stroke="#67e8f9" strokeOpacity="0.35" className="animate-ping-slow" />
      <circle cx={cx} cy={cy} r={48} fill="none" stroke="#8b5cf6" strokeOpacity="0.18" className="animate-ping-slower" />
      {/* highlight */}
      <circle cx={cx - 10} cy={cy - 10} r={6} fill="#e0f2fe" opacity="0.8" />
    </g>
  )
}

function Waveform() {
  const bars = useMemo(() => Array.from({ length: 72 }, (_, i) => i), [])
  return (
    <div className="relative h-24 md:h-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
      <div className="absolute inset-0 flex items-end justify-center gap-[6px] px-4">
        {bars.map((i) => (
          <div
            key={i}
            className="w-[3px] md:w-[4px] rounded-full bg-cyan-400/80 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            style={{ height: `${24 + (i % 7) * 6}px`, animation: `wave ${(1.8 + (i % 5) * 0.1).toFixed(2)}s ease-in-out ${((i % 12) * 0.06).toFixed(2)}s infinite`, backgroundImage: 'linear-gradient(to top, rgba(168,85,247,0.8), rgba(56,189,248,0.9))' }}
          />
        ))}
      </div>
    </div>
  )
}

function SidePanel({ side }) {
  return (
    <aside className={`hidden lg:flex ${side === 'left' ? 'justify-start' : 'justify-end'}`}>
      <div className="w-64 h-[520px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <h3 className="text-xs uppercase tracking-widest text-white/50 mb-3">Telemetry</h3>
        <div className="space-y-3 text-[11px] text-white/70">
          <PanelRow label="core" value="98%" color="cyan" />
          <PanelRow label="vision" value="4.0k" color="purple" />
          <PanelRow label="audio" value="sync" color="cyan" />
          <PanelRow label="graph" value="active" color="purple" />
          <PanelRow label="secure" value="on" color="cyan" />
        </div>
        <div className="absolute bottom-4 inset-x-4 h-24 rounded-xl bg-black/30 border border-white/10 grid place-items-center text-white/50 text-xs">
          <span>aux panel</span>
        </div>
      </div>
    </aside>
  )
}

function PanelRow({ label, value, color }) {
  const c = color === 'cyan' ? 'from-cyan-400 to-cyan-300' : 'from-purple-400 to-purple-300'
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className={`h-5 w-5 rounded-md bg-gradient-to-br ${c} bg-opacity-40 shadow-[0_0_14px_rgba(34,211,238,0.35)]`} />
        <span className="uppercase tracking-widest text-white/50">{label}</span>
      </div>
      <span className="font-mono text-white/80">{value}</span>
    </div>
  )
}

function ChatOverlay() {
  return (
    <div className="mt-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between text-xs text-white/60">
          <span className="uppercase tracking-widest">RAVEN • secure chat</span>
          <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"/> encrypted</span>
        </div>
        <div className="h-40 bg-black/20 px-4 sm:px-6 py-3 text-white/60 text-sm">
          <p>RAVEN: Online. Ask anything. Voice channel ready.</p>
        </div>
        <div className="px-3 sm:px-4 py-3 border-t border-white/10 bg-black/30">
          <div className="flex items-center gap-2">
            <input className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Type a message to RAVEN…" />
            <button className="px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-[0_10px_30px_-8px_rgba(34,211,238,0.6)] hover:opacity-95 transition">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Chip({ children, glow = 'cyan' }) {
  const ring = glow === 'cyan' ? 'shadow-[0_0_16px_rgba(34,211,238,0.35)] text-cyan-200 border-cyan-400/30' : 'shadow-[0_0_16px_rgba(168,85,247,0.35)] text-purple-200 border-purple-400/30'
  return (
    <span className={`px-2 py-1 rounded-md bg-white/5 border ${ring} backdrop-blur`}>{children}</span>
  )
}

function IconGlow({ children }) {
  return (
    <span className="h-8 w-8 grid place-items-center rounded-md bg-white/5 border border-white/10 text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.15)]">{children}</span>
  )
}

function AmbientLights() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute -top-24 -left-24 h-96 w-96 bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] bg-purple-500/20 blur-[120px] rounded-full" />
      <div className="absolute top-1/3 left-1/4 h-72 w-72 bg-cyan-400/15 blur-[120px] rounded-full" />
    </div>
  )
}

function StyleDefs() {
  return (
    <style>{`
      @keyframes circuitGlow { 0%,100% { stroke-opacity: 0.15 } 50% { stroke-opacity: 0.5 } }
      @keyframes drift { 0% { transform: translateY(0px) translateX(0px); opacity: .6 } 50% { transform: translateY(-6px) translateX(3px); opacity: .9 } 100% { transform: translateY(0px) translateX(0px); opacity: .6 } }
      @keyframes wave { 0%, 100% { transform: scaleY(0.4) } 50% { transform: scaleY(1) } }

      .animate-circuit { animation: circuitGlow 2.8s ease-in-out infinite; }
      .animate-drift { animation: drift 3.5s ease-in-out infinite; }
      .animate-ping-slow { animation: ping 2.6s cubic-bezier(0,0,.2,1) infinite; }
      .animate-ping-slower { animation: ping 3.6s cubic-bezier(0,0,.2,1) infinite; }
    `}</style>
  )
}

export default App
