export const useEducation = () => {
    return useState('education', () => ({
        data : [
            {
                name: 'PHRANAKHON RAJABHAT UNIVERSITY',
                degree: 'Bachelor of Industrial Technology',
                branch: 'Information Technology Management',
                duration: '2018 - 2022',
            },
            {
                name: 'DUSIT COMMERCIAL COLLEGE',
                degree: 'Vocational Certificate',
                branch: 'Computer for Business',
                duration: '2015 - 2017',
            }
        ]
    }))
}