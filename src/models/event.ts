import { model, Schema, Document } from "mongoose";

interface IEvent extends Document {
  id: string,
  name: string,
  slug: string,
  venue: string,
  address: string,
  instructors: string,
  date: string,
  time: string,
  description: string,
  image: string,
}

const EventSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  slug: {
    type: String,
  },
  venue: {
    type: String,
  },
  address: {
    type: String,
  },
  instructors: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const EventModel = model<IEvent>("Event", EventSchema);

export { EventModel, IEvent };