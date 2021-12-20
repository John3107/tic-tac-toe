import s from './Components.module.css';
import { useSelector } from "react-redux";
import type { AppRootStateType } from "./../store";

const Scoreboard = () => {
    const scores = useSelector<AppRootStateType, number[]>(state => state.hooks.scores);
    return (
        <div className={s.scoreboard}>
            <div>Score</div>
            <div>Player: {scores[0]}</div>
            <div>Player 2: {scores[1]}</div>
        </div>
    )
}

export default Scoreboard;