export const useTime = () => {
    return useState('time', () => new Date().getTime())
}