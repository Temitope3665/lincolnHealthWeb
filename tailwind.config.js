/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      blue: "#0166FF",
      dark: "#4A4D6C",
      white: "#FFFFFF",
      lightGrey: "#FBFBFE",
      cardLight: "#FBFBFD",
      lightBlue: "#C9DBF8",
      green: "#05EDCD",
      red: "#DA0060"
    },
    fontSize: {
      sm: "12px",
      md: "14px",
      extraMd: "16px",
      lg: "20px",
      xl: "25px",
      xi: "30px",
      xxxl: '36px',
      xlii: "40px",
      xxl: "45px"
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      bold: "700",
      black: "900"
    },
      fontFamily: {
        'poppins': ["Poppins", "Segoe UI", "Roboto", "Oxygen"],
        'rubik': ["Rubik", "Segoe UI", "Roboto", "Oxygen"],
    },
    extend: {
      keyframes: {
        moveToRight: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(width)' },
        }
      },
      animation: {
        moveToRight: 'moveToRight 2s ease-in-out',
      },
      dropShadow: {
        'md': '0 1px 5px rgba(0, 0, 0, 0.05)',
        'lg': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

  // theme: {
  //   screens: {
  //     sm: "480px",
  //     md: "768px",
  //     lg: "976px",
  //     xl: "1440px",
  //   },
  //   colors: {
  //     blue: "#0166FF",
  //     dark: "#4A4D6C",
  //     white: "#FFFFFF",
  //     lightGrey: "#FBFBFE",
  //     lightBlue: "#C9DBF8",
  //     green: "#05EDCD",
  //   },
  //   fontFamily: {
  //     poppins: ["Poppins", "Segoe UI", "Roboto", "Oxygen"],
  //     rubik: ["Rubik", "Segoe UI", "Roboto", "Oxygen"],
  //   },
  //   spacing: {
  //     sm: "8px",
  //     md: "12px",
  //     lg: "16px",
  //     xl: "24px",
  //   },
  //   extend: {
  //     borderRadius: {
  //       none: "0",
  //       sm: ".125rem",
  //       DEFAULT: ".25rem",
  //       lg: ".5rem",
  //     },
  //   },
  // },
  // plugins: [],
