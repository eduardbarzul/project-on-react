import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        GameZone
      </a>

      <form className={styles.search}>
        <input
          type="search"
          placeholder="Пошук товарів ..."
          aria-label="Пошук товарів"
        />
      </form>

      <nav className={styles.navigation}>
        <a href="/">Головна</a>
        <a href="/products">каталог</a>
        <a href="/new">Новинки</a>
        <a href="/sales">Акції</a>
      </nav>

      <div className={styles.actions}>
        <a href="/favorites" aria-label="Обране">
          ♡
        </a>
        <a href="/cart" aria-label="Кошик">
          ⊕
        </a>
        <a href="/authorization" aria-label="Профіль">
          ♟
        </a>
      </div>
    </header>
  );
}

export default Header;
