# TODO List

## Completed Tasks
- [x] Create AuthContext for authentication management
- [x] Implement Login component with fake email/password validation
- [x] Add login route to App.jsx
- [x] Update Header to show login/logout based on auth status
- [x] Modify ProductDetail to check login before adding to cart
- [x] Add clearCart function to CartContext
- [x] Make checkout button functional: clears cart if logged in, else redirects to login

## Pending Tasks
- [ ] Restructure header layout with flexbox: Left (Logo), Center (Home), Right (Cart, Login, Logout, Theme)
- [ ] Ensure Home button is always centered
- [ ] On smaller screens, arrange Login/Logout in one column and Cart/Theme in another column
- [ ] Beautify header: Improve spacing, colors, hover effects, and responsive design

## Summary
- Guest users clicking "Add to Cart" are redirected to login page
- Logged-in users can add products to cart
- Checkout button clears the cart after purchase (simulated)
- Fake credentials: user@example.com / password
