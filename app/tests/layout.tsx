"use client";
import TopNav from "@/src/views/navigation/topNavbar/TestTopNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleNextBtnClicked = () => {
    console.log("Next Button Clicked");
  };

  return (
    <div>
      <main className="w-full px-6">
        <div className="">
          <TopNav handleNextBtnClick={handleNextBtnClicked} />
          <ToastContainer />
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
}
