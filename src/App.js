import {Routes, Link, Route} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import PostCommentsPage from "./pages/PostCommentsPage/PostCommentsPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";
import UserAlbumsPage from "./pages/UserAlbumsPage/UserAlbumsPage";
import AlbumPhotosPage from "./pages/AlbumPhotosPage/AlbumPhotosPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<UserAlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<AlbumPhotosPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
