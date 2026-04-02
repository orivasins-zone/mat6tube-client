import { MdSettings } from "react-icons/md";
import Container from "./_ui/Container";
import Logo from "./_ui/Logo";

const Navbar = () => {
  return (
    <div className="bg-[url(../../src/assets/nav_bg.png)] bg-center bg-no-repeat bg-cover">
      <Container className="py-3">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="">
            <MdSettings className="cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
