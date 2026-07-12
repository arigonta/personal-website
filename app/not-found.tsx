export default function NotFound() {
  return (
    <main className="notFound">
      <p className="eyebrow"><span>404</span> Page not found</p>
      <h1>Nothing at this<br /><em>address.</em></h1>
      <p className="intro">The page you are looking for does not exist or has moved.</p>
      <a className="primaryButton" href="./">Back to home <span>↖</span></a>
    </main>
  );
}
