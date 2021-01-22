module.exports = {
  'Check login passager section': function (browser) {
    browser.url('https://www.uber.com/fr/fr/')
    browser.useXpath();
    browser
      .waitForElementVisible('//*[@id="main"]/section[1]')
      .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
      .waitForElementVisible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
      .waitForElementVisible('/html/body', 5000)
      .assert.urlContains('https://auth.uber.com/login/')
      .assert.elementPresent('//*[@id="mobile"]')
      .assert.elementPresent('//*[@id="next-button"]')
      .click('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a')
      .waitForElementVisible('/html/body', 5000)
      .assert.elementPresent('//*[@id="app-content"]/div/div/div/div/div/a[1]')
      .assert.elementPresent('//*[@id="googleLoginButton"]')

    browser.end()
  },

};
