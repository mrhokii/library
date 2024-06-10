import {getBooks} from "../data/data"
import { NavLink, Outlet } from "react-router-dom";
import "../App.css"

const Books= ()=>{
    let books= getBooks();
    return(
        <div className="t-c">
            <h1 className="reed">کتاب مورد نظر خود را انتخاب نمایید</h1>
            <div className="box">
                <div className="books-list">
                    {
                        books.map(book =>(
                            <NavLink
                            
                            style={({isActive})=>{
                                    return{
                                        color: isActive ? "red" : ""
        
                                    }
                            }}
                            to={book.id} key={book.id}>
                                <h4>{book.name}</h4>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            
            <Outlet />
        </div>
    )
}
export default Books











// <div className="books-list">
//                     {
//                         books.map(book =>(
//                             <NavLink
                            
//                             style={({isActive})=>{
//                                     return{
//                                         color: isActive ? "red" : ""
        
//                                     }
//                             }}
//                             to={book.id} key={book.id}>
//                                 <h3>{book.name}</h3>
//                             </NavLink>
//                         ))
//                     }
//                 </div>