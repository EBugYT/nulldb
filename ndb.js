var fs = require("fs")

class NullDB {
    constructor(path) {
        this.path = path
        try {
            var db = fs.readFileSync(path)
            this.db = JSON.parse(db)
        } catch (e) {
            console.error(e)
        }
    }
    get(key) {
        return this.db[key]
    }
    set(k, v) {
        this.db[k] = v
    }
    commit() {
        fs.writeFileSync(this.path, JSON.stringify(this.db))
    }
}
