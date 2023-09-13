import { Fragment, useState } from "react";
// import MyComponent from "../components/MyComponent";
import {
  Col,
  Row,
  Card,
  Alert,
  Form,
  Input,
  Button,
  Spin,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { SERVER_API } from "../constants/appConstants";
const SignUp = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${SERVER_API}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        message.success(`Sucessfully Signed up ${data.user.username}`);
        navigate("/signin", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError(error?.message ?? "something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Fragment>
        <Row align="middle">
          <Col span={8} offset={8}>
            <Card title="Sign-up">
              {error ? (
                <Alert
                  className="alert_error"
                  message={error}
                  type="error"
                  closeable
                  afterClose={() => setError("")}
                />
              ) : null}
              <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: "true",
                      type: "string",
                    },
                  ]}
                >
                  <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: "true",
                      type: "email",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: "true",
                      type: "password",
                    },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item></Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login_submit_btn"
                >
                  Submit{isLoading && <Spin size="small" />}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Fragment>
    </>
  );
};

export default SignUp;
