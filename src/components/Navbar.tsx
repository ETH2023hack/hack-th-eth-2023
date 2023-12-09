import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-primary sticky">
      <a href="/">
        <h1
          className="text-secondary text-3xl font-bold mb-10"
          style={{ color: "orange" }}
        >
          The riddler
        </h1>
      </a>
      <ConnectButton showBalance={false} />
    </nav>
  );
}
