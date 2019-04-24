/**
 * Classe para modelar uma banda de musica
 */
export default class Band {
    constructor(name, genre, photo, description, videoclip) {
        this.name = name
        this.genre = genre
        this.photo = photo
        this.description = description
        this.videoclip = videoclip
    }

    static compare(bandA, bandB) {
        if (bandA.name < bandB.name) {
            return -1;
        }
        if (bandA.name > bandB.name) {
            return 1;
        }
        return 0;
    }
}