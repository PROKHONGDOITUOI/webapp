# Sử dụng Nginx bản nhẹ (Alpine) để tối ưu cho MacBook M4 của bạn
FROM nginx:alpine

# Copy toàn bộ file code (html, css, js) vào đúng thư mục chuẩn của Nginx
# Lưu ý: Không có chữ 's' ở cuối chữ html
COPY . /usr/share/nginx/html

# Mở cổng 80 để truy cập web
EXPOSE 80