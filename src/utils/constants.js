export const CURRENCY = {
    TND: 'DT',
    USD_TO_TND: 3.5
};

export const COMPANY_INFO = {
    name: 'Redix Digital Solutions',
    tagline: 'Redefining the Digital Game',
    description: 'Agence digitale spécialisée en solutions e-commerce, développement web & mobile, marketing digital et production vidéo professionnelle',
    location: 'Manouba, Tunisie',
    email: 'contact@redixsolutions.pro',
    phone: '+216 92 861 655',
    whatsapp: '+21692861655',
    facebook: 'https://www.facebook.com/profile.php?id=61560535962106',
    instagram: 'https://www.instagram.com/redixdigitalsolutions/',
    website: 'https://www.redixsolutions.pro',
    stats: {
        experience: '2+',
        experts: '27+',
        brands: '17+',
        projects: '50+'
    }
};

export const SOCIAL_PLATFORMS = [
    { name: 'Instagram', icon: 'FaInstagram', color: '#E4405F', url: COMPANY_INFO.instagram },
    { name: 'Facebook', icon: 'FaFacebook', color: '#1877F2', url: COMPANY_INFO.facebook },
    { name: 'WhatsApp', icon: 'FaWhatsapp', color: '#25D366', url: `https://wa.me/${COMPANY_INFO.whatsapp}` }
];

export const SAMPLE_VIDEOS = [
    { name: 'Dark-Blue-Purse.mp4', title: 'Sac Bleu Marine Premium' },
    { name: 'Pink-Purse.mp4', title: 'Collection Rose Élégante' },
    { name: 'Timeline-1.mp4', title: 'Animation Timeline' },
    { name: 'White-Purse.mp4', title: 'Sac Blanc Luxueux' }
];

export const NAV_LINKS = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À Propos', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
];
