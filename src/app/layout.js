import "./globals.css";

export const metadata = {
  title: "Kyarise Solutions",
  description: "Kyarise Solutions is a full-service web development company specializing in custom websites, web applications, and modern digital solutions using technologies like React, Next.js, Node.js, and more. We deliver high-performance, responsive, and visually appealing websites to help businesses grow online.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
