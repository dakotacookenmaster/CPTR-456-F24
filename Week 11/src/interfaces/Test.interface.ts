export default interface Test {
    name: string
    date: Date
    email: string
}

const x = {
    name: "Dakota",
    date: new Date(),
    email: "x@z.com",
} satisfies Test