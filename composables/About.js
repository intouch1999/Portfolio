export const useAbout = () => {
    return useState('about', () => ({
        about: `About ME`,
        details: [
            { label: 'Full Name', value: 'Intouch Suwanthanee' },
            { label: 'Email', value: 'intouch.sw@gmail.com' },
            { label: 'Phone', value: '099-414-5292' },
            { label: 'Address', value: 'Samsen Nai, Phaya Thai, Bangkok 10400' },
        ],
        Github: 'https://github.com/intouch1999',
        description: `Currently an IT Support Officer with a strong passion for Web Development and
 practical experience from freelance projects. Enthusiastic about transitioning to Web
 Application Development, I bring technical skills, problem-solving abilities, and a
 commitment to continuous growth to contribute effectively to your team.`,
    }));
}
