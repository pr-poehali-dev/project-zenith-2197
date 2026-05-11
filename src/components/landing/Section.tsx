import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, stats, compare, proCon, innovations, cards }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-20 overflow-hidden">
      {subtitle && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.p
          className="text-base md:text-xl max-w-3xl text-neutral-400 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {content}
        </motion.p>
      )}

      {/* Stats grid */}
      {stats && (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-4 bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
              <div className="text-xs md:text-sm text-neutral-400 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Comparison table */}
      {compare && (
        <motion.div
          className="mt-2 overflow-auto max-h-[55vh]"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-2 pr-4 text-neutral-500 font-medium w-1/4">Уровень</th>
                <th className="py-2 px-4 text-white font-semibold w-[37.5%]">🇷🇺 Россия</th>
                <th className="py-2 px-4 text-white font-semibold w-[37.5%]">🇹🇷 Турция</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-2 pr-4 text-neutral-400 text-xs">{row.aspect}</td>
                  <td className="py-2 px-4 text-neutral-200 text-xs">{row.russia}</td>
                  <td className="py-2 px-4 text-neutral-200 text-xs">{row.turkey}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {/* Cards grid */}
      {cards && (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="border border-white/10 rounded-xl p-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="text-lg font-semibold text-white mb-1">{card.title}</div>
              <p className="text-xs text-neutral-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Pros & Cons */}
      {proCon && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { flag: "🇷🇺", name: "Россия", data: proCon.russia },
            { flag: "🇹🇷", name: "Турция", data: proCon.turkey },
          ].map((country) => (
            <div key={country.name} className="border border-white/10 rounded-xl p-5 bg-white/5">
              <div className="text-lg font-bold text-white mb-3">{country.flag} {country.name}</div>
              <div className="mb-3">
                <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">Плюсы</div>
                {country.data.pros.map((p, i) => (
                  <div key={i} className="flex items-start gap-2 mb-1">
                    <span className="text-emerald-400 mt-0.5 text-xs">✓</span>
                    <span className="text-neutral-300 text-xs">{p}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs text-red-400 font-semibold uppercase tracking-wider mb-2">Минусы</div>
                {country.data.cons.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 mb-1">
                    <span className="text-red-400 mt-0.5 text-xs">✗</span>
                    <span className="text-neutral-300 text-xs">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Innovations */}
      {innovations && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {innovations.map((country) => (
            <div key={country.country} className="border border-white/10 rounded-xl p-5 bg-white/5">
              <div className="text-lg font-bold text-white mb-3">{country.flag} {country.country}</div>
              {country.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2 mb-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.07 }}
                >
                  <Icon name="ChevronRight" size={14} className="text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-neutral-300 text-xs leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-blue-400 bg-transparent border-blue-400 hover:bg-blue-400 hover:text-black transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
