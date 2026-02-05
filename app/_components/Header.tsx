import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight} from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const MenuOptions = [
  {
    name:'pricing',
    path:'/pricing'
  },
  {
    name:'Contact us',
    path:'/contact-us'
  }
]
export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 shadow">
        {/* LOGO */}
        <div className="flex gap-2 items-center">
          <Image src={'/logo.svg'} alt="logo" width={35} height={35}></Image>
          <h2 className="font-bold text-2xl">ASAP!</h2>
        </div>
        {/* MENU */}
        <div className="gap-3">
          {MenuOptions.map((menu,index)=>(
            <Button variant={'ghost'} key={index}>{menu.name}</Button>
          ))}
        </div>
        {/* GET STARTED  */}
        <SignInButton mode="modal" forceRedirectUrl={'/workspace'}>  
          <Link href={'/workspace'}>
            <Button>Get Started <ArrowRight/></Button>
          </Link>
        </SignInButton>
    </div>
  );
}
