function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <p>Copyright {footerYear} All rights reserved by Rabin Chakraborty</p>
      </div>
    </footer>
  );
}

export default Footer;
