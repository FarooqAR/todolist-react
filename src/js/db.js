var db = new Dexie("todoList");
db.version(1).stores({
    // table_name : "keyPath"
    todos: "_id"    
});
export default db;