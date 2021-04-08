import { useForm } from "react-hook-form";
import "../../../../app.css";
import { useActions } from "../../../../hooks/useActions";
import { LoginInterface } from "../interfaces/login.interface";

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { login } = useActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  /**
   * @param data
   */
  const onSubmit = (data: LoginInterface) => login(data);

  return (
    <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center mb-4">
        <img
          className="mb-4"
          src="https://www.gpcoders.com/_next/image?url=%2Fimages%2Fsitelogo-colored.svg&w=256&q=75"
          alt="logo"
        />
      </div>

      <div className="form-label-group">
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          defaultValue="gugu@gmail.com"
          {...register("email", { required: true })}
          autoFocus
        />
        <label htmlFor="inputEmail">Email address</label>
        <div>
          {errors.email && (
            <span className={"text-danger mt-2"}>Email field is required</span>
          )}
        </div>
      </div>

      <div className="form-label-group">
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          defaultValue={"admin@33"}
          {...register("password", { required: true })}
        />
        <label htmlFor="inputPassword">Password</label>
        {errors.password && (
          <span className={"text-danger mt-2"}>Password field is required</span>
        )}
      </div>

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;
