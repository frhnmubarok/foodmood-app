const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#list-favorite');
  I.see('Belum ada restoran favorit', '.empty-message');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see('Belum ada restoran favorit', '.empty-message');

  I.amOnPage('/');

  I.seeElement('.card-title a');
  const firstCard = locate('.card-title a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedCardTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('Unlike restaurant', ({ I }) => {
  I.seeElement('.post-item');

  I.seeElement('.card-title a');
  const firstCard = locate('.card-title a').first();
  I.wait(1);
  I.click(firstCard);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.post-item');
});
