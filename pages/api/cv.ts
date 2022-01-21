import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer, { Browser } from 'puppeteer';
import ReactDOMServer from 'react-dom/server';

import { CV } from '../../components/CV';

const html = `
  <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Yusef Habib - CV</title>
        <link rel="stylesheet" href="http://localhost:3000/build.css" />
      </head>
      <body style="padding: 40px 60px;">
        ${ReactDOMServer.renderToStaticMarkup(CV())}
      </body>
    </html>`;

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const args = ['--no-sandbox', '--disable-setuid-sandbox'];
  let browser;
  try {
    browser = await puppeteer.launch({ args, pipe: true });
    const page = await browser.newPage();
    await page.setContent(html);
    const pdf = await page.pdf({
      scale: 0.85,
      pageRanges: '1',
    });

    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdf);
  } catch (err) {
    const e = err as Error;
    console.log(`Error: ${e?.message}`);
    res.statusCode = 500;
    return res.json({ error: e?.message });
  } finally {
    if (browser) await browser.close();
    console.log('closed');
  }
};

export default handler;
