import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const siteData = {
    title: 'My React Website',
    links: ['Home', 'About', 'Contact'],
    owner: 'Fahad',
    year: new Date().getFullYear(),
    formTitle: 'Contact Us',
  };

  return (
    <>
      <Header title={siteData.title} links={siteData.links} />
      <main className="container my-5">
        <ContactForm formTitle={siteData.formTitle} />
      </main>
      <Footer owner={siteData.owner} year={siteData.year} />
    </>
  );
}

export default App;