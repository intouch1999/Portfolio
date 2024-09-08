export const useEducation = () => {
    return useState('education', () => ({
        data : [
            {
                name: 'UNIVERSITY',
                degree: 'Degree',
                branch: 'Branch',
                duration: '2xxx - 200x',
            },
            {
                name: 'UNIVERSITY',
                degree: 'Degree',
                branch: 'Branch',
                duration: '2xxx - 200x',
            }
        ]
    }))
}