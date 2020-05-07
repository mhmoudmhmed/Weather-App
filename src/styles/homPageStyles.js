import bg2 from './bg2.svg';
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

    homePage: {
        backgroundImage: `url(${bg2})`,
        height: "100vh"
    },

    homeContent : {
        fontFamily: 'Modak, cursive',
        padding: "6rem 0",
        color: "#ccc",
        [sizes.down("md")]: {
            padding: "12rem 0"
        },
        [sizes.down("xs")]: {
            padding: "9rem 0"
        },
        "& h1": {
            fontSize: "7rem",

            [sizes.down("md")]: {
                fontSize: "4rem"
            },
            [sizes.down("xs")]: {
                fontSize: "4rem"
            },

            "& span": {
                color: "red"
            }
        },
        "& h3": {
            fontSize: "5rem",
            [sizes.down("md")]: {
                fontSize: "2.5rem"
            },
            [sizes.down("xs")]: {
                fontSize: "2rem"
            }
        }
    }
    
}