const title = "Pink And Blue Baby Store";
const slogan = "El mejor asesor para la ropa de tu bebé recién nacido";
const email = "pinkandbluebabystore85@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3204436676";
const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En Pink And Blue Baby Store, nos especializamos en ofrecer ropa y productos de alta calidad para tu bebé recién nacido. Desde prendas suaves y cómodas hasta accesorios esenciales, nuestro objetivo es proporcionarte todo lo necesario para el cuidado y bienestar de tu pequeño. Nos enorgullecemos de ser el mejor asesor en ropa para bebés, garantizando que cada artículo en nuestra tienda esté cuidadosamente seleccionado para ofrecerte sólo lo mejor. Creemos en la importancia de la comodidad y el estilo desde el primer día de vida de tu bebé. En Pink And Blue Baby Store, te ofrecemos una experiencia de compra excepcional, con un enfoque en la calidad y el servicio personalizado. Estamos aquí para ayudarte a encontrar los productos perfectos que satisfagan las necesidades de tu bebé y te hagan sentir seguro y feliz con tus elecciones. Visítanos y descubre como Pink And Blue Baby Store puede ser tu aliado en el viaje de crianza, brindándote productos y asesoramiento para que cada momento con tu bebé sea especial y cómodo.",
        description2:
            "Misión: Brindar la mejor asesoría en ropa y artículos de la mejor calidad para bebé a todos los padres, madres y familias primerizas que esperan a su hijo recién nacido y que requiere los productos el mismo día o cuando el cliente lo requiera.",
        description3:
            "Visión: Ser el principal proveedor de la mejor ropa para bebé recién nacido a nivel Nacional, conservando nuestros principios y valores y así contribuir a una mejor sociedad trascendiendo en el tiempo por generaciones."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: `${title}`,
            p2: slogan,
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/pinkandbluebabystoredg?mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/pink.bluebabystore?utm_source=qr&igsh=MXJhYnU4ZXZhMWc5dg==",
        tiktok: "https://www.tiktok.com/@pinkandblue.babys?_t=8q6dCLH6IX0&_r=1",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
