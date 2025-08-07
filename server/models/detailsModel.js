import mongoose from "mongoose";


const detailsSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  deletedAt: {
    type: Date,
    default: null
  }
},
  {
    timestamps: true
  },)
export const Details = mongoose.model("Details", detailsSchema);