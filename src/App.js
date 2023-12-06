import MainContainer from "./components/MainContainer";
import store from "./utils/store";
import { Provider } from "react-redux";
import React from "react";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <MainContainer />
            </div>
        </Provider>
    );
}

export default App;
