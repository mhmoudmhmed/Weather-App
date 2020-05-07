import bg1 from './bg1.svg';
import sizes from './sizes';


export default {

    "@global": {

        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }
    },

    root : {
        paddingTop: "6rem",
        backgroundImage: `url(${bg1})`,
        height: "100vh"
    },

    text: {
        textAlign: "center",
        color: "#fff",
        "& h4": {
            fontSize: "2rem"
        },
        "& p": {
            color: "#ccc",
            fontSize: "1.1rem"
        }
    },

    form : {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        "& button" :{
            height: "2.3rem",
            width: "10%",
            lineHeight: "20px",
            [sizes.down("md")] : {
                width: "14%"
            },
            [sizes.down("xs")] : {
                width: "14%"
            },
        }
    },

    input: {
        width: "20%",
        height: "2.3rem",
        borderRaduis: ".5rem",
        backgroundColor: "#E8F0FE",
        marginLeft: "0.5rem",
        padding: "0.5rem",
        outline: "none",
        focus: "none",
        border: "none"

    }
}