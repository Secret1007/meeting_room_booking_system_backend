# meeting_room_booking_system_backend

A project based on nestjs,redis,typeOrm

## register logic

1. use typeORM to connect mysql
2. create User resource
3. create redis service
4. test the register process

## email verify login

1. generate Email Authorization Code
2. use package [nodemailer](https://www.npmjs.com/package/nodemailer) complete email logic

## extract config

1. create .env under directory /src
2. extract config information to .env

## add swagger plugin

1. use DocumentBuilder Class to create document config instance
2. use SwaggerModule to generate api document and mount onto the app.
3. standardize the documentation content using the corresponding API specifications.
4. add the ApiProperty attribute to the corresponding DTO
