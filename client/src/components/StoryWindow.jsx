// eslint-disable-next-line no-unused-vars
import { useAuth  } from "@clerk/react";
import { ArrowLeft , Sparkle , TextIcon , Upload } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const handleMediaUpload = () => {
    
}

const handleCreateStory = async() => {

}

const StoryWindow = ({setShowModal}) => {
    const bgColors = ["#4f46e5" , "#7c3aed" , "#db2777" , "#e11d48" , "#ca8a04" , "#0d9488"];
    const [mode , setMode] = useState("text");
    const [background , setBackground] = useState(bgColors[0]);
    const [media, setMedia] = useState(null);
    const [text, setText] = useState("text");
    const [perviewUrl , setPerviewUrl] = useState(null);
  return (
    <div className="fixed inset-0  min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center z-40">
        <div className="w-full max-w-md">
            <div className="text-center mb-4 flex items-center justify-between">
                <button className="text-white p-2 cursor-pointer" onClick={()=> setShowModal(false)}>
                    <ArrowLeft/>
                </button>
                <h2 className="text-white font-semibold">Create Story</h2>
                <span className="w-10">

                </span>
            </div>
            <div className="rounded-lg h-96 flex items-center justify-center relative" style={{backgroundColor: background}}>
                {
                    mode === 'text' && (
                        <textarea className="bg-transparent text-white w-full h-full p-6 text-lg resize-none focus:outline-none" placeholder="what's in your mind ?" onChange={(e) => setText(e.target.value)} value={text}/>
                    )
                }
                {
                 mode === 'media' && perviewUrl && (
                    media.type.startsWith('image') ? (
                        <img src={perviewUrl} className="object-contain max-h-full"/>
                    ) : (
                        <video src={perviewUrl} className="object-contain max-h-full"/>
                    )
                 )
                }
            </div>
            <div className="flex mt-4 gap-2">
                {
                    bgColors.map((color) => (
                        <button key={color} className="w-6 h-6 rounded-full ring cursor-pointer" style={{backgroundColor:color}} onClick={()=> setBackground(color)}/>
                    ))
                }
            </div>
            <div className="flex mt-4 gap-2">
                <button onClick={() => {setMode("text"); setMedia(null); setPerviewUrl(null)}} className={`flex-1 flex items-center justify-center gap-2 p-2 ${mode === 'text' ? 'bg-white text-black' : 'bg-zinc-800'}`}>
                    <TextIcon size={18}/> 
                </button>
                <label className={`flex-1 flex items-center justify-center gap-2 p-2 rounded cursor-pointer ${mode === 'media' ? 'bg-white text-black' : 'bg-zinc-800'}`}>
                    <input onChange={handleMediaUpload} type="file" accept="image/* , video/*" className="hidden"/>
                    <Upload size={18}/> Photo/Video
                </label>
            </div>
            <div>
                <button onClick={() => toast.promise(handleCreateStory(), {loading:'Saving...'})} className="flex items-center justify-center gap-2 text-white py-2 mt-4 w-full rounded bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 transition cursor-pointer">
                    <Sparkle size={18}/> Create Story
                </button>
            </div>
        </div>
    </div>
  )
}

export default StoryWindow;