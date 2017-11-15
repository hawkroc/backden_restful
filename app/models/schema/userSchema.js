const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  key: {
    type: String,
    unique: true
  },
  balance: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    },
    number:{
      type:Number,
      default:0
    }
  }
});

// UserSchema.pre("save", (next)=> {
//   if (this.isNew) {
//     this.meta.updateAt = this.meta.createAt = Date.now();
//   } else {
//     this.meta.updateAt = Date.now();
//   }
//   next();
// });

// UserSchema.statics = {
//   fetch: (cb)=> {
//     return this.find({})
//       .sort("meta.createAt")
//       .exec(cb);
//   },
//   findById: (id, cb)=> {
//     return this.findOne({ _id: id })
//       .sort("meta.createAt")
//       .exec(cb);
//   },
//   findByUid: (uid, cb)=> {
//     return this.findOne({ uid: uid })
//       .sort("meta.createAt")
//       .exec(cb);
//   }
// };

// GetDataRecords = (start, end) => {
//     // console.log("this is be invoked");
//     return Record.find()
//         .where('blockNumber').gt(start).lt(end)
//         .sort('-blockNumber')
//         .exec((err, result) => {
//             if (err) {

//                 console.log("this is error "+JSON.stringify(err));
//             } else {
//                 //  console.log(JSON.stringify(result));
//                 return result;
//             }
//         });

// }


module.exports = UserSchema;
