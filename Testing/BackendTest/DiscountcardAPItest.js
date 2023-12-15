describe('Authentication & Discount Card Tests', () => {
    it('should successfully login a user and retrieve discount cards', () => {
      // User login with valid credentials
      cy.request({
        method: 'POST',
        url: '/api/users/login',
        body: {
          username: 'john.doe',
          password: 'password123'
        }
      })
      .then((loginResponse) => {
        expect(loginResponse.status).to.equal(200); // Verify valid login status code
        expect(loginResponse.body).to.have.property('token'); // Verify token presence
  
        // Read discount data from JSON file
        cy.fixture('discount_cards.json').then((discountData) => {
          for (const card of discountData) {
            const cardId = card.id;
            const expectedCard = card;
  
            // Use retrieved access token for authorized requests
            cy.request({
              method: 'GET',
              url: `/api/discount-cards/${cardId}`,
              headers: {
                Authorization: `Bearer ${loginResponse.body.token}`,
              },
            })
            .then((response) => {
              expect(response.status).to.equal(200); // Verify successful card retrieval
              expect(response.body).to.deep.equal(expectedCard); // Verify response data matches expected card
            });
          }
        });
      });
    });
  });
  