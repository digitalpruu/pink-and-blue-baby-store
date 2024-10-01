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
        description1: `En *${title}*, nos especializamos en ofrecer ropa y productos de alta calidad para tu bebé recién nacido. Desde prendas suaves y cómodas hasta accesorios esenciales, nuestro objetivo es proporcionarte todo lo necesario para el cuidado y bienestar de tu pequeño.`,
        description2: `Creemos en la importancia de la comodidad y el estilo desde el primer día de vida de tu bebé. Te ofrecemos una experiencia de compra excepcional, con un enfoque en la calidad y el servicio personalizado.`,
    },
    mission: {
        description: `Brindar la mejor asesoría en ropa y artículos de la mejor calidad para bebé a todos los padres, madres y familias primerizas, con productos disponibles el mismo día o cuando el cliente lo requiera.`,
    },
    vision: {
        description: `Ser el principal proveedor de la mejor ropa para bebé recién nacido a nivel Nacional, trascendiendo en el tiempo por generaciones y contribuyendo a una mejor sociedad.`,
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
