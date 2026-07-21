const services = [
  {
    title: "Wedding Photography",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    description: "Capturing timeless wedding moments with elegance and emotion."
  },

  {
    title: "Candid Wedding Photography",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80",
    description: "Natural smiles and genuine emotions captured beautifully."
  },

  {
    title: "Pre Wedding Photography",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    description: "Romantic couple portraits before the big day."
  },

  {
    title: "Engagement Shoot",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    description: "Celebrate the beginning of forever."
  },

  {
    title: "Wedding Films",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    description: "Cinematic storytelling you'll cherish forever."
  },

  {
    title: "Destination Weddings",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    description: "Beautiful weddings captured across breathtaking destinations."
  },

  {
    title: "Maternity Shoot",
    image: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=900",
    description: "Celebrate motherhood with graceful maternity portraits."
  },

  {
    title: "Baby Shower Photography",
    image: "https://images.pexels.com/photos/3662844/pexels-photo-3662844.jpeg?auto=compress&cs=tinysrgb&w=900",
    description: "Capturing joyful moments before welcoming your little one."
  },

  {
    title: "Post Wedding Shoot",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    description: "Romantic portraits in beautiful outdoor locations."
  }
];

function WhatWeDo() {
  return (
    <section className="services-section">

      <div className="section-heading">
        <span>WHAT WE DO</span>
        <h2>Our Photography Services</h2>

        <p>
          Every celebration is unique. We preserve every emotion through
          timeless photography and cinematic storytelling.
        </p>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <img src={service.image} alt={service.title} />

            <div className="service-overlay">

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhatWeDo;