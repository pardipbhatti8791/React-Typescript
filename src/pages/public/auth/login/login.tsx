import { useForm } from "react-hook-form";
import "../../../../app.css";
import { useActions } from "../../../../hooks/useActions";
import { LoginInterface } from "../interfaces/login.interface";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { loading } = useTypedSelector((state) => state.auth);
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
    <>
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    <img
                      src="https://www.gpcoders.com/_next/image?url=%2Fimages%2Fsitelogo-colored.svg&w=256&q=75"
                      alt="logo"
                      className="logo logo-dark"
                    />
                  </div>
                  <div className="p-2 mt-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="username">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Enter email"
                          defaultValue="gugu@gmail.com"
                          {...register("email", { required: true })}
                        />
                        {errors.email && (
                          <span className={"text-danger mt-2"}>
                            Email field is required
                          </span>
                        )}
                      </div>

                      <div className="mb-3">

                        <label className="form-label" htmlFor="userpassword">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="userpassword"
                          placeholder="Enter password"
                          defaultValue={"admin@33"}
                          {...register("password", { required: true })}
                        />
                        {errors.password && (
                          <span className={"text-danger mt-2"}>
                            Password field is required
                          </span>
                        )}
                      </div>

                      <div className="mt-3 text-end">
                        <button
                          className="btn btn-primary w-sm waves-effect waves-light"
                          type="submit"
                        >
                          {loading ? "Wait..." : "Log In"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
