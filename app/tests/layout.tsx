import TopNav from "@/src/views/navigation/topNavbar/TestTopNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
      <main className="w-full p-6 mt-8">
        <div className="">
          <TopNav  />
          <ToastContainer />
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
}
