
var bcrypt = require('bcrypt-nodejs');

exports.preSave = function (req, res, args, next) {
    if (args.name == 'account') {
        if (args.action == 'insert'||args.action == 'update') {
            var table = args.name;
      //      console.log(table);
            var   record = args.data.view[table].records[0].columns;
            //cord.id = shortid.generate();
              
            record.account_password = bcrypt.hashSync(record.account_password);
            console.log(record);
        }
     
    }
    next();
}