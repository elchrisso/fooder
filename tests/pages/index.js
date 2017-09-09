const indexCommands = {
  clickButton () {
    return this
      .waitForElementVisible('@addFoodLink')
      .click('@addFoodLink')
  }
}

export default {
  url: `${process.env.ENV_URL}/`,
  commands: [indexCommands],
  elements: {
    addFoodLink: {
      selector: 'nav-link[id=add-food-link]'
    },
    createFoodButton: {
      selector: 'button[id="add-food-button"]'
    }
  }
}