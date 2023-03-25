import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const UseClientSecure = () => {
  const [isAuthenticate, setIsAuthenticate] = useState("loading");
  const { status } = useSession();

  useEffect(() => {
    setIsAuthenticate(status);
  }, [status]);

  return isAuthenticate;
};

export default UseClientSecure;
