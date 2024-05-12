import { useRouter } from "next/router";
import { useEffect } from "react";
import AdminHeader from "@/components/AdminHeader";
import Footer from "@/components/Footer";
import useClientSecure from "@/hooks/useClientSecure";

const Index = () => {
  const isAuth = useClientSecure();
  const router = useRouter();

  useEffect(() => {
    if (isAuth !== "loading") {
      isAuth === "unauthenticated" && router.push("/admin/signin");
    }
  }, [isAuth, router]);

  return (
    <>
      <AdminHeader />
      <div className="w-10/12 mx-auto container">
        <p className="text-xl font-semibold flex justify-center items-center h-32 sm:h-96">
          Welcome to Dashboard
        </p>
      </div>
      <div />
      <Footer />
    </>
  );
};

export default Index;
