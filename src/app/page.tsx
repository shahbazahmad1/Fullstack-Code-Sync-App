import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-10">
       <div className="m-10">
        <SignInButton>
         <button>
          SignIn
         </button>
        </SignInButton>
       </div>
    </div>
  );
}
