import Game from "./pages/Game";
import useTickTackToe from "./hooks/useTickTackToe";
import Start from "./pages/Start";
import Finished from "./pages/Finished";
import * as React from "react";
const App = () => {
    const game = useTickTackToe();
    return (
        <div className="App">
            {game.status === "created" && <Start handleStart={game.handleStart} />}
            {game.status === "finished" && <Finished name={game.name} handleRestart={game.handleRestart} />}
            {game.status === "started" && <Game board={game.board} handleClick={game.handleClick} />}
        </div>
    );
};
export default App;
