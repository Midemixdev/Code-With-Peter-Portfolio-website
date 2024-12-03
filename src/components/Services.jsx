const servicesData = [
  {
    id: 1,
    icon: "/servicesIcon/customisation.png",
    heading: "Custom Website Design",
    content:
      "our passion for blending art and functionality creates captivating, user-friendly websites. Years of refining our design skills ensure tailored solutions.",
  },

  {
    id: 2,
    icon: "/servicesIcon/commerce.png",
    heading: "E-commerce Development",
    content:
      "Streamlined checkout and secure payments drive online sales. Expertly crafted stores optimized for conversions and growth.",
  },

  {
    id: 3,
    icon: "/servicesIcon/add.png",
    heading: "Web App Development",
    content:
      "Cutting-edge web applications tackle real-world challenges. Built with React, Angular, and Vue.js for scalable, user-centric solutions.",
  },

  {
    id: 4,
    icon: "/servicesIcon/support.png",
    heading: "Website Maintenance and Support",
    content:
      "Proactive security, updates, and optimization ensure peace of mind. With our expertise, your website stays secure, fast, and always online.",
  },

  {
    id: 5,
    icon: "/servicesIcon/responsive.png",
    heading: "Responsive Web Design",
    content:
      "Mobile-friendly designs adapt to every screen size, enhancing user engagement. our expertise guarantees seamless experiences across devices.",
  },

  {
    id: 6,
    icon: "/servicesIcon/optimize.png",
    heading: "Website Optimization",
    content:
      "Technical audits, keyword research, and on-page optimization boost visibility. My targeted SEO strategies drive organic traffic and growth.",
  },
];

function Services() {
  return (
    <div className="services" id="services">
      <h2>
        <span className="highlight">Ser</span>vices
      </h2>
      <ul>
        {servicesData.map((services) => (
          <ServiceList key={services.id} servicesObj={services} />
        ))}
      </ul>
    </div>
  );
}

function ServiceList({ servicesObj }) {
  return (
    <li className="service-list">
      <img src={servicesObj.icon} alt={servicesObj.name} />
      <h3>{servicesObj.heading}</h3>
      <p>{servicesObj.content}</p>
    </li>
  );
}

export default Services;
