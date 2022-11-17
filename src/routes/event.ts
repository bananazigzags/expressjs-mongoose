import { Router } from "express";
import { EventModel, IEvent } from "../models/event";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const events: IEvent[] = await EventModel.find().exec();
    return res.json(events);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post("/", async (req, res) => {
  try {
    const event: IEvent = req.body;

    const eventExists = await EventModel.findOne({
      name: event.name,
    }).exec();

    if (eventExists) {
      return res
        .status(409)
        .json({ error: "There is already another event with this name" });
    }

    const newEvent = await EventModel.create(event);
    return res.status(201).json(newEvent);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

export default routes;
