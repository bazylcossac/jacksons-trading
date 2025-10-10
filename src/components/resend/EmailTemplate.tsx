const EmailTemplate = (firstName: string, text: string) => {
  return (
    <div>
      <div className="flex items-center gap-2 justify-center">
        <h1>Hello {firstName}</h1>
        <p>Welcome to our app</p>
        <p>Thank you for signing up</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default EmailTemplate;
