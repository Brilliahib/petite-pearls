/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "detailProduk.html", "detailProduk2.html", "detailProduk3.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        main: "#DBA39A",
        second: "#F0DBDB",
        third: "#F5EBE0",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
