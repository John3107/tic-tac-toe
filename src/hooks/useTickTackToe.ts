import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppRootStateType } from "./../store";
import {
    boardAC,
    ternAC,
    nameAC,
    statusAC,
    isFinishedAC,
    winPositionAC,
    playersAC
} from "./../hooks/hooks-reducer";
import type { InitialStateFromHooksType } from "./../hooks/hooks-reducer";

type ReturnValueType = {
    handleClick: (index: number) => void;
    handleRestart: () => void;
    handleStart: (players: string[]) => void;
}
const useTickTackToe = (): ReturnValueType => {
    const dispatch = useDispatch();
    let {
        board,
        turn,
        name,
        status,
        players
    } = useSelector<AppRootStateType, InitialStateFromHooksType>(state => state.hooks);

    useEffect(() => {
        if (status !== "started") return;
        const winningPositions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let winningPositionsIndex = 0;
        let winner: string | null = null;
        let isFinished = false;
        let boardPositionsToCheck: number[] = [];
        while (winningPositionsIndex < winningPositions.length && !winner) {
            boardPositionsToCheck = winningPositions[winningPositionsIndex];
            const boardValuesToCkeck = boardPositionsToCheck.map(
                (index) => board[index]
            );
            const checkingValue = boardValuesToCkeck[0];
            isFinished = boardValuesToCkeck.every(
                (value) => value === checkingValue && checkingValue
            );
            winner = !isFinished ? null : checkingValue;
            winningPositionsIndex++;
        }
        dispatch(isFinishedAC(isFinished));
        dispatch(winPositionAC(boardPositionsToCheck));
        if (winner) {
            dispatch(nameAC(winner === "X" ? players[0] : players[1]));
            setTimeout(() => {
                dispatch(statusAC("finished"));
            }, 2000)
            return;
        }
        dispatch(statusAC(board.filter((value) => !value).length ? "started" : "finished"));
    }, [board, players, status, dispatch]);
    const handleClick = (index: number): void => {
        if (index < 0 || index > 9 || name) return;
        const newBoard = [...board];
        newBoard.splice(index, 1, turn);
        dispatch(boardAC(newBoard));
        const newTurn = turn === "X" ? "O" : "X";
        dispatch(ternAC(newTurn));
    };
    const handleStart = (players: string[]) => {
        dispatch(playersAC(players));
        dispatch(ternAC("X"));
        dispatch(statusAC("started"));
    };
    const handleRestart = () => {
        dispatch(boardAC(Array(9).fill("")));
        dispatch(nameAC(""));
        dispatch(statusAC("created"));
        dispatch(playersAC(["", ""]));
    };

    return { handleClick, handleRestart, handleStart };
};

export default useTickTackToe;