import Messages from "./pages/Messages";
import {Routes, Route} from "react-router-dom";
import Feed from "./pages/Feed";
import Chat from "./pages/Chat";
import Connections from "./pages/Connections";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import Settings from "./pages/Settings";
import PostDetails from "./pages/PostDetails";
import Notifications from "./pages/NotificationsPage";
import Layout from "./pages/Layout";
import { useUser } from "@clerk/react";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

const App = () => {
  const {user} = useUser()
  
  return (
    <>
    <Toaster/>
      <Routes>
          <Route path="/" element={!user ? <Login/> : <Layout/>}>
            <Route index element={<Feed/>}/>
            <Route path="messages" element={<Messages/>}/>
            <Route path="messages/:userId" element={<Chat/>}/>
            <Route path="connections" element={<Connections/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="profile/:profileId" element={<Profile/>}/>
            <Route path="create-post" element={<CreatePost/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="post/:postId" element={<PostDetails/>}/>
            <Route path="notifications" element={<Notifications/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
