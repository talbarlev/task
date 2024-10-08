export default class RandomGenerator {
    generateString(length) {
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    getRandomNumber(max, min = 1) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


}
