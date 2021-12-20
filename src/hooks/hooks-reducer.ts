import { Dispatch } from "redux";

const initialState: InitialStateFromHooksType = {
    board: Array(9).fill(""),
    turn: "X",
    name: "",
    status: "created",
    scores: [0, 0],
    isFinished: false,
    winPosition: [],
    players: ["", ""]
}

export const hooksReducer = (
    state: InitialStateFromHooksType = initialState,
    action: HooksActionsType): InitialStateFromHooksType => {
    switch (action.type) {
        case 'BOARD':
            return { ...state, board: action.board }
        case 'TURN':
            return { ...state, turn: action.turn }
        case 'NAME':
            return { ...state, name: action.name }
        case 'STATUS':
            return { ...state, status: action.status }
        case 'SCORES':
            return { ...state, scores: action.scores }
        case 'IS-FINISHED':
            return { ...state, isFinished: action.isFinished }
        case 'WIN-POSITION':
            return { ...state, winPosition: action.winPosition }
        case 'PLAYERS':
            return { ...state, players: action.players }
        default:
            return state
    }
}

export const boardAC = (board: string[]) => ({ type: 'BOARD', board } as const)
export const ternAC = (turn: "X" | "O") => ({ type: 'TURN', turn } as const)
export const nameAC = (name: string) => ({ type: 'NAME', name } as const)
export const isFinishedAC = (isFinished: boolean) => ({ type: 'IS-FINISHED', isFinished } as const)
export const scoresAC = (scores: number[]) => ({ type: 'SCORES', scores } as const)
export const winPositionAC = (winPosition: number[]) => ({ type: 'WIN-POSITION', winPosition } as const)
export const playersAC = (players: string[]) => ({ type: 'PLAYERS', players } as const)
export const statusAC = (status: string) => (
    { type: 'STATUS', status } as const)

export const setScoresTC = (scores: number[]) => (dispatch: Dispatch<HooksActionsType>) => {
    localStorage.setItem('scores', JSON.stringify(scores));
}

export const getScoresTC = () => (dispatch: Dispatch<HooksActionsType>) => {
    let initScores = localStorage.getItem('scores');
    let parsedScores = initScores && JSON.parse(initScores);
    initScores ? dispatch(scoresAC(parsedScores)) : dispatch(scoresAC([0, 0]));
}

export type InitialStateFromHooksType = {
    board: string[]
    turn: "X" | "O"
    name: string | null
    status: string
    scores: number[]
    isFinished: boolean
    winPosition: number[]
    players: string[]
}

export type BoardActionType = ReturnType<typeof boardAC>
export type TurnActionType = ReturnType<typeof ternAC>
export type NameActionType = ReturnType<typeof nameAC>
export type StatusActionType = ReturnType<typeof statusAC>
export type ScoresActionType = ReturnType<typeof scoresAC>
export type IsFinishedActionType = ReturnType<typeof isFinishedAC>
export type WinPositionActionType = ReturnType<typeof winPositionAC>
export type PlayersActionType = ReturnType<typeof playersAC>


export type HooksActionsType =
    | BoardActionType
    | TurnActionType
    | NameActionType
    | StatusActionType
    | ScoresActionType
    | IsFinishedActionType
    | WinPositionActionType
    | PlayersActionType
