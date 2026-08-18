import PostCard from "@/components/PostCard";
// eslint-disable-next-line no-unused-vars
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import  sample_cover  from '@/assets/sample_cover.jpg';
import  sample_profile  from '@/assets/sample_profile.jpg';
import ProfileModel from "@/components/ProfileModel";

const Profile = () => {
  const currentUser = {
    _id: '123',
    username: 'MyUser',
    profile_picture: sample_profile,
  };
  const { ProfileId } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
    _id: '1',
    username: 'John Doe',
    full_name: 'John Doe',
    profile_picture: sample_profile,
    cover_photo: sample_cover,
    bio: 'This is a bio',
    isFollowed: false,
  });
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([
    {
      _id: 'post1',
      content: "Hello World!",
      image_urls: ["/sample1.jpg", "sample2.jpg"],
    }
  ]);
  const [activeTab , setActiveTab] = useState('posts');
  const [showEdit, setShowEdit] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isBlocked, setBlocked] = useState(false);
  const isMyProfile = !ProfileId || ProfileId === currentUser?.id;

  const handleFollwToggle = () => {
  }
  const toggleBlock = () => {

  }
  return (
    <div className=" relative min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-black overflow-y-scroll p-6">
      <div className="max-w-5xl mx-auto">
        {/* Cover */}
        <div className="relative">
            <div className="h-56 rounded-3xl bg-linear-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 backdrop-blur-xl shadow-2xl overflow-hidden">
              {user.cover_photo && (
                <img src={user.cover_photo} className="w-full h-full object-cover mix-blend-overlay opacity-80"/>
              )}
            </div>
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
              <img src={user.profile_picture} className="w-32 h-32 rounded-full border-4 border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.8)]"/>
            </div>
        </div>
        {/* USer Info */}
        <div className="mt-20 text-center text-white">
          <h1 className="text-2xl font-bold">{user.username}</h1>
          <p className="text-red-400 text-sm mt-1">{user.bio || "No bio yet..."}</p>
          {isMyProfile ? (
            <button onClick={() => setShowEdit(true)} className="mt-3 p-2 bg-purple-600/30 rounded-xl border border-purple-500/50 hover:bg-purple-600/50 text-sm">
              Edit Profile
            </button>
          ) : (
            <div className="flex justify-center gap-3 mt-3">
              <button onClick={handleFollwToggle} className={`px-6 py-2 rounded-xl text-sm font-medium shadow-lg transition-all ${user.isFollowed ? "bg-linear-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white" : "bg-linear-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white"}`}>
                {user.isFollowed ? "Unfolowed" : "Follow"}
              </button>
              <button onClick={toggleBlock} className={`px-6 py-2 rounded-xl text-sm font-medium shadow-lg transition-all ${isBlocked ? "bg-red-600 hover:bg-red-700 text-white" : "bg-purple-600/30 hover:bg-purple-600/50 text-white"}`}>
                {isBlocked ? "Unblock" : "Block"}
              </button>
            </div>
          )}
        </div>
        {/* Tabs */}
        {!isBlocked && (
        <>
          <div className="mt-10 flex justify-center gap-6">
            {["posts" , "media"].map((tab)=>(
              <button key={tab} onClick={()=> setActiveTab(tab)} className={`px-5 py-2 rounded-full text-sm font-medium ${activeTab == tab ? "bg-purple-600 text-white scale-110" : "bg-white/10 text-gray-300 hover:bg-white/20"}`}>
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          {/* Posts */}
          <div className="mt-8 flex flex-col items-center gap-6">
            {activeTab === 'posts' && posts.map((post)=>(
              <PostCard key={post._id} post={{...post,user:{_id:user._id, username:user.username, profile_picture:user.profile_picture, full_name:user.full_name}}} className="w-full max-w-2xl"/>
            ))}
            {activeTab === "media"&& (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl min-w-auto">
              {posts.filter((p)=> p.image_urls.map((img, i)=>(
                <img key={i} src={img} className="rounded-xl object-cover shadow-lg hover:scale-105 transition-all w-full h-48"/>
              )))}
            </div>)}
          </div>
        </>
        )}
        {showEdit && <ProfileModel setShowEdit={setShowEdit}/>}
      </div>
    </div>
  );
};

export default Profile;
