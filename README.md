# NullDB - A db for prototyping
## Why?
Databases are hard. You need a server or it's sql. NullDB is a NoSQL DB made in under 5 minutes (4:08 to be exact) that focuses on simplicity.
## WARNING!!!
This DB was made as a joke and it shouldn't be used for production
## Database preparation
Make a new file (for case of these examples db.json) and place this as contents
```
{}
```
## Usage
### Create a new db
```javascript
const NullDB = require("./ndb") // Import NullDB
let db = new NullDB(__dirname + "\\db.json") // Make a new DB
```
### Set
```javascript
const NullDB = require("./ndb") // Import NullDB
let db = new NullDB(__dirname + "\\db.json")// Make a new DB
db.set("foo", "bar") // Set foo to bar
db.commit() // Commit changes
```
### Get
```javascript
const NullDB = require("./ndb") // Import NullDB
let db = new NullDB(__dirname + "\\db.json") // Make a new DB
console.log(db.get("foo")) // Get value of foo
```
