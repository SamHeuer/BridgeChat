import logo from "@logos/logo.png";
import banner from "@logos/BridgeChat.svg";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden flex-left">
      <div className="flex items-center w-72 h-12">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={logo}
            alt="logo"
            className="dark:filter"
            height={40}
            width={40}
          />
          <Image
            priority
            src={banner}
            alt="logo"
            className="p-2 dark:filter dark:invert"
            height={100}
            width={180}
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
