Feature('Add Restaurant Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Add customer review', async ({ I }) => {
  I.seeElement('.card-title a');
  const firstCard = locate('.card-title a').first();
  I.click(firstCard);

  const accordion = locate('.review__accordion');
  I.click(accordion);

  I.seeElement('.form-review');
  const textReview = 'Review for E2E Test';
  I.fillField('name', 'Test');
  I.fillField('review', textReview);
  I.click('#post-review');
  I.wait(3);
  I.see(textReview, 'p');
});
