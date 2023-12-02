const { MongoMemoryServer, MongoClient } = require('mongodb');
const webdriver = require('selenium-webdriver');
const chai = require('chai');
const { By, until } = webdriver;
const { expect } = chai;

describe('Admin Product Management', () => {
  let mongo, driver;

  before(async () => {
    mongo = await MongoMemoryServer.create();
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('should login with valid admin credentials', async () => {
    await driver.get('https://your-website.com/login');

    await driver.findElement(By.name('username')).sendKeys('admin');
    await driver.findElement(By.name('password')).sendKeys('admin_password');
    await driver.findElement(By.cssSelector('button[type="submit"]')).click();

    await driver.wait(until.urlContains('/admin/dashboard'));
  });

  it('should add a new product to the database', async () => {
    await driver.get('https://your-website.com/admin/products/add');

    await driver.findElement(By.name('name')).sendKeys('Test Product');
    await driver.findElement(By.name('description')).sendKeys('This is a test product.');
    await driver.findElement(By.name('price')).sendKeys('10.00');

    await driver.findElement(By.cssSelector('button[type="submit"]')).click();

    await driver.wait(until.urlContains('/admin/products'));
  });

  it('should verify the product exists in the database', async () => {
    const client = await MongoClient.connect(mongo.getUri());
    const productsCollection = client.db('your_database').collection('products');

    const product = await productsCollection.findOne({ name: 'Test Product' });

    expect(product).toBeDefined();
    expect(product.name).toEqual('Test Product');
    expect(product.description).toEqual('This is a test product.');
    expect(product.price).toEqual(10.00);

    await client.close();
  });

  after(async () => {
    await driver.quit();
    await mongo.stop();
  });
});
