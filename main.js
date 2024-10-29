import express from "express";
import cors from "cors";

async function bootstrap() {
  const app = express();
  const PORT = 6548;

  app.use(express.json());
  app.use(cors({ origin: true }));

  app.post("/auth", async (req, res) => {
    const { username } = req.body;
    return res.json({ username: username, secret: "maa245..." });
  });

  app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
}

bootstrap();
