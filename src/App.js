import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div className="d-flex page-container">
            <div className="d-flex w-100">
                <div className="overflow-scroll w-50">
                    <Users/>
                </div>
                <div className="overflow-scroll w-50">
                    <Posts/>
                </div>
            </div>
            <div className="overflow-scroll w-100">
                <Comments/>
            </div>
        </div>
    );
}

export default App;
