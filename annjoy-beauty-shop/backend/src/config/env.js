"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;

require("./loadEnv");

function required(name) {
    const value = process.env[name];

    if (!value || value.trim() === "") {
        throw new Error(`[env] Missing required environment variable: ${name}`);
    }

    return value;
}

exports.env = {
    port: Number(process.env.PORT) || 5000,

    nodeEnv: process.env.NODE_ENV || "development",

    // Never fall back to localhost in production
    databaseUrl: required("DATABASE_URL"),

    jwtAccessSecret: required("JWT_ACCESS_SECRET"),

    jwtRefreshSecret: required("JWT_REFRESH_SECRET"),

    accessTokenTtl: process.env.ACCESS_TOKEN_TTL || "15m",

    refreshTokenTtlDays: Number(process.env.REFRESH_TOKEN_TTL_DAYS) || 30,

    cookieSecure: process.env.NODE_ENV === "production",

    corsOrigin:
        process.env.CORS_ORIGIN ||
        "http://localhost:3000,http://127.0.0.1:3000",
};
