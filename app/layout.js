import "./globals.css";


export const metadata = {
  title: "Afrimed",
  description: "Healthcare made an experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`max-w-screen min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
