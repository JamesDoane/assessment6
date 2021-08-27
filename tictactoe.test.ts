import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})
describe("Test player actions" , () => {
    test('I can start a game', async () => {

        let button = await (await driver).findElement(By.id('start-game'));
        await button.click();
        
    });
    test('Can move into the top left square as a first move', async () => {

        let topLeft = await (await driver).findElement(By.id('cell-0'));
        await topLeft.click();
        await driver.sleep(3000)

        expect(await topLeft.getText()).toBe('X')
        
    });
    test('Can move into the top right square as a second move.', async () => {

        let topRight = await (await driver).findElement(By.id('cell-2'));
        await topRight.click();
        await driver.sleep(3000)

        expect(await topRight.getText()).toBe('X')
    
    });
    test('Can move into the bottom right square as a third move', async () => {

        let botRight = await (await driver).findElement(By.id('cell-8'));
        await botRight.click();
        await driver.sleep(3000)

        expect(await botRight.getText()).toBe('X')
    
    });
})
describe("Computer Tests" , () =>{
    test('Check that O is moving as expected.', async () => {

        let topMid = await (await driver).findElement(By.id('cell-1'));
        let midMid = await (await driver).findElement(By.id('cell-3'));

        expect(await topMid.getText()).toBe('O')
        expect(await midMid.getText()).toBe('O')
        
    });
})

