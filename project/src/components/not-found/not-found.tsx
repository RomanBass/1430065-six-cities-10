import Logo from '../../components/logo/logo';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404 Not Found</h1>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
