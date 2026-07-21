export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false
    });
  }

  try {

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxHHSs8JBS_9IK2VAkjxgwxjnM1osl25OPvp5vRI6JPM_gQkW5cdChBu7AhTVnlKfp5fg/exec",
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