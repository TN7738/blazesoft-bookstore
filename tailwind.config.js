/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.js"],
    theme: {
        extend: {},
        screens: {
            xs: { max: "475px" },
            md: { max: "550px" },
        },
    },
    plugins: [],
};
