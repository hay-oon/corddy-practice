import { LoginButton } from "../../../common/Button/LoginButton";
import { Navigation } from "./Navigation";
import "./Header.css";

export function Header() {
  return (
    <nav>
      <Navigation />
      <div className="auth">
        <div>name</div>
        <LoginButton />
      </div>
    </nav>
  );
}
