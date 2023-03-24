/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontSize: {
            "2xs": ".625rem",
            xs: ".75rem",
            sm: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
        },
        extend: {
            fontFamily: {
                mitr: "Mitr",
                ms: "Mansalva",
            },
            scale: {
                "-1": "-1",
            },
            keyframes: {
                bigbob: {
                    "0%, 100%": {
                        transform: ["rotate(0deg)", "translateY(10%)"],
                    },
                    "33%": {
                        transform: ["rotate(-10deg)", "translateY(-50%)]"],
                    },
                    "67%": {
                        transform: ["rotate(10deg)", "translateY(40%)]"],
                    },
                },
                bob: {
                    "0%, 100%": {
                        transform: ["rotate(-2deg)", "translateY(-2%)"],
                    },
                    "50%": { transform: ["rotate(2deg)", "translateY(2%)]"] },
                },
                equalbob: {
                    "0%, 100%": {
                        transform: ["rotate(0deg)", "translateY(0%)"],
                    },
                    "33%": {
                        transform: ["rotate(-0.5deg)", "translateY(-2%)]"],
                    },
                    "67%": { transform: ["rotate(0.5deg)", "translateY(2%)]"] },
                },
            },
            animation: {
                bob: "bob 5s ease-in-out infinite",
                lightbob: "equalbob 10s ease-in-out infinite",
                bigbob: "bigbob 1s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
