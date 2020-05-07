import sizes from './sizes';

export default {

    Navbar : {
        position: 'absolute',
        right: '0rem',
        top: '-15rem',
        bottom: 0,
        textAlign: 'center',
        WebkitWritingMode: 'vertical-lr',
        transform: 'rotate(-360deg)',
        [sizes.down("md")]: {
            right: '0rem',
            top: "-9rem"
        },
        [sizes.down("xs")]: {
            right: "0.2rem",
            top: "-10rem"
        },

        "& a" : {
            color: '#fff',
            textDecoration: 'none',
            display: 'inline-block',
            padding: '0.8em 0.4em',
            fontSize: "1.8rem",
            [sizes.down("md")]: {
                fontSize: "1.9rem"
            },
            [sizes.down("xs")]: {
                fontSize: "1.4rem"
            }
        }
    }
    
}