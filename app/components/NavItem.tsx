import Link from 'next/link'

const NavItem = ({ children, url }: {  children: React.ReactNode, url: string }) => {
  return (
    <div className="inline text-center border-r p-1 tiny:px-2 sm:px-3 lg:px-5 last:border-r-0 content-center hover:bg-white hover:bg-opacity-20 cursor-pointer">
      <Link href={url}>{children}</Link>
    </div>
  );
}

export default NavItem;