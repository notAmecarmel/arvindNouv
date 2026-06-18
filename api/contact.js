export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false
    });
  }

  try {

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

    return res.status(200).json({
      success: true
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      error: error.message
    });

  }
}