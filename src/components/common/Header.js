import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex justify-end p-4">
      <ThemeToggle />
    </header>
  );
}