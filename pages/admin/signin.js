import { useEffect } from "react";
import { useRouter } from "next/router";
import SignIn from "@/components/SignIn";
import useClientSecure from "@/hooks/useClientSecure";

const Signin = () => {
  const router = useRouter();
  const isAuth = useClientSecure();

  useEffect(() => {
    if (isAuth !== "loading") {
      isAuth === "authenticated" && router.push("/admin");
    }
  }, [isAuth, router]);

  return <SignIn />;
};

export default Signin;
