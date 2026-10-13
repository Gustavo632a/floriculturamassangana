import s from "./Layout.module.css";
const logoAssets = import.meta.glob("/public/images/logo-massangana.png", {
  eager: true,
});
export function Brand() {
  return (
    <a href="#inicio" className={s.brand} aria-label="Massangana — início">
      {Object.keys(logoAssets).length > 0 ? (
        <img
          src="/images/logo-massangana.png"
          alt="Floricultura Massangana"
          width="180"
          height="65"
        />
      ) : (
        <>
          <span>MASSANGANA</span>
          <small>FLORICULTURA</small>
        </>
      )}
    </a>
  );
}
