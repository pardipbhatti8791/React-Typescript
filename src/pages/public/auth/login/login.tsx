import '../../../../app.css'
const Login: React.FC = () => {
  return (
    <form className="form-signin">
      <div className="text-center mb-4">
        <img
          className="mb-4"
          src="https://dev-gugu9187.pantheonsite.io/wp-content/uploads/2020/09/sitelogo-e1603349147880.png"
          alt="logo"
        />
      </div>

      <div className="form-label-group">
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
        />
        <label htmlFor="inputEmail">Email address</label>
      </div>

      <div className="form-label-group">
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <label htmlFor="inputPassword">Password</label>
      </div>

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login
