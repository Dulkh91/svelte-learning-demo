import { writable } from "svelte/store";

type Theme = "light" | "dark";

const saved = localStorage.getItem("theme") as Theme | null;
export const theme = writable<Theme>(saved ?? "light");

theme.subscribe(value => {
  localStorage.setItem("theme", value);
});

export const toggleTheme = () => {
  theme.update(current => (current === "light" ? "dark" : "light"));
};
