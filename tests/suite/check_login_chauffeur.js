module.exports = {
  'Check login chauffeur section': function (browser) {
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
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
      .waitForElementVisible('/html/body', 4000)
      .assert.urlEquals('https://auth.uber.com/login/?next_url=https%3A%2F%2Fdrivers.uber.com')
      .assert.elementPresent('//*[@id="useridInput"]')
      .assert.elementPresent('//*[@id="app-body"]/div/div[1]/form/div[2]/button')

    browser.end()
  },

};
