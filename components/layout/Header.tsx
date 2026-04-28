const Header = () => {
  return (
    <header className="h-[88px] mx-h-88 flex px-[128px] py-[20px] bg-(--deep-green) border border-(--black) text-(--white)">
      <p className="text-2xl font-medium leading-[117%] tracking-[0.02em]">
        Nanny.Services
      </p>
      <nav>
        <ul className="flex">
          <li>Home</li>
          <li>Nannies</li>
          <li>Favorites</li>
        </ul>
      </nav>
      <div className="flex">
        <div>Avatar</div>
        <button>Log out</button>
      </div>
    </header>
  );
};

export default Header;
