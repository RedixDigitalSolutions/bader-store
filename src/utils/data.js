export const packages = {
    bader: {
        id: 'bader',
        name: 'Bader Store',
        subtitle: 'Solution Accessible',
        targetAudience: 'Petits détaillants privilégiant l\'accessibilité',
        color: '#3B82F6',
        accentColor: '#60A5FA',
        pricePerPost: 10,
        videoPrice: null,
        advertisingBudget: 80,
        website: {
            included: false,
            domain: null,
            hosting: null,
            maintenance: null
        },
        services: [
            {
                title: 'Gestion des Réseaux Sociaux',
                items: [
                    'Publications professionnelles à 10 DT/post',
                    'Modèles de posts gratuits personnalisés',
                    'Stratégie de contenu mensuelle',
                    'Planification et programmation des posts'
                ]
            },
            {
                title: 'Publicité Professionnelle',
                items: [
                    'Budget publicitaire: 80 DT/mois',
                    'Campagnes ciblées Instagram & Facebook',
                    'Optimisation du ROI',
                    'Rapports de performance mensuels'
                ]
            },
            {
                title: 'Production de Contenu',
                items: [
                    'Photographie professionnelle: 50 DT/heure',
                    'Produits illimités par session',
                    'Retouches incluses',
                    'Format optimisé pour réseaux sociaux'
                ]
            }
        ],
        benefits: [
            'Idéal pour démarrer votre présence digitale',
            'Budget maîtrisé et prévisible',
            'Visibilité accrue sur les réseaux sociaux',
            'Accompagnement professionnel',
            'Sans engagement de longue durée'
        ]
    },
    rosa: {
        id: 'rosa',
        name: 'Rosa Store',
        subtitle: 'Package Premium',
        targetAudience: 'Détaillants de sacs de luxe',
        color: '#EC4899',
        accentColor: '#F472B6',
        pricePerPost: 15,
        videoPrice: 15,
        advertisingBudget: 100,
        website: {
            included: true,
            domain: 'bader-tn.store',
            domainCost: 30,
            hosting: 70,
            maintenance: {
                monthly: 'Gratuit',
                additional: 20
            }
        },
        services: [
            {
                title: 'Gestion Premium des Réseaux Sociaux',
                items: [
                    'Vidéos animées professionnelles à 15 DT/post',
                    'Modèles de posts premium gratuits',
                    'Stratégie de contenu avancée',
                    'Réponses aux commentaires et messages'
                ]
            },
            {
                title: 'Publicité Premium',
                items: [
                    'Budget publicitaire: 100 DT/mois',
                    'Campagnes multi-plateformes (Instagram, Facebook, TikTok)',
                    'Ciblage d\'audience premium',
                    'Optimisation A/B testing',
                    'Rapports détaillés hebdomadaires'
                ]
            },
            {
                title: 'Site Web Statique Personnalisé',
                items: [
                    'Développement du site web (design luxueux) 250 DT',
                    'Domaine bader-tn.store: 30 DT (unique)',
                    'Hébergement: 70 DT/mois',
                    '( 1 ) Mises à jour mensuelles gratuites',
                    'Modifications supplémentaires: 20 DT/modification'
                ]
            },
            {
                title: 'Production de Contenu Premium',
                items: [
                    'Photographie professionnelle: 50 DT/heure',
                    'Vidéographie et montage inclus',
                    'Produits illimités par session',
                    'Retouches avancées et effets spéciaux'
                ]
            }
        ],
        benefits: [
            'Site web professionnel inclus',
            'Contenu vidéo animé de haute qualité',
            'Budget publicitaire optimisé',
            'Présence digitale complète',
            'Support et maintenance inclus',
            'Image de marque premium'
        ]
    }
};

export const comparisonData = [
    {
        feature: 'Prix par publication',
        bader: '10 DT/post',
        rosa: '15 DT/vidéo animée'
    },
    {
        feature: 'Budget publicitaire mensuel',
        bader: '80 DT/mois',
        rosa: '100 DT/mois'
    },
    {
        feature: 'Site web personnalisé',
        bader: 'Non inclus',
        rosa: 'Inclus (gratuit)'
    },
    {
        feature: 'developement site web',
        bader: 'Non inclus',
        rosa: '250 DT (premium)'
    },
    {
        feature: 'Domaine personnalisé',
        bader: '—',
        rosa: '30 DT (unique)'
    },
    {
        feature: 'Hébergement web',
        bader: '—',
        rosa: '70 DT/mois'
    },
    {
        feature: 'Photographie produit',
        bader: '50 DT/heure',
        rosa: '50 DT/heure'
    },
    {
        feature: 'Type de contenu',
        bader: 'Posts statiques',
        rosa: 'Vidéos animées'
    },
    {
        feature: 'Maintenance site web',
        bader: '—',
        rosa: 'Gratuite (mensuelle)'
    },
    {
        feature: 'Plateformes sociales',
        bader: 'Instagram, Facebook',
        rosa: 'Instagram, Facebook, TikTok'
    },

];

export const marketingImpact = {
    title: 'L\'Impact du Marketing Digital',
    description: 'Le marketing digital est essentiel pour atteindre vos clients, construire votre notoriété de marque et stimuler les ventes dans le marché compétitif des sacs à main.',
    statistics: [
        {
            metric: '+250%',
            label: 'Augmentation moyenne du trafic',
            description: 'avec une stratégie digitale cohérente'
        },
        {
            metric: '70%',
            label: 'Des consommateurs',
            description: 'découvrent des marques via les réseaux sociaux'
        },
        {
            metric: '3.2x',
            label: 'Taux de conversion',
            description: 'avec du contenu vidéo professionnel'
        }
    ]
};
