
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { SignIn } from "@clerk/react";
import { dark } from "@clerk/themes";

const Login = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row bg-linear-to-br from-[#0b0f3b] via-[#1a1f4d] to-[#3c1f7f] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-150 h-150 bg-purple-600/20 rounded-full -top-12.5 -left-6.25 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-125 h-125 bg-pink-500/20 rounded-full -bottom-6.25 -right-6.25 blur-3xl animate-pulse-slow"></div>
        <img src={assets.bgImage} alt="background" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="flex-1 flex flex-col items-start justify-between lg:pl-40 p-6 md:p-10 z-10">
        <motion.img
          src={assets.logo}
          alt="logo"
          className="h-12 object-contain mb-60"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <div>
          <div className="flex items-center gap-3 mb-6 max-md:mt-10">
            <img src={assets.group_users} alt="users" className="h-8 md:h-10" />
            <div>
              <div className="flex gap-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-transparent fill-amber-400 drop-shadow-2xl animate-pulse" />
                ))}
              </div>
              <p className="text-gray-300 text-sm mt-1">17,000 adventurers already inside</p>
            </div>
          </div>

          <motion.h1
            className="text-3xl md:text-6xl font-bold bg-linear-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(225,0,225,0.7)] leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Enter a world where connections sparkle and conversations shine
          </motion.h1>

          <motion.p
            className="text-gray-400 mt-4 md:mt-6 max-w-lg text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Step through the portal of imagination, meet kindred spirits, and let your messages glow with life.
            Every story, every whisper, every laugh becomes a spark in the digital sky.
          </motion.p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 z-10">
        <motion.div
          className="w-full max-w-md p-8 rounded-3xl bg-linear-to-br from-purple-700/20 via-indigo-800/20 to-pink-700/20 backdrop-blur-md shadow-[0_0_30px_rgba(131,58,180,0.5)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <SignIn
            appearance={{
              baseTheme: dark,
              variables: {
                colorPrimary: '#a78bfa',
                colorText: '#ffffff',
                colorTextSecondary: '#94a3b8',
                colorBackground: 'transparent',
                colorInputText: '#ffffff',
                colorInputBackground: 'rgba(15, 23, 42, 0.6)',
                colorCardBackground: 'transparent',
              },
              elements: {
                card: 'bg-slate-950/90 rounded-3xl shadow-[0_0_25px_rgba(168,85,247,0.4)] border border-purple-500/30 backdrop-blur-xl',
                headerTitle: '!text-white text-2xl font-bold text-center',
                headerSubtitle: '!text-purple-200 text-center',
                formFieldLabel: '!text-purple-100 font-medium mb-1',
                formFieldInput: '!bg-[#0f172a] !text-white border border-purple-500/30 rounded-xl focus:!border-purple-500 placeholder:!text-gray-500',
                socialButtonsBlockButton: 'bg-gradient-to-r from-purple-600 to-pink-500 font-medium rounded-xl hover:scale-105 transition-all border-0',
                socialButtonsBlockButtonText: 'font-semibold',
                formButtonPrimary: 'bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 !text-white font-semibold py-2 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:scale-105 transition-all',
                dividerText: '!text-purple-300',
                dividerLine: 'bg-purple-500/30',
                footer: 'bg-black/60 border-t border-purple-500/20 rounded-b-3xl',
                footerActionText: '!text-gray-300',
                footerActionLink: '!text-pink-400 hover:!text-pink-300 font-bold',
                footerPagesLink: 'hidden',
                footerPages: 'hidden',
                poweredBy: 'hidden',
                devModeBadge: '!text-amber-400 bg-amber-400/10 border border-amber-400/20',
              },
            }}
          />
        </motion.div>
      </div>
      {Array(15).fill(0).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-starTwinkle"
          style={{
            // eslint-disable-next-line react-hooks/purity
            top: `${Math.random() * 100}%`,
            // eslint-disable-next-line react-hooks/purity
            left: `${Math.random() * 100}%`,
          // eslint-disable-next-line react-hooks/purity
          animationDelay:`${Math.random() * 2}s`}}
        />
      ))}
    </div>  
  );
};

export default Login;