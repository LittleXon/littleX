import "./globals.css";

export const metadata = {
  title: "LittleX Official | Solana",
  description: "Little is forever on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
