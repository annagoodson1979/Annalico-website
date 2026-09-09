# Studio 21 Data Safety Notes

## Public Website Code

Files like `script.js`, `salon.html`, and `styles.css` are public once the site is live.
Visitors can inspect these files in their browser.

Only use public website code for low-risk preview data:

- Access code
- Display first name
- Male/female booking path
- Broad membership label
- Public booking link

## Do Not Put This In Public Code

- Phone numbers
- Birthdays
- Addresses
- Client notes
- Color formulas
- Personal pricing
- Appointment history
- Payment/card information
- Security-question answers
- Private recovery answers
- Private membership/payment status
- Check-in auto-reply rules tied to real client contact info

## Your Private Side

These should eventually live in a protected/private system:

- Google Sheet + Apps Script
- private database
- secure backend/API
- Twilio/SMS verification
- admin-only dashboard

The public website should ask the private system whether a code is valid.
The private system should decide what the client can access.

## Current Local Status

The public `script.js` file is currently in temporary lock mode.
It should not contain the client profile list.

Temporary booking access is controlled by a general public-site gate only.
This is not true encryption or private client authentication.

The final secure client database still needs a protected backend/private source of truth.

## Public Save Warning

Any public form that can collect typed information should use:

```html
data-public-save-warning
```

That warning explains:

- the user is not in a private client file
- private client information should not be entered there
- they can choose Continue or End

This is a reminder layer, not encryption. Private client data still needs a protected backend.
