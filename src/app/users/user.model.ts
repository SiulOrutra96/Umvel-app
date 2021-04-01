export class User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    image: string;

    constructor(
        id: string,
        first_name: string,
        last_name: string,
        email: string,
        gender: string,
        image: string
    ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.gender = gender;
        this.image = image;
    }
}