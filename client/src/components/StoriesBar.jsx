import { Plus } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StoryWindow from "./StoryWindow";
import StoryPlayer from "./StoryPlayer";
import RecentMessages from "./RecentMessages";

const StoriesBar = () => {
    // eslint-disable-next-line no-unused-vars
    const [stories, setStories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [viewStory, setViewStory] = useState(null);

    const fetchStories = async () => {
        
    };
    return (
    <>
        {/* Stories Bar */}
        <div className="fixed bottom-0 left-0 w-full  bg-linear-to-t from-[#0f172a]/90 via-[#1a1f4d]/50 to-[#3c1f7f]/0 backdrop-blur-lg border-t border-purple-500/20 overflow-x-auto z-10 pb-2 h-35">
            <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
                <motion.div onClick={() => setShowModal(true)} className="shrink-0 mt-8 flex flex-col items-center cursor-pointer" whileHover={{scale:1.2}} transition={{type: "spring", stiffness: 150}}>
                    <div className="w-14 h-14 sm:ml-30 rounded-full mr-12 bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:shadow-[0_0_35px_rgba(255,0,255,0.8)] transition-all">
                        <Plus className="w-6 h-6 text-white"/>
                    </div>
                    <p className="text-[11px] text-white mt-1 font-semibold animate-pulse">Story</p>
                </motion.div>
                {/* Stories */}
                {stories.map((story, index) => (
                    <motion.div key={index} className="shrink-0 flex flex-col mt-3 items-center cursor-pointer" style={{width:"calc(100%/6)"}} whileHover={{scale:1.15}} transition={{type:"spring", stiffness: 120}}>
                        <img src={story.user.profile_picture} className="w-14 h-14 rounded-full ring-2 ring-purple-400 object-cover shadow-[0_0_20px_rgba(255,0,255,0.4)]" onClick={()=>setViewStory(story)}/>
                        <p className="text-[11px] text-white mt-1 truncate max-w-14">{story.user.username || "User"}</p>
                    </motion.div>
                ))}
            </div>
        </div>
        {/* Create Story Modal */}
            {showModal && <StoryWindow setShowModal={setShowModal} fetchStories={fetchStories}/>}
        {/* StroyWindow */}
        {/* Full Screen Story Viewer */}
        {
            viewStory && (
                <motion.div className="fixed inset-0 z-50  bg-black/90 flex items-center justify-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                    {/* Story Player */}
                    <StoryPlayer viewStory={viewStory} setViewStory={setViewStory}/>
                    <RecentMessages viewStory={viewStory} setViewStory={setViewStory}/>
                    {/* Resend Messages */}
                </motion.div>
            )
        }
    </>
  )
}

export default StoriesBar