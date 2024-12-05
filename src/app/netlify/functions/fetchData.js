exports.handler = async (event) => {
  try {
    // Access the API key securely from Netlify's environment variables
    const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

    if (!alchemyApiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API key is not configured' }),
      };
    }

    // Example: Pass this key to the Solana endpoint (update the URL as needed)
    const response = await fetch(`${alchemyApiKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to fetch data' }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
