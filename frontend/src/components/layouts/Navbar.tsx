interface NavLinkProps {
    href : string;
    label : string;
}

const NavLink = ({href , label} : NavlinkProps) => (
    <a href={href}
    className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-gray-800">
{label}
    </a>
);

const Navbar = () => {
    return (
       <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800 ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Devesh</div>
            <div className="flex space-x-2">
                <NavLink href="#about" label="About" />
                <NavLink href="#skills" label="Skills" />
                <NavLink href="#projects" label="Projects" />
                <NavLink href="#contact" label="Contact" />
            </div>
        </div>

       </nav> 
    );
};

export default Navbar;