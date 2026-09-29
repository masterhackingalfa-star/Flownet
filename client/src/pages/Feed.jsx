import Loading from "../components/Loading";
import logo from "../assets/logo.png";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; 
import StoriesBar from "@/components/StoriesBar";
import RecentMessages from "@/components/RecentMessages";
import PostCard from "@/components/PostCard";

const Feed = () => {
  // eslint-disable-next-line no-unused-vars
  const [feeds , setFeeds] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();
  return ! loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar  py-10 xl:pr-5 flex flex-col items-center bg-linear-to-b from-[#1e1b4b] via-[#3b0764] to-[#581c87] text-white relative">
      <div className="w-[90%] flex justify-between items-center p-4 absolute top-1 z-10 right-4 rounded-3xl">
        <img src={logo} alt="logo" className="h-10 mr-3 hidden sm:block animate-pulse"/>
        <div className="flex-1 mx-4 sm:ml-64 max-w-md">
          <input type="text" placeholder="Search..." className="w-full p-3 border rounded-3xl border-purple-500/30 bg-white/5 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all"/>
        </div>
        <div onClick={() => navigate("/notifications")} className="relative cursor-pointer p-3 rounded-full bg-linear-to-br from-purple-600 to-pink-500 shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:scale-110 transition-transform">
            <Bell className="w-6 h-6 text-white animate-pulse"/>
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse"/>
        </div>
      </div>

      <div className="flex items-start justify-center xl:gap-8 w-full mt-20">
          <div className="w-full max-w-2xl ">
          {/* StoriesBar */}
          <StoriesBar/>
          <div className="p-4 space-y-6 ">
              {/* PostCard */}
              {feeds.map((post) => (
                <PostCard key={post.id} post={post} className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,255,0.4)] transition-transform duration-300"/>
              ))}
          </div>
          </div>
          {/* Other Messages */}
          <div className="max-xl:hidden sticky top-2">
            <RecentMessages/>
          </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-purple-500/20 via-pink-500/10 to-indigo-400/10 mix-blend-overlay animate-pulse-slow">
      </div>
    </div>
  ) : (
    <Loading/>
  )
}

export default Feed
