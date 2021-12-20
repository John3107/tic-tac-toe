import Game from "./pages/Game";
import useTickTackToe from "./hooks/useTickTackToe";
import Start from "./pages/Start";
import Finished from "./pages/Finished";
import { useSelector } from "react-redux";
import type { AppRootStateType } from "./store";
import * as React from "react";
const App = () => {
    const game = useTickTackToe();
    const status = useSelector<AppRootStateType, string>(state => state.hooks.status);
    return (
        <div>
            {status === "created" && <Start handleStart={game.handleStart} />}
            {status === "finished" && <Finished handleRestart={game.handleRestart} />}
            {status === "started" && <Game handleClick={game.handleClick} />}
        </div>
    );
};
export default App;
