describe("Form test", ()=> {
    // First test creating.....
    it("Can fill the form", ()=> {
        cy.visit("/");
        cy.get("form");
        cy.get('input[name="name"]')
            .type("Molly")
            .should("have.value", "Molly");
        
        cy.get('input[name="email"]')
            .type("molly@dev.dev")
            .should("have.value", "molly@dev.dev");
        
        cy.get("textarea")
            .type("Mind you if I ask some silly question?")
            .should("have.value", "Mind you if I ask some silly question?");
        
        cy.server();
        cy.route({
            url: "/users/**",
            method: "POST",
            response: { status: "Form Saved!", code: 201 }
        });
        
        cy.get("form").submit();
  
      cy.contains("Form Saved!");
    });
});
