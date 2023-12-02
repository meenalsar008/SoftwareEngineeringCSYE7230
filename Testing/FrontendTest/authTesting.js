const webdriver = require('selenium-webdriver');

const By = webdriver.By;
const until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();

const username = 'valid_user';
const password = 'valid_password';

const adminUsername = 'admin';
const adminPassword = 'admin_password';

describe('Authentication Testing', () => {
  // User Login test
  it('should login successfully with valid user credentials', async () => {
    await driver.get('https://your-website.com/login');

    await driver.findElement(By.name('username')).sendKeys(username);
    await driver.findElement(By.name('password')).sendKeys(password);
    await driver.findElement(By.cssSelector('button[type="submit"]')).click();

    await driver.wait(until.urlContains('/dashboard'));

    const cookie = await driver.manage().getCookie('your-session-cookie');
    expect(cookie).toBeDefined();

    const welcomeText = await driver.findElement(By.cssSelector('h1')).getText();
    expect(welcomeText).toContain(`Welcome, ${username}`);
  });

  // Admin Login test
  it('should login successfully with valid admin credentials', async () => {
    await driver.get('https://your-website.com/login');

    await driver.findElement(By.name('username')).sendKeys(adminUsername);
    await driver.findElement(By.name('password')).sendKeys(adminPassword);
    await driver.findElement(By.cssSelector('button[type="submit"]')).click();

    await driver.wait(until.urlContains('/admin/dashboard'));

    const adminMenu = await driver.findElement(By.id('admin-menu'));
    expect(adminMenu).toBeDefined();
  });

  // Logout test
  it('should logout successfully', async () => {
    await driver.findElement(By.cssSelector('a[href="/logout"]')).click();

    await driver.wait(until.urlContains('/login'));

    const loginForm = await driver.findElement(By.id('login-form'));
    expect(loginForm).toBeDefined();
  });

  after(async () => {
    await driver.quit();
  });
});
