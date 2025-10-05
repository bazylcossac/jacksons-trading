import Image from "next/image";

const EmailTemplate = (firstName: string, text: string, userImage: string) => {
  return (
    <div>
      <div className="flex items-center gap-2 justify-center">
        <Image src={userImage} alt="user image" width={100} height={100} className="rounded-full" />
        <h1>Hello {firstName}</h1>
        <p>Welcome to our app</p>
        <p>Thank you for signing up</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default EmailTemplate;
