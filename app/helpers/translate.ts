export async function translate(word: string) {
    try{
        const data = await fetch('http://ddragon.leagueoflegends.com/cdn/13.14.1/data/ru_RU/language.json', {
            method: "GET"
        })
        const res = await data.json()
        return (res.data[word] ?? word)
    }
    catch{
        return new Error('Error conenction to language')
    }
}