import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import type { AppRootStateType } from "./../store";
import { useSelector, useDispatch } from "react-redux";
import { setScoresTC } from "./../hooks/hooks-reducer";
import type { InitialStateFromHooksType } from "./../hooks/hooks-reducer";

type FinishedPropsType = {
    handleRestart?: () => void;
}
const Finished = (props: FinishedPropsType) => {
    const { handleRestart } = props;
    const dispatch = useDispatch();
    const {
        scores,
        name,
        players
    } = useSelector<AppRootStateType, InitialStateFromHooksType>(state => state.hooks);
    useEffect(() => {
        let newScore = [...scores]
        let point
        if (name === players[0]) {
            point = scores[0] + 1
            newScore.splice(0, 1, point);
            dispatch(setScoresTC(newScore))
        } else if (name === players[1]) {
            point = scores[1] + 1
            newScore.splice(1, 1, point);
            dispatch(setScoresTC(newScore));
        }
    }, [])

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
    return (
        <div>
            <Modal
                open={true}
                onClose={handleRestart}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <h1>
                        {name && `Player ${name} won the game`}
                        {!name && "It's a draw "}
                    </h1>
                    <button onClick={handleRestart}>Restart</button>
                </Box>
            </Modal>
        </div >
    );
};
export default Finished;