import { useState } from "react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      callbackUrl: `${window.location.origin}/admin`,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="h-screen flex justify-center items-center" onSubmit={onSubmit}>
      <div className="w-10/12 sm:w-6/12 mx-auto bg-secondary p-10 shadow-sm rounded-sm space-y-5">
        <p className="text-xl font-semibold">Login</p>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            className="px-5 py-4 outline-0 rounded shadow-sm w-full focus:ring appearance bg-primary"
            name="email"
            onChange={onChangeHandler}
            value={credentials.email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            className="px-5 py-4 outline-0 rounded shadow-sm w-full focus:ring appearance bg-primary"
            name="password"
            onChange={onChangeHandler}
            value={credentials.password}
          />
        </div>
        <button className="bg-blue-900 text-white px-5 py-2 rounded-sm hover:bg-blue-800 shadow-sm">
          Login
        </button>
      </div>
    </form>
  );
};

export default SignIn;
