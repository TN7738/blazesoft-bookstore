import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBook } from "../utils/booksSlice";
import { addSelectedBook } from "../utils/selectedBookSlice";
import { togglePopup } from "../utils/showPopupSlice";

const Books = () => {
    const dispatch = useDispatch();
    const booksData = useSelector((store) => store.books);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(booksData);
    }, [booksData]);

    const handleDeleteBook = (id) => {
        dispatch(removeBook(id));
    };

    const handleSelectedBook = (book) => {
        dispatch(addSelectedBook(book));
        dispatch(togglePopup());
    };

    return (
        <div className="h-[calc(100vh-138px)] py-8 flex flex-col justify-center items-center px-4">
            <div className="rounded-lg overflow-auto max-w-2xl w-full bg-slate-100 mx-auto text-black px-3">
                <h1 className="text-center font-bold p-2 text-lg">Books</h1>
                {books.length > 0 ? (
                    <ul>
                        {books.map((book) => {
                            return (
                                <li
                                    key={book.id}
                                    className="border border-slate-800 rounded-lg shadow-slate-800 mb-3 p-3 flex justify-between items-center"
                                >
                                    <div
                                        onClick={() => handleSelectedBook(book)}
                                        className="cursor-pointer w-full"
                                    >
                                        <h4 className="pb-2 font-semibold">
                                            {book.name}
                                        </h4>
                                        <h5>Price: {book.price}</h5>
                                        <h5>Category: {book.category}</h5>
                                    </div>
                                    <button
                                        onClick={() =>
                                            handleDeleteBook(book.id)
                                        }
                                        className="btn rounded-lg px-2 py-1 shadow-lg bg-slate-800 text-white hover:bg-slate-950"
                                    >
                                        Delete
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p className="text-center pb-4">
                        Sorry! There are no books available
                    </p>
                )}
            </div>
        </div>
    );
};

export default Books;
