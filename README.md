<h1 align="center">Taskwrite: Appwrite - React Demo π»</h1>
<p align = center>
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/Taskwrite-Appwrite-Hacktoberfest-2021/main/assets/thumbnail_taskwritepsd.jpg" target="_blank" />
</p>
<h2 align='center'>A demo web app built with React JS and Appwrite backend.</h2><br/>

## π | Introduction

- This web app implements a **To-Do** list and allows users to **add, edit & delete** tasks.
- This app demonstrates <i>Authentication and Database Management</i> via <b>Google OAuth using an Appwrite backend and Appwrite Database respectively</b>.
- **Taskwrite** is built with <b>React JS and Appwrite Web</b>.<br>

<br/>

## π | Usage

- Appwrite Web: <a target='_blank' href='https://appwrite.io/'>Installation</a>, <a target='_blank' href='https://appwrite.io/docs'>Documentation</a> and <a target='_blank' href='https://30days.appwrite.io/'>Resources</a>.
- Clone this repository:<br>

```sh
git clone https://github.com/muKaustav/Taskwrite-Appwrite-Hacktoberfest-2021.git
```

- Install necessary libraries:<br>

```sh
npm install
```

- Enjoy the project! π

<br/>

## π | Folder Structure

- Replace the <b>Endpoint and Project ID</b> in <i>src/Appwrite.js</i>.

```js
const sdk = new Appwrite();
sdk
	.setEndpoint("ENDPOINT_URL") // set your own endpoint
	.setProject("PROJECT_ID"); // set your own project id
```

- Replace the redirect and failure routes for Google OAuth in <i>src/Appwrite.js</i>. <i>(<a target='_blank' href='https://dev.to/appwrite/30daysofappwrite-oauth-providers-3jf6'>Article for reference</a>)</i>

```js
sdk.account.createOAuth2Session(
	"google",
	"http://localhost:3000/",
	"http://localhost:3000/login",
	["profile"]
);
```

- Replace the CollectionID in <i>src/Appwrite.js</i>.

```js
sdk.database.createDocument(
	"COLLECTION_ID", // set your own Collection ID after creating it from the Appwrite console
	obj,
	[`user:${user["$id"]}`],
	[`user:${user["$id"]}`]
);
```

<br>

```sh
public
ββββindex.html
src
ββββcomponents
β   ββββFooter
β   β   ββββFooter.jsx
β   β   ββββFooter.scss
β   ββββTasks
β   β   ββββTask.jsx
β   β   ββββTask.scss
β   ββββNavbar
β       ββββNavbar.jsx
β       ββββNavbar.scss
ββββRoutes
    ββββApplication
    β    ββββApp.jsx
    β    ββββApplication.scss
    ββββLogin
    β   ββββLogin.jsx
    β   ββββLogin.scss
    ββββProtectedRoute.jsx
```

<br/>

## π· | Screenshots

<p align = center>
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/Taskwrite-Appwrite-Hacktoberfest-2021/main/assets/googlelogin.png" target="_blank" />
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/Taskwrite-Appwrite-Hacktoberfest-2021/main/assets/home.png" target="_blank" />
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/Taskwrite-Appwrite-Hacktoberfest-2021/main/assets/editDeleteTask.png" target="_blank" />
</p>

<br/>

## π» | Contributing

Contributions, issues and feature requests are welcome.<br>
Feel free to check [issues page](https://github.com/muKaustav/Taskwrite-Appwrite-Hacktoberfest-2021/issues) if you want to contribute.

<br/>

## π§π½ | Author

**Kaustav Mukhopadhyay**

- Linkedin: [@kaustavmukhopadhyay](https://www.linkedin.com/in/kaustavmukhopadhyay/)
- Github: [@muKaustav](https://github.com/muKaustav)

<br/>

## π | Show your support

Drop a β­οΈ if this project helped you!

<br/>

## π | License

Copyright Β© 2021 [Kaustav Mukhopadhyay](https://github.com/muKaustav).<br />
This project is [MIT](./LICENSE) licensed.

---
