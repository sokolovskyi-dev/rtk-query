import { NavLink, Outlet } from 'react-router';

export function Component() {
  return (
    <div className="container mx-auto p-4">
      <header className="rounded p-4 shadow-xl">
        <nav>
          <NavLink to="/home">Home</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

Component.displayName = 'RootLayout';
