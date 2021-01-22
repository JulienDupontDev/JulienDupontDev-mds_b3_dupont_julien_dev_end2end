module.exports = {
  'Check Registration block in two sections': function (browser) {
    browser.url('https://www.uber.com/fr/fr/')
    browser.useXpath();
    browser
      .waitForElementVisible('//*[@id="main"]/section[1]')
      .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
      .assert.elementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
      .assert.elementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')

    browser.end()
  },

};
