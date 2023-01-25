
const navlinks = ["play", "home", "account", "settings"]

const NavLinkList = () => {
  return (
    <ol>
      {navlinks.map((link, i) => {
        return (<li key={i}>
          <a href="/">{link}</a>
        </li>)
      })}
    </ol>
  )
}

export default NavLinkList
