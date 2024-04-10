## Description

This is a sample NestJS API project that provides endpoints for managing form data.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Usage

Once the application is running you can access the API endpoints with tools like curl or postman. The following are the endpoints used with sample json body data.

```bash
# Form Post:
POST-URL:
/form 
Sample json body data:
{
    "uniqueId": "5c6738c0-eef5-11ed-baaf-005889ac3145",
    "title": "form-2",
    "name": "string",
    "email": "email",
    "phonenumber":"number", 
    "isGraduate":"boolean",
    "salutation":"string"
}

# Fill Data:
POST-URL:
/fill-data?title=form-1
Sample json body data:
{
    "uniqueId": "5c6738c0-eef5-11ed-baaf-005889ac3123",
    "salutation": "Mr.",
    "email": "j@f.com",
    "phonenumber":"123456",
    "isGraduate":"true"
}

/fill-data?title=form-2
{
    "uniqueId": "5c6738c0-eef5-11ed-baaf-005889ac3145",
    "salutation": "jignesh",
    "email": "j@f.com",
    "phonenumber":"123456",
    "isGraduate":"true"
}

/fill-data?title=form-2
{
    "uniqueId": "5c6738c0-eef5-11ed-baaf-005889ac3145",
    "salutation": "Mr."
}

# Get Data:
GET-URL:
/fill-data?title=form-1
[
    {
        "id": "5c6738c0-eef5-11ed-baaf-005889ac3123",
        "title": "form-1",
        "field_name": "name",
        "field_type": "string",
        "formValue": "jignesh"
    },
    {
        "id": "5c6738c0-eef5-11ed-baaf-005889ac3123",
        "title": "form-1",
        "field_name": "email",
        "field_type": "email",
        "formValue": "j@f.com"
    },
    {
        "id": "5c6738c0-eef5-11ed-baaf-005889ac3123",
        "title": "form-1",
        "field_name": "phonenumber",
        "field_type": "number",
        "formValue": "123456"
    },
    {
        "id": "5c6738c0-eef5-11ed-baaf-005889ac3123",
        "title": "form-1",
        "field_name": "isGraduate",
        "field_type": "boolean",
        "formValue": "true"
    }
]

/fill-data?title=form-2
[
    {
        "id": "5c6738c0-eef5-11ed-baaf-005889ac3145",
        "title": "form-2",
        "field_name": "name",
        "field_type": "string",
        "formValue": "jignesh"
    },
    {
        "id": "5c6738c0-eef5-11ed-baaf-005889ac3145",
        "title": "form-2",
        "field_name": "email",
        "field_type": "email",
        "formValue": "j@f.com"
    },
    {
        "id": "5c6738c0-eef5-11ed-baaf-005889ac3145",
        "title": "form-2",
        "field_name": "phonenumber",
        "field_type": "number",
        "formValue": "123456"
    },
    {
        "id": "5c6738c0-eef5-11ed-baaf-005889ac3145",
        "title": "form-2",
        "field_name": "isGraduate",
        "field_type": "boolean",
        "formValue": "true"
    },
    {
        "id": "5c6738c0-eef5-11ed-baaf-005889ac3145",
        "title": "form-2",
        "field_name": "salutation",
        "field_type": "string",
        "formValue": "Mr."
    }
]
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
