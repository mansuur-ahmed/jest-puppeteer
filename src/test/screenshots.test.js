const timeout = process.env.SLOWMO ? 30000 : 10000;
// here you need to put require statement for mobile devices

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Take screenshots', () => {
    test('Take screenshot of home page', async () => {
        await page.setViewport({ width: 1920, height: 1080 });
        await page.screenshot({
            path: './src/test/screenshots/home.jpg',
            fullpage: true,
            type: 'jpeg'
        });
    }, timeout);
});