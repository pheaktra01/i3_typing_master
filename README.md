# i3_typing_master
I-3 Midterm

# 🧠 Typing Test Web App

A clean and simple web-based typing speed test built with HTML, CSS, and JavaScript. Users can test their typing speed and accuracy, and view their test results automatically after completion.

---

## 🚀 Features

- 1-minute typing test with countdown timer
- Live calculation of Words Per Minute (WPM) and Accuracy
- Automatically stores the latest test result using `localStorage`
- Redirects to a result page after the test ends
- Clean, responsive UI using only HTML and CSS
- Lightweight, no dependencies or frameworks required

---

## 📂 Pages Included

| Page                 | HTML File                   | CSS File               | JavaScript| Description                            |
|----------------------|-----------------------------|------------------------|-----------|----------------------------------------|
| Landing Page         | `landingPage.html`          |`landingStyle.css`      |           | Welcome page or homepage               |
| Register Page        | `register.html`             |`registerStyle.css`     |           | New user registration form             |
| Login Page           | `login.html`                |`loginStyle.css`        |           | User login form                        |
| Reset Password       | `reset-password.html`       |`resetPasswordStyle.css`|           | Form to request/reset password         |
| Typing Test Page     | `test.html`                 |`testStyle.css`         |`test.js`  | Main typing test interface             |
| Results Page         | `result.html`               |`resultStyle.css`       |           | Displays WPM and Accuracy after test   |
| About Us             | `about.html`                |`aboutStyle.css`        |           | Information about the app/team         |

---

## 🧪 How the Typing Test Works

1. Press the **Start Test** button.
2. Timer begins from 60 seconds.
3. User types the given sentence.
4. When time is up:
   - Test automatically ends.
   - WPM and Accuracy are calculated.
   - Data is stored to `localStorage`.
   - User is redirected to `result.html` to see the result.

---
## 📌 Requirements

- A modern web browser (Chrome, Firefox, Edge)
- No backend required (fully client-side)

---

## **Download or clone** this repository:

```bash
git clone https://github.com/Chea69/i3_typing_master.git
```