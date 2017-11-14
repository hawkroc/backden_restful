const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true
  },
  logLevel: {
    type: String,
    default: "info"
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

UserSchema.pre("save", (next)=> {
  if (this.isNew) {
    this.meta.updateAt = this.meta.createAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  next();
});

UserSchema.statics = {
  fetch: (cb)=> {
    return this.find({})
      .sort("meta.createAt")
      .exec(cb);
  },
  findById: (id, cb)=> {
    return this.findOne({ _id: id })
      .sort("meta.createAt")
      .exec(cb);
  },
  findByUid: (uid, cb)=> {
    return this.findOne({ uid: uid })
      .sort("meta.createAt")
      .exec(cb);
  }
};

module.exports = UserSchema;
