import "./lib/db";
import express from "express";
import countryRoutes from "./routes/country";
import eventRoutes from "./routes/event";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "Please visit /events to view all events" });
});

app.use("/countries", countryRoutes);
app.use("/events", eventRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
