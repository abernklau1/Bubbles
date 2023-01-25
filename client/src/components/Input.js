const Input = ({ name, inputType }) => {
  return <section>
    <label htmlFor={name}>
      {name}
    </label>
    <input name={name} type={inputType} placeholder={name} />
  </section>
}

export default Input
