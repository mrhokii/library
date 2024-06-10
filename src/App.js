import {Link, Outlet} from "react-router-dom"
const App = () =>{
    return(
        <div className="App">
            <h3>My Library</h3>
            <nav>
                <Link to='/About'>About</Link>
                <Link to='/Books'>Books</Link>
            </nav>
            <hr />
            <Outlet />

        </div>
    )
}
export default App;