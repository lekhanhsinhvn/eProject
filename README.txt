Yêu Cầu: mongodb, nodejs

Setup: 
tạo folder data\db không trong eProject
chọn database mở cmd >nhập:cd  đường dẫn tới bin: > nhập: mongod.exe -- dbpath đường dẫn tới \data\db
(đường dẫn tới mongod.exe thường là C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe)

bởi vì node_modules không đăng được lên github > thiếu gì down đấy
	mở cmd > eProject folder > nhập: npm install --save Tên thư viện

lỗi thiếu thư viện: Error: Cannot find module 'Tên thư viện'

Run:
mở database server mongod.exe (server ở localhost:27017)
mở cmd > eProject folder > nhập: set DEBUG=myapp:* & npm start > mở web localhost:3000

Xuất dữ liệu Mongodb
mở cmd > nhập:cd đường dẫn tới bin: >nhập mongodump --port 27017 --out đường dẫn tới \data trong eProject

Nhập dữ liệu Mongodb
mở cmd > nhập:cd đường dẫn tới bin: >nhập mongorestore --port 27017 đường dẫn tới \data trong eProject

folder:
models: Khuôn mẫu
public: chứa file Ảnh, javascript, css
views: chứa khuôn website
routes: chứa đường dẫn
