import { useEffect , useState } from "react";
import { BadgeCheck , X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { progress } from "framer-motion";

const StoryPlayer = ({viewStory , setViewStory}) => {
  const handleclose = () => {
    setViewStory(null)
  }
  const renderContent = () => {
    switch(viewStory.media_type){
      case 'image':
        return(
          <img src={viewStory.media_url} className="max-w-full max-h-screen object-contain "/>
        );
      case 'video':
        return(
            <video src={viewStory.media_url} onEnded={() => setViewStory(null)} controls autoPlay className="max-h-screen"/>
        );
      case 'text':
        return(
          <div className="w-full h-full flex items-center justify-center break-inside-avoid-page text-white text-2xl text-center">
            {viewStory.content}
          </div>
        );
      default:
        return null;  
    }
  }
  const [progress , setProgress] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line no-unassigned-vars
    let timer , progressInterval;
    if(viewStory && viewStory.media_type !== 'video'){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProgress(0);
      const duration = 10000;
      const setTime = 100;
      let elapsed = 0;
      progressInterval = setInterval(() => {
        elapsed += setTime;
        setProgress((elapsed / duration) * 100);
        if(elapsed >= duration){
          setViewStory(null);
        }
      } , setTime);
    }
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  } , [setViewStory, viewStory]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center" style={{backgroundColor: viewStory.media_type === 'text' ? viewStory.background_color: '#000000'}}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-700 ">
            <div className="h-full bg-white transition-all duration-100 linear" style={{width : `${progress}%`}}></div>
        </div>
        <div className="absolute top-4 left-24 flex items-center space-x-3 p-2 px-4 sm:p-4 sm:px-8 backdrop-blur-2xl rounded bg-black/50">
            <img src={viewStory.user?.profile_picture} className="size-7 sm:size-8  rounded-full object-cover border border-white" />
            <div className="text-white font-medium flex items-center justify-center gap-1.5">
                <span>{viewStory.user?.full_name}</span>
                <BadgeCheck size={18}/>
            </div>
        </div>
        <button onClick={handleclose} className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none">
          <X className="w-8 h-8 hover:scale-110 transition cursor-pointer"/>
        </button>
        <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
          {renderContent()}
        </div>
    </div>
  )
}

export default StoryPlayer
