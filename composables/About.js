export const useAbout = () => {
    return useState('about', () => ({
        about: `ABOUT ME`,
        details: [
            { label: 'Full Name', value: 'Full Name' },
            { label: 'Email', value: 'Email' },
            { label: 'Phone', value: '0xx-xxx-xxx' },
            { label: 'Address', value: 'World' },
        ],
        Github: 'https://github.com/intouch1999',
        description: `Currently an IT Support Officer with a strong passion for Web Development and
 practical experience from freelance projects. Enthusiastic about transitioning to Web
 Application Development, I bring technical skills, problem-solving abilities, and a
 commitment to continuous growth to contribute effectively to your team.`,
    }));
}
