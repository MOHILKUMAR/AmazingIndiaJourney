/**
 * Enquiry form → Google Sheet + email alert
 * Setup: see google-sheets/README.md
 */
const NOTIFY_EMAIL = 'info@example.com'; // TODO: real email for lead alerts
const SHEET_NAME = 'Leads';
const FIELDS = ['submitted_at', 'name', 'email', 'phone', 'country', 'travellers', 'travel_date', 'pickup', 'tour', 'message', 'page'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    const p = e.parameter || {};
    if (p.website) return ok(); // honeypot: bot
    if (!p.name || !p.email || !p.phone) return ok();

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(FIELDS.concat(['status']));
      sheet.setFrozenRows(1);
    }
    // prefix with ' to stop spreadsheet formula injection
    const clean = (v) => { v = String(v || '').slice(0, 2000); return /^[=+\-@]/.test(v) ? "'" + v : v; };
    sheet.appendRow(FIELDS.map((f) => clean(p[f])).concat(['New']));

    const body = FIELDS.map((f) => f + ': ' + (p[f] || '')).join('\n');
    MailApp.sendEmail({ to: NOTIFY_EMAIL, replyTo: p.email, subject: 'New tour enquiry: ' + p.name, body: body });
    return ok();
  } catch (err) {
    console.error(err);
    return ok();
  } finally {
    lock.releaseLock();
  }
}

function ok() {
  return ContentService.createTextOutput(JSON.stringify({ result: 'ok' })).setMimeType(ContentService.MimeType.JSON);
}
