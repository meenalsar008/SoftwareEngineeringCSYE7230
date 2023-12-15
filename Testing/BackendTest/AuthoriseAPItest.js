describe('Authentication API Testing', () => {
    it('should successfully login a user', () => {
      cy.request({
        method: 'POST',
        url: '/api/users/login',
        body: {
          username: 'john.doe',
          password: 'password123'
        }
      })
      .then((response) => {
        expect(response.status).to.equal(200); // Verify valid status code
        expect(response.body).to.have.property('token'); // Verify token presence
      });
    });
  
    it('should return unauthorized for invalid user credentials', () => {
      cy.request({
        method: 'POST',
        url: '/api/users/login',
        body: {
          username: 'invalid_username',
          password: 'wrong_password'
        },
        failOnStatusCode: false, // Don't fail test on non-200 status code
      })
      .then((response) => {
        expect(response.status).to.equal(401); // Verify unauthorized status code
      });
    });
  
    it('should successfully login an admin', () => {
      cy.request({
        method: 'POST',
        url: '/api/admin/login',
        body: {
          username: 'admin',
          password: 'admin_password'
        }
      })
      .then((response) => {
        expect(response.status).to.equal(200); // Verify valid status code
        expect(response.body).to.have.property('token'); // Verify token presence
      });
    });
  
    it('should return unauthorized for invalid admin credentials', () => {
      cy.request({
        method: 'POST',
        url: '/api/admin/login',
        body: {
          username: 'invalid_admin',
          password: 'wrong_password'
        },
        failOnStatusCode: false, // Don't fail test on non-200 status code
      })
      .then((response) => {
        expect(response.status).to.equal(401); // Verify unauthorized status code
      });
    });
  });
  