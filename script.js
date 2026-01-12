// 1. Cấu hình Supabase (Dùng thông tin Phat vừa tìm được)
const supabaseUrl = 'https://fjhnxycygjlieotfqdiu.supabase.co';
const supabaseKey = 'sb_publishable_7sYcsxE2aildw8VSUUtUtw_oKQJV46s';
const supabase = supabasejs.createClient(supabaseUrl, supabaseKey);

// 2. Hiệu ứng chuyển form (giữ nguyên giao diện của Phat)
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add("right-panel-active"));
signInButton.addEventListener('click', () => container.classList.remove("right-panel-active"));

// 3. Xử lý ĐĂNG KÝ
const signUpForm = document.querySelector('.sign-up-container form');
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) alert("Lỗi: " + error.message);
    else alert("Đăng ký thành công! Kiểm tra email hoặc vào Supabase check nhé.");
});

// 4. Xử lý ĐĂNG NHẬP
const signInForm = document.querySelector('.sign-in-container form');
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) alert("Đăng nhập thất bại: " + error.message);
    else alert("Chào mừng Phat đã quay trở lại!");
});s