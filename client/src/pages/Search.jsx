// eslint-disable-next-line no-unused-vars
import { use, useEffect, useState } from "react"
import { Search as SearchIcon} from "lucide-react"
import Loading from "@/components/Loading"
// eslint-disable-next-line no-unused-vars
import { useAuth } from "@clerk/react"
// eslint-disable-next-line no-unused-vars
import toast from "react-hot-toast"
import { motion} from "framer-motion"

const Search = () => {
  const [input , setInput] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
const handleSearch = () => {

}

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0b0f3b] via-[#1a1f4d] to-[#b1a5ff] text-white">
      <div className="max-w-6xl mx-auto p-6 ">
          <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1 , y:0}} transition={{duration: 0.8}} className="mb-8 text-center">
            <h1 className="text-4xl bg-clip-text font-extrabold text-transparent bg-linear-to-r from-purple-400 to-pink-500"> Discover People</h1>
            <p className="text-gray-300 mt-2">
              Connect With amazing people and grow your megical network 
            </p>
          </motion.div>
          <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1 , y:0}} transition={{duration: 0.8}} className="mb-8 shadow-lg rounded-xl border border-white/20 bg-white/20 backdrop-blur-lg">
            <div className="p-6">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300 w-5 h-5"/>
                <input type="text" placeholder="Search by name, usename, bio, or location..." className="pl-10 sm:pl-12 py-2 w-full border-purple-600 rounded-xl bg-slate-900/70 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300" onChange={(e)=> setInput(e.target.value)} value={input} onKeyUp={handleSearch}/>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1 , y:0}} transition={{duration: 1}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {users.length === 0 && !loading && (
              <p className="text-gray-400 col-span-full text-center mt-12">No users found. Try searching something else...</p>
            )}
            {users.map((user)=>(
              <motion.div key={user._id} whileHover={{scale:1.05, boxShadow: '0 0 20px rgba(225,0,255,0.6)'}} className="relative p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-pink-500 shadow-none transition-all duration-300">
                {/* User Card */}
              </motion.div>
            ))}
          </motion.div>
          {loading && <Loading hight='50vh'/>}
      </div>
    </div>
  )
}

export default Search