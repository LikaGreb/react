//import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../../pages/Main/Main";
import Posts from "../../pages/Posts/Posts";
import Post from "../../pages/Post/Post";
import NotFound from "../../pages/NotFound/NotFound";
import ThemeProvider from "../../providers/ThemeProvider";


function App() {
  
  return (
    
   <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<Post />} />
          <Route element={<NotFound />} path="*" />
        </Routes>
  </BrowserRouter>
    </ThemeProvider>
     
  );
}

export default App;
