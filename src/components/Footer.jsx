function Footer({ owner, year }) {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      © {year} {owner}. All rights reserved.
    </footer>
  );
}

export default Footer;