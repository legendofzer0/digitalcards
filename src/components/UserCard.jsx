import { Card, Image, Typography, Button } from "antd";
import { AVATAR_API } from "../constants/appConstants";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

const UserCard = ({ name, bio, linkedInUrl, githubUrl, email, website }) => {
  return (
    <>
      <Card title="" bordered={true} style={{ width: 300 }}>
        <Image
          preview={false}
          src={`${AVATAR_API}/?name=Pravesh Chapagain&background=1890ff&color=fff`}
        />

        <Typography.Title level={5}>{name}</Typography.Title>
        <Typography.Paragraph>{bio}</Typography.Paragraph>
        <Button href={`${linkedInUrl}`} target="_blank">
          <AiFillLinkedin size={24} />
        </Button>
        <Button href={`${githubUrl}`} target="_blank">
          <AiFillGithub size={24} />
        </Button>
        <Button href={`${website}`} target="_blank">
          <CgWebsite size={24} />
        </Button>
        <Button href={`mailto:${email}`} target="_blank">
          <SiGmail size={24} />
        </Button>
      </Card>
    </>
  );
};

export default UserCard;
