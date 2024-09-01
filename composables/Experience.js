export const useExperience = () => {
    return useState('experience', () => ({
        Main_Work: [
            {
                job_title: 'IT Support',
                company: 'KSL IT CENTER CO., LTD.',
                date: 'May 23 - Present',
                description: [
                    `Provide user support for technical issues with various computer devices such as PCs and laptops.`,
                    `Analyze and resolve technical problems related to software and hardware.`,
                    `Install and update software and drivers for devices like printers, scanners, and copiers.`,            
                    `Maintain and service the IP Phone system.`,
                    `Monitor and maintain LAN and Wi-Fi network systems.`,
                    `Monitor website status by checking HTTP status codes (e.g., 200) and notify the team via LINE in case of issues.`
                ],
            }
        ],
        Other_Work: [
            { 
                job_title: 'PROJECTS',
                project: [
                    {label: "Beverage Shop Management System", value: `Developed a comprehensive management system for a beverage shop, streamlining inventory management, order processing, and record keeping.` },
                    {label: "Pawn Shop Management System", value: `Developed a management system for pawn shops to streamline the process of managing item deposits and associated documentation.` }
                ],
            }
        ]
    })
    )
}