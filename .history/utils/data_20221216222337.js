
import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'John',
            email: 'admin@example.com',
            password: bcrypt.hashSync('12345'),
            isAdmin: true,
        },
        {
            name: 'Mary',
            email: 'user@example.com',
            password: bcrypt.hashSync('qwerty'),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Free Shirt',
            slug: 'free-shirt',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A Popular shirt'
        },
        {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 80,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            countInStock: 25,
            description: 'A Popular new addidas shirt'
        },
        {
            name: 'Slim Shirt',
            slug: 'slim-shirt',
            category: 'Shirts',
            image: '/images/shirt3.jpg',
            price: 50,
            brand: 'Polo',
            rating: 4.2,
            numReviews: 11,
            countInStock: 26,
            description: 'A Popular Polo sports shirt'
        },
        {
            name: 'Golf Pants',
            slug: 'golf-pants',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 90,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 13,
            countInStock: 20,
            description: 'A Popular Puma pants'
        },
        {
            name: 'Fit Pants',
            slug: 'fit-pants',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: 90,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 13,
            countInStock: 20,
            description: 'A Popular Nike pants'
        },
        {
            name: 'White Pants',
            slug: 'white-pants',
            category: 'Pants',
            image: '/images/pants3.jpg',
            price: 90,
            brand: 'Fills',
            rating: 4.5,
            numReviews: 13,
            countInStock: 20,
            description: 'A Popular Fills pants'
        },
    ],

}

export default data;