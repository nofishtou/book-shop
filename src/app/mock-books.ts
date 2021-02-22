import IBook, { ECategories } from "./models/Book";


export const BOOKS: IBook[] = [
  {
    id: 0,
    name: "Alice’s Adventures in Wonderland by Lewis Carroll",
    description: "Even if you’re not a math geek, you’re probably familiar with the algebraist Charles Dodgson — you just know him his much more famous alter-ego, Lewis Carroll. Unlike Dodgson, Carroll wrote stories that defied logic, twisting it into dreamlike, fantastical shapes: a hookah-smoking caterpillar, a flamingo-filled croquet-ground, a perpetually tardy White Rabbit. The result was Alice's Adventures in Wonderland, which has delighted adults and children alike since it was published over a century and a half ago — and today is recognized as a momentous early foray into the fantasy genre as a whole.",
    price: 10,
    category: ECategories.Fantasy,
    createDate: 1865,
    isAvailable: true
  },
  {
    id: 1,
    name: "The Hobbit by J.R.R. Tolkien",
    description: "It might be a childhood favorite, but The Hobbit gives adult fantasy readers one of the genre’s most relatable protagonists: a middle-aged homebody who just wants to chill. The iconic Bilbo Baggins speaks to all grownup introverts who like nothing more than a good meal and a cozy chair. But we all hope we’d find Bilbo-like reservoirs of heroism within us — yes, while a career as a Chosen One might be out of reach for us, we can all aspire to be Bilbo Baggins. ",
    price: 10,
    category: ECategories.Fantasy,
    createDate: 1937,
    isAvailable: true
  },
  {
    id: 2,
    name: "The Gunslinger by Stephen King",
    description: "Stephen King is best known for infiltrating our nightmares with stalkers and murderous clowns. But The Gunslinger proves he’s got a gift for fantasy too — just don’t expect it to be light and fluffy! This novel pulls from a broad palette of influences, from cowboy westerns to the poetry of Robert Browning. The hero, Roland of Gilead, wields his gun in pursuit of a shadowy Man in Black who's as dangerous as he is mysterious, with the power to spawn demons and raise the dead. Luckily or not, Roland's not alone in his pursuit; he finds a traveling companion in Jake Chambers, a schoolboy from our world.",
    price: 10,
    category: ECategories.Fantasy,
    createDate: 1982,
    isAvailable: false
  }
]
