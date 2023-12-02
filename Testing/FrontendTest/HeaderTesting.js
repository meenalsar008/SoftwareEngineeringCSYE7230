const webdriver = require('selenium-webdriver');

const By = webdriver.By;
const until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();

const username = 'Sankalp';
const password = 'your_password';
const expectedWelcomeMessage = `Hello ${username}`;

describe('Navigation Bar Test', () => {
  it('should display "Hello Sankalp" if username is Sankalp', async () => {
    await driver.get('https://your-website.com/login');

    await driver.findElement(By.name('username')).sendKeys(username);
    await driver.findElement(By.name('password')).sendKeys(password);
    await driver.findElement(By.cssSelector('button[type="submit"]')).click();

    await driver.wait(until.urlContains('/dashboard'));

    const welcomeMessageElement = await driver.findElement(By.cssSelector('#navbar-welcome-message'));
    const actualWelcomeMessage = await welcomeMessageElement.getText();

    expect(actualWelcomeMessage).toEqual(expectedWelcomeMessage);
  });

  after(async () => {
    await driver.quit();
  });
});

const webdriver = require('selenium-webdriver');

const By2 = webdriver.By2;
const until1 = webdriver.until;

const driver2 = new webdriver.Builder().forBrowser('chrome').build();

async function getWelcomeMessage() {
  const welcomeMessageElement = await driver2.findElement(By.cssSelector('#navbar-welcome-message'));
  return await welcomeMessageElement.getText();
}

async function getUsername() {
  const usernameElement = await driver2.findElement(By.cssSelector('#username-display'));
  return await usernameElement.getText();
}

describe('Navigation Bar Test', () => {
  it('should display personalized welcome message', async () => {
    await driver2.get('https://your-website.com/login');

    // Login using any available method (e.g., form submission, button click)

    await driver2.wait(until1.urlContains('/dashboard'));

    const username = await getUsername();
    const expectedWelcomeMessage = `Hello ${username}`;
    const actualWelcomeMessage = await getWelcomeMessage();

    expect(actualWelcomeMessage).toEqual(expectedWelcomeMessage);
  });

  after(async () => {
    await driver.quit();
  });
});

