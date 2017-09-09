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
      selector: '#add-food-link'
    },
    createFoodButton: {
      selector: '#add-food-button'
    }
  }
}