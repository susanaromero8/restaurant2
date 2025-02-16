import About from "../components/About";

const AboutPage = () => {
  return (
    <>
      <div className="tittle-contain text-center m-10 lg:m-20 text-4xl">
        <h2>About</h2>
      </div>
      <div className="container px-20">
        <p>
          Welcome to Face Selections - Your Ultimate Destination for Quality
          Products from Around the World!
        </p>
        <p>
          At Face Selections, we're more than just an online store. We're a
          vibrant community dedicated to providing an exceptional shopping
          experience, curated for consumers everywhere. Our name, FACE, stands
          for "For All Consumers Everywhere," and it reflects our commitment to
          offering a diverse range of products sourced from global suppliers and
          marketplaces.
        </p>
        <br />
        <h3 className="font-bold">Our Story</h3>
        <br />
        <p>At Face Selections, our mission is clear:</p>
        <br />
        <h3 className="font-bold">Our Mission</h3>
        <br />
        <ul>
          <li>
            <span className="font-bold">Diversity and Inclusivity:</span> We
            believe that shopping should be a universal experience accessible to
            all. Our diverse and growing product catalog ensures that you can
            discover items that resonate with your unique preferences and
            lifestyles.
          </li>
          <li>
            <span className="font-bold">Quality and Authenticity:</span> We are
            committed to providing products that meet the highest standards of
            quality and authenticity. Our team meticulously selects each item to
            ensure your satisfaction.
          </li>
          <li>
            <span className="font-bold">Convenience and Simplicity:</span> We
            understand the value of your time and aim to make your shopping
            experience as straightforward and enjoyable as possible. With our
            user-friendly website and intuitive navigation, finding what you
            love is a breeze.
          </li>
          <li>
            <span className="font-bold">Global Reach:</span> Face Selections is
            your passport to the world of shopping. We bridge the gap between
            consumers and suppliers worldwide, offering a diverse array of
            products that cater to your every need.
          </li>
        </ul>
        <br />
        <h3 className="font-bold">What Sets Us Apart</h3>
        <br />
        <h3 className="font-bold">Join Our Face Selections Community</h3>
        <br />
        <p>
          Face Selections is more than just an online store; it's a community of
          like-minded individuals who share a passion for discovering unique and
          exceptional products. We invite you to become a part of our growing
          family of consumers everywhere, each with their own distinct tastes
          and desires.
        </p>
        <br />
        <p>
          Thank you for choosing Face Selections as your trusted shopping
          destination. We look forward to serving you and helping you find the
          products that resonate with your lifestyle and preferences. Together,
          we're shaping the future of global online shopping, one selection at a
          time.
        </p>
        <br />
        <p>
          Discover. Shop. Enjoy. Face Selections - For All Consumers Everywhere.
        </p>
      </div>
      <About />
    </>
  );
};

export default AboutPage;
