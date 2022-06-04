import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './component/Header/Header';
import { CardInfo } from './pages/CardInfo/CardInfo';
import { Home } from './pages/Home/Home';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './redux/slices/userSlice';
import { getPosts } from './redux/slices/postSlice';
import { DetailPost } from './pages/DetailPost/DetailPost';
import { getComments } from './redux/slices/commentsSlice';

function App() {
    const { users } = useSelector((state) => state.user);
    const { posts } = useSelector((state) => state.post);
    const { comments } = useSelector((state) => state.comment);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getPosts());
        dispatch(getUsers());
        dispatch(getComments());
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home users={users} />} />
                <Route path="cardInfo/:id" element={<CardInfo posts={posts} />} />
                <Route
                    path="cardInfo/:id/detailPost"
                    element={<DetailPost commentList={comments} />}
                />
            </Routes>
        </div>
    );
}

export default App;
