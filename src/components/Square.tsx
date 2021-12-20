import Button from '@mui/material/Button';

type SquarePropsType = {
    index: number;
    value: string;
    handleClick(index: number): void;
}
const Square = (props: SquarePropsType) => {
    const { index, value, handleClick } = props;
    const styles = {
        button: {
            width: "100px",
            height: "100px",
            color: "#bdbebd",
            fontSize: "90px",
            backgroundColor: "#3B445f",
            borderRadius: "2px",
            border: "none"
        }
    };
    return (
        <Button style={styles.button} onClick={() => handleClick(index)}>
            {value}
        </Button>
    );
};
export default Square;