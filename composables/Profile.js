export const useProfile = () => {
    return useState('profile', () => ({
        name: 'Full Name',
    })

    )
}