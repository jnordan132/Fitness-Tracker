const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: { type: String, required: "Type is required." },
            name: String,
            duration: Number,
            distance: Number,
            weight: Number,
            reps: Number,
            sets: Number,
        },
    ],
    totalDuration: Number,
});

workoutSchema.methods.getTotalDuration = function () {
    let sum = 0;
    this.exercises.forEach((element) => {
        sum += element.duration;
    });
    return sum;
};

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;