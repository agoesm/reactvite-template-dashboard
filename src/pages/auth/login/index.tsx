import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Card } from "antd";
import { css } from "@emotion/css";
import { useAuth } from "../../../hooks/auth";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;
  const { login } = useAuth();

  const onSubmit = (data: FormData) => {
    // Simulate login
    if (data.username === "admin" && data.password === "1234") {
      login("fake-jwt-token");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className={css`
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f0f2f5;
      `}
    >
      <Card title="Login" style={{ width: 320 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: 12 }}>
            <Input placeholder="Username" {...register("username")} />
            {errors.username && (
              <p
                className={css`
                  color: red;
                  font-size: 12px;
                `}
              >
                {errors.username.message}
              </p>
            )}
          </div>
          <div style={{ marginBottom: 12 }}>
            <Input.Password placeholder="Password" {...register("password")} />
            {errors.password && (
              <p
                className={css`
                  color: red;
                  font-size: 12px;
                `}
              >
                {errors.password.message}
              </p>
            )}
          </div>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
