import Link from "next/link";
import { URLSearchParams } from "node:url";

export default function Header() {
  return (
        <ul className=" text-center bg-green-500">
          <Link href="\home"><b>Home</b></Link> |  <Link href="\about"><b>About</b></Link> | <Link href="\projects"><b>Project</b></Link> | <Link href="\contact-us"><b>Contact Us</b></Link> 
          </ul>
          
  );
}
