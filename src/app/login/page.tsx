import AuthPageImage from "@/components/app/AuthPageImage";
import LoginForm from "@/components/app/login/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="bg-white w-full h-screen text-black p-2 relative flex flex-col md:flex-row">
      <AuthPageImage
        mainText="Real-time trading platform, out of the box"
        text="Manage your money independly, smart and fast"
      />
      <LoginForm />
      <div className="absolute bottom-2 right-2">
        <Link href="/register" className="text-xs underline text-black/60">
          Don&apos;t have account?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
