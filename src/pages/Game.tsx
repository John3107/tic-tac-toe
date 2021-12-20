import Square from "../components/Square";
import Scorboard from "./../components/Scoreboard";
import s from './Pages.module.css';
import type { AppRootStateType } from "./../store";
import { useSelector } from "react-redux";
import RedLine from "./../components/RedLine";

type GamePropsType = {
    handleClick(index: number): void;
}
const Game = (props: GamePropsType) => {
    const { handleClick } = props;
    const board = useSelector<AppRootStateType, string[]>(state => state.hooks.board);

    return (
        <div className={s.paper}>
            <div>
                <div className={s.board}>
                    {board.map((value, index) => (
                        <div>
                            <Square
                                key={index}
                                value={value}
                                index={index}
                                handleClick={handleClick}
                            />
                            {index !== 0 && index !== 3 && index !== 6 &&
                                <div className={s.borderLeft}></div>}
                            {index < 6 && <div className={s.borderBottom}></div>}
                        </div>
                    ))}
                </div>
            </div>
            <RedLine />
            <Scorboard />
        </div>
    );
};
export default Game;