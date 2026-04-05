import { motion } from "framer-motion";

interface ExpeditionCardProps {
  item: {
    tag: string;
    title: string;
    time: string;
    img: string;
    author: string;
    difficulty: string;
  };
  index: number;
}

export const ExpeditionCard = ({ item, index }: ExpeditionCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.6 }}
    className="group relative flex flex-col h-full"
  >
    <div className="aspect-[3/4] w-full bg-zinc-200 dark:bg-zinc-800 rounded-[2rem] mb-6 overflow-hidden relative shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-700">
       <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />
       
       <motion.img 
         src={item.img} 
         className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out" 
         alt={item.title} 
       />
       
       <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-600 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-tighter">
                {item.difficulty}
              </span>
              <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">{item.time}</span>
            </div>
            <h3 className="text-3xl font-black leading-none mb-4 group-hover:text-blue-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-white/60 text-sm line-clamp-2 mb-6 font-medium">
              A first-person account of the legendary expedition that changed our understanding of nature and the secrets it holds.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30" />
                <span className="text-xs font-bold text-white/80">{item.author}</span>
              </div>
              <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
              </span>
            </div>
          </div>
       </div>
    </div>
  </motion.div>
);
