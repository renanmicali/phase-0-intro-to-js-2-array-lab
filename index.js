// Write your solutioconst 
const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = () => {cats.push("Ralph")}

const destructivelyPrependCat = () => {cats.unshift("Bob")}

const destructivelyRemoveLastCat = () => {cats.pop()}

const destructivelyRemoveFirstCat = () => {cats.shift()}

const appendCat = () => {
    const newCats = [...cats]
    newCats.push("Broom")
    return newCats
}

const prependCat = () => {
    const miau = [...cats]
    miau.unshift("Arnold")
    return miau
}

const removeLastCat = () => {
    const newCats = [...cats]
    newCats.pop()
    return newCats
}

const removeFirstCat = () => {
    const newCats = [...cats]
    newCats.shift()
    return newCats
}