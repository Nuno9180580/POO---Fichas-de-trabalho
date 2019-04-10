/**
 * Classe para modelar uma banda de musica
 */
export default class Band {
    constructor (name,genre, photo, description, videoclip) {
        this.name = name
        this.genre = genre
        this.photo = photo
        this.videoclip = videoclip
        this.description = description
    }
}