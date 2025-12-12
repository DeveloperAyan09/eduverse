import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import admin from "./admin/adminSlice";
import products from "./products/productSlice"
import events from "./events/eventSlice"
import comments from "./comments/commentSlice"
import message from "./messages/messageSlice"


const store = configureStore({
  reducer: { auth, admin, products, events, comments, message },
});

export default store;



// spotify-client/
// │
// ├── public/
// │   └── favicon, icons, static files
// │
// ├── src/
// │   ├── api/
// │   │   ├── axiosInstance.js
// │   │   ├── songApi.js
// │   │   ├── albumApi.js
// │   │   └── authApi.js
// │   │
// │   ├── assets/
// │   │   ├── icons/
// │   │   ├── images/
// │   │   └── assets.js
// │   │
// │   ├── components/
// │   │   ├── AlbumItem/
// │   │   ├── SongItem/
// │   │   ├── Player/
// │   │   ├── Sidebar/
// │   │   ├── Layout/
// │   │   │   └── AppLayout.jsx
// │   │   ├── Common/
// │   │   │   ├── Loader.jsx
// │   │   │   ├── Error.jsx
// │   │   │   └── Empty.jsx
// │   │   ├── Display/
// │   │   │   ├── DisplayHome.jsx
// │   │   │   ├── DisplayAlbum.jsx
// │   │   │   ├── DisplayNav.jsx
// │   │   │   └── DisplaySearch.jsx
// │   │   └── Auth/
// │   │       ├── LoginForm.jsx
// │   │       └── RegisterForm.jsx
// │   │
// │   ├── context/
// │   │   ├── PlayerContext.jsx
// │   │   └── SongContext.jsx
// │   │
// │   ├── features/
// │   │   ├── auth/
// │   │   │   ├── authSlice.js
// │   │   │   └── authService.js
// │   │   ├── songs/
// │   │   │   ├── songSlice.js
// │   │   │   └── songService.js
// │   │   ├── playlists/
// │   │   │   ├── playlistSlice.js
// │   │   │   └── playlistService.js
// │   │   ├── albums/
// │   │   │   ├── albumSlice.js
// │   │   │   └── albumService.js
// │   │   └── search/
// │   │       ├── searchSlice.js
// │   │       └── searchService.js
// │   │
// │   ├── hooks/
// │   │   ├── useSongs.js
// │   │   ├── usePlayer.js
// │   │   └── useAuth.js
// │   │
// │   ├── pages/
// │   │   ├── Home.jsx
// │   │   ├── AlbumPage.jsx
// │   │   ├── SearchPage.jsx
// │   │   ├── PlaylistPage.jsx
// │   │   ├── Login.jsx
// │   │   └── Register.jsx
// │   │
// │   ├── router/
// │   │   └── AppRouter.jsx
// │   │
// │   ├── utils/
// │   │   ├── formatTime.js
// │   │   ├── storage.js
// │   │   └── constants.js
// │   │
// │   ├── store/
// │   │   ├── store.js
// │   │   └── rootReducer.js
// │   │
// │   ├── main.jsx
// │   └── App.jsx
// │
// ├── tailwind.config.js
// ├── vite.config.js
// └── package.json