import { FooterButton } from "./FooterButton";

const flex = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginTop: "108.5px",
};

export function Footer() {
  return (
    <div style={flex}>
      <FooterButton>Gather</FooterButton>
      <FooterButton>Slack</FooterButton>
      <FooterButton>Learning Materials</FooterButton>
    </div>
  );
}
