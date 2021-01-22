module.exports = {
  'Check login block in two sections': function (browser) {
    browser.url('https://www.uber.com/fr/fr/')
    browser.useXpath();
    browser
      .waitForElementVisible('//*[@id="main"]/section[1]')
      .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
      .element('xpath', '//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a', function (visible) {
        while (visible.status === -1) {
          this.click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        }
      })
      .assert.elementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a', 'section chauffeur présente')
      .assert.elementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a', 'section passager présente')
    browser.end()
  },

};
