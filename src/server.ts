import express, { Request, Response, NextFunction } from "express"
import bodyParser from "body-parser"
import { verifyCloudProof } from "@worldcoin/idkit"
import cors from "cors"
import "dotenv/config"

const app = express()
const port = 3005

app.use(cors())

app.use(bodyParser.json())

app.post("/api/verify", async (req, res) => {
  const proof = req.body
  const app_id = process.env.WLD_CLIENT_ID
  const action = process.env.WLD_ACTION_NAME

  if (!app_id || !action) {
    return res.status(500).send("Server environment variables not set.")
  }

  try {
    const verifyRes = await verifyCloudProof(proof, `app_${app_id}`, action)
    console.log(verifyRes)
    if (verifyRes.success) {
      console.log(verifyRes)
      // Perform backend actions here, e.g., update database
      res.json(verifyRes)
    } else {
      console.log("Failed", verifyRes)
      res.status(400).json({ error: "Verification failed." })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send("Internal server error.")
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
