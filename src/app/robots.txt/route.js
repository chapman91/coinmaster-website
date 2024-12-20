export async function GET(request) {
  const robots = `
        User-agent: *
        Allow: /

        Sitemap: https://www.cyrocoin.xyz/sitemap.xml
    `;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
