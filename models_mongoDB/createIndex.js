/**
 * 创建升序索引
 * @param db
 * @param callback
 */
function createAscendingIndex(db,callback) {
    //拿到集合句柄
    const collection = db.collection('collection');
    //创建索引
    collection.createIndex({dateOfBirt:1},function (err,result) {
        console.log(result);
        callback(result);
    });
};

/**
 * 创建降序索引
 * @param db
 * @param callback
 */
function createDescendingIndex(db,callback){
    //拿到集合句柄
    const collection = db.collection('collection');
    //创建索引
    collection.createIndex({lastName:-1},function (err,result) {
        console.log(result);
        callback(result);
    });
};

/**
 * 创建复合索引
 * @param db
 * @param callback
 */
function createCompoundIndex(db,callback) {
    //拿到集合句柄
    const collection = db.collection('collection');
    //创建复合索引
    collection.createIndex({lastName:-1,dateOfBirth:1},function (err,result) {
        console.log(result);
        callback(result);
    });
};

/**
 * 创建文本索引
 * @param db
 * @param callback
 */
function createTextIndex(db,callback) {
    //拿到集合句柄
    const collection = db.collection('collection');
    //创建文本索引
    collection.createIndex({comments:"text"},function (err,result) {
        console.log(result);
        callback(result);
    });
};

/**
 * 创建散列索引
 * @param db
 * @param callback
 */
function createHashedIndex(db,callback) {
    //拿到集合句柄
    const collection = db.collection('collection');
    //创建散列索引
    collection.createIndex({timestamp:"hashed"},function (err,result) {
        console.log(result);
        callback(result);
    })
}

/**
 * 创建一个2dsphere索引(地理空间索引)
 * @param db
 * @param callback
 */
function create2dSphereIndex(db,callback) {
    //拿到集合句柄
    const collection = db.collection('users');
    //创建2D地理空间索引
    collection.createIndex({location:"2dsphere"},function (err,result) {
        console.log(result);
        callback(result);
    });
};

/**
 * 创建2d索引，2d索引用于存储为二维平面上点的数据，用于MongoDB 2.2及更早版本中使用的传统坐标对
 * @param db
 * @param callback
 */
function create2dIndex(db,callback) {
    //拿到集合句柄
    const collection = db.collection('users');
    //创建2d索引，2d索引用于存储为二维平面上点的数据，用于MongoDB 2.2及更早版本中使用的传统坐标对
    collection.createIndex({points:"2d"},function (err,result) {
        console.log(result);
        callback(result);
    });
};

/**
 * 创建唯一索引
 * @param db
 * @param callback
 */
function createUniqueIndex(db,callback) {
    //拿到集合
    const collection = db.collection('users');
    //创建索引
    collection.createIndex({lastName:-1,dataOfBirth:1},
        {unique:true},
        function (mongoError,result) {
        console.log(result);
        callback(result);
        });
};

/**
 * 创建部分索引
 * @param db
 * @param callback
 */
function createPartialIndex(db,callback) {
    const collection = db.collection('users');
    collection.createIndex({lastName:1,firstName:1},
        {partialFilterExpression:{points:{$gt:5}}},function (mongoError,result) {
        console.log(result);
        callback(result);
        });
};