// declaración sql
var sqlMap = {
    user: {
        // Agregar usuario
        add: 'insert into user(name, age) values (?, ?)',
        // consulta al usuario
        select: 'select * from user where name like "%"?"%"'
    }
};

module.exports = sqlMap;
