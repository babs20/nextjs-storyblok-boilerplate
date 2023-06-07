const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: ["html", "body"],
  },
];

const defaultPlugins = [
  "postcss-flexbugs-fixes",
  [
    "postcss-preset-env",
    {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
  ],
];

module.exports = {
  plugins: defaultPlugins.concat(
    process.env.NODE_ENV === "production" ? [purgecss] : []
  ),
};
