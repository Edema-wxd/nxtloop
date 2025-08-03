 "use client";

 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";

 const HeroSection = () => {
   return (
     <section className="bg-white py-20 overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           <motion.div
             className="space-y-8 hero-content"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <motion.h1
               className="text-5xl lg:text-6xl font-bold text-black leading-tight"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
               Here&apos;s who my child is today. Help us grow together.
             </motion.h1>
             <motion.p
               className="text-xl text-gray-800 leading-relaxed"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
             >
               Empowering children&apos;s homes, foster carers, and caregivers
               with the tools to provide trauma-informed, insight-driven care.
             </motion.p>
             <motion.div
               className="flex flex-col sm:flex-row gap-4"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
             >
               <Button size="lg" className="bg-accent hover:bg-accent/90">
                 Book a Demo
               </Button>
               <Button size="lg" variant="outline">
                 Explore Features
               </Button>
               <Button size="lg" variant="secondary">
                 Try Free for 30 Days
               </Button>
             </motion.div>
           </motion.div>
           <motion.div
             className="relative hero-visual"
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
           >
             <motion.div
               className="bg-white rounded-2xl p-8 shadow-2xl"
               whileHover={{ y: -10 }}
               transition={{ duration: 0.3 }}
             >
               <div className="bg-gradient-to-br from-blue-50 to-accent/10 rounded-xl p-6">
                 <div className="flex items-center justify-center space-x-4">
                   <motion.div
                     className="w-16 h-16 bg-accent rounded-full flex items-center justify-center"
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.2 }}
                   >
                     <span className="text-white text-2xl">👶</span>
                   </motion.div>
                   <motion.div
                     className="w-12 h-12 bg-accent-3 rounded-full flex items-center justify-center"
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.2 }}
                   >
                     <span className="text-white text-xl">📱</span>
                   </motion.div>
                   <motion.div
                     className="w-14 h-14 bg-accent-2 rounded-full flex items-center justify-center"
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.2 }}
                   >
                     <span className="text-white text-xl">⌚</span>
                   </motion.div>
                 </div>
                 <p className="text-center mt-4 text-slate-700 font-medium">
                   A smiling child interacts with a tablet and wearable device,
                   surrounded by supportive adults.
                 </p>
               </div>
             </motion.div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };

 export default HeroSection;