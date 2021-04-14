<div align='center'>
<h1>How to setup Express with Prisma and AWS</h1> 
</div>

<p>I'm going to be using yarn</p>

<h3>Basic setup</h3>

```yarn
yarn add express dotenv
or
npm install express dotenv
```
<h3>Setup Prisma</h3>

```yarn
yarn add prisma -D
or
npm install prisma -D
```

```yarn
npx prisma
```

```yarn
npx prisma init
```

```yarn
Prisma is a modern DB toolkit to query, migrate and model your database (https://prisma.io)

Usage

  $ prisma [command]

Commands

            init   Setup Prisma for your app
        generate   Generate artifacts (e.g. Prisma Client)
              db   Manage your database schema and lifecycle
         migrate   Migrate your database
          studio   Browse your data with Prisma Studio
          format   Format your schema

Flags

     --preview-feature   Run Preview Prisma commands

Examples

  Setup a new Prisma project
  $ prisma init

  Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  Browse your data
  $ prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev
  
  Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  Push the Prisma schema state to the database
  $ prisma db push --preview-feature

```

```
npx prisma init
```

```
✔ Your Prisma schema was created at prisma/schema.prisma.
  You can now open it in your favorite editor.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql or sqlite.
3. Run npx prisma db pull to turn your database schema into a Prisma data model.
4. Run npx prisma generate to install Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```