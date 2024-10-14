// import { Nav } from "./Nav/Nav";
import "./Header.css";
import { Logo } from "./Title/Logo";
import { Hero } from "./Hero/Hero";

export function Header() {
  return (
    <>
      <header>
        <Logo />

        <Hero />
      </header>
    </>
  );
}
