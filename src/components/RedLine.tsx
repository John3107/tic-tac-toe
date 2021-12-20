import type { AppRootStateType } from "./../store";
import type { InitialStateFromHooksType } from "./../hooks/hooks-reducer";
import { useSelector } from "react-redux";

const RedLine = () => {
    const {
        isFinished,
        winPosition
    } = useSelector<AppRootStateType, InitialStateFromHooksType>(state => state.hooks);

    let styles = {
        width: "0px",
        height: "0px",
        backgroundColor: "brown",
        zIndex: "10",
        position: "absolute",
        borderRadius: "5px",
        marginTop: "0px",
        marginLeft: "0px",
        transform: "rotate(0deg)"
    }
    if (isFinished) {
        if (winPosition.every((w, i) => w === [0, 1, 2][i])) {
            styles = { ...styles, width: "280px", height: "10px", marginTop: "63px", marginLeft: "30px", }
        } else if (winPosition.every((w, i) => w === [3, 4, 5][i])) {
            styles = { ...styles, width: "280px", height: "10px", marginTop: "163px", marginLeft: "30px" }
        } else if (winPosition.every((w, i) => w === [6, 7, 8][i])) {
            styles = { ...styles, width: "280px", height: "10px", marginTop: "263px", marginLeft: "30px" }
        } else if (winPosition.every((w, i) => w === [0, 3, 6][i])) {
            styles = { ...styles, width: "10px", height: "280px", marginTop: "30px", marginLeft: "63px" }
        } else if (winPosition.every((w, i) => w === [1, 4, 7][i])) {
            styles = { ...styles, width: "10px", height: "280px", marginTop: "30px", marginLeft: "163px" }
        } else if (winPosition.every((w, i) => w === [2, 5, 8][i])) {
            styles = { ...styles, width: "10px", height: "280px", marginTop: "30px", marginLeft: "263px" }
        } else if (winPosition.every((w, i) => w === [0, 4, 8][i])) {
            styles = { ...styles, width: "380px", height: "10px", marginTop: "163px", marginLeft: "-17px", transform: "rotate(45deg)" }
        } else if (winPosition.every((w, i) => w === [2, 4, 6][i])) {
            styles = { ...styles, width: "380px", height: "10px", marginTop: "163px", marginLeft: "-17px", transform: "rotate(135deg)" }
        }
    }

    return (
        <div style={styles}></div>
    )
}

export default RedLine;