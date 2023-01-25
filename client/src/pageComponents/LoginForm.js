import { Input } from "../components/index.js"

const inputs = [{ name: "username", type: "text" }, { name: "password", type: "password" }]

const LoginForm = () => {
  return (
    <form className="login-form">
      {inputs.map((object, i) => {
        return (<Input key={i} name={object["name"]} type={object["type"]} />)
      })}
    </form>
  )
}

export default LoginForm
