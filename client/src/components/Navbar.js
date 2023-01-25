

const navlinks = ["play", "home", "account", "settings"]

const Navbar = () => {
  return <section>
    <nav>
      <div>
        <img />
      </div>
      <div>
        <ol>
          {navlinks.forEach(link, i, () => {
            <li key={i}>
              <a href="/">{link}</a>
            </li>
          })}
        </ol>
      </div>
    </nav>
  </section >
}

export default Navbar
