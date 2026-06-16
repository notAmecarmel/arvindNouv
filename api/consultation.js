export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false
    });
  }

  try {

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxz0a0ZUh7AXZ7rPS6-qrq9P5QFENFAmet4CK9QLh7cP1yYJxhJWSvfyIC6OesgEMYZ3g/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      }
    );

    const result = await response.text();

    return res.status(200).json({
      success: true,
      result
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      error: error.message
    });

  }
}