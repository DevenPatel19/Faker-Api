const express = require("express");
const app = express();
const port = 8000;

// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require("@faker-js/faker");
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department(),
    };
    return newFake;
};

const newFakeProduct = createProduct();
console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools'
 * }
 */

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid(),
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.ame(),
        address: faker.location.streetAddress(),
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
    };
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Create an API route for new companies
app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// Create an API route for both a new user and a new company
app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});
