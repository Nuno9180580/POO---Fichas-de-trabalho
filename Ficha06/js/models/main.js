import Band from "./band.js"
import User from "./user.js"

//Array de bandas
export const bands = []

const band1 = new Band("Muse", "Pop-Rock", "https://images-na.ssl-images-amazon.com/images/I/C1DCeELLbkS._CR0,0,3840,2880_._SL1000_.jpg", "")
const band2 = new Band("Radiohead", "Pop-Rock", "https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/radiohead_hero_688547436.jpg?itok=tcnCxZ6t", "")
const band3 = new Band("Metalica", "Pop-Rock", "https://www.rollingstone.com/wp-content/uploads/2018/09/metallica-whiskey.jpg?crop=900:600&width=440", "")
const band4 = new Band("James", "Pop-Rock", "https://cdn1.sabado.pt/images/2015-02/img_797x448$2015_02_25_14_31_57_110726.jpg", "")
const band5 = new Band("James", "Pop-Rock", "https://images-na.ssl-images-amazon.com/images/I/C1DCeELLbkS._CR0,0,3840,2880_._SL1000_.jpg", "")

bands.push(band1,band2,band3,band4,band5)

//Array de utilizadores
export const users = [] 
const user1 = new User("ricardo", "12345")
const user2 = new User("maria", "9876")
const user3 = new User("pedro", "54321")
users.push(user1, user2, user3)