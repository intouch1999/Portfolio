export const useProjects = () => {
    return useState('projects', () => ({
        data: [
            {
                id: 1,
                name: 'Pawn Shop Management System',
                lang: [
                    'PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS' 
                ],
                img: [
                    '/img/Pawn_Sh/pawn-01.png',
                    '/img/Pawn_Sh/pawn-02.png',
                    '/img/Pawn_Sh/pawn-03.png',
                    '/img/Pawn_Sh/pawn-04.png',
                    '/img/Pawn_Sh/pawn-05.png',
                ]
            },
            {
                id: 2,
                name: 'Water Delivery Management System',
                img: [
                    '/img/Water_Deli/water-01.png',
                    '/img/Water_Deli/water-02.png',
                    '/img/Water_Deli/water-03.png',
                    '/img/Water_Deli/water-04.png',
                    '/img/Water_Deli/water-05.png',
                ]
            },
        ]
    }))
}