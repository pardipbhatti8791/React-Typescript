import { Provider } from "react-redux";
import PackagesList from "./components/packagesList";
import { store } from "./store/store";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <div>
                    <h1>Search for a package</h1>
                    <PackagesList />
                </div>
            </Provider>
        </>
    )
}

export default App;
