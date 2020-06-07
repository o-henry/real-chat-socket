import "module-alias/register"; // for absolute paths

import express from "express";

const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
