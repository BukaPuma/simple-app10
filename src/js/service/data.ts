export interface IUser {
    name : string,
    surname : string,
    email : string,
    phone? : string,
    age : number,
    work?: string,
    hobby ?: string
}

export const data : IUser[] = [
    {
        name : "Harry",
        surname : "Potter",
        email : "harry@hogwards.com",
        age : 17,
        work: "Magic Minestry",
        hobby : "квиддич"
    },

    {
        name : "Hermiona",
        surname : "Уизли",
        email : "hermiona@hogwards.com",
        age : 17,
        work: "Magic Minestry",
        hobby : "квкниги"
    },
    {
        name : "Рон",
        surname : "Уизли",
        email : "rohn@hogwards.com",
        age : 17,
        work: "Magic Minestry",
        hobby : "стонать"
    },

    {
        name : "Северус",
        surname : "Снегг",
        email : "snegg@hogwards.com",
        age : 17,
        work: "Magic Minestry",
        hobby : "ругать студентов"
    },
    {
        name : "Пятачок",
        surname : "Свинкин",
        email : "patak@hogwards.com",
        age : 5,
        work: "ООО Винни Пух",
        hobby : "гулять"
    },
    {
        name : "Винни",
        surname : "Пух",
        email : "winny@hogwards.com",
        age : 5,
        work: "ООО Винни Пух",
        hobby : "спать"
    }

]