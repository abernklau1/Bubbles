import { Input } from "../components/index.js";

const inputs = [{ name: "username", type: "text" }, { name: "password", type: "password" }]

const Login = () => {
  return <section>
    <div>
      <form className="login-form">
        {inputs.forEach(object, i, () => {
          <Input key={i} name={object["name"]} type={object["type"]} />
        })}
      </form>
    </div>
  </section>
}

export default Login;
