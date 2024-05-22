import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  vue: true,
  stylistic: {
    quotes: "double",
    semi: true,
    indent: 2,
  },
  rules: {
    "no-console": "warn",
    "curly": ["error", "multi-line"],
  },
});
