import { useParams } from "react-router-dom";
import {getBook} from "../data/data"

const Book = () =>{
    const params= useParams()
    const book= getBook(params.BookId)
    if(book){
        return(
            <div className="box-c">
               <div className="c-box">
                    <div className="bg-r">
                        <div className="d1">  100/<p>{book.score}</p></div>
                        <div className="d2"> <p>{book.download}</p> : دانلود </div>
                        <div className="d3"> <p>{book.show}</p> : مشاهده </div>
                    </div>
                    <div className="title">
                        <h1>{book.name}</h1>
                    </div>
                    <div className="about">
                       <p> : توضیحات  </p> <p>{book.lorem}</p>
                    </div>
                    <div className="author">
                        <p> : نام نویسنده</p> <p>{book.author}</p>
                    </div>
                    <div className="price">
                    <p> :  قیمت کتاب</p> <p>{book.price}</p>
                    </div>
                    <div className="buy">
                        <button>خرید کتاب</button>
                    </div>
               </div> 
            </div>
        )
    }else{
        return(
            <div>
                این کتاب وجود ندارد
            </div>
        )
    }
}
export default Book;



{/*             
                <p>{book.name}</p>
                <p>{book.price}</p>
                <p>{book.author}</p>
                <p>{book.id}</p> */}