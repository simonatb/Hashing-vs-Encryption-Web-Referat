# Hashing vs Encryption – Web Referat
 
A web-based report (referat) on the differences between **encryption**, **hashing**, **salting**, and **peppering** in the context of information security and password storage.
 
Built as part of the **Web Technologies** course at Technical University of Sofia.
 
---
 
## Topics Covered
 
- **Encryption** – symmetric (AES, DES) and asymmetric (RSA, ECC), when to use it
- **Hashing** – one-way functions, properties, algorithms (MD5, SHA-256, bcrypt, Argon2id)
- **Salting** – rainbow table attacks, how salts work, PHP implementation
- **Peppering** – salt vs pepper comparison, HSM storage, PHP implementation
- **Best Practices** – OWASP and NIST recommendations for secure password storage
 
---
 
## Tech Stack
 
- HTML5 / CSS3
- Vanilla JavaScript
- Google Fonts – Roboto Mono, DotGothic16
- SVG diagrams (no external libraries)
 
---
 
## Structure
 
```
referat.html        – main HTML file
css/
    site.css        – custom styles
    bootstrap.css
javascript/
    main.js         – scroll, nav highlight, back to top
img/
docs/
```
 
---
 
## Features
 
- Responsive dark theme with accent colors per section
- Inline SVG diagrams with CSS classes
- Active nav highlight on scroll
- Back to top button
- PHP code examples for bcrypt and Argon2id
