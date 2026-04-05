import { motion } from "framer-motion";
import { MapPin, Compass, Globe, ArrowRight } from "lucide-react";

const locations = [
  { x: 25, y: 30, name: "Alaska", desc: "Arctic Expeditions" },
  { x: 48, y: 35, name: "Swiss Alps", desc: "Mountain Treks" },
  { x: 52, y: 28, name: "Iceland", desc: "Volcanic Tours" },
  { x: 75, y: 45, name: "Himalayas", desc: "Peak Climbing" },
  { x: 82, y: 55, name: "Japan", desc: "Cultural Trails" },
  { x: 22, y: 65, name: "Amazon", desc: "Rainforest Safari" },
  { x: 28, y: 55, name: "Galápagos", desc: "Wildlife Adventure" },
  { x: 55, y: 52, name: "Mediterranean", desc: "Coastal Voyages" },
  { x: 88, y: 72, name: "New Zealand", desc: "Adventure Capital" },
  { x: 72, y: 78, name: "Australia", desc: "Outback Explorer" },
];

const stats = [
  { icon: Globe, value: "45+", label: "Countries" },
  { icon: Compass, value: "500+", label: "Expeditions" },
  { icon: MapPin, value: "10K+", label: "Locations Mapped" },
];

export const ExpeditionMapSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="py-24 px-6 md:px-16 bg-zinc-950 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Dot Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(rgba(59,130,246,0.4) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Global Reach
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight"
          >
            EXPLORE THE <br />
            <span className="text-blue-500">ENTIRE WORLD</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mt-6 font-medium"
          >
            From frozen tundras to tropical rainforests, discover expeditions waiting in every corner of the globe.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto text-blue-500 mb-2" />
              <p className="text-3xl md:text-4xl font-black text-white">{stat.value}</p>
              <p className="text-sm text-zinc-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Map Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative w-full aspect-[2/1] md:aspect-[21/9] rounded-3xl overflow-hidden bg-zinc-900/50 border border-zinc-800"
        >
          {/* World Map SVG Background */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 500">
            {/* Simplified world map path */}
            <path 
              d="M150,120 Q200,100 250,110 T350,100 T450,120 T550,110 T650,130 T750,120 T850,140 L850,300 Q800,320 700,310 T500,330 T300,320 T150,300 Z" 
              fill="none" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="2"
            />
            {/* Continents */}
            <path d="M180,100 Q220,90 260,100 T320,95 T350,110 T300,130 T220,120 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M450,80 Q520,70 580,85 T650,100 T620,140 T550,150 T480,130 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M480,150 Q520,140 560,160 T600,220 T550,280 T500,260 T470,200 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M180,180 Q250,170 300,200 T280,280 T220,300 T160,260 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M650,250 Q720,240 780,280 T750,350 T680,360 T630,320 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M750,100 Q820,90 880,120 T860,180 T800,170 T760,140 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M800,300 Q850,290 900,320 T880,380 T820,370 Z" fill="rgba(255,255,255,0.05)" />
          </svg>

          {/* Animated location pins */}
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.05 }}
              className="absolute group cursor-pointer"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="relative"
              >
                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50">
                  <div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-50" />
                </div>
              </motion.div>
              
              {/* Tooltip */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-zinc-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
              >
                <p className="text-white font-bold text-sm">{loc.name}</p>
                <p className="text-zinc-400 text-xs">{loc.desc}</p>
              </motion.div>
            </motion.div>
          ))}

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {locations.slice(0, 5).map((_, i) => (
              <motion.circle
                key={i}
                cx={`${locations[i].x}%`}
                cy={`${locations[i].y}%`}
                r="2"
                fill="none"
                stroke="rgba(59,130,246,0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
              />
            ))}
          </svg>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-colors group">
            <span>Explore All Destinations</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
