import AuthPageImage from "@/components/app/AuthPageImage";
import RegisterForm from "@/components/app/register/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="bg-white w-full h-screen text-black p-2 relative flex flex-col md:flex-row">
      <AuthPageImage
        mainText="Join the biggest trading platform in Europe"
        text="Fast, secure and easy to use"
      />
      <RegisterForm />
      <div className="absolute bottom-2 right-2">
        <Link href="/login" className="text-xs underline text-black/60">
          Have account?
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
