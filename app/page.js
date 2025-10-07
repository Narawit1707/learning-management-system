import { UserButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <Button>Click me</Button>
      <UserButton />
    </div>
  );
}