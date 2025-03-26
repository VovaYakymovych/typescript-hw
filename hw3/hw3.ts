
function logInfo<T>(url:string):void{
    fetch(url)
        .then(response => response.json() as Promise<T>)
        .then((res:T) => {
            console.log(res)
        })
}

interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

logInfo<User>('https://jsonplaceholder.typicode.com/users')

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

logInfo<Post>('https://jsonplaceholder.typicode.com/posts/1');