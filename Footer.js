
const Footer = () => {
  const today = new Date();

  return(
    <footer>
      <div className="footer-body">

        <div className="footer-image">
          <img src="https://cdn3.bigcommerce.com/s-7c08qbh/templates/__custom/images/footer_newyork_time_logo.png?t=1526915043"/>
        </div>

        <div className="button-container">
          <button>SHOP</button>
          <button>ABOUT US</button>
        </div>

        <div className="footer-ending">
          <p>&copy; {today.getFullYear()} ALL RIGHTS RESERVED</p>
          <p>Di Bruno Bros.</p>
          <div>PRIVACY POLICY</div>
        </div>

      </div> 

    </footer>
  )
}

export default Footer;