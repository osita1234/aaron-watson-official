import Link from "next/link";
import { PRODUCTS } from "../lib/products";

export default function Home() {
  const cards = PRODUCTS.filter(p => p.type === "fan_card");
  const tickets = PRODUCTS.filter(p => p.type === "ticket");
  return (
    <main>
      <section className="hero">
        <nav className="nav container">
          <div className="brand">AARON <span>WATSON</span></div>
          <Link href="/verify" className="nav-link">Verify</Link>
        </nav>
        <div className="hero-content container">
          <p className="eyebrow">OFFICIAL STORE</p>
          <h1>AARON WATSON</h1>
          <p className="subtitle">Musician • Comedian</p>
          <p className="hero-copy">Official fan cards and event tickets with secure checkout and private verification.</p>
          <a href="#store" className="primary-button">Explore the Store</a>
        </div>
      </section>

      <section id="store" className="store container">
        <div className="section-heading"><p className="eyebrow">OFFICIAL COLLECTION</p><h2>Fan Cards</h2></div>
        <div className="product-grid">{cards.map((p,i)=><ProductCard key={p.slug} product={p} featured={i===1}/>)}</div>
        <div className="section-heading tickets-heading"><p className="eyebrow">ADMISSION</p><h2>Tickets</h2></div>
        <div className="product-grid">{tickets.map((p,i)=><ProductCard key={p.slug} product={p} featured={i===1}/>)}</div>
      </section>

      <footer className="footer"><div className="container footer-inner">
        <div><strong>AARON WATSON</strong><p>Musician • Comedian</p></div>
        <div className="footer-links">
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/verify">Verification</Link>
          <Link href="/admin/login">Admin</Link>
        </div>
      </div></footer>
    </main>
  );
}

function ProductCard({product, featured}) {
  return <article className={`product-card ${featured ? "featured":""}`}>
    {featured && <span className="badge">VIP</span>}
    <div className="product-icon">{product.type === "ticket" ? "✦" : "◆"}</div>
    <p className="product-type">{product.type === "ticket" ? "TICKET":"FAN CARD"}</p>
    <h3>{product.name}</h3>
    <div className="price">${(product.priceCents/100).toLocaleString("en-US")}</div>
    <p className="product-copy">Secure USD checkout and private verification after successful payment.</p>
    <Link className="secondary-button" href={`/checkout?product=${product.slug}`}>Select</Link>
  </article>;
}