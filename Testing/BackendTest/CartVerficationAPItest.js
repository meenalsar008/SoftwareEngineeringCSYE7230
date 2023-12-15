describe('Adding & Removing Products from Cart', () => {
    it('should add and remove multiple products, verifying cart updates', () => {
      // Define product details
      const products = [
        { id: '1234', name: 'Product 1', quantity: 2 },
        { id: '5678', name: 'Product 2', quantity: 1 },
      ];
  
      // Visit product page for each product
      products.forEach((product) => {
        cy.visit(`/product/${product.id}`);
  
        // Add product to cart
        cy.get('.add-to-cart-button').click();
  
        // Update cart quantity (optional)
        if (product.quantity > 1) {
          cy.get('.cart-item-quantity-input').type(product.quantity - 1);
        }
  
        // Wait for cart update
        cy.get('.cart-loading-indicator').should('not.be.visible');
      });
  
      // Verify cart content
      cy.get('.cart-item').should('have.length', products.length);
  
      // Remove a product from cart
      cy.get('.cart-item-name').contains(`${products[0].name}`).siblings('.remove-item-button').click();
  
      // Wait for cart update and verify content
      cy.get('.cart-loading-indicator').should('not.be.visible');
      cy.get('.cart-item').should('have.length', products.length - 1);
  
      // Verify remaining product details
      cy.get('.cart-item-name').contains(`${products[1].name}`).should('exist');
      cy.get('.cart-item-quantity').contains(products[1].quantity).should('exist');
    });
  });
  