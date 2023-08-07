"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
//config.ts
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URL = `mongodb://thewarat19:LSSCCdxCjtW3Myf4@ac-m5iasjm-shard-00-00.gnbfgkb.mongodb.net:27017,ac-m5iasjm-shard-00-01.gnbfgkb.mongodb.net:27017,ac-m5iasjm-shard-00-02.gnbfgkb.mongodb.net:27017/wichayawan-project?ssl=true&replicaSet=atlas-tu358i-shard-0&authSource=admin&retryWrites=true&w=majority`;
const SERVER_PORT = 5000
  ? Number(5000)
  : 3003;
exports.config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};
