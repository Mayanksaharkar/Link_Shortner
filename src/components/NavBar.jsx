function NavBar() {
  return (
    <div className="navbar z-40 sticky top-0 backdrop-blur bg-base-300 flex align-middle justify-center " style={{backdropFilter: "blur(5px)"}}>
      <div className="navbar-center">
        <button className="btn btn-ghost text-primary text-4xl ">Link Shortner</button>
      </div>
    </div>
  );
}

export default NavBar;
