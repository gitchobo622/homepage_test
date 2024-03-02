// server.js

const express = require('express');
const app = express();

// 사용자의 IP 주소를 가져오는 미들웨어
app.use((req, res, next) => {
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    req.userIP = ipAddress;
    next();
});

// 클라이언트에게 IP 주소를 반환하는 엔드포인트
app.get('/get-ip', (req, res) => {
    res.json({ ip: req.userIP });
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
