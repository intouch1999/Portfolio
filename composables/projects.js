export const useProjects = () => {
    return useState('projects', () => ({
        data: [
            {
                id: 1,
                name: 'Pawn Shop Management System',
                lang: [
                    'html', 'css' , 'javascript' , 'PHP' , 'mysql' 
                ],
                desc: `This project is designed to support pawn shops by streamlining the process of managing item deposits. When an item is deposited, 
                the system records it and sends notifications via LINE. The project also includes 
                libraries for generating PDF contracts and exporting data to Excel, making it easier to manage and document transactions efficiently.`,
                fea: [
                    { label: 'Item Deposit Management', value: 'Efficiently record and track items deposited by customers.' },
                    { label: 'LINE Notifications', value: 'Automatically send notifications to users via LINE when an item is deposited.' },
                    { label: 'PDF Contract Generation', value: 'Create and store PDF contracts for every transaction using FPDF.' },
                    { label: 'Excel Export', value: 'Export transaction data to Excel using PhpSpreadsheet for easy record-keeping and reporting.' },
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
                lang: [
                    'html', 'css' , 'javascript' , 'jquery' , 'PHP' , 'mysql' 
                ],
                desc: `This project streamlines the management of a beverage shop by organizing inventory, 
                processing orders, and keeping records. It ensures all activities are well-documented and easily accessible, supporting daily operations smoothly.`,
                fea:[
                    { label: 'Inventory Management', value: 'Efficiently track and manage beverage inventory, including stock levels and reordering.' },
                    { label: 'Order Processing', value: 'Streamlined process for taking, processing, and fulfilling orders.' },
                    { label: 'Record Keeping', value: 'Comprehensive record-keeping system for sales, purchases, and inventory changes.' },
                    { label: 'User-friendly Interface', value: 'Intuitive interface for managing daily operations with ease.' },
                ],
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