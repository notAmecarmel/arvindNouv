/*export default async function handler(req, res) {

  console.log("REQUEST METHOD:", req.method);
  console.log("REQUEST BODY:", req.body);

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false
    });
  }

  try {

    console.log("About to call Apps Script");

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyHka3HSRdX7nDY3f8po4NGpQ-uWu-WPAStKd5Dnm6J_C_vSQobUHu23gPYA0ZRiIXpQA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      }
    );

    console.log("Apps Script status:", response.status);

    const text = await response.text();

    console.log("Apps Script response:", text);

    return res.status(200).json({
      success: true
    });

  } catch (error) {

    console.error("FULL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
}*/

export default async function handler(req, res) {

  return res.status(200).json({
    success: true,
    body: req.body
  });

}