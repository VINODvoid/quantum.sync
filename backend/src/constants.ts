export const PORT = process.env.PORT || 3000;
export const DB_CONFIG = {
    host: process.env.DB_HOST || 'localhost',
    name: process.env.DB_NAME || 'test',
    user:process.env.DB_USER || 'sample',
    password: process.env.DB_PASSWORD || 'test123',
    port: parseInt(process.env.DB_PORT || '5432', 10),
}