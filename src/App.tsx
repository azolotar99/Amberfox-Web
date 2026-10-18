import { useLayoutEffect, useRef } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Products from './components/Products';
import AboutBand from './components/AboutBand';
import Process from './components/Process';
import Automation from './components/Automation';
import GalleryStrip from './components/GalleryStrip';
import Testimonials from './components/Testimonials';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import { productBySlug } from './content';
import { useRoute, type Route } from './route';

const SITE_TITLE = "Amberfox Blinds & Shutters — Sydney's Eastern Suburbs Specialists";

/** The element a route should land on: a product section, or a homepage anchor. */
const scrollTarget = (route: Route) => {
  if (route.page === 'products') return route.slug ? document.getElementById(route.slug) : null;
  const id = decodeURIComponent(window.location.hash.slice(1));
  return id ? document.getElementById(id) : null;
};

export default function App() {
  const route = useRoute();
  const lastPage = useRef(route.page);

  useLayoutEffect(() => {
    // Jump instantly when switching pages; within a page, CSS smooth scrolling applies.
    const behavior: ScrollBehavior = lastPage.current === route.page ? 'smooth' : 'instant';
    lastPage.current = route.page;
    const target = scrollTarget(route);
    if (target) target.scrollIntoView({ behavior });
    else window.scrollTo({ top: 0, behavior });

    const product = route.page === 'products' && route.slug ? productBySlug(route.slug) : undefined;
    document.title = route.page === 'products'
      ? `${product ? product.name : 'Our Products'} | Amberfox Blinds & Shutters`
      : SITE_TITLE;
  }, [route]);

  return (
    <>
      <Nav />
      {route.page === 'products' ? (
        <ProductsPage activeSlug={route.slug} />
      ) : (
        <>
          <Hero />
          <Ticker />
          <Products />
          <AboutBand />
          <Process />
          <Automation />
          <GalleryStrip />
          <Testimonials />
        </>
      )}
      <CtaBand />
      <Footer />
    </>
  );
}
