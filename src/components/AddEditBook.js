import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../utils/showPopupSlice";
import { addBook, updateBook } from "../utils/booksSlice";
import { removeSelectedBook } from "../utils/selectedBookSlice";

const AddEditBook = () => {
    const isPopupOpen = useSelector((store) => store.showPopup.isPopupOpen);
    const selectedBook = useSelector((store) => store.selectedBook);
    const booksData = useSelector((store) => store.books);
    const dispatch = useDispatch();

    const [bookName, setBookName] = useState("");
    const [bookPrice, setBookPrice] = useState("");
    const [bookCategory, setBookCategory] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    const [showError, setShowError] = useState(false);

    const handleOnSave = () => {
        if (
            bookName.length > 0 &&
            bookPrice.length > 0 &&
            bookCategory.length > 0 &&
            bookDescription.length > 0
        ) {
            setShowError(false);
            let currBookId;
            if (booksData.length === 0) {
                currBookId = 1;
            } else {
                currBookId = selectedBook.id
                    ? selectedBook.id
                    : booksData[booksData.length - 1].id + 1;
            }
            const book = {
                id: currBookId,
                name: bookName,
                price: bookPrice,
                category: bookCategory,
                description: bookDescription,
            };
            selectedBook.id !== undefined
                ? dispatch(updateBook(book))
                : dispatch(addBook(book));
            handleHidePopup();
        } else {
            setShowError(true);
        }
    };

    const handleHidePopup = () => {
        dispatch(togglePopup());
        dispatch(removeSelectedBook());
        setBookName("");
        setBookPrice("");
        setBookCategory("");
        setBookDescription("");
        setShowError(false);
    };

    useEffect(() => {
        setBookName(selectedBook.name ? selectedBook.name : "");
        setBookPrice(selectedBook.price ? selectedBook.price : "");
        setBookCategory(selectedBook.category ? selectedBook.category : "");
        setBookDescription(
            selectedBook.description ? selectedBook.description : ""
        );
    }, [selectedBook]);

    if (isPopupOpen) {
        return (
            <div className="bg-black bg-opacity-90 absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center flex-col px-4">
                <div className="relative bg-white rounded-lg max-w-lg w-full max-h-96 h-full p-4 text-center">
                    <button
                        onClick={handleHidePopup}
                        className="absolute top-4 right-4 w-4 h-4"
                    >
                        <img
                            alt="close-icon"
                            src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png"
                        />
                    </button>
                    <form className="text-black px-11 pt-9 pb-7 md:px-3">
                        <div className="flex">
                            <label htmlFor="bookname">Title:</label>
                            <input
                                type="text"
                                className="text-black border border-slate-500 rounded-lg py-1 px-2 ml-5 w-full truncate"
                                name="bookname"
                                id="bookname"
                                value={bookName}
                                onChange={(e) => setBookName(e.target.value)}
                            />
                        </div>
                        <div className="my-5 flex">
                            <label htmlFor="bookprice">Price:</label>
                            <input
                                type="number"
                                className="text-black border border-slate-500 rounded-lg py-1 px-2 ml-5 w-full truncate"
                                name="bookprice"
                                id="bookprice"
                                value={bookPrice}
                                onChange={(e) => setBookPrice(e.target.value)}
                            />
                        </div>
                        <div className="mb-5 flex">
                            <label htmlFor="bookcategory">Category:</label>
                            <input
                                type="text"
                                className="text-black border border-slate-500 rounded-lg py-1 px-2 ml-5 w-full truncate"
                                name="bookcategory"
                                id="bookcategory"
                                value={bookCategory}
                                onChange={(e) =>
                                    setBookCategory(e.target.value)
                                }
                            />
                        </div>
                        <div className="flex">
                            <label htmlFor="bookdescription">
                                Description:
                            </label>
                            <textarea
                                rows="3"
                                cols="10"
                                className="text-black border border-slate-500 rounded-lg py-1 px-2 ml-5 w-full min-h-[70px] max-h-[70px] overflow-auto"
                                name="bookdescription"
                                id="bookdescription"
                                value={bookDescription}
                                onChange={(e) =>
                                    setBookDescription(e.target.value)
                                }
                            ></textarea>
                        </div>
                    </form>
                    {showError && (
                        <p className="text-xs text-red-500">
                            Title, Price, Category and Description cannot be
                            blank!
                        </p>
                    )}
                    <button
                        onClick={handleOnSave}
                        className="btn rounded-lg px-4 py-2 shadow-lg bg-slate-800 text-white hover:bg-slate-950"
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default AddEditBook;
