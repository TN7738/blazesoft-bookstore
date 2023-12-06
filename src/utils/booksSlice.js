import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
    name: 'books',
    initialState: [
        {
            id: 1,
            name: "The Last Motivational Book",
            price: "$14.99",
            category: "Motivational",
            description: "Warning! Not for the faint of heart or those desperate for a magic motivational pill! But, if you’re ready to shift your mindset and follow a proven, step-by-step formula to be unstoppable, you’ve come to the right place!"
        },
        {
            id: 2,
            name: "It Ends With Us",
            price: "$14.09",
            category: "Romantic",
            description: "It Ends with Us is a romance novel by Colleen Hoover, published by Atria Books on August 2, 2016. Based on the relationship between her mother and father, Hoover described it as the hardest book I've ever written."
        },
        {
            id: 3,
            name: "The Surgeon",
            price: "$13.99",
            category: "Thriller",
            description: "The Surgeon is a suspense novel by Tess Gerritsen, the first of the Maura Isles/Jane Rizzoli series."
        },
        {
            id: 4,
            name: "Ikigai",
            price: "$32",
            category: "Uplifting",
            description: "Ikigai is a Japanese concept that means your 'reason for being. Iki' in Japanese means 'life,' and 'gai' describes value or worth. Your ikigai is your life purpose or your bliss."
        },
        {
            id: 5,
            name: "The Housemaid",
            price: "$13.51",
            category: "Horror",
            description: "I cook a delicious meal for the whole family before heading up to eat alone in my tiny room on the top floor. I try to ignore how Nina makes a mess just to watch me clean it up."
        }
    ],
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
        removeBook: (state, action) => {
            let index;
            for(let i = 0; i < state.length; i++){
                if(state[i].id === action.payload){
                    index = i;
                    break;
                }
            }
            state.splice(index, 1);
        },
        updateBook: (state, action) => {
            let index;
            for(let i = 0; i < state.length; i++){
                if(state[i].id === action.payload.id){
                    index = i;
                    break;
                }
            }
            state[index] = action.payload;
        }
    }
});

export const { addBook, removeBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;