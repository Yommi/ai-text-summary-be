const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
const appEror = require("../utils/appError");

exports.summarize = catchAsync(async (req, res, next) => {
  const HUGGING_FACE_API_KEY = process.env.API_KEY;

  const { text } = req.body;

  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Return the summary as JSO
    return res.json({ summary: response.data[0].summary_text });
  } catch (error) {
    // Properly handle error and pass to error middleware
    return next(new appEror("Summarization failed", 400));
  }
});
