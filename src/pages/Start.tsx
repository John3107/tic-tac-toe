import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useMemo, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppRootStateType } from "./../store";
import { playersAC } from "./../hooks/hooks-reducer";
import { getScoresTC } from "./../hooks/hooks-reducer";

type StartPropsType = {
    handleStart?(players: string[]): void;
}
const Start = (props: StartPropsType) => {
    const dispatch = useDispatch();
    const players = useSelector<AppRootStateType, string[]>(state => state.hooks.players);
    const { handleStart } = props;
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
        const newPlayers = [...players];
        newPlayers.splice(index, 1, event.currentTarget.value);
        dispatch(playersAC(newPlayers));
    };
    const canStart = useMemo(
        () => players.every((player: string) => player && player.length > 0),
        [players]
    );
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!canStart) return;
        handleStart && handleStart(players);
        dispatch(getScoresTC());
    };
    return (
        <div>
            <Modal
                open={true}
                onClose={handleSubmit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <h1>React Tic Tac Toe</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="player1">Player 1</label>
                            <input
                                type="text"
                                value={players[0]}
                                onInput={(e) => handleInput(e, 0)}
                            />
                        </div>
                        <div>
                            <label htmlFor="player2">Player 2</label>
                            <input
                                type="text"
                                value={players[1]}
                                onInput={(e) => handleInput(e, 1)}
                            />
                        </div>
                        <div>
                            <button type="submit" disabled={players[0] === players[1] || !canStart}>
                                Start
                            </button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};
export default Start;