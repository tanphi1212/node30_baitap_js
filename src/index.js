const express = require('express'); // import thư viện
const app = express();
//middleware
//chuyển dữ liệu sang dạng json để require.body có thế hiểu
app.use(express.json())
app.use(express.static(".")) // định vị lại đường dẫn để load tài nguyên từ back-end
//cho Phep FE truy cập vào API của source BE
// const cors = require('cors')
// app.use(cors())

// khởi tạo server với port bất kỳ
app.listen(8080);

const rootRouter = require('./Routers/rootRouter');
app.use('/api',rootRouter)