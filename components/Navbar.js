import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="Home" width={128} height={77} />
        </a>
      </Link>
      <div className="link-group">
        <Link href="/">
          <a className="link">Home</a>
        </Link>
        <Link href="/about">
          <a className="link">About</a>
        </Link>
        <Link href="/ninjas">
          <a className="link">Ninja Listing</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
