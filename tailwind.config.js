/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        surface: "var(--surface)",
        border: "var(--border)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        "sale-badge": "var(--sale-badge)",
      },
    },
  },
  plugins: [],
  darkMode: false, // Ensures no dark mode toggle or classes are applied
}
