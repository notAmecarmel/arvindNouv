export default async function handler(req, res) {

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
      "https://script.google.com/macros/s/AKfycbyTMVmxaDtp7w3wzGc1Gn0eT796RnZ1wY-ZEv1GFFwc5AiDgxpPyzOIWP-Ly4cXkYqE/exec",
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
}