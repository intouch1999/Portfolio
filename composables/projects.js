export const useProjects = () => {
    return useState('projects', () => ({
        data: [
            {
                id: 1,
                name: 'Pawn Shop Management System',
                img: '/img/Pawn_Sh/pawn-01.png',
            },
            {
                id: 2,
                name: 'Water Delivery Management System',
                img: '/img/Water_Deli/water-01.png',
            },
        ]
    }))
}