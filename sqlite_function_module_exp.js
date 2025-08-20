/*if (typeof exports !== "undefined") {
	if (typeof module !== "undefined" && module.exports) {
	module.exports = bar
	}
	exports._ = bar
}*/

sqlite_init_db = async (obj) => {

	db = new sqlite3.Database(db_file)

}

sqlite_get_all = async () => {

	return new Promise( (resolve,reject) => {
		let req = `SELECT * FROM ${db_name}`
		db.all( req , (err, rows) => err ? resolve([]) : resolve(rows) )
	})

}
