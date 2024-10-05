const { generateService } = require("@umijs/openapi");

generateService({
  requestLibPath: "import request from '@/request'",
  schemaPath: "https://d31f-27-38-205-172.ngrok-free.app/aiaq/v2/api-docs",
  serversPath: "./src",
});
