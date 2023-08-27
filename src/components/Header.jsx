import { Button, Space } from "antd";
import { CgWebsite } from "react-icons/cg";
const Header = () => {
  return (
    <>
      <Space>
        <CgWebsite size={55} />
      </Space>

      <Space>
        <Button href="/signin">Sign In</Button>
        <Button href="/signup">Sign Up</Button>
      </Space>
    </>
  );
};

export default Header;
