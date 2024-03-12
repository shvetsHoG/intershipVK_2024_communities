import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {AdaptivityProvider, ConfigProvider} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ConfigProvider>
            <AdaptivityProvider>
                <App />
            </AdaptivityProvider>
        </ConfigProvider>
    </Provider>
)
