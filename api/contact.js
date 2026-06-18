export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false
    });
  }

  try {

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwKZLj0vxh8j_nUevk0qkLlNHTKV9ASBuA2asd0M-kmlnIHR0l1Dra0y2CR18UWILmj4g/exec",
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