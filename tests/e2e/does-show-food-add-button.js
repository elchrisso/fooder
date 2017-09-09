export default {
  'Food add page and button should show when Add Food nav link is clicked': (client) => {
    const indexPage = client.page.index()

    indexPage
      .navigate()
      .clickButton()

    indexPage.expect.element('@createFoodButton').to.be.visible

    client.end()
  }
}