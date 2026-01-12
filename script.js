// 1. Cấu hình (Dùng biến supabaseClient để không trùng với thư viện gốc)
var supabaseUrl = 'https://fjhnxycygjlieotfqdiu.supabase.co';
var supabaseKey = 'sb_publishable_7sYcsxE2aildw8VSUUtUtw_oKQJV46s';

// Lệnh chuẩn của thư viện Supabase v2 là: supabase.createClient
var supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// --- Phần hiệu ứng trượt giao diện ---
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

if (signUpButton && signInButton) {
    signUpButton.addEventListener('click', () => container.classList.add("right-panel-active"));
    signInButton.addEventListener('click', () => container.classList.remove("right-panel-active"));
}

// --- Xử lý ĐĂNG KÝ ---
const signUpForm = document.querySelector('.sign-up-container form');
if (signUpForm) {
    signUpForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = signUpForm.querySelector('input[type="email"]').value;
        const password = signUpForm.querySelector('input[type="password"]').value;

        // Dùng supabaseClient ở đây
        const { data, error } = await supabaseClient.auth.signUp({ email, password });

        if (error) alert("Lỗi đăng ký: " + error.message);
        else alert("Đăng ký thành công! Phat kiểm tra email hoặc Supabase nhé.");
    });
}

// --- Xử lý ĐĂNG NHẬP ---
const signInForm = document.querySelector('.sign-in-container form');
if (signInForm) {
    signInForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = signInForm.querySelector('input[type="email"]').value;
        const password = signInForm.querySelector('input[type="password"]').value;

        // Dùng supabaseClient ở đây
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

        if (error) alert("Đăng nhập thất bại: " + error.message);
        else alert("Chào mừng Phat đã quay trở lại!");
    });
}