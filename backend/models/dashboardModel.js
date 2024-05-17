import mongoose from "mongoose";

const dashSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Id: {
        type: Number
    }
  },
);
export const Module = mongoose.model("dash", dashSchema);
