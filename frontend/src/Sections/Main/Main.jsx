import { ProfileImage } from "./profile-image/ProfileImage";
import { Skills } from "./Skills/Skills";
import "../../index.css";
import { Github } from "./Github/Github";
import { Description } from "./description/Description";

export function Main() {
  return (
    <>
      <main>
        <ProfileImage id="home" />
        <Description id="about" />
        <Skills id="skills" />
        <Github id="github" />
      </main>
    </>
  );
}
