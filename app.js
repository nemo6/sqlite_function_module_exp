
_ = require("lodash")
sqlite3 = require("sqlite3")
require("sqlite_function_module_exp")

db_file = "japan-food-1.db"
db_name = "data_instagram"
db_id = "count"

;( async () => {

    /* init global db variable */
    await sqlite_init_db()

    let m = (await sqlite_get_all(db)).Map("url")
    console.log( m )

})()
