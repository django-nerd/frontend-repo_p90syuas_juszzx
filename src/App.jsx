import React from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 via-white to-blue-50 text-gray-900">
      {/* Top nav */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/60 border-b border-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-400 to-blue-400 shadow-lg shadow-pink-200/50 grid place-items-center text-white text-lg">☆</div>
            <div className="leading-tight">
              <p className="text-lg font-extrabold tracking-tight">Kawaii AI</p>
              <p className="text-xs text-gray-500 -mt-0.5">Private, playful intelligence</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#privacy" className="text-gray-600 hover:text-gray-900">Privacy</a>
            <a href="/test" className="text-gray-600 hover:text-gray-900">System Test</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#chat" className="px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm">Start Private Session</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Soft gradient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,182,193,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.25),transparent_35%),radial-gradient(circle_at_50%_70%,rgba(167,139,250,0.25),transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16 pb-8">
          {/* Copy */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-white/60 shadow-sm mb-4">
              <span className="text-pink-500 text-base">✿</span>
              <span className="text-xs font-medium text-gray-700">Kawaii anime style assistant</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              Your private, anime‑grade intelligence assistant
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl">
              A cute mini robot that watches your cursor and helps you write, plan, and learn — privately. No ads, no tracking, just you and your cozy genius.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#chat" className="px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold shadow-lg shadow-pink-200/60 hover:opacity-95 transition">Start Private Session</a>
              <a href="#features" className="px-5 py-3 rounded-full bg-white/80 backdrop-blur border border-white text-gray-800 hover:bg-white transition font-medium">See Features</a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-500">
              <span className="px-2.5 py-1 rounded-full bg-white/70 border border-white">End‑to‑end privacy</span>
              <span className="px-2.5 py-1 rounded-full bg-white/70 border border-white">Anime‑cute UI</span>
              <span className="px-2.5 py-1 rounded-full bg-white/70 border border-white">Cursor reactive</span>
              <span className="px-2.5 py-1 rounded-full bg-white/70 border border-white">No data sharing</span>
            </div>

            {backendUrl && (
              <p className="mt-4 text-xs text-gray-400">Connected to backend: <span className="font-mono">{backendUrl}</span></p>
            )}
          </div>

          {/* Spline scene */}
          <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] rounded-2xl bg-white/60 border border-white/70 shadow-xl overflow-hidden">
            <Spline scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Cute corner badges */}
            <div className="pointer-events-none absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] bg-white/80 border border-white/70">interactive</div>
            <div className="pointer-events-none absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] bg-white/80 border border-white/70">peek with your cursor →</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Private by design',
                desc: 'Local-first mindset with strict data minimization and controls you understand.'
              },
              {
                title: 'Cute, not cutesy',
                desc: 'Playful aesthetic with pro-grade ergonomics for deep creative work.'
              },
              {
                title: 'Smart + gentle',
                desc: 'Get summaries, plans, drafts, and explanations with a supportive tone.'
              }
            ].map((f, i) => (
              <div key={i} className="rounded-2xl bg-white/70 border border-white/70 p-6 shadow-sm">
                <div className="text-2xl">{i === 0 ? '🔒' : i === 1 ? '✨' : '🧠'}</div>
                <h3 className="mt-3 font-semibold text-lg">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat preview */}
      <section id="chat" className="relative pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-white/70 bg-white/80 backdrop-blur shadow-xl">
            <div className="px-4 sm:px-6 py-4 border-b border-white/70 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🤖</span>
                <div>
                  <p className="font-semibold leading-tight">Mini Robo</p>
                  <p className="text-xs text-gray-500 -mt-0.5">your kawaii private assistant</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">E2E • Incognito</div>
            </div>

            <div className="h-64 sm:h-72 p-4 sm:p-6 space-y-3 overflow-auto bg-gradient-to-b from-white/60 to-white/90">
              <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white border border-white px-4 py-3 shadow-sm">
                <p className="text-sm">Konichiwa! I am your cozy helper. Ask me to plan your study week, write notes, or translate anything ~</p>
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-3 ml-auto shadow-sm">
                <p className="text-sm">Help me make a 3‑day study plan for calculus, with cute breaks.</p>
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white border border-white px-4 py-3 shadow-sm">
                <p className="text-sm">Hehe yes! Day 1: limits + derivatives, 45‑min focus blocks, 10‑min snack + stretch. Day 2: chain/ product rules + cute doodle break. Day 3: integrals review + self‑quiz. I’ll keep everything private for you. 💖</p>
              </div>
            </div>

            <div className="p-3 sm:p-4 border-t border-white/70 bg-white/70">
              <div className="flex items-center gap-2">
                <input placeholder="Write to your mini robo…" className="flex-1 px-4 py-3 rounded-full border border-white bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder:text-gray-400" />
                <button className="px-5 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition">Send</button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3 text-xs">
                {['Summarize notes', 'Plan study week', 'Translate to JP', 'Explain step‑by‑step'].map((t) => (
                  <button key={t} className="px-3 py-1.5 rounded-full bg-white border border-white text-gray-700 hover:bg-gray-50">{t}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="privacy" className="border-t border-white/60 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kawaii AI — all sessions are private and ephemeral.</p>
          <div className="flex items-center gap-3">
            <a href="/test" className="underline hover:no-underline">Connectivity Test</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
