const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true, // เปิดการบันทึกวิดีโอ (default = true)
  videoCompression: 32, // ปรับอัตราการบีบอัดวิดีโอ (0 = ไม่บีบอัด)
  videosFolder: 'cypress/videos', // ตำแหน่งเก็บวิดีโอ
  screenshotOnRunFailure: true // ถ้ามี error จะถ่าย screenshot ด้วย
});
