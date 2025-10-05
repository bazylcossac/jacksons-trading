import { Input } from "@/components/ui/input";

const AppHeaderSearch = () => {
  return (
    <Input
      type="text"
      placeholder="Search..."
      className="placeholder:text-sm max-w-[300px] h-full"
    />
  );
};

export default AppHeaderSearch;
